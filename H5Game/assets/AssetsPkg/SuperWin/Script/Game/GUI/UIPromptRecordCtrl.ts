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
import { GetTablePlayerRecordMsg } from "../../../../../Script/msg/GetTablePlayerRecordMsg";
import { language } from "../Lang/superwin_index";
import SuperWinItemRecord from "../Prefab/SuperWinItemRecord";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIPromptRecordCtrl extends cc.Component {

    @property(cc.Label)
    label_title: cc.Label = null;

    @property(cc.Node)
    node_scrollView: cc.Node = null;

    @property(cc.Node)
    container: cc.Node = null;

    @property(cc.Prefab)
    item_record: cc.Prefab = null;

    @property(cc.Label)
    label_desc_result: cc.Label = null;

    @property(cc.Label)
    label_desc_fee: cc.Label = null;

    @property(cc.Label)
    label_desc_win: cc.Label = null;

    @property(cc.Label)
    label_desc_time: cc.Label = null;

    @property(cc.Node)
    node_blank: cc.Node = null;

    protected onLoad(): void {
        // this.addScrollviewListener();
        // this.addSocketEventListener();
    }


    start() {
        this.updateTitle();

    }

    /** 更新文本翻译 */
    updateTextLangDisplay() {
        const lang = GameMgr.getInstance().Language;
        if (lang === LANGUAGE_TYPE.ARAB) {
            this.label_desc_fee.string = language.ar.record.fee;
            this.label_desc_result.string = language.ar.record.result;
            this.label_desc_win.string = language.ar.record.win;
            this.label_desc_time.string = language.ar.record.time;
        } else {
            this.label_desc_fee.string = language.en.record.fee;
            this.label_desc_result.string = language.en.record.result;
            this.label_desc_win.string = language.en.record.win;
            this.label_desc_time.string = language.en.record.time;
        }
    }

    protected onEnable(): void {
        this.addScrollviewListener();
        this.addSocketEventListener();
        this.sendGetPlayerRecordMsg();
        this.updateTextLangDisplay();
    }

    protected onDisable(): void {
        this.removeScrollviewListener();
        this.removeSocketEventListener();
        this.container.removeAllChildren(true);
    }

    addSocketEventListener() {
        const net = NetMgr.getInstance().getNet();
        net.addResponeHandler(MsgCmdConstant.MSG_GET_TABLE_PLAYER_RECORD_ACK, this.MsgGetTablePlayerRecordAck, this);
    }

    removeSocketEventListener() {
        const net = NetMgr.getInstance().getNet();
        net.removeResponeHandler(MsgCmdConstant.MSG_GET_GAME_RANK_ACK, this.MsgGetTablePlayerRecordAck, this);
    }

    /** 添加Scrollview的监听 */
    addScrollviewListener() {
        this.node_scrollView.on('scrolling', this.optimizationDrawCall, this);
    }

    /** 添加Scrollview的监听 */
    removeScrollviewListener() {
        this.node_scrollView.off('scrolling', this.optimizationDrawCall, this);
    }

    /** 获取当前玩家的记录 */
    MsgGetTablePlayerRecordAck(msgAck) {
        Logger.logBusiness(msgAck, '获取当前玩家的记录');
        const { tablePlayerRecordList } = msgAck;
        if (tablePlayerRecordList.length <= 0) {
            this.node_blank.active = true;
            return;
        } else {
            this.node_blank.active = false;
        }
        executePreFrame(this.addRestDataToContainer(tablePlayerRecordList), 10);

    }

    /** 发送获取玩家记录的信息 */
    sendGetPlayerRecordMsg() {
        const rMsg = new GetTablePlayerRecordMsg();
        rMsg.gameId = GameMgr.getInstance().GameId;
        rMsg.pageNum = 1;
        rMsg.pageSize = 100;
        MsgDispatcher.sendMsg(rMsg);
        Logger.logBusiness(rMsg, ' 发送获取玩家记录的信息');
    }

    updateTitle() {
        const lang = GameMgr.getInstance().Language;
        if (lang == LANGUAGE_TYPE.ARAB) {
            this.label_title.string = language.ar.record.title;
        } else {
            this.label_title.string = language.en.record.title;
        }
    }

    hideView() {
        cc.systemEvent.emit('hideRecord');
    }


    /**将数据加入到排行榜 */
    *addRestDataToContainer(info) {
        for (let i = 0, len = info.length; i < len; i++) {
            const item = cc.instantiate(this.item_record);
            item.scale = 1;
            const script = item.getComponent(SuperWinItemRecord);
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
