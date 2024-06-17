// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { ABSORB_ORIGIN_AREA, FOOD_DROP_LENGTH, MAX_SNAKE_SCALE, PorpsType, SNAKE_ABSORB_MAX_AREA, SNAKE_MAX_LENGTH, SNAKE_MIN_LENGTH, SNAKE_TIMES, SnakeMoveState, SnakeStatus, SnakeType } from "../Constant";
import NodePoolManager from "../Manager/NodePoolMgr";
import { SnakeDataMgr } from "../SnakeDataMgr";
import { SnakeUtilMgr } from "../Utils/SnakeUtils";
import BaseSnake from "./BaseSnake";
import DeathBody from "./DeathBody";
import Food from "./Food";

const { ccclass, property } = cc._decorator;

const utilMgr = SnakeUtilMgr.getInstance();



@ccclass
export default class SnakeModeUnlimited extends BaseSnake {

    /** 蛇等级 */
    public level: number = 0;

    /** 蛇的放大倍数 */
    public snakeScale: number = 1;

    /** 吃道具的区域 */
    public eatArea: number = ABSORB_ORIGIN_AREA;

    public player: cc.Collider = null;

    @property([cc.SpriteFrame])
    viewList_deathBody: Array<cc.SpriteFrame> = [];

    /** 蛇的分数 */
    score: number = 0;


    addFoodAfterSnakeDeath() {

        const len = this.SnakeArray.length > FOOD_DROP_LENGTH ? FOOD_DROP_LENGTH : this.SnakeArray.length;

        const avange = Math.floor((this.score >> 1) / len);

        const rest = this.score - avange * len;

        const npMgr = NodePoolManager.getInstance();

        const list = this.getRandomList();

        // console.log('addFoodAfterSnakeDeath', list);

        for (let j = 0; j < len; j++) {
            let item;

            if (npMgr.DeathBodyNodePool.size() > 0) {
                item = npMgr.DeathBodyNodePool.get();
            } else {
                item = cc.instantiate(this.prefab_deathBody);
            }
            item.getComponent(cc.Sprite).spriteFrame = this.viewList_deathBody[list[j % list.length]];
            item.parent = this.mapNode;
            item.position = this.SnakeArray[j].position;
            item.scale = this.SnakeArray[j].scale;
            item.x += Math.random() * 40;
            item.y += Math.random() * 40;
            if (j == len - 1) {
                item.getComponent(DeathBody).initDeathBody(avange + rest);
            } else {
                item.getComponent(DeathBody).initDeathBody(avange);
            }

        }
    }


    /** 获取一个随机数组 */
    getRandomList() {

        let list = [];
        while (list.length < 3) {
            const idx = Math.floor(Math.random() * 8);
            if (list.indexOf(idx) == -1) {
                list.push(idx);
            }
        }
        return list;
    }




    /** 根据当前的分值计算长度 */
    computedCurrentLevelByScore() {
        const level = Math.floor((this.score / 30 + 1) / 2);
        if (this.level < level) {
            const len = level - this.level;
            for (let i = 0; i < len; i++) {
                this.updateSnakeLength();
                this.updateSnakeScale(0.01);
                this.updateShieldScale();
                this.addAbsorbArea();
            }
            this.level = level;
        } else if (this.level > level) {
            const len = this.level - level;
            for (let i = 0; i < len; i++) {
                this.reduceSnakeLength();
                this.updateSnakeScale(-0.01);
                this.updateShieldScale();
                this.reduceAbsorbArea();
            }
            this.level = level;
        }
    }

    /** 玩家游戏数据的展示 */
    updateUserInfoPos() {
        if (!this.userInfo) {
            return;
        }
        this.userInfo.position = cc.v3(this.node.position.x, this.node.position.y + 60, 0);
    }

    /** 增加用户信息的界面 */
    addUserInfoUi() {
        const userInfo = cc.instantiate(this.prefab_userInfo);
        // console.log(this.node.parent.name);
        // console.log(this.mapNode.name);
        userInfo.parent = this.node.parent;
        // userInfo.parent = this.mapNode;
        userInfo.position = cc.v3(this.node.position.x, this.node.position.y + 40, 0);
        userInfo.zIndex = cc.macro.MAX_ZINDEX;
        this.userInfo = userInfo;
    }

    /** 初始化用户名 */
    updateUserName(str, type: SnakeType) {

        if (!this.userInfo) {
            return;
        }
        // this.userInfo. = true;
        // console.log('初始化用户名', str);
        this.userInfo.children[0].getComponent(cc.Label).string = str;
        if (type == SnakeType.Self) {
            this.userInfo.children[0].color = cc.Color.GREEN;
            this.userInfo.children[1].color = cc.Color.GREEN;
        } else {
            this.userInfo.children[0].color = cc.Color.WHITE;
            this.userInfo.children[1].color = cc.Color.WHITE;
        }

    }



    /** 更新蛇的分数 */
    updateSnakeScore(num: number) {

        if (this.snakeStatus != SnakeStatus.Alive) {
            return;
        }

        this.score += num;


        this.updateSnakeScoreLabel()
        this.computedCurrentLevelByScore();
        /** 提交分数 */
        cc.systemEvent.emit('SCORE_UPDATE', this.score, this.SnakeId);

        // console.log('更新蛇的分数', this.score);
        if (this.snakeType == SnakeType.Self) {

            // console.log(this.SnakeId, this.score);
            const sdm = SnakeDataMgr.getInstance();
            sdm.SnakeScore = this.score;
            sdm.SnakeLength = this.getSnakeLength();
            // sdm.Kill = 
        }


    }

    /** 更新蛇身的分数 */
    updateSnakeScoreLabel() {
        if (!this.userInfo) {
            return;
        }
        this.userInfo.getChildByName('score').getComponent(cc.Label).string = this.score + "";
    }




    /** 更新蛇的长度 */
    updateSnakeLength() {

        /** 如果蛇身长于200 不再增加蛇身 */
        const length = this.getSnakeLength();

        /** 如果蛇的类型为ai，限制蛇的长大和变长 */
        if (this.snakeType == SnakeType.Other && length >= SNAKE_MAX_LENGTH / 2) {
            return;
        }

        if (length >= SNAKE_MAX_LENGTH) {
            return;
        }
        SnakeDataMgr.getInstance().SnakeLength = length;

        /** 增大蛇的间隙 */
        this.updateSetionLen();
        this.addBodyToTail();
        this.updateSnakeMiddleIndex();
    }

    /** 减少蛇身的长度 */
    reduceSnakeLength() {
        const length = this.getSnakeLength();
        if (length <= SNAKE_MIN_LENGTH) {
            return;
        }
        /** 减少蛇的间隙 */
        this.reduceSectionLen();
        this.removeBodyFromTail();
        this.updateSnakeMiddleIndex();
    }


    /** 更改吸金币的范围 */
    setAbsorbArea(number) {
        // console.log(this.level, number, '当前蛇的等级');
        this.eatArea = number;
    }

    /** 还原吸金币的范围 */
    resumeAbsorbArea() {
        const area = ABSORB_ORIGIN_AREA + this.level;
        /** 限制吸金币的范围 */
        this.eatArea = area > SNAKE_ABSORB_MAX_AREA ? SNAKE_ABSORB_MAX_AREA : area;
    }

    /** 增加吸金币的范围 */
    addAbsorbArea() {
        if (this.eatArea > SNAKE_ABSORB_MAX_AREA) {
            return;
        }
        this.eatArea += 1;
    }

    /** 减少吸金币的范围 */
    reduceAbsorbArea() {
        if (this.eatArea <= ABSORB_ORIGIN_AREA) {
            return;
        }
        this.eatArea -= 1;
    }

    /** 设置长度间隔 */
    updateSetionLen() {
        this.addSecitonLen();
    }

    /** 更新蛇的大小 */
    updateSnakeScale(num) {

        /**  如果蛇的放大倍数已经达到2倍，不在放大蛇身节点 */
        if (this.snakeScale > MAX_SNAKE_SCALE) {
            this.snakeScale = MAX_SNAKE_SCALE;
            return;
        }

        this.snakeScale += num;

        /** 如果蛇身缩小到1倍 则停止缩小  */
        if (this.snakeScale < 1) {
            this.snakeScale = 1;
            return;
        }

        for (let i = 0; i < this.SnakeArray.length; i++) {
            // this.SnakeArray[i].scale += 0.005;
            this.SnakeArray[i].scale = this.snakeScale;
        }

    }


    /** 重置所有节点的位置 */
    resetSnakeAllNodePos(pos) {
        for (let i = 0; i < this.SnakeArray.length; i++) {
            this.SnakeArray[i].active = true;
            this.SnakeArray[i].position = pos;
        }
    }

    *_genResetSnakeAllNodePos(pos) {
        for (let i = 0; i < this.SnakeArray.length; i++) {
            this.SnakeArray[i].active = true;
            this.SnakeArray[i].position = pos;
            this.SnakeArray[i].parent = this.mapNode;
            // console.log(this.SnakeArray[i]);
            // debugger
            yield;
        }
    }


    /** 复活 */
    revive() {
        // console.log(' 调起了复活逻辑，复活');
        // this.showSnake();

        /** 随机一个复活地址 */
        const pos = utilMgr.getRandomPos(this.mapNode.width / 4, -this.mapNode.width / 4);

        /** 重置蛇的速度 */
        this.resetSnake();

        /** 移除蛇的加速动画 */
        this.effectInterval && clearInterval(this.effectInterval);

        /** 蛇的复活 */
        utilMgr.executePreFrame(this._genResetSnakeAllNodePos(pos), 5);
        this.userInfo.active = true;
        this.pointsArray = [];
        this.updateRecordPoints();

        /** 复活保护罩 */
        this.snakeBornProtect();
        // this.addUserInfoUi();
        // console.log(this.userInfo);
    }


    /** 设置头部大小 */
    setHeadView() {
        this.node.children[0].getComponent(cc.Sprite).spriteFrame = this.skin[this.skinType].skinList[3];
        this.node.children[0].scale = 0.5;
    }

    /** 获取身体的贴图 */


    public override hideUserInfo(): void {
        this.userInfo.active = false;
    }

    onSnakeDeath() {
        if (this.snakeStatus == SnakeStatus.Death) {
            return;
        }

        /** 将蛇的状态置为死亡 */
        this.snakeStatus = SnakeStatus.Death;

        /** 移除碰撞间隔定时器 */
        this.checkInterval && clearInterval(this.checkInterval);

        /** 隐藏当前的金币信息 */
        this.hideUserInfo();

        /** 隐藏蛇的相关节点 */

        // if (this.snakeType == SnakeType.Self) {
        this.hideSnake();
        // } else {
        //     this.removeSnakeNode();
        // }

        // /** 添加尸体 */
        this.addFoodAfterSnakeDeath();

        /** 刷新碰撞节点 */
        this.refreshAllCollider();

        if (this.hasShield) {
            this.shieldCtrl.shieldDisapper();
        }

        cc.systemEvent.emit('onRobotSnakeDeath', this.snakeType, this.snakeId);
        cc.systemEvent.emit('onSnakeDeath', this.snakeType, this.snakeId);
    }

    /**  判断是否出地图了 */
    isOutMap() {
        return Math.abs(this.node.x) >= this.mapNode.width / 2 - 30 || Math.abs(this.node.y) >= this.mapNode.height / 2 - 30
    }

    /** 蛇被加速 */
    onSnakeSpeedUp() {
        if (this.snakeMoveState != SnakeMoveState.Normal) {
            return;
        }
        // this.effectTimer = setInterval(this.speedUpEffect.bind(this), 250);

        // this.schedule(this.speedUpEffect.bind(this), 0.25);

        // this.effectInterval = setInterval(this.speedUpEffect.bind(this), 250);

        // return;
        this._mulTimes = 1.8;
        this._speed = this._mulTimes * this._speed;
        this.snakeMoveState = SnakeMoveState.AddSpeed;
        this.pointsArray = [];
        this.updateRecordPoints();
    }

}
