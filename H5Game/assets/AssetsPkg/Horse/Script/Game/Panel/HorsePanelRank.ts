import BasePanel from "../../../../../Framework/BasePanel";
import { MsgCmdConstant } from "../../../../../Script/DataHandler/MsgCmdConstant";
import { MsgDispatcher } from "../../../../../Script/DataHandler/MsgDispatcher";
import GameMgr from "../../../../../Script/Managers/GameMgr";
import { Logger } from "../../../../../Script/Managers/Logger";
import { NetMgr } from "../../../../../Script/Managers/NetMgr";
import { LANGUAGE_TYPE, GameSessionId } from "../../../../../Script/Mgr/Config";
import { GuessGamePlayerRankMsg } from "../../../../../Script/msg/GuessGamePlayerRankMsg";
import { language } from "../Lang/horse_index";
import ItemRankBoard from "../prefab/ItemRankBoard";

const { ccclass, property } = cc._decorator;
@ccclass
export default class HorsePanelRank extends BasePanel {
    @property(cc.Prefab)
    item_rank_board: cc.Prefab = null;

    @property(cc.Layout)
    container: cc.Layout = null;

    @property(cc.ScrollView)
    rankScrollview: cc.ScrollView = null;

    @property(cc.Node)
    blankNode: cc.Node = null;

    private isLastPage: boolean = false;

    private Page: number = 0;

    private Num: number = 20;

    private rankList = null;

    /** 当前展示的数据条数 */
    private showCount: number = 0;


    onLoad() {
        // this.init();

        this.setLayoutByLanguage();

        const lang = GameMgr.getInstance().Language == LANGUAGE_TYPE.ARAB ? LANGUAGE_TYPE.ARAB : LANGUAGE_TYPE.EN;

        this.setTitle(language[lang].panel_rank.title);

        // GameData.getRankData({ Page: 0, Num: 10 });

        // this.rankScrollview.node.on('scroll-to-top', this.onScrollToTop, this);
        this.rankScrollview.node.on('scroll-to-bottom', this.onScrollToBottom, this);

    }


    protected onEnable(): void {
        this.addSocketEventListener();

        // this.mockGetRankInfo();

    }

    protected start(): void {

    }

    protected onDisable(): void {
        this.removeSocketEventListener();
    }


    /** 添加长链接事件监听 */
    addSocketEventListener() {
        const net = NetMgr.getInstance().getNet();
        net.addResponeHandler(MsgCmdConstant.MSG_GUESS_GAME_PLAYER_RANK_ACK, this.guessGamePlayerRank, this);
    }


    /**移除长链接事件监听 */
    removeSocketEventListener() {
        const net = NetMgr.getInstance().getNet();
        net.removeResponeHandler(MsgCmdConstant.MSG_GUESS_GAME_PLAYER_RANK_ACK, this.guessGamePlayerRank, this);
    }



    /** 发送获取排行榜的信息 */
    sendGamePlayerRankMsg() {
        const msg = new GuessGamePlayerRankMsg();
        msg.gameId = GameSessionId.Horse;
        Logger.logModel(msg, '发送获取排行榜的信息');
        MsgDispatcher.sendMsg(msg);
    }


    guessGamePlayerRank(msgAck) {
        Logger.logModel(msgAck, '返回的排行榜数据');

        const { rankItems } = msgAck;
        
        this.rankList = rankItems;

        /** 隐藏加载框 */
        this.hideLoading();

        if (this.rankList.length <= 0) {
            /** 显示空白提示 */
            this.showBlankNode();
        }

        const top20 = this.rankList.slice(this.Page * this.Num, this.Num);

        // this.showCount = 8;
        this.Page += 1;

        this.initRankList(top20);
    }


    onScrollToBottom() {


        if (this.isLastPage) {
            return;
        }
        this.showLoading();

        setTimeout(() => {
            this.loadRestData();
            this.hideLoading();
        }, 1000)

    }


    loadRestData() {

        /** 如果数据长度跟子节点数量相等，表示展示完毕 */
        if (this.rankList.length == this.container.node.childrenCount) {
            this.isLastPage = true;
            return;
        }

        console.log(this.rankList.length, this.container.node.childrenCount);

        console.log(this.Page * this.Num, this.Num);

        const tempList = this.rankList.slice(this.Page * this.Num, (this.Page + 1) * this.Num);
        this.Page += 1;

        Logger.logModel(tempList, 'loadRestData');

        this.addRestDataToContainer(tempList);

        // this.showLoading();
        // this.Page += 1;
        // const rankInfo = { Page: this.Page, Num: 20 };
        // let data = await this.getRankInfo(rankInfo);
        // console.log(data, ' let data = await this.getRankInfo(rankInfo);')
        // this.hideLoading();
        // if (!data || data.length <= 0) {
        //     this.isLastPage = true;
        //     return;
        // }

        // /**当数据小于20时，说明已经是最后的数据 */
        // if (data.length < 20) {
        //     this.isLastPage = true;
        // }

        // 将剩余的排行榜数据加入到排行榜中
        // this.addRestDataToContainer(data);

        // 跳转到当前加载的位置
        const pecent = (this.Page - 1) * this.Num / this.container.node.childrenCount;

        // // console.log(pecent);

        const maxOffset = this.rankScrollview.getMaxScrollOffset();

        this.rankScrollview.scrollToOffset(cc.v2(0, maxOffset.y * pecent));

    }

    addRestDataToContainer(info) {
        for (let i = 0, len = info.length; i < len; i++) {
            const item = cc.instantiate(this.item_rank_board);
            item.scale = 0.9;
            const script = item.getComponent(ItemRankBoard);
            script.init(info[i]);
            item.parent = this.container.node;
        }
    }


    /** 初始化排行榜列表 */
    initRankList(info) {
        // console.log(info);
        this.container.node.removeAllChildren();
        this.addRestDataToContainer(info);
        // for (let i = 0, len = info.length; i < len; i++) {
        //     const item = cc.instantiate(this.item_rank_board);
        //     const script = item.getComponent('item_rank_borad');
        //     script.init(info[i]);
        //     item.parent = this.container.node;
        // }

    }

    mockGetRankInfo() {

        /** 显示加载进度条 */
        this.showLoading();

        /** 隐藏空白展示 */
        this.blankNode.active = false;

        setTimeout(() => {
            this.guessGamePlayerRank('mock_返回的排行榜数据');
        }, 2000);
    }

    // 获取排行榜信息
    async getRankInfo(rankInfo) {

        // { Page: 0, Num: 10 }

        // console.log(rankInfo,'  console.log(this.rankInfo);');

        // const rankData = await GameData.getRankData(rankInfo);

        // // console.log(rankData,'  const rankData = await GameData.getRankData(rankInfo);');


        // const { code, data, msg } = rankData;
        // // debugger


        // // console.log(rankData.data);

        // // console.log(rankData);

        // //  正常
        // if (code === 0) {
        //     return data.List;
        // } else {
        //     console.log('错误信息:', msg);
        //     console.log('错误code:', code);
        //     return [];
        // }
    }

    init() {
        this.showLoading();
        this.sendGamePlayerRankMsg();
    }

    showRank() {
        this.showView(
            this.init.bind(this)
        );
    }

    hideRank() {
        this.hideView(this.resetRankData.bind(this));
    }


    /** 显示空白框 */
    showBlankNode() {
        const text = this.blankNode.getChildByName("text_discribe").getComponent(cc.Label);
        const lang = GameMgr.getInstance().Language == LANGUAGE_TYPE.ARAB ? LANGUAGE_TYPE.ARAB : LANGUAGE_TYPE.EN;
        text.string = language[lang].panel_rank.noRecord;
        this.blankNode.active = true;
    }

    resetRankData() {
        this.Page = 0;
        this.Num = 20;
        this.isLastPage = false;
        this.container.node.removeAllChildren();
        this.blankNode.active = false;
    }

}

