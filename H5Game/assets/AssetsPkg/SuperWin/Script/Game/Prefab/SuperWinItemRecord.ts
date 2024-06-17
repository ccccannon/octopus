// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import GameMgr from "../../../../../Script/Managers/GameMgr";
import { LANGUAGE_TYPE } from "../../../../../Script/Mgr/Config";
import { numberFormat } from "../../../../../Script/Utils/Utils_Common";
import { language } from "../Lang/superwin_index";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SuperWinItemRecord extends cc.Component {
    @property(cc.Label)
    label_time: cc.Label = null;

    @property(cc.Label)
    label_fees: cc.Label = null;

    @property(cc.Label)
    label_result: cc.Label = null;

    @property(cc.Label)
    coin_number: cc.Label = null;

    /** 初始化 */
    init(record) {
        const { createTime, tableInfo, totalConsumeGold, totalWinGold } = record;

        this.setTime(createTime)

        this.setResult(tableInfo);

        this.label_fees.string = totalConsumeGold.toNumber();

        this.coin_number.string = numberFormat(totalWinGold.toNumber());
        // @ts-ignore
        this.coin_number._forceUpdateRenderData();

    }


    setTime(time) {
        const str = new Date(time.getTime()).toLocaleString('en-US');

        // console.log(time.getTime());

        // const utc3 = time.getTime() + 3 * 60 * 60 * 1000;

        // const str = new Date(utc3).toUTCString();

        // console.log(new Date(time.getTime()).toUTCString());

        // console.log(str)

        const list = str.split(',');
        this.label_time.string = list[0] + "\n" + list[1];
    }

    setResult(res) {

        const lang = GameMgr.getInstance().Language;
        let str;
        if (lang == LANGUAGE_TYPE.ARAB) {
            if (res == "Winner") {
                str = language.ar.record.winner;
            } else if (res == "OUT") {
                str = language.ar.record.out;
            } else if (res == "Lucky") {
                str = language.ar.record.luckyer;
            } else {
                str = "&" + language.ar.record.winner + '\n' + language.ar.record.luckyer;
            }
        } else {
            if (res == "Winner") {
                str = language.en.record.winner;
            } else if (res == "OUT") {
                str = language.en.record.out;
            } else if (res == "Lucky") {
                str = language.en.record.luckyer;
            } else {
                str = language.en.record.winner + '&\n' + language.en.record.luckyer;
            }
        }

        // const list = res.split('&');

        // if (list.length <= 1) {
        //     str = list[0];
        // } else {
        //     str = list[0] + '\n&' + list[1];
        // }
        this.label_result.string = str;
    }


}
