// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import BaseSnake from "./BaseSnake";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ShieldCtr extends cc.Component {

    @property(cc.Sprite)
    progress: cc.Sprite = null;

    target: BaseSnake = null;

    /** 持续时间 */
    persistent: number = 0;

    /** 节点缩放倍数 */
    nodeScale: number = 1;

    count: number = 0;

    stepNumber: number = 0;

    circleTimer: number = null;

    setTarget(target) {
        this.target = target;
    }


    /** 更新节点的缩放大小 */
    updateNodeScale(len: number) {

        this.nodeScale = Math.floor(len / this.node.width * 100) / 100;
        this.node.scale = this.nodeScale;

    }

    /** 设置持续事件 */
    setPersistentTime(time) {
        this.persistent = time;
        this.count = time;
        this.progress.fillRange = 1;
        this.stepNumber = Math.floor(1 / time * 100) / 100;
    }


    /** 重置护盾的时间 */
    resetShield() {
        this.progress.fillRange = 1;
    }

    /** 环形进度计时 */
    circleInterval() {

        this.circleTimer = setInterval(() => {

            this.progress.fillRange = this.progress.fillRange - this.stepNumber >= 0 ? this.progress.fillRange - this.stepNumber : 0;
            if (this.progress.fillRange <= 0) {
                this.shieldDisapper();
            }

        }, 1000);

    }

    shieldDisapper() {
        this.node.active = false;
        this.target.hasShield = false;
        this.target.shieldCtrl = null;
        this.target = null;
        this.node.destroy();
        clearInterval(this.circleTimer);
    }


    start() {

    }

    protected onDestroy(): void {
        this.circleTimer && clearInterval(this.circleTimer);
    }

    // update (dt) {}
}
