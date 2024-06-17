import GameMgr from "../../../../../Script/Managers/GameMgr";
import { LANGUAGE_TYPE } from "../../../../../Script/Mgr/Config";
import { handleTranslate } from "../../../../../Script/Utils/Utils_Common";
import { language } from "../Lang/index";



const FruitName = [
    "Orange",
    "Pitaya",
    "Watermelon",
    "Apple",
    "Lemon",
    "Strawberry",
    "Plum",
    "Grape",
];

const { ccclass, property } = cc._decorator;
@ccclass
export default class item_panel_record extends cc.Component {
    @property(cc.Label)
    text_round: cc.Label = null;

    @property(cc.Label)
    text_winFruit: cc.Label = null;

    @property(cc.Node)
    node_betResult: cc.Node = null;

    @property(cc.Label)
    text_timeStamp: cc.Label = null;

    @property(cc.Label)
    text_selected: cc.Label = null;

    public winIndex: number = null;

    public Lang: string = null;

    protected onLoad(): void {

    }

    // 设置记录
    setResultItem(node, info) {
        const lang = GameMgr.getInstance().Language == LANGUAGE_TYPE.ARAB ? LANGUAGE_TYPE.ARAB : LANGUAGE_TYPE.EN;
        this.Lang = lang;
        // Round: 1737
        // Time:1682404815
        // UID: 1272
        // Winning: 5
        // WonSet: 0
        // Chose：[]

        // console.log('[item_panel_record] setResultItem  list', info);
        // this.resultNode = node;
        // this.initResultItem(list);
        // console.log(info);

        const { createTime, currConsume, gameInfo, tableIndex } = info;


        // console.log('记录', createTime, currConsume, gameInfo, tableIndex);

        // console.log(createTime.getTime());

        let { result, stake } = JSON.parse(gameInfo);

        result = parseInt(result);
        // debugger
        // return 
        this.winIndex = result;
        this.setWinFruit(result - 1);
        this.setRound(currConsume);
        this.setTimeStamp(createTime.getTime());
        this.updateSelectFruitDisplay();
        const resultList = this.composeResultData(stake, result);
        this.addResultToContainer(node, resultList);
        this.updateItemHeight(resultList);

    }

    updateItemHeight(list) {
        const height = 200 + list.length * 70;
        this.node.height = height;
    }


    /** 设置当前赢的类型 */
    setWinFruit(num) {
        const fruitName = FruitName[num];
        // console.log(fruitName, '设置当前赢的类型');
        this.text_winFruit.string = handleTranslate(fruitName, language[this.Lang].panel_record.winFruit);
    }

    setRound(round) {
        this.text_round.string = handleTranslate(round, language[this.Lang].panel_record.round);
    }

    setTimeStamp(time) {
        this.text_timeStamp.string = new Date(time).toLocaleString('en-US');
    }

    updateSelectFruitDisplay() {
        this.text_selected.string = language[this.Lang].panel_record.selected;
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
                name: FruitName[id-1],
                isRight: id == winIndex,
                number: list[key]
            };
            resultList.push(obj);
        }

        // for (let i = 0, len = list.length; i < len; i++) {
        //     if (list[i] <= 0) {
        //         continue;
        //     }
        //     let obj = {
        //         name: FruitName[i],
        //         isRight: i === winIndex,
        //         number: list[i]
        //     };
        //     resultList.push(obj);
        // }
        // console.log(resultList, '组装结果数据');
        return resultList;
    }

    addResultToContainer(node, list) {
        if (!node || !list || list.length <= 0) {
            console.error('The param is required! Please check the params');
            return;
        }

        for (let i = 0, len = list.length; i < len; i++) {
            const item = cc.instantiate(node);
            const script = item.getComponent('item_panel_record_result');
            script.init(list[i]);
            item.parent = this.node_betResult;
        }

    }



    // 初始化结果内容
    // initResultItem(list) {
    //     for (let i = 0, len = list.length; i < len; i++) {
    //         const result = cc.instantiate(this.resultNode);
    //         const script = result.getComponent('item_panel_record_result');
    //         script.init(list[i]);
    //         result.parent = this.node_betResult;
    //     }
    // }

}
