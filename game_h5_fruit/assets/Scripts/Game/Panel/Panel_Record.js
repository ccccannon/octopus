// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

// import { recordList } from "../../../firstPage/script/dataMock.js";

const BasePanel = require('./BasePanel');
// import { BasePanel } from './BasePanel'

import { language } from "../Lang/index.js";
import GameData from "../MainUI/GameData.js";

// const proto = require('../../../protobuf'); 

cc.Class({
    extends: BasePanel,
    properties: {
        prefab_item_record: cc.Prefab,
        prefab_item_record_result: cc.Prefab,
        record: cc.Node,
        recordContainer: cc.Node,
        blankNode: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        // this.init();
        this.setLayoutByLanguage();
        this.setTitle(language[window.localLang || window.languageType.ARAB].panel_record.title);
        this.setInitPos();


    },

    onEnable() {

        this.record.on('scroll-to-bottom', this.onScrollViewToTop, this);
        // console.log(this.record.getComponent(cc.ScrollView).content.y);
        this.contentOrigin = this.record.getComponent(cc.ScrollView).content.position;

    },

    onDisable() {

        // this.record.off('scroll-to-top', this.onScrollViewToTop, this);
        this.record.off('scroll-to-bottom', this.onScrollViewToTop, this);

    },


    /** 加载剩余的下注记录  */
    loadRestRecordData() {


    },

    /** 获取当前的最远一次的下注时间  */
    getCurrentLastBetTime() {

    },

    // 当上拉刷新
    async onScrollViewToTop() {

        // 表示当前正在加载中，不再重复请求
        if (this.loading && this.loading.active) {
            return;
        }

        // 组装请求数据
        const reqRest = {
            "Page": 0,
            "Num": 10,
            "Start": this.requestEndTime - 24 * 60 * 60,
            "End": this.requestEndTime,
        }

        this.showLoading();
        // 请求数据
        const data = await this.getRecordInfo(reqRest);
        let len = 0;
        if (!data || data.length <= 0) {
            this.hideLoading();
            return;
        } else {
            this.hideLoading();
            this.initRocordList(data);
            // 缓存下一次请求数据的截至时间
            this.requestEndTime = data[data.length - 1].Time - 1;
            len = data.length;
        }

        // 跳转到当前加载的位置
        const pecent = (this.recordContainer.childrenCount - len) / this.recordContainer.childrenCount;

        const scrollView = this.record.getComponent(cc.ScrollView);

        const maxOffset = scrollView.getMaxScrollOffset();

        scrollView.scrollToOffset(cc.v2(0, maxOffset.y * pecent));

    },

    /** 增加剩余的数据到容器中  */
    addRestDataToContainer(info) {
        const resultNode = cc.instantiate(this.prefab_item_record_result);
        for (let i = 0, len = info.length; i < len; i++) {
            const item = cc.instantiate(this.prefab_item_record);
            const script = item.getComponent('item_panel_record');
            script.setResultItem(resultNode, info[i]);
            item.parent = this.recordContainer;
        }
    },


    // 初始化
    async init() {
        // console.log(info);
        this.showLoading();
        this.record.active = false;
        const reqData = {
            "Page": 0,
            "Num": 10,
            // "Start": 1682318940,
            // "End": 1682405340
        }
        let info = await this.getRecordInfo(reqData);
        if (!info || info.length <= 0) {
            this.hideLoading();
            this.showBlankNode();
            return;
        } else {
            this.hideLoading();
            this.initRocordList(info);
            // 缓存下一次请求数据的截至时间
            this.requestEndTime = info[info.length - 1].Time - 1;
            this.record.active = true;
        }

    },

    // 初始化列表
    initRocordList(info) {
        // console.log(info, '39');
        const resultNode = cc.instantiate(this.prefab_item_record_result);
        for (let i = 0, len = info.length; i < len; i++) {
            const item = cc.instantiate(this.prefab_item_record);
            const script = item.getComponent('item_panel_record');
            script.setResultItem(resultNode, info[i]);
            item.parent = this.recordContainer;
        }
    },

    //  获取数据
    async getRecordInfo(reqData) {

        const info = await GameData.getFruitRecordData(reqData);

        const { code, msg, data } = info;

        if (code == 0) {
            // console.log(data,'获取数据');
            // {count,list} count 表示某个时间段的下注次数，list表示请求回来的数据个数
            return data.List;
        } else {
            console.log('错误码：' + code, '错误信息： ' + msg);
            return [];
        }

    },

    // 显示记录
    showRecord() {
        this.showView(() => {
            // console.log('helloworld record');
            this.init();
        });
    },

    // 隐藏记录
    hideRecord() {
        this.hideView(this.resetRecordData.bind(this));
    },

    // 重置记录的数据
    resetRecordData() {
        this.recordContainer.removeAllChildren();
        this.blankNode.active = false;
    },

    /** 显示空白框 */
    showBlankNode() {
        const text = this.blankNode.getChildByName("text_discribe").getComponent(cc.Label);
        text.string = language[window.localLang].panel_record.noRecord;
        this.blankNode.active = true;
    },

    // update (dt) {},
});
