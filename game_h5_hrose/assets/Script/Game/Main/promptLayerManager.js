// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        node_item_tips: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.ShowList = [];
    },

    // 显示动态提示
    showAnimationTips(typeCode, animaType) {
        const item = cc.instantiate(this.node_item_tips);
        item.parent = this.node;
        const script = item.getComponent('item_tips');
        script.showTipsByCode(typeCode);
        script.setAnimaType(animaType);
        script.tipsAnimation();
    },

    // 显示静态提示
    showStaticTips(typeCode, holdTime) {
        // const holdTime = 3;

        const item = cc.instantiate(this.node_item_tips);
        item.parent = this.node;
        const script = item.getComponent('item_tips');
        script.showTipsByCode(typeCode);
        script.setNodeTipsType(0);
        script.setNodeStateByTipsType();
        this.ShowList.push(item);
        if (holdTime) {
            script.setHideTime(holdTime);
            script.startHideInterval();
        }

    },


    // 移除静态提示
    removeStaticTips() {

        if (this.ShowList.length <= 0) {
            // console.log('the showlist is nothing');
            return;
        }
        const item = this.ShowList.shift();

        item.destroy();

    },



    start() {

    },

    // update (dt) {},
});
