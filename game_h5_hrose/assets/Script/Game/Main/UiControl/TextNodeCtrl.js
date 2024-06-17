import { language } from "../../Lang/index"

import { handleTranslate, numberFormat } from '../../../Utils/utils_common'

import GameData from "../GameData";


cc.Class({
    extends: cc.Component,
    properties: {
        label_desc_round: cc.Label,
        label_desc_balance: cc.Label,
        lebel_desc_todayWin: cc.Label,
        label_desc_result: cc.Label,

        label_number_todayWin: cc.Label,
        label_number_balance: cc.Label,

        node_todayWin: cc.Node,
        node_balance: cc.Node,

    },

    onLoad() {
        this.updateNodeWidth();
        this.updateDescribBalanceText();
        this.updateDescribeTodayWinText();
        this.updateDescribeResult();
        // console.log('===============================123')

        cc.game.evtManager.on('updateRoundText', this.updateDescribeRoundText, this);

        cc.game.evtManager.on('updateBalanceText', this.updateNumberBalanceText, this);

        cc.game.evtManager.on('updateTodayWinText', this.updateNumberTodayWinText, this);

    },


    updateNodeWidth() {
        if (window.localLang == window.languageType.ARAB) {
            /** 设置todaywin的宽度 */
            this.node_todayWin.width = 280;
            this.node_balance.width = 280;
        } else {
            this.node_todayWin.width = 340;
            this.node_balance.width = 288;
        }
    },


    /** 处理回合的界面展示 */
    updateDescribeRoundText(round) {
        let rStr = null;

        if (window.localLang == window.languageType.ARAB) {
            rStr = language.ar.panel_record.round;
        } else {
            rStr = language.en.panel_record.round;
        }

        const newStr = handleTranslate(round, rStr);

        this.label_desc_round.string = newStr;

    },

    /** 处理余额的翻译 */
    updateDescribBalanceText() {

        let bStr = null;
        if (window.localLang == window.languageType.ARAB) {
            bStr = language.ar.header.balance;
        } else {
            bStr = language.en.header.balance;
        }
        this.label_desc_balance.string = bStr;

    },

    /** 处理今日赢金币的翻译 */
    updateDescribeTodayWinText() {
        let tStr = null;
        if (window.localLang == window.languageType.ARAB) {
            tStr = language.ar.header.win;
        } else {
            tStr = language.en.header.win;
        }
        this.lebel_desc_todayWin.string = tStr;
    },

    /** 处理结果的翻译 */

    updateDescribeResult() {
        let resStr = null;
        if (window.localLang == window.languageType.ARAB) {
            resStr = language.ar.descibeText.text_result;
        } else {
            resStr = language.en.descibeText.text_result;
        }
        this.label_desc_result.string = resStr;
    },


    /** 更新余额的展示信息  */
    updateNumberBalanceText() {
        const number = GameData.Balance;

        /** 中断数字滚动的动画 */
        this.label_number_balance.node.stopAllActions();

        this.setNumberLabel(this.label_number_balance, number);

        // 设置滚动组件的初始值
        this.label_number_balance.getComponent('numberRoll').number = number;
    },


    // 设置今天获利数量
    updateNumberTodayWinText() {
        const number = GameData.TodayWinSet;
        this.setNumberLabel(this.label_number_todayWin, number);
        this.label_number_todayWin.getComponent('numberRoll').number = number;
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





})