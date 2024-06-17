// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { MsgCmdConstant } from "../../DataHandler/MsgCmdConstant";
import { MsgDispatcher } from "../../DataHandler/MsgDispatcher";
import { GameDataManager } from "../../Managers/GameDataManager";
import { Logger } from "../../Managers/Logger";
import { NetMgr } from "../../Managers/NetMgr";
import { GetYLGYGameRankMsg } from "../../msg/GetYLGYGameRankMsg";
import { GameId } from "../Config";
import { ItemType, LANGUAGE_TYPE } from "../Constant";
import { language } from "../Language/index";

const { ccclass, property } = cc._decorator;

const selectPos = [
    cc.v3(-233, 5, 0),
    cc.v3(0, 5, 0),
    cc.v3(233, 5, 0),
]

const selectPosReserve = [
    cc.v3(233, 5, 0),
    cc.v3(0, 5, 0),
    cc.v3(-233, 5, 0),
]

const toggleColor = [
    cc.color(254, 255, 242),
    cc.color(0, 51, 12),
]

@ccclass
export default class Index_RankCtrl extends cc.Component {

    public btnPosList: Array<cc.Vec3> = [];

    public btnTextList = [];

    public describeList = [];

    public fadeConst = 1;

    public ItemNodePool: cc.NodePool = null;

    // 当前的排行榜类型
    public currentType: number = null;

    // 当前页
    public currentPage: number = null;

    // 总页数
    public totalPage: number = null;


    @property(cc.Label)
    text_rank_title: cc.Label = null;

    @property(cc.Node)
    node_selectBg: cc.Node = null;


    @property([cc.Node])
    nodeToggleList: Array<cc.Node> = [];

    @property(cc.Label)
    text_rank_describe_en: cc.Label = null;

    @property(cc.Label)
    text_rank_describe_ar: cc.Label = null;

    @property(cc.Prefab)
    prefab_rank_item: cc.Prefab = null;

    @property(cc.Node)
    node_myRank: cc.Node = null;

    @property(cc.ScrollView)
    scrollview: cc.ScrollView = null;

    @property(cc.Node)
    scrollviewContainer: cc.Node = null;

    // @property(cc.Node)
    // node_friend: cc.Node = null;


    // @property(cc.Node)
    // node_room: cc.Node = null;


    // @property(cc.Node)
    // node_country: cc.Node = null;


    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.updateFadeConstByLanguage();
        this.initRankTitle();
        this.initShowDescribeText();
        this.initBtnPos();
        this.initBtnText();
        this.onToggleBtnClick(null, 0);
    }


    /** 初始化item节点 */
    initItemNodePool() {
        if (!this.ItemNodePool) {
            this.ItemNodePool = new cc.NodePool();
        };

        for (let i = 0; i < 10; i++) {
            const item = cc.instantiate(this.prefab_rank_item);
            this.ItemNodePool.put(item);
        }

    }


    /** 获取item实例 */
    getRankItemInstance() {
        let instance;
        if (this.ItemNodePool.size() > 0) {
            instance = this.ItemNodePool.get();
            // 处理item被设置成透明的问题。
            instance.opacity = 255;
        } else {
            instance = cc.instantiate(this.prefab_rank_item);
        }
        return instance;
    }


    protected onEnable(): void {
        this.addSocketListener();
        this.initItemNodePool();
        this.addScrollviewListener();
    }

    protected onDisable(): void {
        this.removeSocketListener();
        // 关闭界面后，清空节点
        this.ItemNodePool.clear();
        // 移除滚动栏的监听
        this.removeScrollviewListener();
    }

    protected start(): void {
        // this.sendRankInfoMsg(1, 10, 0);
    }

    /**  根据语言更新常量 */
    updateFadeConstByLanguage() {
        if (GameDataManager.getInstance().Language == LANGUAGE_TYPE.EN) {
            this.fadeConst = -1;
        } else {
            this.fadeConst = 1;
        }
    }

    /**添加长连接监听  */
    addSocketListener() {
        const net = NetMgr.getInstance().getNet();
        net.addResponeHandler(MsgCmdConstant.MSG_GET_YLGY_GAME_RANK_ACK, this.updateRankInfo, this);
    }

    /** 移除长链接监听 */
    removeSocketListener() {
        const net = NetMgr.getInstance().getNet();
        net.removeResponeHandler(MsgCmdConstant.MSG_GET_YLGY_GAME_RANK_ACK, this.updateRankInfo, this);
    }

    /** 添加Scrollview的监听 */
    addScrollviewListener() {
        this.scrollview.node.on('scroll-to-bottom', this.onScrollToEnd, this)
        this.scrollview.node.on('scrolling', this.onScrollViewRolling, this);
    }

    /** 移除Scrollview的监听 */
    removeScrollviewListener() {
        this.scrollview.node.off('scroll-to-bottom', this.onScrollToEnd, this)
    }

    /** 滑倒底部 */
    onScrollToEnd() {
        // console.log('滑倒底部');
        /** 如果当前页跟总页数一致 表示已经是最后一页  */
        if (this.currentPage == this.totalPage) {
            // console.log('已经是最后一页');
            return;
        }
        this.sendRankInfoMsg(this.currentPage + 1, 10, this.currentType);

    }


    onScrollViewRolling() {
        this.optimizationDrawCall();
    }


    /** 更新排行榜信息 */
    updateRankInfo(msgAck) {

        const { YLGYRankItemList, myYLGYRankItem, rankType, pageNum, totalPage } = msgAck;

        // console.log(msgAck, rankType, '更新排行榜信息');

        // Logger.logBusiness('排行榜信息',msgAck);

        /** 缓存当前页数和总页数 */
        this.currentPage = pageNum;
        this.totalPage = totalPage;

        if (pageNum == 1) {

            if (YLGYRankItemList.length <= 0) {

                const list = this.getMockRankItemList();
                this.initRankBoard(list, rankType);
                this.initMyRankBoard(myYLGYRankItem, rankType);

            } else {
                this.initRankBoard(YLGYRankItemList, rankType);
                this.initMyRankBoard(myYLGYRankItem, rankType);
            }

        } else {
            this.addRestDataToContainer(YLGYRankItemList, rankType);
            if (YLGYRankItemList.length > 0) {
                this.jumpToFreshData();
            }

        }

    }


    /** 获取列表假数据   */
    getMockRankItemList() {
        let list = [];
        const name = language[GameDataManager.getInstance().Language].wait;
        for (let i = 1; i < 4; i++) {
            const item = {
                rankNo: i,
                winning: 0,
                name: name,
                avatar: '',
                id: dcodeIO.Long.ZERO
            }
            list.push(item);
        }
        return list;
    }

    /** 获取我的假数据 */
    getMockMyItem() {
        // const name = language[GameDataManager.getInstance().Language]
        // const item = {
        //     rankNo: '-',
        //     winning:0,
        // }
    }

    /** 发送排行榜信息 */
    sendRankInfoMsg(num = 1, size = 10, rankType = 0) {
        // console.log('发送排行榜信息', num, size, rankType);
        const msg = new GetYLGYGameRankMsg();
        msg.tableId = GameDataManager.getInstance().TableId;
        msg.gameId = GameId;
        msg.pageNum = num;
        msg.pageSize = 10;
        msg.rankType = rankType;
        MsgDispatcher.sendMsg(msg);

    }


    /** 点击按钮切换 */
    onToggleBtnClick(event, id) {

        cc.tween(this.node_selectBg).to(0.3, { position: this.btnPosList[id] }, { easing: 'sineIn' }).start();
        id = parseInt(id);
        this.currentType = id;

        this.nodeToggleList.map((item, index) => {
            if (index == id) {
                item.color = toggleColor[0];
            } else {
                item.color = toggleColor[1];
            }
        })

        this.updateRankDescribeText(id);

        this.node_myRank.active = false;

        // 移除排行榜中的数据
        this.recycleItem();

        // 根据不同的id返回不同的数据
        this.sendRankInfoMsg(1, 10, id);



    }

    /**初始化按钮位置 */
    initBtnPos() {

        if (GameDataManager.getInstance().Language == LANGUAGE_TYPE.EN) {
            this.btnPosList = selectPos;
        } else {
            this.btnPosList = selectPosReserve;
        }
        this.nodeToggleList.map((item, index) => {
            item.position = this.btnPosList[index];
        })
    }

    /** 初始化按钮的文字 */
    initBtnText() {
        if (GameDataManager.getInstance().Language == LANGUAGE_TYPE.EN) {
            this.btnTextList = [language.en.rank.friend, language.en.rank.room, language.en.rank.country];
            this.describeList = [language.en.rank.describe.friend, language.en.rank.describe.room, language.en.rank.describe.country];
        } else {
            this.btnTextList = [language.ar.rank.friend, language.ar.rank.room, language.ar.rank.country];
            this.describeList = [language.ar.rank.describe.friend, language.ar.rank.describe.room, language.ar.rank.describe.country];
        }
        this.nodeToggleList.map((item, index) => {
            item.getComponent(cc.Label).string = this.btnTextList[index];
        })

    }


    /** 更新界面标题展示 */
    initRankTitle() {
        let strTitle;
        if (GameDataManager.getInstance().Language == LANGUAGE_TYPE.EN) {
            strTitle = language.en.rank.title;
        } else {
            strTitle = language.ar.rank.title;
        }
        this.text_rank_title.string = strTitle;
    }


    /** 显示介绍文案 */
    initShowDescribeText() {
        if (GameDataManager.getInstance().Language == LANGUAGE_TYPE.EN) {
            this.text_rank_describe_ar.node.active = false;
            this.text_rank_describe_en.node.active = true;
        } else {
            this.text_rank_describe_ar.node.active = true;
            this.text_rank_describe_en.node.active = false;
        }
    }

    /** 更新排行榜界面的排行介绍 */
    updateRankDescribeText(id) {
        if (GameDataManager.getInstance().Language == LANGUAGE_TYPE.EN) {
            this.text_rank_describe_en.string = this.describeList[id];
        } else {
            this.text_rank_describe_ar.string = this.describeList[id];
        }
    }


    /** 排行榜隐藏 */
    onRankPromptHide() {
        // cc.tween(this.node).to(0.5, { position: cc.v3(this.fadeConst * (cc.view.getVisibleSizeInPixel().width + this.node.width) / 2, 0, 0) }, { easing: 'sineOut' }).call(() => {
        this.node.active = false;
        // }).start();
    }

    /** 打开排行榜 */
    onRankPromptShow() {
        this.node.active = true;
        // this.node.position = cc.v3(this.fadeConst * (cc.view.getVisibleSizeInPixel().width + this.node.width) / 2, 0, 0);
        this.node.position = cc.v3(0, 0, 0);
        // cc.tween(this.node).to(0.5, { position: cc.v3(0, 0, 0) }, { easing: 'sineOut' }).start();

    }

    /** 排行榜的退出 */

    /** 初始化排行榜 */
    initRankBoard(list, type = ItemType.Friend) {
        // this.scrollviewContainer.removeAllChildren();

        for (let i = 0; i < list.length; i++) {
            const item = this.getRankItemInstance();
            item.parent = this.scrollviewContainer;
            // console.log(item);
            item.getComponent('prefab_rank_item_ctrl').initRankItem(list[i], type);
        }
        // for (let i = 0; i < 20; i++) {
        //     const item = this.getRankItemInstance();
        //     item.parent = this.scrollviewContainer;
        //     item.getComponent('prefab_rank_item_ctrl').initRankItem(list[0], type);
        // }
        this.scrollview.scrollToTop(0.5);

    }

    /** 更新我的排名信息 */
    initMyRankBoard(info, type = ItemType.Friend) {

        if (!info) {
            this.node_myRank.active = false;
            return;
        } else {
            this.node_myRank.removeAllChildren();
            this.node_myRank.active = true;
        }
        const item = this.getRankItemInstance();
        item.getComponent('prefab_rank_item_ctrl').initRankItem(info, type);
        item.parent = this.node_myRank;
        item.position = cc.v3(0, 40, 0);
        // const script = item.children[1].getComponent("prefab_avatar_ctrl");
        // console.log(script.avatarSize);
    }

    /** 回收节点 */
    recycleItem() {
        for (let i = this.scrollviewContainer.childrenCount - 1; i >= 0; i--) {
            const item = this.scrollviewContainer.children[i];
            this.ItemNodePool.put(item);
        }
    }

    /**加载新的数据 */
    addRestDataToContainer(info, type) {
        for (let i = 0, len = info.length; i < len; i++) {
            const item = this.getRankItemInstance();
            const script = item.getComponent('prefab_rank_item_ctrl');
            script.initRankItem(info[i], type);
            item.parent = this.scrollviewContainer;
        }
    }

    /** 跳转到新拉取的数据 */
    jumpToFreshData() {

        const localeIndex = this.currentPage - 1 > 0 ? (this.currentPage - 1) * 10 : 10;
        // const localeIndex = Math.floor(Math.random() * 20);
        // console.log(localeIndex);
        // 计算需要移动到的位置
        const posY = this.scrollviewContainer.children[localeIndex].y;
        const height = this.scrollviewContainer.children[localeIndex].height;
        // console.log(posY);
        this.scrollview.scrollToOffset(cc.v2(0, -(posY + height / 2)), 2);

    }

    // 优化DrawCall
    private optimizationDrawCall() {
        if (this.scrollviewContainer.childrenCount == 0) {
            return;
        }
        let svLeftBottomPoint: cc.Vec2 = this.scrollview.node.parent.convertToWorldSpaceAR(
            cc.v2(
                this.scrollview.node.x - this.scrollview.node.anchorX * this.scrollview.node.width,
                this.scrollview.node.y - this.scrollview.node.anchorY * this.scrollview.node.height
            )
        );
        // 求出 ScrollView 可视区域在世界坐标系中的矩形（碰撞盒）
        let svBBoxRect: cc.Rect = cc.rect(svLeftBottomPoint.x, svLeftBottomPoint.y, this.scrollview.node.width, this.scrollview.node.height);
        // 遍历 ScrollView Content 内容节点的子节点，对每个子节点的包围盒做和 ScrollView 可视区域包围盒做碰撞判断
        this.scrollviewContainer.children.forEach((childNode: cc.Node, index: number) => {
            // 如果相交了，那么就显示，否则就隐藏
            let childNodeBBox = childNode.getBoundingBoxToWorld();
            if (childNode.active) {
                if (childNodeBBox.intersects(svBBoxRect)) {
                    if (childNode.opacity === 0) {
                        childNode.opacity = 255;
                    }
                } else {
                    if (childNode.opacity !== 0) {
                        childNode.opacity = 0;
                    }
                }

            }
        });
    }


    // update (dt) {}
}
