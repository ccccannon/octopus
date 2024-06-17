// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { MsgCmdConstant } from "../../../../../Script/DataHandler/MsgCmdConstant";
import { MsgDispatcher } from "../../../../../Script/DataHandler/MsgDispatcher";
import GameMgr from "../../../../../Script/Managers/GameMgr";
import { Logger } from "../../../../../Script/Managers/Logger";
import { NetMgr } from "../../../../../Script/Managers/NetMgr";
import { LANGUAGE_TYPE } from "../../../../../Script/Mgr/Config";
import { executePreFrame } from "../../../../../Script/Utils/Utils_Common";
import { GetGameRankMsg } from "../../../../../Script/msg/GetGameRankMsg";
import { language } from "../Lang/superwin_index";
import SuperWinItemRank from "../Prefab/SuperWinItemRank";
import { SuperWinData } from "../SuperWinData";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIPromptRankCtrl extends cc.Component {

    @property(cc.Prefab)
    item_rank: cc.Prefab = null;

    @property(cc.Node)
    node_scrollView: cc.Node = null;

    @property(cc.Node)
    container: cc.Node = null;

    @property(cc.Node)
    myRank: cc.Node = null;

    @property(cc.Label)
    label_title: cc.Label = null;

    @property(cc.Node)
    node_blank: cc.Node = null;

    // @property(cc.Label)

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.addSocketEventListener();
        this.addScrollviewListener();
    }

    protected onEnable(): void {
        this.sendRankMsg();
    }

    protected onDisable(): void {
        this.container.removeAllChildren();
    }

    /** 添加Scrollview的监听 */
    addScrollviewListener() {
        this.node_scrollView.on('scrolling', this.optimizationDrawCall, this);
    }


    addSocketEventListener() {
        const net = NetMgr.getInstance().getNet();
        net.addResponeHandler(MsgCmdConstant.MSG_GET_GAME_RANK_ACK, this.MsgGetGameRankAck, this);
    }

    removeSocketEventListener() {
        const net = NetMgr.getInstance().getNet();
        net.removeResponeHandler(MsgCmdConstant.MSG_GET_GAME_RANK_ACK, this.MsgGetGameRankAck, this);
    }

    /** 获取排行榜信息 */
    MsgGetGameRankAck(msgAck) {
        Logger.logBusiness(msgAck, '获取排行榜信息');
        const { rankItems, myRankItem } = msgAck;
        if (rankItems.length <= 0) {
            this.node_blank.active = true;
        } else {
            this.node_blank.active = false;
        }
        executePreFrame(this.addRestDataToContainer(rankItems), 10);
        if (myRankItem) {
            this.myRank.active = true;
            this.updateMyRank(myRankItem);
        } else {
            this.myRank.active = false;
        }
    }

    /** 发送获取排行榜信息 */
    sendRankMsg() {
        const rMsg = new GetGameRankMsg();
        rMsg.gameId = GameMgr.getInstance().GameId;
        rMsg.limit = 30;
        MsgDispatcher.sendMsg(rMsg);
        Logger.logBusiness(rMsg, '发送获取排行榜信息');
    }

    /**将数据加入到排行榜 */
    *addRestDataToContainer(info) {
        for (let i = 0, len = info.length; i < len; i++) {
            const item = cc.instantiate(this.item_rank);
            item.scale = 1;
            const script = item.getComponent(SuperWinItemRank);
            script.init(info[i]);
            item.parent = this.container;
            yield;
        }
    }

    hideView() {
        cc.systemEvent.emit('hideRank');
    }

    /** 更新我的排行榜 */
    updateMyRank(myInfo) {
        const script = this.myRank.getComponent(SuperWinItemRank);
        script.init(myInfo);
    }

    // 优化DrawCall
    private optimizationDrawCall() {
        if (this.container.childrenCount == 0) {
            return;
        }
        let svLeftBottomPoint: cc.Vec2 = this.node_scrollView.parent.convertToWorldSpaceAR(
            cc.v2(
                this.node_scrollView.x - this.node_scrollView.anchorX * this.node_scrollView.width,
                this.node_scrollView.y - this.node_scrollView.anchorY * this.node_scrollView.height
            )
        );
        // 求出 ScrollView 可视区域在世界坐标系中的矩形（碰撞盒）
        let svBBoxRect: cc.Rect = cc.rect(svLeftBottomPoint.x, svLeftBottomPoint.y, this.node_scrollView.width, this.node_scrollView.height);
        // 遍历 ScrollView Content 内容节点的子节点，对每个子节点的包围盒做和 ScrollView 可视区域包围盒做碰撞判断
        this.container.children.forEach((childNode: cc.Node, index: number) => {
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


    updateTitle() {
        const lang = GameMgr.getInstance().Language;
        if (lang == LANGUAGE_TYPE.ARAB) {
            this.label_title.string = language.ar.rank.weekList;
        } else {
            this.label_title.string = language.en.rank.weekList;
        }
    }


    start() {
        this.updateTitle();
    }

    // update (dt) {}
}
