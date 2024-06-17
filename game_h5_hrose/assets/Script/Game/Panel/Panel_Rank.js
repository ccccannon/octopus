

const BasePanel = require('./BasePanel');
import { language } from '../Lang/index';
import GameData from '../Main/GameData';

cc.Class({
    extends: BasePanel,

    properties: {
        item_rank_board: cc.Prefab,
        container: cc.Layout,
        rankScrollview: cc.ScrollView,
        blankNode: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // this.init();

        this.setLayoutByLanguage();

        this.setTitle(language[window.localLang || window.languageType.ARAB].panel_rank.title);

        // GameData.getRankData({ Page: 0, Num: 10 });

        // this.rankScrollview.node.on('scroll-to-top', this.onScrollToTop, this);
        this.rankScrollview.node.on('scroll-to-bottom', this.onScrollToTop, this);

    },


    onScrollToTop() {
        this.loadRestData();
    },


    async loadRestData() {
        if (this.isLastPage || (this.loading && this.loading.active)) {
            // console.log('已经是最后一行数据了', pecent);
            return;
        }
        this.showLoading();
        this.Page += 1;
        const rankInfo = { Page: this.Page, Num: 20 };
        let data = await this.getRankInfo(rankInfo);
        // console.log(data, ' let data = await this.getRankInfo(rankInfo);')
        this.hideLoading();
        if (!data || data.length <= 0) {
            this.isLastPage = true;
            return;
        }

        /**当数据小于20时，说明已经是最后的数据 */
        if (data.length < 20) {
            this.isLastPage = true;
        }

        // 将剩余的排行榜数据加入到排行榜中
        this.addRestDataToContainer(data);

        // 跳转到当前加载的位置
        const pecent = 20 + (this.Page - 1) * 20 / this.container.node.childrenCount;

        // console.log(pecent);

        const maxOffset = this.rankScrollview.getMaxScrollOffset();

        this.rankScrollview.scrollToOffset(cc.v2(0, maxOffset.y * pecent));

    },

    addRestDataToContainer(info) {
        for (let i = 0, len = info.length; i < len; i++) {
            const item = cc.instantiate(this.item_rank_board);
            const script = item.getComponent('item_rank_borad');
            script.init(info[i]);
            item.parent = this.container.node;
        }
    },


    /** 初始化排行榜列表 */
    initRankList(info) {
        // console.log(info);
        this.container.node.removeAllChildren();
        for (let i = 0, len = info.length; i < len; i++) {
            const item = cc.instantiate(this.item_rank_board);
            const script = item.getComponent('item_rank_borad');
            script.init(info[i]);
            item.parent = this.container.node;
        }

    },

    async init() {
        this.Page = 0;
        this.Num = 20;
        this.showLoading();
        const rankInfo = { Page: this.Page, Num: this.Num };
        let rankList = await this.getRankInfo(rankInfo);
        // console.log('Panel_rank init', rankList);
        if (!rankList || rankList.length <= 0) {
            // console.log('没有展示信息');
            // 隐藏加载圈圈
            this.hideLoading();
            //显示为空的展示
            this.showBlankNode();
            return;
        } else {
            if (rankList.length < 20) {
                this.isLastPage = true;
            }
        }

        this.initRankList(rankList);
        this.hideLoading();
    },

    // 获取排行榜信息
    async getRankInfo(rankInfo) {

        // { Page: 0, Num: 10 }

        // console.log(rankInfo,'  console.log(this.rankInfo);');

        const rankData = await GameData.getRankData(rankInfo);

        // console.log(rankData,'  const rankData = await GameData.getRankData(rankInfo);');


        const { code, data, msg } = rankData;
        // debugger


        // console.log(rankData.data);

        // console.log(rankData);

        //  正常
        if (code === 0) {
            return data.List;
        } else {
            // console.log('错误信息:', msg);
            // console.log('错误code:', code);
            return [];
        }
    },

    showRank() {
        this.showView(
            this.init.bind(this)
        );
    },

    hideRank() {
        this.hideView(this.resetRankData.bind(this));
    },


    /** 显示空白框 */
    showBlankNode() {
        const text = this.blankNode.getChildByName("text_discribe").getComponent(cc.Label);
        text.string = language[window.localLang].panel_rank.noRecord;
        this.blankNode.active = true;
    },

    resetRankData() {
        this.Page = 0;
        this.Num = 20;
        this.isLastPage = false;
        this.container.node.removeAllChildren();
        this.blankNode.active = false;
    },

    start() {

    },

    // update (dt) {},
});
