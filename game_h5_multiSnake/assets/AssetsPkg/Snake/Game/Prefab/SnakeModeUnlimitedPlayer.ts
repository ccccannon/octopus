// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { SNAKE_TIMES, SnakeMoveState, SnakeStatus, SnakeType } from "../Constant";
import NodePoolManager from "../Manager/NodePoolMgr";
import SoundManager from "../Manager/SoundManager";
import { BaseProp } from "./BaseProp";
import BaseSnake from "./BaseSnake";
import Food from "./Food";
import SnakeModeUnlimited from "./SnakeModeUnlimited";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SnakeModeUnlimitedPlayer extends SnakeModeUnlimited {


    initSnake(bodyNum: number, sectionLen: number, id?: number): void {
        // super(bodyNum,sectionLen,id);
        super.initSnake(bodyNum, sectionLen, id);
        this.addUserInfoUi();
        this.addSnakeListener();
        this.player = this.node.getComponent(cc.Collider);

    }

    initSnakeNew(bodyNum: number, sectionLen: number, id?: number, pos?: cc.Vec3): void {
        this.skinType = Math.floor(Math.random() * this.skin.length);
        super.initSnakeNew(bodyNum, sectionLen, id);
        this.addUserInfoUi();
        this.addSnakeListener();
        this.player = this.node.getComponent(cc.Collider);
        this.setHeadView();
    }


    /** 添加蛇的事件监听 */
    addSnakeListener() {
        cc.systemEvent.on('SnakeSpeedUp', this.onPlayerSpeedUp, this);
        cc.systemEvent.on('SnakeSpeedNormal', this.onPlayerSpeedNormal, this);
    }

    onPlayerSpeedUp() {
        this.onSnakeSpeedUp();
    }

    onPlayerSpeedNormal() {
        this.onSnakeSpeedNormal();
    }


    /** 蛇被加速 */
    onSnakeSpeedUp() {

        /** 当分数少于0时，恢复为不加速状态 */
        if (this.score <= 0) {
            this.onSnakeSpeedNormal();
            return;
        }

        if (this.snakeMoveState != SnakeMoveState.Normal) {
            return;
        }


        // this.effectInterval = setInterval(this.speedUpEffect.bind(this), 300);
        this._mulTimes = SNAKE_TIMES;
        this._speed = this._mulTimes * this._speed;
        this.snakeMoveState = SnakeMoveState.AddSpeed;
        this.pointsArray = [];
        this.updateRecordPoints();
    }

    /** 蛇的加速动效 */
    speedUpEffect() {
        // console.log(this.node.position);
        // const item = cc.instantiate(this.prefab_effect_speedUp);
        // item.parent = this.node.parent;
        // item.getComponent(cc.Sprite).spriteFrame = this.skin[0].skinList[2];
        // const node = this.SnakeArray[1]
        // // item.width = node.width * this.snakeScale;
        // item.position = node.position;
        // item.zIndex = cc.macro.MAX_ZINDEX;
        // item.angle = this.node.angle;
        // // console.log(item.width, node.width, node.scale, node.width * node.scale, '蛇的加速动效');

        // item.scale = node.width * node.scale / item.width;

        // item.height = 120;
        // // item.scale =  item.width / (node.width * node.scale);
        // // item.height = this.node.height;
        // // item.width = this.node.width;
        // // item.scale = this.node.width / (SNAKE_TIMES * item.width);
        // // console.log('蛇的加速动效');
        // setTimeout(() => {
        //     item.destroy();
        // }, 100);

        this.addEffect();
    }

    /** 获取加速效果实体 */
    getEffectInstance() {
        let instance;
        const pool = NodePoolManager.getInstance().EffectNodePool;
        if (pool.size() > 0) {
            instance = pool.get();
        } else {
            instance = cc.instantiate(this.prefab_effect_speedUp);
        }
        return instance;
    }

    /** 添加加速效果 */
    addEffect() {
        const len = this.SnakeArray.length;
        for (let i = 1; i < len; i++) {
            const rest = (i - 1) % 8;
            if (rest == 0 && len - i > 7) {
                const node = this.SnakeArray[i]
                const item = this.getEffectInstance();
                item.getComponent(cc.Sprite).spriteFrame = this.skin[0].skinList[2];
                item.parent = this.node.parent;
                item.position = node.position;
                item.zIndex = cc.macro.MAX_ZINDEX;
                item.angle = node.angle;
                item.scale = node.width * node.scale / item.width;
                item.height = 150;
                setTimeout(() => {
                    NodePoolManager.getInstance().EffectNodePool.put(item);
                }, 300);
            }
        }

    }


    colliderCheck(dt: any): void {

        if (this.isOutMap()) {
            this.onSnakeDeath();
            return;
        }

        if (!this.QuadCollision || this.snakeStatus == SnakeStatus.Death) {
            return;
        }
        const { retrieve, contacts } = this.QuadCollision.check(this.player);

        // console.log(retrieve,contacts);
        // debugger;


        /** 预选中执行碰撞检测的碰撞体 */
        // retrieve.forEach((c => {

        //     if (c.node.name == 'Food' || c.node.name == "DeathBody") {

        //         /** 当蛇头跟食物的距离小于100时，食物自动向蛇头靠拢 */
        //         if (c.node.position.sub(this.player.node.position).mag() < this.eatArea) {
        //             c.node.getComponent(Food)?.setTargetNode(this.player.node);
        //         }
        //     }

        // }))

        for (let j = 0, rLen = retrieve.length; j < rLen; j++) {

            const rItem = retrieve[j].node;

            // rItem.color = cc.Color.RED; 
            // if (this.snakeStatus == SnakeStatus.Death) {
            //     return;Collider_Body
            // }

            if (rItem.name == 'Collider_Food' || rItem.name == "Collider_DeathBody") {

                /** 当蛇头跟食物的距离小于100时，食物自动向蛇头靠拢 */
                if (rItem.position.sub(this.node.position).mag() < this.eatArea) {
                    rItem.getComponent(Food)?.setTargetNode(this.node);
                }
            }

        }


        // /** 如果有盾，不执行死亡判断 */
        // if (this.hasShield) {
        //     return;
        // }

        for (let i = 0, cLen = contacts.length; i < cLen; i++) {

            const cItem = contacts[i].node;

            if (cItem.name.startsWith('Props_')) {
                const prop = cItem.getComponent(BaseProp);
                prop.removeProp(this.snakeType, this.snakeId);
            }
            /** 如果有盾，不执行死亡判断 */
            if (this.hasShield) {
                continue;
            }

            if (cItem.name.startsWith('Collider_Body')) {
                // @ts-ignore
                const cs = cItem.script;
                if (!!cs
                    && cs.SnakeId != this.SnakeId
                    // && this.snakeStatus == SnakeStatus.Alive
                    && !cs.hasShield
                    // && cs.snakeStatus == SnakeStatus.Alive
                ) {
                    this.onSnakeDeath();
                    // console.log('你的id为' + this.SnakeId + '号的蛇', "被" + cs.SnakeId + "号蛇击杀");
                    cs.addKillNumber();
                    break;
                }
            }

            if (cItem.name.startsWith('Collider_Snake')) {
                const snake = cItem.getComponent(BaseSnake);
                if (
                    !snake.hasShield
                    //  && snake.snakeStatus != SnakeStatus.Alive
                ) {
                    this.onSnakeDeath();
                    // console.log('你的id为' + this.SnakeId + '号的蛇', "被" + snake.SnakeId + "号蛇击杀");
                    snake.addKillNumber();
                    break;
                }

            }

        }

        return;

    }



    /** 碰撞检测  */
    // customColliderCheck(dt) {

    //     // console.log('碰撞检测1');
    //     /**  不执行碰撞检测 */
    //     if (!this.QuadCollision || this.snakeStatus == SnakeStatus.Death) {
    //         return;
    //     }

    //     if (this.isOutMap()) {
    //         this.onSnakeDeath();
    //         return;
    //     }

    //     // console.log('碰撞检测2');

    //     const { retrieve, contacts } = this.QuadCollision.check(this.node);

    //     // console.log('碰撞检测3',retrieve,contacts);

    //     // retrieve.forEach((c => {



    //     //     if (c.name == 'Food' || c.name == "DeathBody") {

    //     //         /** 当蛇头跟食物的距离小于100时，食物自动向蛇头靠拢 */
    //     //         if (c.position.sub(this.collider_role.node.position).mag() < this.eatArea) {
    //     //             c.getComponent(Food)?.setTargetNode(this.collider_role.node);
    //     //         }
    //     //     }

    //     // }))


    //     for (let j = 0, rLen = retrieve.length; j < rLen; j++) {

    //         const rItem = retrieve[j];

    //         // rItem.color = cc.Color.RED; 
    //         // if (this.snakeStatus == SnakeStatus.Death) {
    //         //     return;Collider_Body
    //         // }

    //         if (rItem.name == 'Collider_Food' || rItem.name == "Collider_DeathBody") {

    //             /** 当蛇头跟食物的距离小于100时，食物自动向蛇头靠拢 */
    //             if (rItem.position.sub(this.node.position).mag() < this.eatArea) {
    //                 rItem.getComponent(Food)?.setTargetNode(this.node);
    //             }
    //         }

    //     }


    //     /** 如果有盾，不执行死亡判断 */
    //     if (this.hasShield) {
    //         return;
    //     }

    //     for (let i = 0, cLen = contacts.length; i < cLen; i++) {

    //         const cItem = contacts[i];


    //         if (cItem.name.startsWith('Collider_Body')) {
    //             // @ts-ignore
    //             const cs = cItem.script;
    //             if (!!cs
    //                 && cs.SnakeId != this.SnakeId
    //                 // && this.snakeStatus == SnakeStatus.Alive
    //                 && !cs.hasShield
    //                 // && cs.snakeStatus == SnakeStatus.Alive
    //             ) {
    //                 this.onSnakeDeath();
    //                 console.log('你的id为' + this.SnakeId + '号的蛇', "被" + cs.SnakeId + "号蛇击杀");
    //                 break;
    //             }
    //         }

    //         if (cItem.name.startsWith('Collider_Snake')) {
    //             const snake = cItem.getComponent(BaseSnake);
    //             if (
    //                 !snake.hasShield
    //                 //  && snake.snakeStatus != SnakeStatus.Alive
    //             ) {
    //                 this.onSnakeDeath();
    //                 console.log('你的id为' + this.SnakeId + '号的蛇', "被" + snake.SnakeId + "号蛇击杀");
    //                 break;
    //             }

    //         }

    //     }


    // }



    /** 蛇复活
     * 
     * @param
     */
    onSnakeRevive() {
        super.revive();
        this.snakeStatus = SnakeStatus.Alive;
    }

    /** 蛇死亡 */
    onSnakeDeath() {

        if (this.snakeStatus == SnakeStatus.Death) {
            return;
        }

        super.onSnakeDeath();

        if (this.snakeType === SnakeType.Self) {
            cc.systemEvent.emit('onGameEnd');
        }

        SoundManager.getInstance().deathEffect();

    }



    /**渲染帧 */
    updateRenderFrame(dt) {

        /** 自动选择位置 */
        // this.autoChooseMoveDir();

        /**蛇移动 */
        this.move(dt);

        /** 碰撞体检测 */
        this.colliderCheck(dt);
        // this.customColliderCheck(dt);

        /** 更新护盾位置 */
        this.updateShieldPos();

        /** 每帧更新用户金币数据的展示位置 */
        this.updateUserInfoPos();

        if (this.snakeMoveState == SnakeMoveState.AddSpeed) {
            if (this.score > 0) {
                this.updateSnakeScore(-1);
            }
        }

    }


}
