// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { language } from "../Lang/index";

cc.Class({
    extends: cc.Component,

    properties: {

        container: cc.Layout,

        prefab_topItem: cc.Prefab,

        text_top: cc.Label,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.lang = window.localLang || 'ar';
        // console.log(this.container);
        this.setLayoutHorizontalDirection();
        this.setTextTop3();
    },


    setTextTop3() {
        this.text_top.string = language[window.localLang].result.top;
    },


    // 设置水平方向
    setLayoutHorizontalDirection() {

        if (this.lang && this.lang === 'en') {
            this.container.horizontalDirection = cc.Layout.HorizontalDirection.LEFT_TO_RIGHT;
            this.container.node.position = cc.v2(40, 0)

        } else {
            this.container.horizontalDirection = cc.Layout.HorizontalDirection.RIGHT_TO_LEFT;
            this.container.node.position = cc.v2(-40, 0)
        }
    },

    init(info) {

        // console.log('[container-top] info ', info);
        this.container.node.removeAllChildren();
        for (let i = 0, len = info.length; i < len; i++) {

            const itemInfo = info[i];
            itemInfo.rank = i;
            const item = cc.instantiate(this.prefab_topItem);
            const script = item.getComponent('item_top');
            script.initInfo(itemInfo);
            item.parent = this.container.node;

        }

    },


    start() {

    },

    // update (dt) {},
});
