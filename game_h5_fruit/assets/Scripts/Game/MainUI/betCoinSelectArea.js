// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { selectBtnList } from './constants'

cc.Class({
    extends: cc.Component,

    properties: {
        btn_select: cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad() {

        this.selectList = [];
        this.init();
        this.selectBtnInfo = {};
        this.setLayout();
    },

    onEnable() {
        cc.systemEvent.on('selectBtnClick', this.onChildBtnClick, this);
    },


    setLayout() {
        const layout = this.node.getComponent(cc.Layout)
        if (window.localLang === window.languageType.ARAB) {
            layout.horizontalDirection = cc.Layout.HorizontalDirection.RIGHT_TO_LEFT;
        } else {
            layout.horizontalDirection = cc.Layout.HorizontalDirection.LEFT_TO_RIGHT;
        }
    },

    onChildBtnClick(params) {

        // 如果玩家点击同一个按钮，不进行后续的赋值操作；
        if (params.id === this.selectBtnInfo.id) {
            return;
        }
        // console.log('onChildBtnClick', params);

        this.setSelectBtnInfo(params);

        this.updateBtnStatus(params.id);
    },

    updateBtnStatus(index) {
        this.selectList.map((item) => {
            const script = item.getComponent('item_btn_select');
            if (script.btnInfo.id === index) {
                script.updateSelectStatus(true)
            } else {
                script.updateSelectStatus(false)
            }
        })
    },


    init() {
        this.node.removeAllChildren();
        for (let i = 0, len = selectBtnList.length; i < len; i++) {
            const info = selectBtnList[i];
            const item = cc.instantiate(this.btn_select);
            const script = item.getComponent('item_btn_select');
            if (info.isSelected) {
                this.setSelectBtnInfo(info);
            }
            script.init(info);
            item.parent = this.node;
            this.selectList.push(item);
        }
    },

    setSelectBtnInfo(info) {

        this.selectBtnInfo = info;
        // console.log('setSelectBtnInfo', this.selectBtnInfo);
        cc.systemEvent.emit('ON_COIN_SELECT_CLICK', info);

    },

    onDisable() {
        cc.systemEvent.off('selectBtnClick', this.onChildBtnClick, this);
        this.selectList = null;
        this.selectBtnInfo = null;
    },

    start() {

    },

    // update (dt) {},
});
