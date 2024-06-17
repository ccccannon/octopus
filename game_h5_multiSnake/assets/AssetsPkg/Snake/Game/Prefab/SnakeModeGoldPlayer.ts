// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import SnakeModeGold from "./SnakeModeGold";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SnakePlayerCtrl extends SnakeModeGold {

    /** 初始化玩家数据 */
    public initPlayer(bodyLen: number, bodySize: number, id?: number) {

        this.initSnake(bodyLen, bodySize, id);
        this.dir = this.getRandomDir();

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


    /**渲染帧 */
    updateRenderFrame(dt) {

        /** 自动选择位置 */
        // this.autoChooseMoveDir();

        /**蛇移动 */
        this.move(dt);

        /** 碰撞体检测 */
        // this.colliderCheck(dt);

        /** 更新玩家金币获取信息 */
        this.updateUserInfo();

        /** 更新护盾位置 */
        this.updateShieldPos();

        /** 形体变化 */
        this.shapeUpdate(dt);


    }

    /** 逻辑帧 */
    updateLogicFrame() {

    }
}
