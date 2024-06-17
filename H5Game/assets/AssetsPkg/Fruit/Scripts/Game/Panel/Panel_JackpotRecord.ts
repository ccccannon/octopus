// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import BasePanel from "../../../../../Framework/BasePanel";
import { MsgCmdConstant } from "../../../../../Script/DataHandler/MsgCmdConstant";
import { MsgDispatcher } from "../../../../../Script/DataHandler/MsgDispatcher";
import GameMgr from "../../../../../Script/Managers/GameMgr";
import { Logger } from "../../../../../Script/Managers/Logger";
import { NetMgr } from "../../../../../Script/Managers/NetMgr";
import { GameSessionId, LANGUAGE_TYPE } from "../../../../../Script/Mgr/Config";
import { executePreFrame } from "../../../../../Script/Utils/Utils_Common";
import { GetTableRoundRecordMsg } from "../../../../../Script/msg/GetTableRoundRecordMsg";
import { language } from "../Lang/index";
import item_record_jackpot from "../prefab/item_record_jackpot";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Panel_JackpotRecord extends BasePanel {

    @property(cc.Prefab)
    jackpotRecord: cc.Prefab = null;

    @property(cc.Node)
    container: cc.Node = null;

    @property(cc.Node)
    node_scrollView: cc.Node = null;

    @property(cc.Node)
    node_blank: cc.Node = null;

    onLoad(): void {
        const lang = GameMgr.getInstance().Language == LANGUAGE_TYPE.ARAB ? LANGUAGE_TYPE.ARAB : LANGUAGE_TYPE.EN;
        this.setTitle(language[lang].jackpot.title);
    }

    protected onEnable(): void {
        this.addSocketEventListener();
        this.addScrollviewListener();
        this.container.removeAllChildren();
    }

    protected onDisable(): void {
        this.removeSocketEventListener();
        this.removeScrollviewListener();
        this.container.removeAllChildren();
    }


    start() {

        // this.scheduleOnce(this.sendGetJackpotRecordMsg, 3);

    }


    /** 添加Scrollview的监听 */
    addScrollviewListener() {
        this.node_scrollView.on('scrolling', this.optimizationDrawCall, this);
    }


    /** 添加Scrollview的监听 */
    removeScrollviewListener() {
        this.node_scrollView.off('scrolling', this.optimizationDrawCall, this);
    }


    addSocketEventListener() {
        const net = NetMgr.getInstance().getNet();
        net.addResponeHandler(MsgCmdConstant.MSG_GET_TABLE_ROUND_ACK, this.msgGetTableRoundAck, this);
    }

    removeSocketEventListener() {
        const net = NetMgr.getInstance().getNet();
        net.removeResponeHandler(MsgCmdConstant.MSG_GET_TABLE_ROUND_ACK, this.msgGetTableRoundAck, this);
    }

    /** 发送获取jackpot的信息 */
    sendGetJackpotRecordMsg() {
        const jpMsg = new GetTableRoundRecordMsg();
        jpMsg.gameId = GameSessionId.Fruit;
        MsgDispatcher.sendMsg(jpMsg);
        Logger.logBusiness(jpMsg, '发送获取jackpot的信息');
        this.showLoading();
    }

    /** 获取记录 */
    msgGetTableRoundAck(msgAck) {
        Logger.logBusiness(msgAck, '获取jackpot记录');
        const { tableRoundRecordList } = msgAck;
        this.hideLoading();
        const list = this.filterRecordList(tableRoundRecordList);
        if (list.length <= 0) {
            this.showBlankNode();
            return;
        } else {
            // this.showBlankNode();
            // return;
            this.node_blank.active = false;
        }
        Logger.logBusiness(list, '被筛选过的数组列表');
        executePreFrame(this.addDataToContainer(list), 10);

    }


    /** 筛选出有玩家胜利的记录 */
    filterRecordList(list) {
        // debugger
        let tempList = []
        for (let i = 0, len = list.length; i < len; i++) {
            const item = list[i];
            if (item.jackPotInfo && item.jackPotInfo.length > 5) {
                tempList.push(item);
            }
        }
        return tempList;
    }

    /** 显示jackpot记录 */
    showJackpotRecord() {
        this.showView(this.sendGetJackpotRecordMsg.bind(this))
    }

    /** 隐藏jackpot记录 */
    hideJackpotRecord() {
        Logger.logBusiness('隐藏jackpot记录');
        this.hideView(() => { })
    }

    showBlankNode() {
        const text = this.node_blank.getChildByName("text_discribe").getComponent(cc.Label);
        const lang = GameMgr.getInstance().Language == LANGUAGE_TYPE.ARAB ? LANGUAGE_TYPE.ARAB : LANGUAGE_TYPE.EN;
        text.string = language[lang].panel_rank.noRecord;
        this.node_blank.active = true;
    }


    /**将数据加入到排行榜 */
    *addDataToContainer(info) {
        for (let i = 0, len = info.length; i < len; i++) {
            const item = cc.instantiate(this.jackpotRecord);
            const script = item.getComponent(item_record_jackpot);
            script.init(info[i]);
            item.parent = this.container;
            yield;
        }
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

    // update (dt) {}
}
