
import { Logger } from "./Logger";
import { WebSock } from "../Network/WebSock";
import { GameNetNode, NetGameTips } from "../DataHandler/GameNetNode";
import { GameProtocol } from "../DataHandler/GameProtocol";
import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { MsgDispatcher } from "../DataHandler/MsgDispatcher";
import { NetData, IRequestProtocol, CallbackObject } from "../Network/NetInterface";
import { NetNode, NetConnectOptions } from "../Network/NetNode";
import { ClientHeartMsgAck } from "../msg/ClientHeartMsgAck";
import { ClientLinkMsgAck } from "../msg/ClientLinkMsgAck";
import { LoginMsg } from "../msg/LoginMsg";
import { TestPlayerInfoList, platformType } from "../Mgr/Config";
// import { LoginMsgAck } from "../msg/LoginMsgAck";
// import { SnakeDataMgr } from "./SnakeDataMgr";
import { IntoGameHallMsg } from "../msg/IntoGameHallMsg";
import { LoginMsgAck } from "../msg/LoginMsgAck";
import GameMgr from "./GameMgr";
import { evokeNativeChargePage } from "../Utils/App_connect";
import { showTips } from "../Utils/utils_common";

// import { evokeNativeChargePage } from "../../AssetsPkg/Snake/Game/Utils/App_connect";
// import { showTips } from "../Utils/utils_common";
// import { evokeNativeChargePage } from "../Utils/App_connect";
// import { IntoGameHallMsg } from "../msg/IntoGameHallMsg";
// import SoundManager from "./SoundManager";


/*
 * 网络节点管理类
 */
export class NetMgr {

    private static _instance: NetMgr;

    public testText: string = 'hahah';

    public static getInstance(): NetMgr {
        if (!this._instance) {
            this._instance = new NetMgr();
        }
        return this._instance;
    }

    protected _channels: { [key: number]: NetNode } = {};
    protected _keepAliveTimer: any = null;


    public init() {

        var net = new GameNetNode();
        var ws = new WebSock();        // WebSocket 网络连接对象
        var gp = new GameProtocol();   // 网络通讯协议对象
        var gt = new NetGameTips()     // 网络提示对象
        net.init(ws, gp, gt);

        this.setNetNode(net);

        MsgCmdConstant.registerAllMsgAck(); // 注册所有返回消息

        //@ts-ignore
        net._autoReconnect = 10;

        // 监听心跳
        net.addResponeHandler(MsgCmdConstant.MSG_GATE_CLIENT_HEART_ACK, this.onClientHeartMsgAck, this); // 监听心跳
        net.addResponeHandler(MsgCmdConstant.MSG_GATE_CLIENT_LINK_ACK, this.onClinetLinkAck, this); // 监听校验

        net.addResponeHandler(MsgCmdConstant.MSG_SHOW_TIP_MSG_ACK, this.onClientShowTips, this);

        // 监听登录消息
        net.addResponeHandler(MsgCmdConstant.MSG_GAME_LOGIN_ACK, this.onClientLoginAck, this);

        // 监听顶号消息
        net.addResponeHandler(MsgCmdConstant.MSG_GAME_OTHER_LOGIN_ACK, this.onOtherLoginAck, this);



        // gt.reconnectTips(true);



    }

    /**  */
    onIntoSnakeGameHall(msgAck) {
        // console.log(msgAck, '1111111111111111111');

    }

    onClientShowTips(msgAck) {
        Logger.logModel(msgAck, 'toast返回信息');
        const { tip, tipId } = msgAck;
        // // GameDataManager.getInstance().showTipsText(tip, tipId);
        // // console.log(cc.director.getScene());
        // if (tipId) {
        //     showTips(tipId);
        //     // 当金币不足时，调起充值界面
        if (tipId === 'lab_server_10802') {
            setTimeout(() => {
                evokeNativeChargePage();
            }, 500);
        } else {
            showTips(tipId);
        }
        // }
    }

    onClientLoginAck(msgAck: LoginMsgAck) {
        const { player } = msgAck
        // GameDataManager.getInstance().Player = player;

        // const {} = msgAck;

        // showTips('lab_client_1005');

        Logger.logNet(JSON.stringify(msgAck), '收到登录');

        // console.log(player);
        Logger.logModel(player, '用户信息');

        GameMgr.getInstance().Player = player;
        // console.log(GameMgr.getInstance());

        // 告知Ui层 桌子被销毁
        if (!player.tableList || player.tableList.length <= 0) {
            // 通知UI层将玩家踢出房间
            cc.systemEvent.emit('GameTabelDestroy');
        }

        // 登录大厅
        // this.loginGameHall();

        // @ts-ignore
        cc.game.isGameLogin = true;


    }

    /** 顶号消息 */
    onOtherLoginAck() {
        this.getNet().rejectReconnect();
        this.getNet().close(1000, 'other login');
        // SoundManager.getInstance().stopAllSound();
        cc.audioEngine.stopAll();
    }


    /** 登录游戏大厅 */
    loginGameHall() {
        const intoGameHall = new IntoGameHallMsg();
        const gm = GameMgr.getInstance();
        intoGameHall.userId = dcodeIO.Long.fromNumber(gm.UserId);
        intoGameHall.gameId = gm.GameId;
        // console.log('登录游戏大厅', gm.UserId, gm.GameId);
        MsgDispatcher.sendMsg(intoGameHall);
    }



    public onClinetLinkAck(msgAck: ClientLinkMsgAck) {
        if (msgAck.result == 0) {
            // 服务器连接成功。
            Logger.logNet(` 服务器链接校验成功,发送登录消息..`);
            const net = this.getNet();

            // @ts-ignore
            net.resetHearbeatTimer();

            // console.log(net);
            // 发送登录消息
            const loginMsg = new LoginMsg();

            // userid: 123456
            // token: token123456

            // GameDataManager
            const gm = GameMgr.getInstance();

            Logger.logModel(gm, '游戏数据')

            loginMsg.userId = dcodeIO.Long.fromNumber(gm.UserId);
            loginMsg.platformType = platformType;
            loginMsg.platformUid = gm.Token;
            loginMsg.reconnect = gm.Player != null;
            loginMsg.gameId = gm.GameId;

            // let loginMsg = GloabMgr.loginMsg;
            // loginMsg.reconnect = !GloabMgr.isFristLogin;
            MsgDispatcher.sendMsg(loginMsg);
        }
        Logger.logNet(msgAck);

    }

    public onClientHeartMsgAck(msgAck: ClientHeartMsgAck) {
        Logger.logNet(` 收到心跳返回..`);
        // oops.timer.setServerTime(msgAck.serverTime.toNumber());
    }


    /** 添加Node，返回ChannelID */
    public setNetNode(newNode: NetNode, channelId: number = 0) {
        this._channels[channelId] = newNode;
    }

    /** 移除Node */
    public removeNetNode(channelId: number) {
        delete this._channels[channelId];
    }

    /** 调用Node连接 */
    public connect(options: NetConnectOptions, channelId: number = 0): boolean {
        if (this._channels[channelId]) {
            return this._channels[channelId].connect(options);
        }
        return false;
    }

    /** 调用Node发送 */
    public send(buf: NetData, force: boolean = false, channelId: number = 0): number {
        let node = this._channels[channelId];
        if (node) {
            return node!.send(buf, force);
        }
        return -1;
    }


    /** 发起请求，并在在结果返回时调用指定好的回调函数 */
    public request(reqProtocol: IRequestProtocol, rspObject: CallbackObject, showTips: boolean = true, force: boolean = false, channelId: number = 0) {
        let node = this._channels[channelId];
        if (node) {
            node.request(reqProtocol, rspObject, showTips, force);
        }
    }

    /** 同request，但在request之前会先判断队列中是否已有rspCmd，如有重复的则直接返回 */
    public requestUnique(reqProtocol: IRequestProtocol, rspObject: CallbackObject, showTips: boolean = true, force: boolean = false, channelId: number = 0): boolean {
        let node = this._channels[channelId];
        if (node) {
            return node.requestUnique(reqProtocol, rspObject, showTips, force);
        }
        return false;
    }

    /** 调用Node关闭 */
    public close(code?: number, reason?: string, channelId: number = 0) {
        if (this._channels[channelId]) {
            return this._channels[channelId].closeSocket(code, reason);
        }
    }


    public getNet(channelId: number = 0) {
        return this._channels[channelId];
    }
}