// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import GameMgr from "../../../../../Script/Managers/GameMgr";
import { Logger } from "../../../../../Script/Managers/Logger";
import { LANGUAGE_TYPE } from "../../../../../Script/Mgr/Config";
import { handleTranslate } from "../../../../../Script/Utils/Utils_Common";
import { language } from "../Lang/index";
import item_record_jackpot_item from "./item_record_jackpot_item";

const { ccclass, property } = cc._decorator;

@ccclass
export default class item_record_jackpot extends cc.Component {

    @property(cc.Label)
    time: cc.Label = null;

    @property(cc.Label)
    round: cc.Label = null;

    @property(cc.Label)
    jackportNum: cc.Label = null;

    @property(cc.Prefab)
    singleRecord: cc.Prefab = null;

    @property(cc.Node)
    recordContainer: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    /** 初始化Record */
    init(info) {

        const { endTime, jackPotInfo, round } = info;
        let jpTotalNum;
        this.recordContainer.removeAllChildren();
        const jpInfo = JSON.parse(jackPotInfo);
        Logger.logBusiness(jpInfo, 'jackpot获奖记录');
        jpTotalNum = this.getTotalJackpotNumber(jpInfo);
        this.setJackpotNum(jpTotalNum);
        this.setEndTime(endTime.getTime());
        this.setRound(round);
        this.node.height = 80 + jpInfo.length * 60;
        this.addRecordList(jpInfo);

    }

    /** 获取jackpot的总数 */
    getTotalJackpotNumber(list) {
        let sum = 0;
        for (let i = 0, len = list.length; i < len; i++) {
            sum += list[i].win;
        }
        return sum;
    }


    /** 添加记录列表 */
    addRecordList(list) {
        for (let i = 0, len = list.length; i < len; i++) {
            const item = cc.instantiate(this.singleRecord);
            item.parent = this.recordContainer;
            item.getComponent(item_record_jackpot_item).init(list[i]);
        }
    }

    /** 设置jackpot数量 */
    setJackpotNum(num) {
        this.jackportNum.string = num;
        // @ts-ignore
        this.jackportNum._forceUpdateRenderData();
    }

    /** 设置结束时间 */
    setEndTime(time) {
        this.time.string = new Date(time).toLocaleString('en-US');
    }

    /** 设置 */
    setRound(round: number) {
        const lang = GameMgr.getInstance().Language;
        let roundStr;
        if (lang == LANGUAGE_TYPE.ARAB) {
            roundStr = handleTranslate(round, language.ar.panel_record.round)
        } else {
            roundStr = handleTranslate(round, language.en.panel_record.round)
        }

        this.round.string = roundStr;
    }

    start() {

    }

    // update (dt) {}
}
