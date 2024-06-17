import GameMgr from "../../../../../Script/Managers/GameMgr";
import { LANGUAGE_TYPE } from "../../../../../Script/Mgr/Config";
import { handleTranslate, numberFormat } from "../../../../../Script/Utils/Utils_Common";
import { language } from "../Lang/horse_index";
import ItemRecordBetRestult from "./ItemRecordBetRestult";


const { ccclass, property } = cc._decorator

@ccclass
export default class ItemRecord extends cc.Component {

    @property(cc.Label)
    text_round: cc.Label = null;

    @property(cc.Label)
    text_describe_winHorse: cc.Label = null;

    @property(cc.Label)
    text_timeStamp: cc.Label = null;

    @property(cc.Sprite)
    view_winHorse: cc.Sprite = null;

    @property(cc.Node)
    container: cc.Node = null;

    @property(cc.Label)
    text_describe_chooseHorse: cc.Label = null;

    public Lang: string = null;

    public winIndex: number = 0;



    // 设置记录
    setResultItem(node, info, viewList) {
        this.Lang = GameMgr.getInstance().Language == LANGUAGE_TYPE.ARAB ? LANGUAGE_TYPE.ARAB : LANGUAGE_TYPE.EN;

        const { createTime, currConsume, tableIndex, playerId, gameInfo } = info;

        const betInfo = JSON.parse(gameInfo);

        const { result, stake } = betInfo;

        this.winIndex = result;

        /**设置回合 */
        this.setRound(currConsume);

        // /** 设置赢的马匹 */
        this.setWinerHorse(this.winIndex - 1, viewList);

        this.addBetHistory(node, stake, viewList);

        this.setWinHorseText();

        /** 设置事件 */
        this.setTimeStamp(createTime);

    }

    setRound(round) {
        this.text_round.string = handleTranslate(round, language[this.Lang].panel_record.round);
    }

    setTimeStamp(time) {
        this.text_timeStamp.string = new Date(time).toLocaleString('en-US');
    }


    /**  设置语言  */
    setWinHorseText() {
        this.text_describe_winHorse.string = language[this.Lang].panel_record.winHorse
        this.text_describe_chooseHorse.string = language[this.Lang].panel_record.selectedHorse;
    }

    /** 设置胜利的马匹 */
    setWinerHorse(index, viewList) {
        // debugger
        this.view_winHorse.spriteFrame = viewList[index];
        // this.view_winHorse.node.active = true;
    }

    /** 添加下注历史 */
    addBetHistory(node, stake, viewList) {

        const list = this.composeResultData(stake, this.winIndex);
        for (let i = 0; i < list.length; i++) {
            const result = cc.instantiate(node);
            result.getComponent(ItemRecordBetRestult).init(list[i], viewList);
            result.parent = this.container;
        }

        this.node.height = 220 + list.length * 70;

    }

    /**组装结果数据 */
    composeResultData(list, winIndex) {
        let resultList = [];

        const tempList = Object.keys(list);

        // console.log(tempList,'组装结果数据');

        for (let i = 0, len = tempList.length; i < len; i++) {

            const key = tempList[i];
            const id = parseInt(key);
            let obj = {
                id: id,
                isRight: id == winIndex,
                number: list[key]
            };
            resultList.push(obj);
        }
        return resultList;
    }

    start() {

    }

    // update (dt) {},
}
