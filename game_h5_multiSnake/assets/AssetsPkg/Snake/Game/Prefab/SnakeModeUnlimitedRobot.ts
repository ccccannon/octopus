// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { SnakeMoveState, SnakeStatus, SnakeType } from "../Constant";
import { BaseProp } from "./BaseProp";
import BaseSnake, { Dir } from "./BaseSnake";
import DeathBody from "./DeathBody";
import Food from "./Food";
import SnakeModeUnlimited from "./SnakeModeUnlimited";

const { ccclass, property } = cc._decorator;

enum SnakeAction {
    Attack,  //攻击
    Defend, //防守
    FindCoin,// 寻找食物
    NoCollider, //不判断碰撞
}

@ccclass
export default class SnakeModeUnlimitedRobot extends SnakeModeUnlimited {

    isFindInterval: number = null;

    snakeAction: SnakeAction = SnakeAction.Attack;

    ignoreFrame: number = 0;

    playerSkinType: number = -1;


    initSnake(bodyNum: number, sectionLen: number, id?: number, pos?: cc.Vec3): void {
        // super(bodyNum,sectionLen,id);
        super.initSnake(bodyNum, sectionLen, id);
        this.addUserInfoUi();
        // this.setIntervalLevel(0.05)

        this.setCheckColliderInterval();
        this.player = this.node.getComponent(cc.Collider);
    }

    initSnakeNew(bodyNum: number, sectionLen: number, id?: number, pos?: cc.Vec3): void {
        // super(bodyNum,sectionLen,id);
        // this.skinType = Math.floor(Math.random() * this.skin.length);
        this.skinType = this.getRandomSkinType();
        super.initSnakeNew(bodyNum, sectionLen, id, pos);
        this.addUserInfoUi();
        // this.setIntervalLevel(0.05)
        if (Math.random() > 0.5) {
            this.snakeAction = SnakeAction.Defend;
        } else {
            this.snakeAction = SnakeAction.Attack;
        }
        this.setCheckColliderInterval();
        this.player = this.node.getComponent(cc.Collider);
        this.setHeadView();
    }


    /** 设置玩家的皮肤类型 */
    setPlayerSkinType(num: number) {
        this.playerSkinType = num;
    }

    /** 获取随机皮肤类型 */
    getRandomSkinType() {
        let isSame = true;
        let skinType = -1;
        while (isSame) {
            skinType = Math.floor(Math.random() * this.skin.length);
            if (this.playerSkinType != skinType) {
                isSame = false;
            }
        }
        return skinType;
    }


    protected onLoad(): void {
        // this.setFindInterval();
        this.isCheckCollider = true;
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


        /** 预选中执行碰撞检测的碰撞体 */
        // retrieve.forEach((c => {

        //     if (c.node.name == 'Food' || c.node.name == "DeathBody") {

        //         /** 当蛇头跟食物的距离小于100时，食物自动向蛇头靠拢 */
        //         if (c.node.position.sub(this.player.node.position).mag() < this.eatArea) {
        //             c.node.getComponent(Food)?.setTargetNode(this.player.node);
        //         }

        //     }

        //     if (c.node.name == "snake_body" && c.tag != this.player.tag && this.snakeType != SnakeType.Self) {
        //         // @ts-ignore
        //         if (c.node.script.snakeStatus != SnakeStatus.Alive) {
        //             return;
        //         }

        //         /** 如果没有开启其他蛇的碰撞检测 不开启避障转向 */
        //         if (!this.isCheckCollider) {
        //             return;
        //         }

        //         if (!c.node.active) {
        //             return;
        //         }

        //         /** 自己有盾不开启避障转向 */
        //         // @ts-ignore
        //         if (this.hasShield || c.node.script.hasShield) {
        //             return;
        //         }

        //         if (c.node.position.sub(this.player.node.position).mag() > 200) {
        //             return;
        //         }

        //         let radian = cc.misc.degreesToRadians(30);    // 将角度转换为弧度
        //         let comVec = this.dir;    // 一个水平向右的对比向量
        //         let dirVec = cc.v2(comVec).rotate(radian);
        //         this.dir = cc.v3(dirVec.x, dirVec.y);


        //     }

        //     // console.log(c.node.name);

        // }))


        this.ignoreFrame++;


        for (let j = 0, rLen = retrieve.length; j < rLen; j++) {

            const rItem = retrieve[j].node;

            // rItem.color = cc.Color.RED; 

            if (rItem.name.startsWith('Collider_Body')) {

                // @ts-ignore
                const rs = rItem.script;
                if (rs.SnakeId == this.SnakeId) {
                    continue;
                } else {

                    if (this.hasShield) {
                        continue;
                    }

                    if (this.ignoreFrame >= 6) {
                        this.ignoreFrame = 0;
                    }

                    if (this.ignoreFrame != 0) {
                        continue;
                    }

                    const distance1 = rItem.position.sub(this.node.position).mag();

                    const distance2 = rs.node.position.sub(this.node.position).mag();

                    if (this.snakeAction == SnakeAction.Defend) {

                        if (Math.random() > 0.5) {
                            continue;
                        }

                        if (distance1 >= 80) {
                            continue;
                        }
                        let radian = cc.misc.degreesToRadians(30);    // 将角度转换为弧度
                        let comVec = this.node.position.sub(rItem.position).normalize();
                        let dirVec = cc.v2(comVec).rotate(radian);
                        this.dir = cc.v3(dirVec.x, dirVec.y);
                    } else {

                        if (distance1 > distance2) {

                            const pos = rItem.position;
                            const temp = rs.dir.mul(300);
                            this.dir = pos.add(temp).sub(this.node.position);
                            this.onSnakeSpeedUp();

                        } else {

                            if (Math.random() > 0.5) {
                                continue;
                            }
                            if (distance1 >= 80) {
                                continue;
                            }
                            let radian = cc.misc.degreesToRadians(30);    // 将角度转换为弧度
                            let comVec = this.node.position.sub(rItem.position).normalize();
                            let dirVec = cc.v2(comVec).rotate(radian);
                            this.dir = cc.v3(dirVec.x, dirVec.y);
                        }

                    }

                    break;
                }

            }


            if (rItem.name == 'Collider_Food') {

                /** 当蛇头跟食物的距离小于100时，食物自动向蛇头靠拢 */
                if (rItem.position.sub(this.collider_role.node.position).mag() < this.eatArea) {
                    rItem.getComponent(Food)?.setTargetNode(this.node);
                }
                this.onSnakeSpeedNormal();
            }

            if (rItem.name == "Collider_DeathBody") {

                const subVector = rItem.position.sub(this.node.position);
                if (subVector.mag() < this.eatArea) {
                    rItem.getComponent(DeathBody)?.setTargetNode(this.node);
                }
                this.dir = subVector.normalize();
            }
        }




        // debugger
        // console.log(contacts);



        for (let i = 0, cLen = contacts.length; i < cLen; i++) {

            const cItem = contacts[i].node;

            // cItem.color = cc.Color.RED;

            if (cItem.name.startsWith('Props_')) {
                const prop = cItem.getComponent(BaseProp);
                prop.removeProp(this.snakeType, this.snakeId);
            }

            /** 如果有盾，不执行死亡判断 */
            if (this.hasShield) {
                continue;
            }

            if (cItem.name == 'Collider_Body') {
                // @ts-ignore
                const cs = cItem.script;
                if (!!cs
                    && cs.SnakeId != this.SnakeId
                    // && this.snakeStatus == SnakeStatus.Alive
                    && !cs.hasShield
                    // && cs.snakeStatus == SnakeStatus.Alive
                ) {
                    this.onSnakeDeath();
                    // console.log('你的id为' + this.SnakeId + '号的蛇 撞击蛇身', "被" + cs.SnakeId + "号蛇击杀");
                    cs.addKillNumber();
                    break;
                }
            }

            if (cItem.name == 'Collider_Snake') {
                const snake = cItem.getComponent(BaseSnake);
                if (
                    !snake.hasShield
                    // && snake.snakeStatus != SnakeStatus.Alive
                ) {
                    this.onSnakeDeath();
                    // console.log('你的id为' + this.SnakeId + '号的蛇 撞击蛇头', "被" + snake.SnakeId + "号蛇击杀");
                    snake.addKillNumber();
                    break;
                }

            }

        }


        /** 碰撞到的碰撞体 */
        // contacts.forEach((c) => {
        //     // console.log(c.node.name);

        //     /**
        //      *  死亡判定 
        //      * 1 撞墙
        //      * 2 撞其他蛇身
        //      * 
        //     */


        //     /** 撞墙 */
        //     if (c.node.name.startsWith('wall')) {
        //         this.onSnakeDeath();

        //     } else if (c.node.name.startsWith('snake_body') || c.node.name.startsWith('Snake')) {

        //         // console.log(c.node.name, '撞到物体的名称');


        //         if (c.tag == this.player.tag) {
        //             return;
        //         }

        //         if (!c.node.active) {
        //             return;
        //         }

        //         /** 自己身上有护盾 或者撞击的蛇身上有护盾 */
        //         // @ts-ignore
        //         if (this.hasShield || c.node.script.hasShield) {
        //             return;
        //         }

        //         this.onSnakeDeath();
        //     }

        // })

    }



    /** 碰撞检测  */
    // customColliderCheck(dt) {

    //     // console.log('碰撞检测1');
    //     if (!this.QuadCollision || this.snakeStatus == SnakeStatus.Death) {
    //         return;
    //     }

    //     if (this.isOutMap()) {
    //         this.onSnakeDeath();
    //         return;
    //     }


    //     /** 如果没有开启其他蛇的碰撞检测 不开启避障转向 */
    //     if (!this.isCheckCollider) {
    //         return;
    //     }

    //     // console.log('碰撞检测2');

    //     const { retrieve, contacts } = this.QuadCollision.check(this.node);

    //     // console.log('碰撞检测3',contacts);

    //     // retrieve.forEach((c => {

    //     //     if (c.name == "snake_body" || c.name == "Snake") {

    //     //         if (this.hasShield) {
    //     //             return;
    //     //         }


    //     //         if (c.name == 'Snake') {

    //     //             const snake = c.getComponent(BaseSnake);

    //     //             if (snake.SnakeId == this.SnakeId) {
    //     //                 return;
    //     //             }

    //     //             if (snake.hasShield) {
    //     //                 return;
    //     //             }

    //     //             // let comVec = this.dir;    // 一个水平向右的对比向量

    //     //             // if (c.position.sub(this.node.position).mag() < 200) {
    //     //             // @ts-ignore
    //     //             const pos = c.position;
    //     //             // @ts-ignore
    //     //             const temp = snake.dir.mul(300);

    //     //             this.dir = pos.add(temp).sub(this.node.position);

    //     //             this.onSnakeSpeedUp();

    //     //             // return;
    //     //             // }

    //     //             // this.onSnakeSpeedUp();
    //     //         }

    //     //         // @ts-ignore
    //     //         if (c.name == "snake_body") {

    //     //             // @ts-ignore
    //     //             if (c.script.snakeStatus != SnakeStatus.Alive) {
    //     //                 return;
    //     //             }

    //     //             // @ts-ignore 或者撞击的蛇身上有护盾 不执行死亡判定
    //     //             if (c.script.snakeId == this.SnakeId || c.script.hasShield) {
    //     //                 return;
    //     //             }

    //     //             // this.onSnakeSpeedUp();

    //     //             if (this.snakeAction == SnakeAction.Defend) {
    //     //                 let radian = cc.misc.degreesToRadians(30);    // 将角度转换为弧度
    //     //                 let comVec = this.dir;    // 一个水平向右的对比向量
    //     //                 let dirVec = cc.v2(comVec).rotate(radian);
    //     //                 this.dir = cc.v3(dirVec.x, dirVec.y);
    //     //                 return;
    //     //             }

    //     //             if (this.snakeAction == SnakeAction.Attack) {

    //     //                 // @ts-ignore
    //     //                 const pos = c.script.node.position;
    //     //                 // @ts-ignore
    //     //                 const temp = c.script.dir.mul(200);

    //     //                 const distance1 = c.position.sub(this.node.position).mag();
    //     //                 // @ts-ignore
    //     //                 const distance2 = c.script.node.position.sub(this.node.position).mag();

    //     //                 if (distance1 > distance2) {

    //     //                     this.dir = pos.add(temp).sub(this.node.position);
    //     //                     this.onSnakeSpeedUp();

    //     //                 } else {
    //     //                     let radian = cc.misc.degreesToRadians(30);    // 将角度转换为弧度
    //     //                     let comVec = this.dir;    // 一个水平向右的对比向量
    //     //                     let dirVec = cc.v2(comVec).rotate(radian);
    //     //                     this.dir = cc.v3(dirVec.x, dirVec.y);
    //     //                     this.onSnakeSpeedNormal();
    //     //                 }


    //     //             }




    //     //         }

    //     //     }

    //     //     if (c.name == 'Food') {

    //     //         /** 当蛇头跟食物的距离小于100时，食物自动向蛇头靠拢 */
    //     //         if (c.position.sub(this.collider_role.node.position).mag() < this.eatArea) {
    //     //             c.getComponent(Food)?.setTargetNode(this.node);
    //     //         }
    //     //     }

    //     //     if (c.name == "DeathBody") {

    //     //         const subVector = c.position.sub(this.node.position);
    //     //         if (subVector.mag() < this.eatArea) {
    //     //             c.getComponent(DeathBody)?.setTargetNode(this.node);
    //     //         }

    //     //         this.dir = subVector.normalize();

    //     //     }



    //     // }))

    //     // contacts.forEach((c) => {
    //     //     /** 撞墙 */
    //     //     // console.log(c.name, '1111111111111111111');

    //     //     if (c.name.startsWith('wall')) {
    //     //         this.onSnakeDeath();

    //     //     } else if (c.name.startsWith('snake_body') || c.name.startsWith('Snake')) {

    //     //         /** 有护盾，不进行死亡判断 */
    //     //         if (this.hasShield) {
    //     //             return;
    //     //         }

    //     //         // @ts-ignore
    //     //         if (c.script) {

    //     //             // @ts-ignore 或者撞击的蛇身上有护盾 不执行死亡判定
    //     //             if (c.script.snakeId == this.SnakeId || c.script.hasShield) {
    //     //                 return;
    //     //             }

    //     //         } else {
    //     //             if (c.getComponent(BaseSnake).SnakeId == this.SnakeId) {
    //     //                 return;
    //     //             }
    //     //             if (c.getComponent(BaseSnake).hasShield) {
    //     //                 return;
    //     //             }
    //     //             // this.onSnakeSpeedNormal();
    //     //         }

    //     //         if (!c.active) {
    //     //             return;
    //     //         }

    //     //         // @ts-ignore
    //     //         c.script && c.script.onSnakeSpeedNormal();
    //     //         // @ts-ignore
    //     //         c.script && console.log('你的id为' + this.SnakeId + '号的蛇', "被" + c.script.SnakeId + "号蛇击杀");

    //     //         this.onSnakeDeath();
    //     //     }
    //     // })




    //     for (let j = 0, rLen = retrieve.length; j < rLen; j++) {

    //         const rItem = retrieve[j];

    //         // rItem.color = cc.Color.RED; 

    //         if (rItem.name.startsWith('Collider_Body')) {

    //             // @ts-ignore
    //             const rs = rItem.script;
    //             if (rs.SnakeId == this.SnakeId) {
    //                 continue;
    //             } else {

    //                 if (this.hasShield) {
    //                     continue;
    //                 }

    //                 const distance1 = rItem.position.sub(this.node.position).mag();

    //                 const distance2 = rs.node.position.sub(this.node.position).mag();

    //                 if (distance1 > distance2) {
    //                     const pos = rItem.position;
    //                     const temp = rs.dir.mul(400);
    //                     this.dir = pos.add(temp).sub(this.node.position);
    //                     this.onSnakeSpeedUp();

    //                 } else {
    //                     let radian = cc.misc.degreesToRadians(30);    // 将角度转换为弧度
    //                     let comVec = this.node.position.sub(rItem.position).normalize() ;
    //                     let dirVec = cc.v2(comVec).rotate(radian);
    //                     this.dir = cc.v3(dirVec.x, dirVec.y);
    //                 }
    //             }

    //         }


    //         if (rItem.name == 'Collider_Food') {

    //             /** 当蛇头跟食物的距离小于100时，食物自动向蛇头靠拢 */
    //             if (rItem.position.sub(this.collider_role.node.position).mag() < this.eatArea) {
    //                 rItem.getComponent(Food)?.setTargetNode(this.node);
    //             }
    //             this.onSnakeSpeedNormal();
    //         }

    //         if (rItem.name == "Collider_DeathBody") {

    //             const subVector = rItem.position.sub(this.node.position);
    //             if (subVector.mag() < this.eatArea) {
    //                 rItem.getComponent(DeathBody)?.setTargetNode(this.node);
    //             }
    //             this.dir = subVector.normalize();
    //         }
    //     }


    //     /** 如果有盾，不执行死亡判断 */
    //     if (this.hasShield) {
    //         return;
    //     }

    //     // debugger
    //     // console.log(contacts);



    //     for (let i = 0, cLen = contacts.length; i < cLen; i++) {

    //         const cItem = contacts[i];

    //         // cItem.color = cc.Color.RED;

    //         if (cItem.name == 'Collider_Body') {
    //             // @ts-ignore
    //             const cs = cItem.script;
    //             if (!!cs
    //                 && cs.SnakeId != this.SnakeId
    //                 // && this.snakeStatus == SnakeStatus.Alive
    //                 && !cs.hasShield
    //                 // && cs.snakeStatus == SnakeStatus.Alive
    //                 ) {
    //                 this.onSnakeDeath();
    //                 console.log('你的id为' + this.SnakeId + '号的蛇 撞击蛇身', "被" + cs.SnakeId + "号蛇击杀");
    //                 break;
    //             }
    //         }

    //         if (cItem.name == 'Collider_Snake') {
    //             const snake = cItem.getComponent(BaseSnake);
    //             if (
    //                 !snake.hasShield 
    //                 // && snake.snakeStatus != SnakeStatus.Alive
    //                 ) {
    //                 this.onSnakeDeath();
    //                 console.log('你的id为' + this.SnakeId + '号的蛇 撞击蛇头', "被" + snake.SnakeId + "号蛇击杀");
    //                 break;
    //             }

    //         }

    //     }



    // }

    /** 设置机器蛇的难度
     *  
     * @param level 难度等级 ： 1表示最灵敏  100：表示最迟钝
     * 
     */
    setRobotSnakeDiffcultLevel(level: number) {
        this.setIntervalLevel(level * 0.01);
    }

    /** 蛇复活 */
    onSnakeRevive() {
        super.revive();
        this.snakeStatus = SnakeStatus.Alive;
    }


    /**渲染帧 */
    updateRenderFrame(dt) {

        /** 自动选择位置 */
        this.autoChooseMoveDir();

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

    /** 自动选择行进方向 */
    autoChooseMoveDir() {

        const dir = this.isNearWall(this.node.position);
        if (dir !== Dir.Normal) {

            // console.log('dir !== Dir.Normal');
            let radian = cc.misc.degreesToRadians(15);    // 将角度转换为弧度
            let comVec = this.dir;    // 一个水平向右的对比向量
            let dirVec = cc.v2(comVec).rotate(radian);
            this.dir = cc.v3(dirVec.x, dirVec.y);

            if (!this.isCircle) {
                this.circleCount++;
                if (this.circleCount > 120) {
                    this.isCircle = true;
                }
            } else {
                // this.dir = cc.v3(0, 0, 0);

                if (dir == Dir.Right) {
                    this.dir = cc.v3(-1, 0, 0);
                }

                if (dir == Dir.Left) {
                    this.dir = cc.v3(1, 0, 0);
                }

                if (dir == Dir.RightBottom) {
                    this.dir = cc.v3(-1, 1, 0);
                }

                if (dir == Dir.RightTop) {
                    this.dir = cc.v3(-1, -1, 0);
                }

                if (dir == Dir.LeftBottm) {
                    this.dir = cc.v3(1, 1, 0);
                }

                if (dir == Dir.LeftTop) {
                    this.dir = cc.v3(1, -1, 0);
                }

                if (dir == Dir.Top) {
                    this.dir = cc.v3(0, -1, 0);
                }

                if (dir == Dir.Bottom) {
                    this.dir = cc.v3(0, 1, 0);
                }
            }

            return;
        } else {
            /** 重置死循环逻辑 */
            this.isCircle = false;
            this.circleCount = 0;
        }
    }




}
