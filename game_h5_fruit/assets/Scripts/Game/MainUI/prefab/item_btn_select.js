// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { numberFormat } from "../../../Utils/utils_common";

cc.Class({
    extends: cc.Component,

    properties: {
        spriteList: [cc.SpriteFrame],
        label_coins: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    init(info) {
        this.btnInfo = info;
        this.setCoinNumber(info.coinsNumber);
        this.setBtnStatus(info.isSelected);
        this.setBtnOriginScale(info.isSelected);
    },

    onEnable() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onBtnTouchStart, this);
    },

    // 设置金币数量
    setCoinNumber(num) {

        // todo 引入 工具函数 处理数字 
        if (num === 10000) {
            num = '10K';
        }
        this.label_coins.string = num;
    },

    // 设置按钮状态
    setBtnStatus(isSelect) {
        if (isSelect) {
            this.node.getComponent(cc.Sprite).spriteFrame = this.spriteList[0];
        } else {
            this.node.getComponent(cc.Sprite).spriteFrame = this.spriteList[1];
        }
    },

    setBtnOriginScale(isSelect) {
        if (isSelect) {
            this.node.scale = 1;
        } else {
            this.node.scale = 1;
        }
    },

    setAnimationStatus(isSelect) {
        // if (isSelect) {
        //     this.toNormalAnimation();
        // } else {
        //     this.toSmallAnimation();
        // }
    },

    updateSelectStatus(val) {
        this.btnInfo.isSelected = val;
        this.setBtnStatus(val);
        this.setAnimationStatus(val);
    },

    //  缩小动画
    toSmallAnimation() {
        // if (this.node.scale <= 0.8) {
        //     return;
        // }
        // cc.tween(this.node).to(0.2, { scale: 0.8 }, { easing: 'sineOut' }).start();
    },

    toNormalAnimation() {
        if (this.node.scale >= 1) {
            return;
        }
        cc.tween(this.node).to(0.2, { scale: 1 }, { easing: 'sineOut' }).start();
    },

    // 获取按钮信息
    getBtnInfo() {
        return this.btnInfo || {};
    },

    onBtnTouchStart() {
        cc.systemEvent.emit('selectBtnClick', this.getBtnInfo());
    },

    onDestroy() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onBtnTouchStart, this);
    },

    start() {

    },

    // update (dt) {},
});
