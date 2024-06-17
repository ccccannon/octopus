

import GameMgr from "../../../../../Script/Managers/GameMgr";
import { LANGUAGE_TYPE } from "../../../../../Script/Mgr/Config";
import { numberFormat } from "../../../../../Script/Utils/Utils_Common";
import { language } from "../Lang/index";

const { ccclass, property } = cc._decorator;
@ccclass
export default class headArea extends cc.Component {

    @property(cc.Label)
    text_coin_balance: cc.Label = null;

    @property(cc.Node)
    icon_coin_balance: cc.Node = null;

    @property(cc.Label)
    text_coin_win: cc.Label = null;

    @property(cc.Label)
    text_round: cc.Label = null;

    @property(cc.Label)
    text_describe_round: cc.Label = null;

    @property(cc.Label)
    text_describe_balance: cc.Label = null;

    @property(cc.Label)
    text_describe_win: cc.Label = null;

    @property(cc.Node)
    node_todaywin: cc.Node = null;

    @property(cc.Node)
    node_balance: cc.Node = null;

    onLoad() {
        const lang = GameMgr.getInstance().Language == LANGUAGE_TYPE.ARAB ? LANGUAGE_TYPE.ARAB : LANGUAGE_TYPE.EN;
        this.updateNodeSizeByLanguage(lang);
        this.tagLanguageManager(lang);
        // this.init();

        cc.systemEvent.on('updateBalance', this.updateBalance, this);
        cc.systemEvent.once('updateBalanceOnce', this.updateBalance, this);

    }


    // TODO 语言管理
    tagLanguageManager(lang) {


        // @ts-ignore
        this.text_describe_round.string = language[lang].header.round;
        // @ts-ignore
        this.text_describe_balance.string = language[lang].header.balance;
        // @ts-ignore
        this.text_describe_win.string = language[lang].header.win;
    }

    /** 更新节点背景框的大小 */
    updateNodeSizeByLanguage(lang) {

        if (lang === LANGUAGE_TYPE.ARAB) {
            // 286
            this.node_todaywin.width = 290;
            this.node_balance.width = 280;
        } else {
            // 358
            this.node_todaywin.width = 358;
            this.node_balance.width = 288;
        }

    }


    updateBalance(num) {
        this.setDisplayCoinBalance(num);
    }

    // 设置余额的数量
    setDisplayCoinBalance(num) {
        this.setNumberLabel(this.text_coin_balance, num);
        // 设置滚动组件的初始值
        this.text_coin_balance.getComponent('numberRoll').number = num;
    }

    // 设置今天获利数量
    setDisplayCoinWin(num) {
        this.setNumberLabel(this.text_coin_win, num);
        this.text_coin_win.getComponent('numberRoll').number = num;
    }

    // 设置回合数
    setRound(num) {
        this.setNumberLabel(this.text_round, num, false);
    }



    // 设置数字
    setNumberLabel(label, number, isFormat = true) {
        let str;
        str = isFormat ? numberFormat(number) : number;
        label.string = str;
        label.node.active = false;
        label._forceUpdateRenderData(true);
        label.node.active = true;
    }



    start() {

    }

}


