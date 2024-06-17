
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
import { getSokcetOptions, platformType } from "../Mgr/Config";

import GameMgr from "./GameMgr";
import { evokeNativeChargePage } from "../Utils/AppInterface";
import { showTips } from "../Utils/Utils_Common";
import HallMgr from "../Mgr/HallMgr";

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


    public isCheckSuccess: boolean = false;


    public init() {

        var net = new GameNetNode();
        var ws = new WebSock();        // WebSocket 网络连接对象
        var gp = new GameProtocol();   // 网络通讯协议对象
        var gt = new NetGameTips()     // 网络提示对象
        net.init(ws, gp, gt);

        this.setNetNode(net);

        MsgCmdConstant.registerAllMsgAck(); // 注册所有返回消息

        //@ts-ignore
        // net._autoReconnect = 10;

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


    public isSocketWorking() {
        return this.getNet().isSocketWorking();
    }


    public reconnect() {
        this.getNet().reConnect();
    }

    /**  */
    onIntoSnakeGameHall(msgAck) {
        // console.log(msgAck, '1111111111111111111');

    }

    onClientShowTips(msgAck) {
        // console.log(msgAck, 'toast');
        Logger.logModel(msgAck, 'onClientShowTips');
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
        } else if (tipId === 'lab_server_20080') {
            Logger.logModel('lab_server_20080');
            cc.systemEvent.emit('SHOW_TIPS');
        }
        else {
            showTips(tipId);
        }
        // }
    }


    onClientLoginAck(msgAck) {
        Logger.logModel(msgAck, '接收到登录消息');

        // @ts-ignore
        if (cc.game.isInScene) {
             // @ts-ignore
            Logger.logBusiness( cc.game.isInScene,'断线重新加载场景')
            cc.systemEvent.emit('LOGIN_GAME_HALL')
            // debugger
        } else {
            /** 登录游戏大厅 */
            HallMgr.getInstance().LoadGame(GameMgr.getInstance().GameId);
        }

    }


    /** 顶号消息 */
    onOtherLoginAck(msgAck) {
        Logger.logNet(msgAck, '顶号')
        this.getNet().rejectReconnect();
        // this.getNet().close(1000, 'other login');
        this.getNet().closeSocket();

        // SoundManager.getInstance().stopAllSound();
    }



    public onClinetLinkAck(msgAck: ClientLinkMsgAck) {
        if (msgAck.result == 0) {
            // 服务器连接成功。
            Logger.logNet(` 服务器链接校验成功,发送登录消息..`);
            const net = this.getNet();

            // @ts-ignore
            net.resetHearbeatTimer();


            this.isCheckSuccess = true;

            // console.log(net);
            // 发送登录消息
            const loginMsg = new LoginMsg();

            // userid: 123456
            // token: token123456

            // GameDataManager
            const gm = GameMgr.getInstance();
            loginMsg.userId = dcodeIO.Long.fromNumber(gm.UserId);
            loginMsg.platformType = platformType;
            loginMsg.platformUid = gm.Token;
            loginMsg.reconnect = gm.Player != null;
            loginMsg.gameId = gm.GameId;

            // let loginMsg = GloabMgr.loginMsg;
            // loginMsg.reconnect = !GloabMgr.isFristLogin;
            MsgDispatcher.sendMsg(loginMsg);
        }
        Logger.logNet(msgAck, 'onClinetLinkAck');

    }

    public onClientHeartMsgAck(msgAck: ClientHeartMsgAck) {
        Logger.logNet(` 收到心跳返回..`);
        // oops.timer.setServerTime(msgAck.serverTime.toNumber());
    }


    /** 连接服务器 */
    connectServer() {
        const netMgr = NetMgr.getInstance();
        // netMgr.init();
        // let options = this.getSokcetOptions();
        // netMgr.connect(options);
        const net = netMgr.getNet();
        if (!net) {
            netMgr.init();
            let options = getSokcetOptions();
            netMgr.connect(options);
            // console.log(CC_BUILD, CC_DEBUG, CC_PREVIEW, options);

        }
        // else {

        //     let options = getSokcetOptions();

        //     net.connect(options);

        // }
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