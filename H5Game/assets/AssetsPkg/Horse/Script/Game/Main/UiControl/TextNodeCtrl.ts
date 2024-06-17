import GameMgr from "../../../../../../Script/Managers/GameMgr";
import { LANGUAGE_TYPE } from "../../../../../../Script/Mgr/Config";
import { handleTranslate, numberFormat } from "../../../../../../Script/Utils/Utils_Common";
import { language } from "../../Lang/horse_index";
import { HorseData } from "../HorseData";

const { ccclass, property } = cc._decorator;
@ccclass
export default class TextNodeCtrl extends cc.Component {

    @property(cc.Label)
    label_desc_round: cc.Label = null;

    @property(cc.Label)
    label_desc_balance: cc.Label = null;

    @property(cc.Label)
    lebel_desc_todayWin: cc.Label = null;

    @property(cc.Label)
    label_desc_result: cc.Label = null;

    @property(cc.Label)
    label_number_todayWin: cc.Label = null;

    @property(cc.Label)
    label_number_balance: cc.Label = null;

    @property(cc.Node)
    node_todayWin: cc.Node = null;

    @property(cc.Node)
    node_balance: cc.Node = null;

    public Lang: any = null;


    onLoad() {

        
        cc.systemEvent.on('updateRoundText', this.updateDescribeRoundText, this);

        cc.systemEvent.on('updateBalanceText', this.updateNumberBalanceText, this);

        cc.systemEvent.on('updateTodayWinText', this.updateNumberTodayWinText, this);

        this.Lang = GameMgr.getInstance().Language == LANGUAGE_TYPE.ARAB ? LANGUAGE_TYPE.ARAB : LANGUAGE_TYPE.EN;

      
        // console.log('===============================123')



    }

    protected start(): void {
        this.updateNodeWidth();
        this.updateDescribBalanceText();
        this.updateDescribeTodayWinText();
        this.updateDescribeResult();
    }


    updateNodeWidth() {
        if (this.Lang == LANGUAGE_TYPE.ARAB) {
            // debugger
            /** 设置todaywin的宽度 */
            this.node_todayWin.width = 320;
            this.node_balance.width = 280;
        } else {
            this.node_todayWin.width = 358;
            this.node_balance.width = 288;
        }
    }


    /** 处理回合的界面展示 */
    updateDescribeRoundText(round) {
        let rStr = null;

        if (this.Lang == LANGUAGE_TYPE.ARAB) {
            rStr = language.ar.panel_record.round;
        } else {
            rStr = language.en.panel_record.round;
        }

        const newStr = handleTranslate(round, rStr);

        this.label_desc_round.string = newStr;

    }

    /** 处理余额的翻译 */
    updateDescribBalanceText() {

        let bStr = null;
        if (this.Lang == LANGUAGE_TYPE.ARAB) {
          
            bStr = language.ar.header.balance;
        } else {
            bStr = language.en.header.balance;
        }
        this.label_desc_balance.string = bStr;

    }

    /** 处理今日赢金币的翻译 */
    updateDescribeTodayWinText() {
        let tStr = null;
        if (this.Lang == LANGUAGE_TYPE.ARAB) {
            tStr = language.ar.header.win;
        } else {
            tStr = language.en.header.win;
        }
        this.lebel_desc_todayWin.string = tStr;
    }

    /** 处理结果的翻译 */

    updateDescribeResult() {
        let resStr = null;
        if (this.Lang == LANGUAGE_TYPE.ARAB) {
            resStr = language.ar.descibeText.text_result;
        } else {
            resStr = language.en.descibeText.text_result;
        }
        this.label_desc_result.string = resStr;
    }


    /** 更新余额的展示信息  */
    updateNumberBalanceText() {
        const number = HorseData.getInstance().balance;

        /** 中断数字滚动的动画 */
        this.label_number_balance.node.stopAllActions();

        this.setNumberLabel(this.label_number_balance, number);

        // 设置滚动组件的初始值
        this.label_number_balance.getComponent('numberRoll').number = number;
    }


    // 设置今天获利数量
    updateNumberTodayWinText() {
        const number = HorseData.getInstance().todatWinGold;
        this.setNumberLabel(this.label_number_todayWin, number);
        this.label_number_todayWin.getComponent('numberRoll').number = number;
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





}