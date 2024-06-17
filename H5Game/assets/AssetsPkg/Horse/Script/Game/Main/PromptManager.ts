import PrefabTips from "./PrefabControl/PrefabTips";

const { ccclass, property } = cc._decorator;
@ccclass
export default class PromptManager extends cc.Component {
    @property(cc.Node)
    item_tips: cc.Node = null;

    public ShowList: Array<cc.Node> = [];

    onLoad() {
        this.ShowList = [];
    }

    // 显示动态提示
    showAnimationTips(typeCode, animaType = 2) {
        const item = cc.instantiate(this.item_tips);
        item.parent = this.node;
        const script = item.getComponent(PrefabTips);
        script.showTipsByCode(typeCode);
        script.setAnimaType(animaType);
        script.tipsAnimation();
    }

    // 显示静态提示
    showStaticTips(typeCode, holdTime?) {
        // const holdTime = 3;

        const item = cc.instantiate(this.item_tips);
        item.parent = this.node;
        const script = item.getComponent(PrefabTips);
        script.showTipsByCode(typeCode);
        script.setNodeTipsType(0);
        script.setNodeStateByTipsType();
        this.ShowList.push(item);
        if (holdTime) {
            script.setHideTime(holdTime);
            script.startHideInterval();
        }

    }


    // 移除静态提示
    removeStaticTips() {
        // debugger
        const len = this.ShowList.length;

        if (len <= 0) {
            // console.log('the showlist is nothing');
            return;
        }
        // const item = this.ShowList.shift();

        for (let i = len - 1; i >= 0; i--) {
            const item = this.ShowList.splice(i, 1);
            item[0].destroy();
        }


    }



    start() {

    }
}
