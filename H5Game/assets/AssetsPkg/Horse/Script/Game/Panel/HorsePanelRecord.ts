import BasePanel from "../../../../../Framework/BasePanel";
import { MsgCmdConstant } from "../../../../../Script/DataHandler/MsgCmdConstant";
import { MsgDispatcher } from "../../../../../Script/DataHandler/MsgDispatcher";
import GameMgr from "../../../../../Script/Managers/GameMgr";
import { Logger } from "../../../../../Script/Managers/Logger";
import { NetMgr } from "../../../../../Script/Managers/NetMgr";
import { LANGUAGE_TYPE } from "../../../../../Script/Mgr/Config";
import { GuessGamePlayerRecordMsg } from "../../../../../Script/msg/GuessGamePlayerRecordMsg";
import { language } from "../Lang/horse_index";
import { HorseData } from "../Main/HorseData";
import HorseItemRecord from "../prefab/HorseItemRecord";
import ItemRecord from "../prefab/HorseItemRecord";
import resNodeCtrl from "../resNodeCtrl";

const { ccclass, property } = cc._decorator;

const PageSize = 5;

@ccclass
export default class HorsePanelRecord extends BasePanel {
    @property(cc.Prefab)
    prefab_item_record: cc.Prefab = null;

    @property(cc.Prefab)
    prefab_item_record_result: cc.Prefab = null;

    @property(cc.Node)
    record: cc.Node = null;

    @property(cc.Node)
    recordContainer: cc.Node = null;

    @property(cc.Node)
    blankNode: cc.Node = null;

    @property(resNodeCtrl)
    resNode: resNodeCtrl = null;

    public contentOrigin: cc.Vec3 = null;

    public requestEndTime: number = null;

    public pageNum: number = 1;

    public totalPage: number = 1;


    onLoad() {

        // this.init();
        this.setLayoutByLanguage();
        const lang = GameMgr.getInstance().Language == LANGUAGE_TYPE.ARAB ? LANGUAGE_TYPE.ARAB : LANGUAGE_TYPE.EN;
        this.setTitle(language[lang].panel_record.title);
        this.setInitPos();

    }

    onEnable() {
        this.pageNum = 1;
        this.record.on('scroll-to-bottom', this.onScrollViewToTop, this);
        this.record.on('scrolling', this.onScrollViewRolling, this);
        // console.log(this.record.getComponent(cc.ScrollView).content.y);
        this.contentOrigin = this.record.getComponent(cc.ScrollView).content.position;

        // this.sendPlayerRecordMsg();
        this.addSocketListener();

    }

    onDisable() {

        // this.record.off('scroll-to-top', this.onScrollViewToTop, this);
        this.record.off('scroll-to-bottom', this.onScrollViewToTop, this);
        this.record.off('scrolling', this.onScrollViewRolling, this);

    }

    onScrollViewRolling() {
        this.optimizationDrawCall();
    }


    /** 添加长链接监听 */
    addSocketListener() {
        const net = NetMgr.getInstance().getNet();
        net.addResponeHandler(MsgCmdConstant.MSG_GUESS_GAME_PLAYER_RECORD_ACK, this.guessGamePlayerRecordAck, this);
    }

    guessGamePlayerRecordAck(msgAck) {
        Logger.logModel(msgAck, '接收用户的下注记录');
        const { recordList, totalPage } = msgAck;
        this.hideLoading();


        if (recordList.length <= 0) {
            this.showBlankNode();
            return;
        }

        // return;
        this.addRestDataToContainer(recordList);
        // 跳转到当前加载的位置
        const pecent = (this.pageNum - 1) * PageSize / this.recordContainer.childrenCount;

        this.totalPage = totalPage;

        // // console.log(pecent);

        const maxOffset = this.record.getComponent(cc.ScrollView).getMaxScrollOffset();

        this.record.getComponent(cc.ScrollView).scrollToOffset(cc.v2(0, maxOffset.y * pecent));

    }

    /** 发送获取玩家记录的信息 */
    sendPlayerRecordMsg() {
        const msg = new GuessGamePlayerRecordMsg();
        msg.gameId = HorseData.getInstance().gameId;
        msg.pageNum = this.pageNum;
        msg.pageSize = PageSize;
        msg.tableId = HorseData.getInstance().tableId;
        Logger.logModel(msg, '发送获取玩家记录的信息');
        MsgDispatcher.sendMsg(msg);
    }


    /** 加载剩余的下注记录  */
    loadRestRecordData() {

    }

    /** 获取当前的最远一次的下注时间  */
    getCurrentLastBetTime() {

    }

    // 当上拉刷新
    async onScrollViewToTop() {

        if (this.pageNum == this.totalPage) {
            return;
        }

        // 表示当前正在加载中，不再重复请求
        if (this.loading && this.loading.active) {
            return;
        }
        this.showLoading();
        this.pageNum++;
        this.sendPlayerRecordMsg();

        // 请求数据
        // const data = await this.getRecordInfo(reqRest);
        // let len = 0;
        // if (!data || data.length <= 0) {
        //     this.hideLoading();
        //     return;
        // } else {
        //     this.hideLoading();
        //     this.initRocordList(data);
        //     // 缓存下一次请求数据的截至时间
        //     this.requestEndTime = data[data.length - 1].Time - 1;
        //     len = data.length;
        // }

        // 跳转到当前加载的位置
        // const pecent = (this.recordContainer.childrenCount - len) / this.recordContainer.childrenCount;

        // const scrollView = this.record.getComponent(cc.ScrollView);

        // const maxOffset = scrollView.getMaxScrollOffset();

        // scrollView.scrollToOffset(cc.v2(0, maxOffset.y * pecent));



    }

    /** 增加剩余的数据到容器中  */
    addRestDataToContainer(info) {
        if (!this.record.active) {
            this.record.active = true;
        }
        const resultNode = cc.instantiate(this.prefab_item_record_result);
        for (let i = 0, len = info.length; i < len; i++) {
            const item = cc.instantiate(this.prefab_item_record);
            const script = item.getComponent(HorseItemRecord);
            script.setResultItem(resultNode, info[i], this.resNode.horseViewList);
            item.parent = this.recordContainer;
        }
    }


    // 初始化
    async init() {
        // console.log(info);
        this.showLoading();
        this.record.active = false;
        this.sendPlayerRecordMsg();
    }

    // 初始化列表
    initRocordList(info) {
        // console.log(info, '39');
        const resultNode = cc.instantiate(this.prefab_item_record_result);
        for (let i = 0, len = info.length; i < len; i++) {
            const item = cc.instantiate(this.prefab_item_record);
            const script = item.getComponent(HorseItemRecord);
            script.setResultItem(resultNode, info[i], this.resNode.horseViewList);
            item.parent = this.recordContainer;
        }
    }


    // 显示记录
    showRecord() {
        this.showView(() => {
            // console.log('helloworld record');
            this.init();
        });
    }

    // 隐藏记录
    hideRecord() {
        this.hideView(this.resetRecordData.bind(this));
    }

    // 重置记录的数据
    resetRecordData() {
        // this.recordContainer.removeAllChildren();        

        for (let i = this.recordContainer.childrenCount; i >= 0; i--) {
            // this.recordContainer[i].distory()
            const item = this.recordContainer.children[i];
            if (item) {
                item.destroy();
            }
        }

        this.blankNode.active = false;
    }

    /** 显示空白框 */
    showBlankNode() {
        const text = this.blankNode.getChildByName("text_discribe").getComponent(cc.Label);
        const lang = GameMgr.getInstance().Language == LANGUAGE_TYPE.ARAB ? LANGUAGE_TYPE.ARAB : LANGUAGE_TYPE.EN;
        text.string = language[lang].panel_record.noRecord;
        this.blankNode.active = true;
    }


    // 优化DrawCall
    private optimizationDrawCall() {
        if (this.recordContainer.childrenCount == 0) {
            return;
        }
        let svLeftBottomPoint: cc.Vec2 = this.record.parent.convertToWorldSpaceAR(
            cc.v2(
                this.record.x - this.record.anchorX * this.record.width,
                this.record.y - this.record.anchorY * this.record.height
            )
        );
        // 求出 ScrollView 可视区域在世界坐标系中的矩形（碰撞盒）
        let svBBoxRect: cc.Rect = cc.rect(svLeftBottomPoint.x, svLeftBottomPoint.y, this.record.width, this.record.height);
        // 遍历 ScrollView Content 内容节点的子节点，对每个子节点的包围盒做和 ScrollView 可视区域包围盒做碰撞判断
        this.recordContainer.children.forEach((childNode: cc.Node, index: number) => {
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


}


