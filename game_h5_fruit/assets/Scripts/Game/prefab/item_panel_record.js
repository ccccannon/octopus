
import { numberFormat, handleTranslate } from "../../Utils/utils_common";
import { language } from "../Lang/index.js";


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

cc.Class({
    extends: cc.Component,

    properties: {
        text_round: cc.Label,
        text_winFruit: cc.Label,
        node_betResult: cc.Node,
        text_timeStamp: cc.Label,
        text_selected: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

    },

    // 设置记录
    setResultItem(node, info) {

        // Round: 1737
        // Time:1682404815
        // UID: 1272
        // Winning: 5
        // WonSet: 0
        // Chose：[]

        // console.log('[item_panel_record] setResultItem  list', info);
        // this.resultNode = node;
        // this.initResultItem(list);
        this.winIndex = info.winning;
        this.setWinFruit(info.Winning);
        this.setRound(info.Round);
        this.setTimeStamp(info.Time);
        this.updateSelectFruitDisplay();
        const resultList = this.composeResultData(info.Chose, info.Winning);
        this.addResultToContainer(node, resultList);
        this.updateItemHeight(resultList);
    },

    updateItemHeight(list) {
        const height = 200 + list.length * 70;
        this.node.height = height;
    },

    /** 设置当前赢的类型 */
    setWinFruit(num) {

        const fruitName = FruitName[num];
        // console.log(fruitName, '设置当前赢的类型');
        this.text_winFruit.string = handleTranslate(fruitName, language[window.localLang].panel_record.winFruit);
    },

    setRound(round) {
        this.text_round.string = handleTranslate(round, language[window.localLang].panel_record.round);
    },

    setTimeStamp(time) {
        this.text_timeStamp.string = new Date(time * 1000).toLocaleString('en-US');
    },

    updateSelectFruitDisplay() {
        this.text_selected.string = language[window.localLang].panel_record.selected;
    },

    /**组装结果数据 */
    composeResultData(list, winIndex) {
        let resultList = [];
        for (let i = 0, len = list.length; i < len; i++) {
            if (list[i] <= 0) {
                continue;
            }
            let obj = {};
            obj.name = FruitName[i];
            obj.isRight = i === winIndex;
            obj.number = list[i];
            resultList.push(obj);
        }
        // console.log(resultList, '组装结果数据');
        return resultList;
    },

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

    },



    // 初始化结果内容
    initResultItem(list) {
        for (let i = 0, len = list.length; i < len; i++) {
            const result = cc.instantiate(this.resultNode);
            const script = result.getComponent('item_panel_record_result');
            script.init(list[i]);
            result.parent = this.node_betResult;
        }
    },


    start() {

    },

    // update (dt) {},
});
