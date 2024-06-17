// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class prefab_anima_cactus_ctrl extends cc.Component {


    @property(cc.Sprite)
    view: cc.Sprite = null;
    @property([cc.SpriteFrame])
    viewList: Array<cc.SpriteFrame> = [];


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    protected onEnable(): void {

    }


    protected onDisable(): void {
        this.node.stopAllActions();
        this.node.active = false;
    }

    init() {
        const index = Math.random() > 0.5 ? 1 : 0;
        this.node.active = true;
        this.node.scale = 1;
        this.view.spriteFrame = this.viewList[index];
        cc.tween(this.node).repeatForever(cc.tween().to(0.05, { scaleY: 1.2 }).to(0.05, { scaleY: 1 },{easing:'backOut'}).delay(1)).start();
    }

    start() {
        this.init();
    }

    // update (dt) {}
}
