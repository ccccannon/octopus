

import { selectBtnList } from '../../Constants';

cc.Class({
    extends: cc.Component,

    properties: {
        toggleBgList: [cc.SpriteFrame],
        btnContainer: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.currIndex = -1;
        this.updateBtnInfoByIndex(1);
        this.motifyBtnDisplayDir(window.localLang);
    },

    onCoinBtnClick(evt, customEventData) {

        this.updateBtnInfoByIndex(customEventData);

    },


    updateBtnInfoByIndex(index) {

        if (this.currIndex == index) {
            return;
        }

        this.currIndex = index;

        // 通知ui管理类
        cc.game.evtManager.emit('onSelectedCoinsChange', selectBtnList[index]);

        // 更新当前被选中的金额对象
        this.setSelectCoinsObj(selectBtnList[index]);

        this.updateSelectedBtnSkin(index);
    },


    /** 更新被选中按钮的皮肤 */
    updateSelectedBtnSkin(index) {
        const container = this.btnContainer.children;
        for (let i = 0, len = container.length; i < len; i++) {
            if (index == i) {
                container[i].getComponent(cc.Sprite).spriteFrame = this.toggleBgList[1];
            } else {
                container[i].getComponent(cc.Sprite).spriteFrame = this.toggleBgList[0];
            }
        }
    },

    /** 更新按钮的排列方向 */
    motifyBtnDisplayDir(lan) {
        if (lan === window.languageType.EN) {
            this.btnContainer.getComponent(cc.Layout).horizontalDirection = cc.Layout.HorizontalDirection.LEFT_TO_RIGHT;
        } else {
            this.btnContainer.getComponent(cc.Layout).horizontalDirection = cc.Layout.HorizontalDirection.RIGHT_TO_LEFT;
        }
    },

    setSelectCoinsObj(obj) {
        this.selectedCoinsObj = obj;
    },

    getSelectedCoinsObj() {
        return this.selectedCoinsObj;
    },



    start() {

    },

    // update (dt) {},
});
