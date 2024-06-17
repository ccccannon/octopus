// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NumberNoticeCtrl extends cc.Component {

    @property(cc.Node)
    node_number_notice: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    protected onLoad(): void {
        this.addEventListener();
    }

    protected onDestroy(): void {
        this.removeEventListener();
    }

    addEventListener() {
        cc.systemEvent.on('FoodNumberNotice', this.foodNumberNotice, this);
    }

    removeEventListener() {

    }

    /** 食物分值提示 */
    foodNumberNotice(number) {

    }

    start() {

    }

    // update (dt) {}
}
