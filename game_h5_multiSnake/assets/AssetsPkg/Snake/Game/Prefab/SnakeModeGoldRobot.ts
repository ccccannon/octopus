// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import SnakeModeGold from "./SnakeModeGold";

const { ccclass, property } = cc._decorator;



enum State {
    Alive,//存活
    Death,//死亡
    Protect,//保护
}

@ccclass
export default class SnakeRobot extends SnakeModeGold {

    /** 初始化机器人 */
    public initRobot(bodyLen: number, bodySize: number, id?: number) {

        this.initSnake(bodyLen, bodySize, id);

        this.dir = this.getRandomDir();

        this.setCheckColliderInterval();

    }




    /**渲染帧 */
    updateRenderFrame(dt) {

        /** 自动选择位置 */
        this.autoChooseMoveDir();

        /**蛇移动 */
        this.move(dt);

        /** 碰撞体检测 */
        // this.colliderCheck(dt);

        /** 每帧更新用户金币数据的展示位置 */
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
