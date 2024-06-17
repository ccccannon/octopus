// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { fruitId } from '../constants';
import { language } from '../../Lang/index.js';
import { handleTranslate } from '../../../Utils/utils_common';

cc.Class({
    extends: cc.Component,

    properties: {
        label_times: cc.Label,
        array_bgList: [cc.Node],
        selected: cc.Node,
        sprite_view: cc.Sprite,
        // viewList: [cc.SpriteFrame],
        viewAltas: cc.SpriteAtlas
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // console.log(fruitId);
    },

    // 初始化数据
    init(info) {
        // console.log(info);
        this.itemInfo = info;
        this.itemInfo.isSelect = false;
        this.setRewardTimes(info.rewardTimes);
        this.setItemPosition(info.pos);
        this.setSpriteFrame(info.name);
        this.setBackground('normal');
        // setTimeout(() => {
        //     this.setBackground('dark');
        // }, 1000);
        // setTimeout(() => {
        //     this.setBackground('normal');
        // }, 2000);
    },

    // 设置倍率文字
    setRewardTimes(val) {
        // this.label_times.string = val + " " + language['Arab'].times;
        const str = handleTranslate(val, language[window.localLang].times);
        this.label_times.string = str;
    },

    // 获取当前节点的数据
    getItemInfo() {
        return !!this.itemInfo && this.itemInfo || {};
    },

    // 设置当前节点的位置
    setItemPosition(pos) {
        this.node.setPosition(pos);
    },

    // 设置图片
    setSpriteFrame(name) {
        const str = "view_fruit_" + name;
        this.sprite_view.spriteFrame = this.viewAltas.getSpriteFrame(str);
    },

    /** 更新被选择水果的倍数颜色 */
    updateSelectedTimeColor(isChange) {
        if (isChange) {
            this.label_times.node.color = new cc.color(105, 67, 39);
        } else {
            this.label_times.node.color = new cc.color(255, 255, 255);
        }
    },

    // 设置背景颜色
    setBackground(status) {
        const tempStatus = 'bg_' + status;
        this.array_bgList.map((item) => {
            if (item.name === tempStatus) {
                item.active = true;
                item.stopAllActions();
                item.opacity = 255;
            } else {
                item.active = false;
            }
            return item;
        })
    },

    // 设置图片动画
    setBackgroundAnimation(status) {
        const tempStatus = 'bg_' + status;
        this.array_bgList.map((item) => {
            if (item.name === tempStatus) {
                item.active = true;
                item.opacity = 0;
                cc.tween(item).to(0.2, { opacity: 255 }).start();
            } else {
                item.active = false;
            }
            return item;
        })
    },

    // 设置被选中状态
    setSelectStatus(val) {
        this.itemInfo.isSelect = val;
        this.selected.active = val;
    },


    // 重置水果节点的所有状态
    reset() {
        this.setSelectStatus(false);
        this.setBackground('normal');
        this.resetViewAndLabel();
        // console.log('diaoleme?');
        this.updateSelectedTimeColor(false);
    },

    // 竞猜阶段的动画
    beforeGuessAnimation() {
        this.viewMoveDown();
        // this.labelTimesScale();
    },


    // 视图下移
    viewMoveDown() {
        cc.tween(this.sprite_view.node).to(0.2, { position: cc.v2(0, 5) }, { easing: "sineIn" }).start();
    },

    // 次数文字缩小
    labelTimesScale() {
        cc.tween(this.label_times.node).to(0.2, { scale: 0.8 }, { easing: "sineIn" }).start();
    },

    // 重置视图位置
    resetViewAndLabel() {
        // console.log('resetViewAndLabel',this.sprite_view.node.getComponent(cc.Widget));
        const widget = this.sprite_view.node.getComponent(cc.Widget);
        widget.top = 16;
        widget.updateAlignment();
        this.label_times.node.scale = 1;
    },

    //节点销毁
    onDestroy() {
        // 释放内存
        this.itemInfo = null;
    },

    start() {

    },

    // update (dt) {},
});
