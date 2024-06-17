// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { language } from "../Lang/index.js";
import { numberFormat } from "../../Utils/utils_common.js"

cc.Class({
    extends: cc.Component,

    properties: {
        icon_coin_balance: cc.Node,
        text_coin_balance: cc.Label,
        text_coin_win: cc.Label,
        text_round: cc.Label,
        text_describe_round: cc.Label,
        text_describe_balance: cc.Label,
        text_describe_win: cc.Label,
        node_todaywin: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.updateNodeSizeByLanguage();
        this.tagLanguageManager();
        // this.init();

        cc.game.evtManager.on('updateBalance', this.updateBalance, this);
        cc.game.evtManager.once('updateBalanceOnce', this.updateBalance, this);

    },

    // TODO 语言管理
    tagLanguageManager() {
        // console.log(window.localLang,'11111111111111111111111');
        this.text_describe_round.string = language[window.localLang].header.round;
        this.text_describe_balance.string = language[window.localLang].header.balance;
        this.text_describe_win.string = language[window.localLang].header.win;
    },

    /** 更新节点背景框的大小 */
    updateNodeSizeByLanguage() {

        if (window.localLang === window.languageType.EN) {
            // 358
            this.node_todaywin.width = 358;
        }

        if (window.localLang === window.languageType.ARAB) {
            // 286
            this.node_todaywin.width = 270;
        }


    },

    updateBalance(num) {
        this.setDisplayCoinBalance(num);
    },

    // 设置余额的数量
    setDisplayCoinBalance(num) {
        this.setNumberLabel(this.text_coin_balance, num);
        // 设置滚动组件的初始值
        this.text_coin_balance.getComponent('numberRoll').number = num;
    },

    // 设置今天获利数量
    setDisplayCoinWin(num) {
        this.setNumberLabel(this.text_coin_win, num);
        this.text_coin_win.getComponent('numberRoll').number = num;
    },

    // 设置回合数
    setRound(num) {
        this.setNumberLabel(this.text_round, num, false);
    },



    // 设置数字
    setNumberLabel(label, number, isFormat = true) {
        let str;
        str = isFormat ? numberFormat(number) : number;
        label.string = str;
        label.node.active = false;
        label._forceUpdateRenderData(true);
        label.node.active = true;
    },



    start() {

    },

    // update (dt) {},
});
