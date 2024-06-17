import { SnakeMoveState, SNAKE_SCALE, SNAKE_STRONG_LENGHT, SnakeStatus, SnakeType, SHIELD_PERSIST_TIME, AbsorbArea, SnakeProps, SNAKE_SPEED, PorpsType } from "../Constant";
import NodePoolManager from "../Manager/NodePoolMgr";
import { BaseProp } from "./BaseProp";
import BaseSnake from "./BaseSnake";
import DeathBody from "./DeathBody";
import Food from "./Food";


const { ccclass, property } = cc._decorator;

@ccclass
export default class SnakeModeGold extends BaseSnake {


    /** 携带的金币数量 */
    protected ownedCoins: number = 0;

    public hasShield: boolean = false;

    private hasRocket: boolean = false;

    private hasAbsorb: boolean = false;

    public hasMushroom: boolean = false;

    private isShorting: boolean = false;

    private isBiging: boolean = false;

    private tempLen: number = null;

    /** 蛇有火箭 */
    snakeRocket() {
        // this.snakeProps = SnakeProps.Rocket;
        this.hasRocket = true;
    }

    /** 蛇被加速 */
    onSnakeSpeedUp() {
        if (this.snakeMoveState != SnakeMoveState.Normal) {
            return;
        }

        // this.effectTimer = setInterval(this.speedUpEffect.bind(this), 250);

        // this.schedule(this.speedUpEffect.bind(this), 0.25);

        this.effectInterval = setInterval(this.speedUpEffect.bind(this), 250);

        if (this.hasRocket) {
            this._mulTimes = 2.2;
        } else {
            this._mulTimes = 2;
        }

        this._speed = this._mulTimes * this._speed;
        this.snakeMoveState = SnakeMoveState.AddSpeed;
        this.pointsArray = [];
        this.updateRecordPoints();
    }

    /** 蛇的加速动效 */
    speedUpEffect() {
        // console.log(this.node.position);
        const item = cc.instantiate(this.prefab_effect_speedUp);
        item.parent = this.node.parent;
        item.position = this.node.position;
        item.zIndex = cc.macro.MAX_ZINDEX;
        item.angle = this.node.angle;
        // item.height = this.node.height;
        // item.width = this.node.width;
        item.scale = this.node.width / (2 * item.width);
        // console.log('蛇的加速动效');
        setTimeout(() => {
            item.destroy();
        }, 250);
    }



    /** 体型变化 */
    shapeUpdate(dt) {

        if (this.hasMushroom) {
            if (this.isBiging && this.node.scale < SNAKE_SCALE) {
                this.snakeToLarge(dt);
                return;
            }

            if (this.isShorting) {

                if (this.node.scale > 1) {
                    this.snakeToTiny(dt);
                }

                if (this.SnakeArray.length > this.BodyLen + 1) {
                    this.snakeToShort(dt);
                }

                if (this.node.scale <= 1 && this.SnakeArray.length <= this.BodyLen + 1) {
                    this.isShorting = false;
                    this.hasMushroom = false;
                }

            }
        }
    }


    shapeTurnToSmall() {
        this.isBiging = false;
        this.isShorting = true;
    }


    /** 蛇吃了蘑菇 */
    snakeEatMushroom() {

        this.tempLen = 0;

        this.hasMushroom = true;

        this.SnakeToLong();

        this.isBiging = true;

        this.isShorting = false;

        this.pointsArray = [];

        this.updateRecordPoints();

        this.updateSnakeMiddleIndex();

        if (this.hasShield) {
            this.shieldCtrl.updateNodeScale(this.SnakeArray.length * this.SectionLen);
        }

    }

    /** 蛇变长 */
    SnakeToLong() {
        for (let i = 0; i < SNAKE_STRONG_LENGHT; i++) {
            this.addBodyToTail();
        }
    }

    /** 蛇变短 */
    snakeToShort(dt) {

        this.tempLen += dt * SNAKE_STRONG_LENGHT

        if (this.tempLen % 1 < 0.01) {
            this.removeBodyFromTail();
        }
        // console.log(this.tempLen, '蛇变短');
    }

    /** 蛇变大 */
    snakeToLarge(dt) {

        for (let i = 0; i < this.SnakeArray.length; i++) {
            this.SnakeArray[i].scale += (SNAKE_SCALE - 1) * dt;
        }

        /** 如果蛇身上有护盾 */
        if (this.hasShield) {
            this.shieldCtrl.node.scale += 2 * (SNAKE_SCALE - 1) * dt;
        }

    }

    /** 蛇变小 */
    snakeToTiny(dt) {
        // console.log('蛇变小');
        for (let i = 0; i < this.SnakeArray.length; i++) {
            const item = this.SnakeArray[i];
            item.scale = item.scale - (SNAKE_SCALE - 1) * dt;
            if (item.scale < 1) {
                item.scale = 1;
            }
        }

        /** 如果蛇身上有护盾 */
        if (this.hasShield) {
            this.shieldCtrl.node.scale -= 4 * (SNAKE_SCALE - 1) * dt;
        }
    }

    /** 设置蛇的携带金额 */
    setOwnedCoinNumber(val: number) {
        this.ownedCoins = val;
        this.updateUserOwnedCoins();
    }


    /** 玩家游戏数据的展示 */
    updateUserInfo() {
        if (!this.userInfo) {
            return;
        }
        this.userInfo.position = cc.v3(this.node.position.x, this.node.position.y + 100, 0);
    }

    /** 增加用户信息的界面 */
    addUserInfoUi() {
        const userInfo = cc.instantiate(this.prefab_userInfo);
        userInfo.parent = this.node.parent;
        userInfo.position = cc.v3(this.node.position.x, this.node.position.y + 50, 0);
        userInfo.zIndex = cc.macro.MAX_ZINDEX;
        this.userInfo = userInfo;
        // console.log('增加用户信息的界面');
    }


    /** 复活 */
    revive() {
        this.showSnake();
        this.pointsArray = [];
        this.updateRecordPoints();
        this.snakeBornProtect();
        this.addUserInfoUi();
    }


    /** 蛇死亡 */
    onSnakeDeath() {

        if (this.snakeStatus == SnakeStatus.Death) {
            return;
        }

        /** 将蛇的状态置为死亡 */
        this.snakeStatus = SnakeStatus.Death;

        /** 添加尸体 */
        this.addFoodAfterSnakeDeath();

        /** 刷新碰撞节点 */
        this.refreshAllCollider();

        /** 隐藏当前的金币信息 */
        this.hideUserInfo();

        /** 隐藏蛇的相关节点 */
        this.hideSnake();

        /** 移除碰撞间隔定时器 */
        this.checkInterval && clearInterval(this.checkInterval);

        if (this.hasShield) {
            this.shieldCtrl.shieldDisapper();
        }

        cc.systemEvent.emit('onSnakeDeath', this.snakeType, this.snakeId);

        if (this.snakeType === SnakeType.Self) {
            cc.systemEvent.emit('onGameEnd');
        }
    }

    /** 蛇吃护盾 */
    snakeEatShield() {
        if (this.hasShield) {
            // console.log('TODO', '重置护盾时间');
            this.shieldCtrl.resetShield();
            return;
        }

        this.addShiled();
        this.updateSnakeMiddleIndex();
        this.updateShieldPos();
        this.updateShieldScale();
        this.setShieldPersistTime(SHIELD_PERSIST_TIME);

    }

    /** 增加蛇的携带金额数据 */
    addOwnedCoinNumber(val: number) {
        this.ownedCoins += val;
        this.updateUserOwnedCoins();
        // this.addBodyToTail();
        // this.pointsArray = [];
        // this.updateRecordPoints();
    }

    /** 更新用户当前拥有的金币数量 */
    updateUserOwnedCoins() {

        if (!this.userInfo) {
            return;
        }
        this.userInfo.getChildByName('score').getComponentInChildren(cc.Label).string = this.ownedCoins + "";
    }

    /** 重置蛇的状态 */
    resetSnake() {

        this.hasAbsorb = false;
        this.hasRocket = false;
        this.hasMushroom = false;
        this.hasShield = false;
        this.tempLen = 0;
        this.ownedCoins = 0;
        this.absorbArea = AbsorbArea.Normal;
        this.snakeStatus = SnakeStatus.Alive;
        this.snakeProps = SnakeProps.None;
        this.snakeMoveState = SnakeMoveState.Normal;
        this._mulTimes = 1;
        this._speed = SNAKE_SPEED;
        // this._snakeArray = this._snakeArray.slice(0, this.bodyLength + 1);
        this.dir = cc.v3(1, 0, 0);
        this.refreshAllCollider();
        this.effectInterval && clearInterval(this.effectInterval);

    }


    // /** 碰撞检测 */
    // colliderCheck(dt) {

    //     if (!this.QuadCollision || this.snakeStatus == SnakeStatus.Death) {
    //         return;
    //     }
    //     const { retrieve, contacts } = this.QuadCollision.check(this.AllCollider, this.collider_role);

    //     /** 预选中执行碰撞检测的碰撞体 */
    //     retrieve.forEach((c => {

    //         if (c.node.name == 'Food' || c.node.name == "DeathBody") {
    //             /** 当蛇头跟食物的距离小于100时，食物自动向蛇头靠拢 */
    //             if (c.node.position.sub(this.collider_role.node.position).mag() < this.absorbArea) {

    //                 c.node.getComponent(Food)?.setTargetNode(this.collider_role.node);

    //             }
    //         }

    //         if (c.node.name == "snake_body" && c.tag != this.collider_role.tag && this.snakeType != SnakeType.Self) {


    //             /** 如果没有开启其他蛇的碰撞检测 不开启避障转向 */
    //             if (!this.isCheckCollider) {
    //                 return;
    //             }

    //             if (!c.node.active) {
    //                 return;
    //             }

    //             /** 自己有盾不开启避障转向 */
    //             // @ts-ignore
    //             if (this.hasShield || c.node.script.hasShield) {
    //                 return;
    //             }

    //             let radian = cc.misc.degreesToRadians(30);    // 将角度转换为弧度
    //             let comVec = this.dir;    // 一个水平向右的对比向量
    //             let dirVec = cc.v2(comVec).rotate(radian);
    //             this.dir = cc.v3(dirVec.x, dirVec.y);


    //         }

    //         // console.log(c.node.name);

    //     }))

    //     /** 碰撞到的碰撞体 */
    //     contacts.forEach((c) => {
    //         // console.log(c.node.name);

    //         /**
    //          *  死亡判定 
    //          * 1 撞墙
    //          * 2 撞其他蛇身
    //          * 
    //         */

    //         // console.log(c.node.name, '撞到物体的名称');

    //         /** 撞墙 */
    //         if (c.node.name.startsWith('wall')) {
    //             this.onSnakeDeath();

    //         } else if (c.node.name.startsWith('snake_body') || c.node.name.startsWith('Snake')) {

    //             if (c.tag == this.collider_role.tag) {
    //                 return;
    //             }

    //             if (!c.node.active) {
    //                 return;
    //             }

    //             /** 自己身上有护盾 或者撞击的蛇身上有护盾 */
    //             // @ts-ignore
    //             if (this.hasShield || c.node.script.hasShield) {
    //                 return;
    //             }

    //             this.onSnakeDeath();

    //         }
    //         else {

    //             if (c.node.name.startsWith('Props')) {

    //                 const prop = c.node.getComponent(BaseProp);

    //                 if (prop) {
    //                     // const mgr = NodePoolManager.getInstance();
    //                     if (prop.propType == PorpsType.Coin) {
    //                         console.log('吃了金币');
    //                         // this.addOwnedCoinNumber(20);
    //                         prop.removeProp(this.snakeType, this.snakeId);

    //                         return;
    //                     }

    //                     if (prop.propType == PorpsType.Absorb) {
    //                         console.log('吃了磁铁');

    //                         prop.removeProp(this.snakeType, this.snakeId);
    //                         // this.updateAbsorbArea();

    //                         return;
    //                     }

    //                     if (prop.propType == PorpsType.Mushroom) {
    //                         console.log('吃了蘑菇');

    //                         prop.removeProp(this.snakeType, this.snakeId);

    //                         // this.snakeEatMushroom();

    //                         return;
    //                     }
    //                     if (prop.propType == PorpsType.Shield) {
    //                         console.log('吃了护盾');

    //                         prop.removeProp(this.snakeType, this.snakeId);
    //                         // this.snakeEatShield();
    //                         return;
    //                     }
    //                     if (prop.propType == PorpsType.Rocket) {
    //                         console.log('吃了火箭');

    //                         prop.removeProp(this.snakeType, this.snakeId);
    //                         // this.snakeRocket();
    //                         return;
    //                     }
    //                 }

    //             }

    //         }

    //     })


    // }


    /** 蛇死亡后洒落的食物 */
    addFoodAfterSnakeDeath() {

        let pointList = [];

        for (let i = 0; i < this.SnakeArray.length; i++) {

            if (i % 3 == 0) {
                pointList.push(this.SnakeArray[i].position);
            }

        }
        // this._snakeArray

        const len = pointList.length;

        const avange = Math.floor(this.ownedCoins / pointList.length);

        const rest = this.ownedCoins - avange * len;

        const npMgr = NodePoolManager.getInstance();

        for (let j = 0; j < len; j++) {
            let item;

            if (npMgr.DeathBodyNodePool.size() > 0) {
                item = npMgr.DeathBodyNodePool.get();
            } else {
                item = cc.instantiate(this.prefab_deathBody);
            }
            item.parent = this.mapNode;
            item.position = pointList[j];
            if (j == len - 1) {
                item.getComponent(DeathBody).initDeathBody(avange + rest);
            } else {
                item.getComponent(DeathBody).initDeathBody(avange);
            }

        }

    }


}
