
import { numberFormat, handleTranslate } from "../../Utils/utils_common";
import { language } from "../Lang/index";



cc.Class({
    extends: cc.Component,

    properties: {
        text_round: cc.Label,
        node_betResult: cc.Node,
        text_timeStamp: cc.Label,

        text_describe_winHorse: cc.Label,
        text_describe_youChose: cc.Label,
        text_describe_youSpent: cc.Label,
        text_describe_youWon: cc.Label,

        sprite_winHorse: cc.Sprite,
        node_choseContainer: cc.Node,

        text_number_cost: cc.Label,
        text_number_won: cc.Label,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.updateNodeDisplayByLanguage();
        this.updateDiscribeText();
    },



    updateDiscribeText() {

        this.text_describe_winHorse.string = language[window.localLang].panel_record.winHorse
        this.text_describe_youChose.string = language[window.localLang].panel_record.youChose
        this.text_describe_youSpent.string = language[window.localLang].panel_record.youSpent
        this.text_describe_youWon.string = language[window.localLang].panel_record.youWon;

    },

    updateNodeDisplayByLanguage() {

        if (window.localLang == window.languageType.ARAB) {
            /** 设置layout的排列方向 */
            this.node_choseContainer.getComponent(cc.Layout).horizontalDirection = cc.Layout.HorizontalDirection.LEFT_TO_RIGHT;

        } else {
            this.node_choseContainer.getComponent(cc.Layout).horizontalDirection = cc.Layout.HorizontalDirection.RIGHT_TO_LEFT;

        }

    },


    // 设置记录
    setResultItem(node, info, viewList) {

        // Round: 1737
        // Time:1682404815
        // UID: 1272
        // Winning: 5
        // WonSet: 0
        // Chose：[]

        // console.log('[item_panel_record] setResultItem  list', info);

        this.winIndex = info.WinningHorse;

        /**设置回合 */
        this.setRound(info.Round);

        /** 设置事件 */
        this.setTimeStamp(info.Time);

        /** 设置赢的马匹 */
        this.setWinerHorse(this.winIndex, viewList);

        /** 设置玩家选择的赛马 */
        this.setPlayerChoseHorse(info.Chose, viewList);

        /** 设置赢钱的数量 */
        this.setWonNumber(info.WonSet);

        /** 设置消耗的数量 */
        this.setSpentNumber(info.Spent);

        // this.updateSelectFruitDisplay();
        // const resultList = this.composeResultData(info.Chose, info.Winning);
        // this.addResultToContainer(node, resultList);
    },

    setRound(round) {
        this.text_round.string = handleTranslate(round, language[window.localLang].panel_record.round);
    },

    setTimeStamp(time) {
        this.text_timeStamp.string = new Date(time * 1000).toLocaleString('en-US');
    },

    /** 设置胜利的马匹 */
    setWinerHorse(index, viewList) {
        this.sprite_winHorse.spriteFrame = viewList[index];
        this.sprite_winHorse.node.active = true;
    },

    /** 展示玩家的选择列表 */
    setPlayerChoseHorse(list, view) {

        this.node_choseContainer.removeAllChildren();

        for (let i = 0, len = list.length; i < len; i++) {


            const item = cc.instantiate(this.sprite_winHorse.node);
            item.getComponent(cc.Sprite).spriteFrame = view[i];
            item.parent = this.node_choseContainer;


        }
    },

    setWonNumber(number) {
        this.text_number_won.string = numberFormat(number);
    },

    setSpentNumber(num) {

        this.text_number_cost.string = numberFormat(num);

    },

    addResultToContainer(node, list) {
        if (!node || !list || list.length <= 0) {
            console.error('The param is required! Please check the params');
            return;
        }

        for (let i = 0, len = list.length; i < len; i++) {
            const item = cc.instantiate(node);
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
