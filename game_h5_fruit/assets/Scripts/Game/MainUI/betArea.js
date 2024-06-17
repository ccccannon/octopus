// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { FRUIT_ITEM_HEIGHT, FRUIT_ITEM_WIDTH, fruitInfoList } from "./constants"

cc.Class({
    extends: cc.Component,

    properties: {
        betBtn: cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // console.log(FRUIT_ITEM_HEIGHT);
        // console.log(FRUIT_ITEM_WIDTH);
        this.betBtnList = [];
        this.initBetArea();
    },

    initBetArea() {

        for (let i = 0, len = fruitInfoList.length; i < len; i++) {
            const betItem = cc.instantiate(this.betBtn);
            const script = betItem.getComponent('item_bet');
            script.init(fruitInfoList[i]);
            script.setHeight(FRUIT_ITEM_HEIGHT);
            script.setWidth(FRUIT_ITEM_WIDTH);
            betItem.parent = this.node;
            this.betBtnList.push(betItem);
        }

    },

    getBetBtnById(id) {
        return this.betBtnList[id];
    },

    getBetBtnScriptById(id) {
        return this.betBtnList[id] && this.betBtnList[id].getComponent('item_bet');
    },

    // 本人的下注数量
    showMyBetNumber(info) {
        // console.log('showMyBetNumber', info);
        const { id, betNumber, totalBet } = info;
        const script = this.getBetBtnScriptById(id);
        script.setMyBetNumber(betNumber);
        script.setTotalNumber(totalBet);
    },


    // 更新所有人下注的币种变化
    updateTotalBetNumber(arr) {

        for (let i = 0; i < arr.length; i++) {
            const script = this.getBetBtnById(i).getComponent('item_bet');
            script.setTotalNumber(arr[i]);
        }
    },

    /** 更新下注总额  */
    updateBetInfo(totalBetList, myBetList) {

        for (let i = 0, len = totalBetList.length; i < len; i++) {
            const total_item = totalBetList[i];
            const my_item = myBetList[i];
            const script = this.getBetBtnById(i).getComponent('item_bet');
            script.setTotalNumber(total_item);
            if (my_item > 0) {
                script.setMyBetNumber(my_item);
            }
        }
    },

    resetTotalNumber() {
        this.betBtnList.map((item) => {
            const script = item.getComponent('item_bet');
            script.setTotalNumber(0);
        })
    },

   
    // 重置下注区域
    resetBetArea() {

        this.betBtnList.map((item) => {
            const script = item.getComponent('item_bet');
            script.resetBetBtnState();
            return item;
        })

    },



    start() {

    },

    // update (dt) {},
});
