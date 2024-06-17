// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import numberRoll from "../../../../../Framework/numberRoll";

const { ccclass, property } = cc._decorator;

@ccclass
export default class jackpotCtrl extends cc.Component {

    @property([cc.Node])
    list_node_light: Array<cc.Node> = [];

    @property(cc.Node)
    node_jackpot: cc.Node = null;

    @property(cc.Node)
    node_jackpotNumber: cc.Node = null;

    public isFlash: boolean = false;

    public flashInterval = 0;

    start() {
        this.launchFlashLamp();
        this.jackpotIconAnima();
    }


    launchFlashLamp() {
        this.list_node_light[0].active = this.isFlash;
        this.list_node_light[1].active = !this.isFlash;
        this.flashInterval = setInterval(() => {
            this.isFlash = !this.isFlash;
            this.list_node_light[0].active = this.isFlash;
            this.list_node_light[1].active = !this.isFlash;
        }, 500);
    }

    stopFlashLamp() {
        this.flashInterval && clearInterval(this.flashInterval);
        this.list_node_light[0].active = false;
    }


    /** jackpot标签动画 */
    jackpotIconAnima() {
        cc.tween(this.node_jackpot)
            .sequence(cc.tween().to(0.5, { scale: 0.9 }, { easing: 'sineIn' }), cc.tween().to(0.5, { scale: 1 }, { easing: 'sineOut' }))
            .repeatForever()
            .start();
    }

    /** 更新jackpot的数据 */
    updateJackPotNumber(number:number) {
        const numberRoll = this.node_jackpotNumber.getComponent("numberRoll");
        // const randomNumber = Math.floor(Math.random() * 1000000);
        const time = 1.6;
        numberRoll.startNumberAnimationTo(number, time, null, false);
    }

    protected onDestroy(): void {
        this.node_jackpot.stopAllActions();
        this.stopFlashLamp();
    }

    // update (dt) {}
}
