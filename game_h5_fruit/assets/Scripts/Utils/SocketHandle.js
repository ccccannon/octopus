import WSocket from './socket';


import { pb, protoPlatform, FruitProtocol } from "./dataHandle";

import { composeSocketData } from './dataHandle';

import MessageHandler from "./MessageHandler";

import { SendMessageType, FRUIT_LIST, CMD_LIST } from './MessageHandler'

import fruit from '../3rd/fruit';
// import evtManager from "../Managers/EventManager";

import GameData from '../Game/MainUI/GameData';
import { GameStatus, MAX_RECONNECT } from '../Game/MainUI/constants';
import { evokeNativeToQuitGame, setRefreshGameView } from './App_connect';

cc.Class({

    extends: cc.Component,

    onLoad() {

        // console.log('[SocketHandle]', 'onload', WSocket);

        this.init();

        // console.log(fruit);
        // console.log('pb', pb);
        // console.log('FruitProtocal', FruitProtocol);
        // console.log('platform', protoPlatform);
        this.onEvtListener();
        // console.log(MessageHandler);
        // console.log(WSocket);

        this.webReconnectCount = 0;

        // 当监听这个方法的调用时，直接触发刷新
        setRefreshGameView(this.onGameFront.bind(this));

        // cc.game.on(cc.game.EVENT_HIDE, this.SocketClose, this);

    },


    onDestroy() {
        this.offEvtListener();
    },

    /** 添加事件监听*/
    onEvtListener() {
        // 发起余额查询
        cc.game.evtManager.on('checkBalance', this.sendRequsetForUserBalance, this);
        // 发起离开房间
        cc.game.evtManager.on('leaveRoom', this.sendRequestForLeaveRoom, this);

        // 发起退出大厅
        cc.game.evtManager.on('killSocket', this.SocketClose, this);

    },

    /** 取消事件监听 */
    offEvtListener() {
        cc.game.evtManager.off('checkBalance');
        // evtManager.off('socketReconnect');
    },

    /** 初始化 */
    async init() {
        try {

            if (GameData.gateAddr) {
                if (CC_DEBUG) {
                    console.log('已有长链接地址，直接建立长链接');
                }
                this.SocketInit(GameData.gateAddr);
                return;
            } else {
                //获取用户信息
                const userInfo = await Promise.race([GameData.getUserInfo(), this.timeOutHandle()]);
                // const userInfo = {};

                if (CC_DEBUG) {
                    console.log(userInfo, '用户信息');
                }

                const { GateAddr } = userInfo;

                GameData.gateAddr = GateAddr;

                // 初始化socket长连接
                this.SocketInit(GateAddr);
            }
        } catch (err) {
            console.log(err);

            if (this.webReconnectCount <= 0) {

                if (CC_DEBUG) {
                    console.log('第一次重连');
                }

                // 将游戏状态设置为非法状态
                cc.game.evtManager.emit('updateGameStatus', GameStatus.GameStatusInvalid);
            }

            this.webReconnectCount++;
            if (this.webReconnectCount > MAX_RECONNECT) {
                // console.log('连接超时多次，自动退出');
                if (CC_DEBUG) {
                    console.log('连接超时多次')
                }
                return;
            }

            this.reconnectTimeout = setTimeout(() => {
                this.init();
            }, 2000)

        }
    },

    timeOutHandle() {
        return new Promise((res) => {
            setTimeout(() => {
                res();
            }, 5000);
        })
    },


    /**游戏处于前台 */
    onGameFront() {

        if (CC_DEBUG) {
            console.log('当前游戏处于前台');
        }

        if (WSocket && WSocket.socket && WSocket.socket.readyState == WebSocket.OPEN) {
            if (CC_DEBUG) {
                console.log('socket正再运行');
            }
            return;
        } else {
            cc.game.evtManager.emit('updateGameStatus', GameStatus.GameStatusPrepare, { time: 15 });
            this.init();
        }

    },


    // 初始化socket
    SocketInit(url) {

        /** 防止特殊情况下 app收起webview 前端没有监听到 出现没有杀死socket的同时又发起新的socket请求  */
        if (WSocket && WSocket.socket) {
            WSocket.closeSocket();
        }

        WSocket.isEnd = false;
        WSocket.setSocketUrl(url)
            .setMessageHandle(this.handleSocketMessage.bind(this))
            .setSocketErrorHandle(this.handleSocketError.bind(this))
            .setOperationAfterOnOpen(this.operationAfterSocketConnected.bind(this))
            .setOperationAfterReconnect(this.handleSocketReconnet.bind(this))
            .createWebSocket();

    },

    /** 关闭socket */
    SocketClose() {


        // 重置从连次数
        this.webReconnectCount = 0;

        //  如果存在重连定时器，清除重连定时器
        this.reconnectTimeout && clearTimeout(this.reconnectTimeout);

        // 关闭socket
        WSocket.closeSocket();

        if (CC_DEBUG) {
            console.log('关闭socket');
        }

        // 唤起app 隐藏webview
        evokeNativeToQuitGame();

    },


    /**
     * 
     * @param {Object} msg socket返回的信息 
     */
    handleSocketMessage(msg) {

        const parsedData = MessageHandler.parseRecvMessage(msg);

        const { mid, pid, parsedMsg } = parsedData;

        // 网关
        if (mid === protoPlatform.ServerType.SERVER_TYPE_GATEWAY) {

            if (pid === CMD_LIST.HEART_BET.pid_res) {
                // console.log('心跳回复');

            } else if (pid === CMD_LIST.LOGIN_IN.pid_res) {
                // console.log("登录大厅返回");
                // 进入游戏
                this.enterGame();
            } else if (pid === CMD_LIST.LOGOUT_OUT.pid_res) {
                // console.log('退出登录');
                if (CC_DEBUG) {
                    console.log('主动退出登录');
                }
            }
            else {
                console.log('unhandle pid in SERVER_TYPE_GATEWAY ', pid);
            }
            return;
        }

        // 通用
        if (mid === protoPlatform.ServerType.SERVER_TYPE_COMMON) {

            if (pid === CMD_LIST.RED_POINT.pid_res) {

            } else if (pid === CMD_LIST.ENTER_GAME.pid_res) {
                // 匹配游戏
                this.matchGame();

            } else if (pid === CMD_LIST.PLAYER_BALANCE.pid_res) {

                // console.log('获取用户的余额信息', parsedData);
                MessageHandler.wakeupListener(mid, pid, parsedData);
            }

            else {
                console.log('unhandle pid in SERVER_TYPE_COMMON ', pid);
            }
            return;
        }

        // 匹配
        if (mid === protoPlatform.ServerType.SERVER_TYPE_MATCH) {

            if (pid === CMD_LIST.MATCH_GAME.pid_res) {

                //  获取到服务器响应后 前段是否提示正在匹配 请稍后

            } else if (pid === CMD_LIST.MATCH_OK.pid_res) {

                // 这里表示已经匹配成功 
                // console.log('匹配成功', parsedMsg);

                // 获取桌子的信息
                this.sendRequestForTableInfo();

                // 获取水果历史记录的
                this.sendResquestForFruitHistory();

                // 获取玩家的余额
                this.sendRequsetForUserBalance();

                // 需要根据结果 做一些处理，比如 余额不足 调取原生充值界面

            } else {
                console.log('unhandle pid in SERVER_TYPE_MATCH ', pid);
            }
            return;
        }

        // 水果
        if (mid === protoPlatform.ServerType.SERVER_TYPE_Fruit) {

            // 此处要结合具体的情况，将数据分发到水果游戏的各个模块

            MessageHandler.wakeupListener(CMD_LIST.FRUIT_RECV_MSG.mid, pid, parsedMsg);

        }

    },

    /**
     *  处理数据的重连
     * 
     *  当前的封装，只能解决将二进制数据发给服务器 但不能解决相同数据多次发送的问题。
     *  
     *  当前封装缺乏 一些断线 重连的提示语 这个后期再补充。
     * 
     *  
     *  同时
     * 
     * 
     */
    handleSocketReconnet() {
        // const len = this.requestList.length;
        // if (0 < len) {
        //     for (let i = len; i >= 0; i--) {
        //         const item = this.requestList[i];
        //         const { buffer } = item;
        //         const res = this.sendMessage(buffer);
        //         if (res) {
        //             this.requestList.splice(i, 1);
        //             console.log('请求重发成功！');
        //         }
        //     }
        // }
    },


    /**
     * 
     * @param {Object} err 错误信息
     */
    handleSocketError(err) {
        console.log('[SocketHandle] handleSocketMessage ', err);
    },




    operationAfterSocketConnected() {
        //  大厅登录
        this.loginHall();
    },



    // 进入大厅
    loginHall() {
        // const userInfo = { user_id: this.GameInfo.UID, token: this.GameInfo.Token };
        const userInfo = { user_id: GameData.UserInfo.UID, token: GameData.UserInfo.Token };
        // 登录大厅
        const serilizedLoginInHallMsg = MessageHandler.serializeCommonSendMessage(SendMessageType.LoginIn, userInfo);
        this.sendMessage(serilizedLoginInHallMsg);

    },


    // 进入游戏 
    enterGame() {

        // 请求直接进入游戏
        // message EnterGameRequest{
        // 	GameKind game_kind = 1;
        // 	uint32 game_level = 2;
        // 	string uuid = 3;
        // 	uint32 version = 4; // 版本号
        // 	uint32 channel = 5; // 渠道号
        // }
        const enterGameRequest = {
            game_kind: protoPlatform.GameKind.GAME_KIND_Fruit,
            game_level: 0,
            uuid: GameData.UserInfo.Token,
            version: GameData.appVersion,
            channel: 6001,
        }

        // 进入游戏
        const serilizedEnterGameMsg = MessageHandler.serializeCommonSendMessage(SendMessageType.EnterGame, enterGameRequest);
        this.sendMessage(serilizedEnterGameMsg);

    },

    // 匹配游戏
    matchGame() {
        // message MatchRequest{
        //     uint32 action = 1;			// 0：请求匹配；1：取消匹配
        //     /*
        //     如果是取消，则后续参数也需要填写，以防止未来可以同时匹配多个游戏而只取消其中某一个；
        //     只有确实取消了，消息才会返回1，防止已经匹配好了，但是再发取消匹配的情况
        //     如果取消失败，会返回102，客户端可以解除匹配状态
        //     */
        //     GameKind game_kind = 2;
        //     uint32 game_level = 3;
        //     string uuid = 4;
        //     uint32 version = 5; // 版本号
        //     uint32 channel = 6;
        // }

        const matchRequest = {
            aciton: 0,
            game_kind: protoPlatform.GameKind.GAME_KIND_Fruit,
            game_level: 0,
            uuid: GameData.UserInfo.Token,
            version: GameData.appVersion,
            channel: 6001,
        }

        //匹配游戏 
        const serilizedMatchMsg = MessageHandler.serializeCommonSendMessage(SendMessageType.MatchGame, matchRequest);
        this.sendMessage(serilizedMatchMsg);

    },


    /** 发起离开房间的请求  */
    sendRequestForLeaveRoom() {

        this.webReconnectCount = 0;
        this.reconnectTimeout && clearTimeout(this.reconnectTimeout);

        if (CC_DEBUG) {
            console.log('socket对象不存在,直接请求app关闭webview');
        }
        evokeNativeToQuitGame();

        /** 如果socket存在，就发生关闭信息 否则直接通知app关闭websocket */
        if (WSocket.socket && WSocket.socket.readyState == WebSocket.OPEN) {
            const binary = composeSocketData(CMD_LIST.FRUIT_RECV_MSG.mid, FRUIT_LIST.LEAVE_ROOM.pid_req, null, FRUIT_LIST.LEAVE_ROOM.struct_req);
            this.sendMessage(binary);
        }

        // console.log('发起离开房间的请求');

    },


    /** 发送桌子信息请求 */
    sendRequestForTableInfo() {

        const pid = FRUIT_LIST.TABLE_INFO.pid_req;
        const info = {};
        const tableBinary = MessageHandler.serializeFruitSendMessage(pid, info);
        this.sendMessage(tableBinary);
        // console.log('发送桌子信息请求', tableBinary);

    },

    /** 发起水果历史的请求 */
    sendResquestForFruitHistory() {
        const binary = composeSocketData(CMD_LIST.FRUIT_RECV_MSG.mid, FRUIT_LIST.FRUIT_HISTORY.pid_req, null, FRUIT_LIST.FRUIT_HISTORY.struct_req);
        this.sendMessage(binary);
        // console.log('发起水果的历史请求', binary);
    },

    /** 发起余额查询请求 */
    sendRequsetForUserBalance() {
        const binary = composeSocketData(CMD_LIST.PLAYER_BALANCE.mid, CMD_LIST.PLAYER_BALANCE.pid_req);
        this.sendMessage(binary);
        // console.log('发起余额查询请求');
    },

    /** 发送下注请求 
     * 
     * 非下注期间发送的消息是不处理的
     * 
     */
    sendRequestBet() {
        const pid = FRUIT_LIST.BET.pid_req;
        const info = {
            Area: 6,
            Index: 2,
        }
        const betBinary = MessageHandler.serializeFruitSendMessage(pid, info);
        this.sendMessage(betBinary);
        // console.log('发送下注请求');
    },


    /** 发送消息 */
    sendFruitMessage(pid, info) {
        const binary = MessageHandler.serializeFruitSendMessage(pid, info);
        this.sendMessage(binary);
    },


    /** socket发送消息 */
    sendMessage(buffer) {
        const status = WSocket.socket.readyState;
        if (status == WebSocket.OPEN) {
            // debugger
            WSocket.socket.send(buffer);
            return true;
        }
        else {
            // this.requestList.unshift({ buffer });
            console.log('send fail');
            return false;
        }

    },



})