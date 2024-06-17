
import { pb, protoPlatform, FruitProtocol } from "./dataHandle";

import { composeSocketData } from "./dataHandle";

import fruit from '../3rd/fruit';

import { composeTwoString } from "../Utils/utils_common";


// 通用模块号 协议号 结构体
export const CMD_LIST = {

    // 心跳
    HEART_BET: {

        mid: protoPlatform.ServerType.SERVER_TYPE_GATEWAY,
        pid_req: protoPlatform.ServerGatewayCmd.CMD_GATEWAY_PING_REQ,
        pid_res: protoPlatform.ServerGatewayCmd.CMD_GATEWAY_PING_RESP,

    },

    // 登录大厅
    LOGIN_IN: {

        // SERVER_TYPE_COMMON						= 1000;		// 通用服务
        mid: protoPlatform.ServerType.SERVER_TYPE_GATEWAY,

        // CMD_GATEWAY_LOGIN_REQ				= 1;			// 登录请求：LoginRequest
        pid_req: protoPlatform.ServerGatewayCmd.CMD_GATEWAY_LOGIN_REQ,
        struct_req: protoPlatform.LoginRequest,

        // CMD_GATEWAY_LOGIN_RESP				= 2;			// 登录返回：LoginResponse
        pid_res: protoPlatform.ServerGatewayCmd.CMD_GATEWAY_LOGIN_RESP,
        struct_res: protoPlatform.LoginResponse

    },

    LOGOUT_OUT: {
        // SERVER_TYPE_COMMON						= 1000;		// 通用服务
        mid: protoPlatform.ServerType.SERVER_TYPE_GATEWAY,
        pid_req: protoPlatform.ServerGatewayCmd.CMD_GATEWAY_LOGOUT_REQ,

        // CMD_GATEWAY_LOGOUT_RESP				= 2;			// 退出
        pid_res: protoPlatform.ServerGatewayCmd.CMD_GATEWAY_LOGOUT_RESP,

    },

    // 红点推送
    RED_POINT: {
        mid: protoPlatform.ServerType.SERVER_TYPE_COMMON,
        pid_res: protoPlatform.ServerCommonCmd.CMD_BS_RedPointResp
    },

    // 进入游戏
    ENTER_GAME: {

        mid: protoPlatform.ServerType.SERVER_TYPE_COMMON,

        // CMD_ENTER_GAME_REQ                                        = 9;                        // 请求非匹配类游戏直接进入：目前支持AB/7UD：EnterGameRequest
        pid_req: protoPlatform.ServerMatchCmd.CMD_ENTER_GAME_REQ,
        struct_req: protoPlatform.EnterGameRequest,

        // CMD_ENTER_GAME_RESP                                        = 10;                        // 请求非匹配类游戏直接进入：MatchOKResponse
        pid_res: protoPlatform.ServerMatchCmd.CMD_ENTER_GAME_RESP,
        struct_res: protoPlatform.MatchOKResponse

    },

    // 获取玩家的余额
    PLAYER_BALANCE: {

        mid: protoPlatform.ServerType.SERVER_TYPE_COMMON,
        pid_req: protoPlatform.ServerCommonCmd.CMD_GET_PLAYER_BALANCE_REQ,
        struct_req: null,

        pid_res: protoPlatform.ServerCommonCmd.CMD_GET_PLAYER_BALANCE_RESP,
        struct_res: protoPlatform.GetPlayerBalanceResponse
    },

    // 发起匹配
    MATCH_GAME: {

        mid: protoPlatform.ServerType.SERVER_TYPE_MATCH,

        // CMD_MATCH_REQ						= 5;			// 请求rummy\teenpatti匹配：MatchRequest
        pid_req: protoPlatform.ServerMatchCmd.CMD_MATCH_REQ,
        struct_req: protoPlatform.MatchRequest,

        // CMD_MATCH_RESP						= 6;			// 返回rummy\teenpatti匹配：MatchResponse（这里只是告诉客户端收到了匹配申请）
        pid_res: protoPlatform.ServerMatchCmd.CMD_MATCH_RESP,
        struct_res: protoPlatform.MatchResponse,

    },

    // 匹配成功
    MATCH_OK: {

        mid: protoPlatform.ServerType.SERVER_TYPE_MATCH,
        pid_res: protoPlatform.ServerMatchCmd.CMD_MATCH_OK_RESP,
        struct_res: protoPlatform.MatchOKResponse,

    },

    // 水果信息
    FRUIT_RECV_MSG: {
        mid: protoPlatform.ServerType.SERVER_TYPE_Fruit,
    }
}

// 水果的协议号 结构体
export const FRUIT_LIST = {

    TABLE_INFO: {
        // FruitTableStatusReq	           		= 1;		// 请求获取游戏数据，此协议应该在客户端资源加载完成后请求（通常为刚进游戏，比如匹配成功/断线重连）GameCommonReq
        pid_req: FruitProtocol.FruitTableStatusReq,
        struct_req: pb.GameCommonReq,

        // FruitTableStatusResp	        	= 2;		// 回复：FruitMsgTableStatusResp
        pid_res: FruitProtocol.FruitTableStatusResp,
        struct_res: fruit.FruitMsgTableStatusResp
    },

    // 游戏开始
    GAME_START: {
        // FruitGameStartResp	            	= 4;		// 游戏阶段转换协议/开始下注
        pid_res: FruitProtocol.FruitGameStartResp,
        struct_res: fruit.FruitMsgGameStartResp
    },

    // 游戏结算
    GAME_SETTLE: {
        // FruitGameSettleResp	                = 6;		// 游戏阶段转换协议/停止下注
        pid_res: FruitProtocol.FruitGameSettleResp,
        struct_res: fruit.FruitMsgGameSettleResp
    },

    // 下注
    BET: {
        // FruitBetReq                 		= 7;		// 请求下注
        pid_req: FruitProtocol.FruitBetReq,
        struct_req: pb.GameMsgBetReq,

        // FruitBetResp	                	= 8;		// 请求下注返回
        pid_res: FruitProtocol.FruitBetResp,
        struct_res: pb.GameMsgBetResp,
    },

    //其他人下注广播 
    BET_BROADCAST: {
        pid_res: FruitProtocol.FruitBetBroadcast,
        struct_res: pb.GameMsgBetBroadcastResp
    },

    // 下注历史
    FRUIT_HISTORY: {
        // FruitHistoryReq                     = 11;     // 请求历史记录 GameCommonReq
        pid_req: FruitProtocol.FruitHistoryReq,
        struct_req: pb.GameCommonReq,

        //  FruitHistoryResp                    = 12;     // 历史记录返回
        pid_res: FruitProtocol.FruitHistoryResp,
        struct_res: fruit.FruitMsgHistoryResp
    },

    // 玩家总数
    PLAYER_NUMBER: {
        // FruitPlayerNumResp					= 20;		// 在线人数广播更新 
        pid_res: FruitProtocol.FruitPlayerNumResp,
        struct_res: pb.GameMsgPlayerNumResp,
    },

    // 离开房间
    LEAVE_ROOM: {
        pid_req: FruitProtocol.FruitLeaveReq,
        struct_req: pb.GameCommonReq,

        pid_res: FruitProtocol.FruitLeaveResp,
        struct_res: pb.GameCommonResp
    }

}


// FruitInvalid = 0;
// FruitTableStatusReq = 1;		// 请求获取游戏数据，此协议应该在客户端资源加载完成后请求（通常为刚进游戏，比如匹配成功/断线重连）GameCommonReq
// FruitTableStatusResp = 2;		// 回复：FruitMsgTableStatusResp

// FruitGameStartResp = 4;		// 游戏阶段转换协议/开始下注
// FruitGameSettleResp = 6;		// 游戏阶段转换协议/停止下注
// FruitBetReq = 7;		// 请求下注
// FruitBetResp = 8;		// 请求下注返回
// FruitBetBroadcast = 10;     // 其他人下注广播
// FruitHistoryReq = 11;     // 请求历史记录 GameCommonReq
// FruitHistoryResp = 12;     // 历史记录返回
// FruitChatReq = 13;     // 聊天 GameChatReq
// FruitChatResp = 14;     // 聊天返回 GameChatResp
// FruitPlayerListReq = 15;		// 请求玩家列表 GameCommonReq
// FruitPlayerListResp = 16;		// 请求玩家列表返回 GameMsgPlayerListResp
// FruitLeaveReq = 17;		// 退出房间请求 GameCommonReq
// FruitLeaveResp = 18;		// 退出房间返回 GameCommonResp
// FruitPlayerNumResp = 20;		// 在线人数广播更新 
// FruitSitdownReq = 21;		// 坐下请求 GameSitdownReq
// FruitSitdownResp = 22;		// 坐下返回 GameSitdownResp
// FruitRebetReq = 23;		// 请求重复下注 GameCommonReq
// FruitRebetResp = 24;		// 重复下注返回 GameMsgRebetResp
// FruitChangeTableReq = 25;		// 无意义
// FruitChangeTableResp = 26;		// 通知客户端换房：ChangeRoomResp

export const SendMessageType = cc.Enum({
    LoginIn: 0,
    EnterGame: 1,
    MatchGame: 2,
    FruitInfo: 3,

})

class MessageHandler {

    constructor() {
        this.resListeners = {};
        this.requestList = {};
    }

    /**
     * 
     * 添加回调监听
     * 
     * @param {string} name 唯一标识 
     * @param {Function} callback 回调方法
     * @param {Object} target 目标 
     * @returns 
     */
    addResListener(mid, pid, callback, target = null) {

        const name = composeTwoString(mid, pid, "_");

        if (this.resListeners[name]) {
            return;
        }

        this.resListeners[name] = [callback, target];

    }

    // 唤起回调方法
    /**
     * 
     * @param {string} name 唯一标识
     * @param {Object} msg 回调需要接收的方法 
     * @returns 
     */
    wakeupListener(mid, pid, msg, isClear = false) {

        const name = composeTwoString(mid, pid, "_");

        if (!this.resListeners[name]) {
            console.error('[MessageHandler wakeupListener] check the name and make sure name is exist');
            return;
        }

        const [callback, target] = this.resListeners[name];

        if (target) {
            callback.call(target, msg);
        } else {
            callback(msg);
        }

        if (isClear) {
            delete this.resListeners[name];
        }

        // console.log(this.resListeners);
    }


    // 清空方法
    clearResListener() {
        this.resListeners = {};
    }

    // 序列化登录大厅的信息
    serializeLoginInHallInfo(userInfo) {
        return composeSocketData(CMD_LIST.LOGIN_IN.mid, CMD_LIST.LOGIN_IN.pid_req, userInfo, CMD_LIST.LOGIN_IN.struct_req);
    }

    // 序列化进入游戏的信息
    serializeEnterGameInfo(gameInfo) {
        return composeSocketData(CMD_LIST.ENTER_GAME.mid, CMD_LIST.ENTER_GAME.pid_req, gameInfo, CMD_LIST.ENTER_GAME.struct_req)
    }

    // 序列化匹配信息
    serializeMatchGameInfo(matchInfo) {
        // console.log('获取匹配信息');
        return composeSocketData(CMD_LIST.MATCH_GAME.mid, CMD_LIST.MATCH_GAME.pid_req, matchInfo, CMD_LIST.MATCH_GAME.struct_req);
    }

    /** 解析服务器的响应信息 */
    parseRecvMessage(msg) {
        const { mid, pid, msgBinary } = msg;
        let parsedData = null;

        // 网关
        if (mid === protoPlatform.ServerType.SERVER_TYPE_GATEWAY) {

            if (pid === CMD_LIST.HEART_BET.pid_res) {

            } else if (pid === CMD_LIST.LOGIN_IN.pid_res) {
                
            }else if(pid===CMD_LIST.LOGOUT_OUT.pid_res){
                // console.log('注销登录响应');
            } 
            else {
                // console.log('unhandle pid in SERVER_TYPE_GATEWAY ', pid);
            }

            parsedData = { mid, pid, parsedMsg: '' };

            return parsedData;
        }

        // 通用
        if (mid === protoPlatform.ServerType.SERVER_TYPE_COMMON) {

            if (pid === CMD_LIST.RED_POINT.pid_res) {
                // console.log('红点推送响应')
                parsedData = { mid, pid, parsedMsg: '' };
                return parsedData;
            } else if (pid === CMD_LIST.ENTER_GAME.pid_res) {
                // console.log('登录游戏响应');
                const parsedMsg = CMD_LIST.ENTER_GAME.struct_res.decode(msgBinary);
                parsedData = { mid, pid, parsedMsg };
                return parsedData;
            } else if (pid === CMD_LIST.PLAYER_BALANCE.pid_res) {
                // console.log('用户余额');
                const parsedMsg = CMD_LIST.PLAYER_BALANCE.struct_res.decode(msgBinary);
                parsedData = { mid, pid, parsedMsg };
                return parsedData;
            }

            else {
                console.log('unhandle pid in SERVER_TYPE_COMMON ', pid);
            }
        }

        // 匹配
        if (mid === protoPlatform.ServerType.SERVER_TYPE_MATCH) {

            if (pid === CMD_LIST.MATCH_GAME.pid_res) {
                const parsedMsg = CMD_LIST.MATCH_GAME.struct_res.decode(msgBinary);
                // console.log('服务器收到了匹配请求');
                parsedData = { mid, pid, parsedMsg };
                return parsedData;
            } else if (pid === CMD_LIST.MATCH_OK.pid_res) {
                const parsedMsg = CMD_LIST.MATCH_OK.struct_res.decode(msgBinary);
                // console.log('匹配成功');
                parsedData = { mid, pid, parsedMsg };
                return parsedData;
            } else {
                console.log('unhandle pid in SERVER_TYPE_MATCH ', pid);
            }

        }

        // 水果
        if (mid === protoPlatform.ServerType.SERVER_TYPE_Fruit) {
            // console.log(mid, pid, '水果的消息');
            const parsedMsg = this.parseFruitRecieveMessage(pid, msgBinary);
            parsedData = { mid, pid, parsedMsg };
            return parsedData;
        }

        // console.log('unexcept mid and pid', mid, pid);
        parsedData = { mid, pid, parsedMsg: '' };
        return parsedData;

    }

    // 测试处理交易对
    testCurrencyPair() {

        const cPair = {
            Type: 1,
            Value: 1000000000000,
        }

        const struct = protoPlatform.CurrencyPair;

        const buffer = struct.encode(struct.create(cPair)).finish();

        // console.log(buffer);

        // console.log(struct.decode(buffer));

    }

    // 测试交易返回数据
    testBetResp() {


        // 下注返回
        // message GameMsgBetResp{		
        //     uint32 Code = 1; // 错误码
        //     uint32 Area = 2; // 下注区域
        //     uint32 Index = 3; // 下注筹码角标
        //     repeated int64 TotalBet = 4;	// 总共下注(从左到右)
        //     uint32 ProductID = 5;   // 引导充值商品id
        //     repeated CurrencyPair Rewards = 6;     // 充值获得的物品
        // }

        const betRes = {
            Code: 1,
            Area: 2,
            Index: 3,
            TotalBet: [100, 200, 300],
            ProductID: 0,
            Rewards: [{
                Type: 1,
                Value: 1000000000000,
            }]
        }

        const struct = pb.GameMsgBetResp;

        const buffer = struct.encode(struct.create(betRes)).finish();

        // console.log(buffer);

        // console.log(struct.decode(buffer));


    }

    /** 处理发送信息 */
    serializeCommonSendMessage(type, info) {

        let commonBinaryData = null;

        switch (type) {

            case SendMessageType.LoginIn:
                if (!info) {
                    throw new Error('please check the params again, every param is required in SendMessageType.LoginIn !');
                }
                commonBinaryData = this.serializeLoginInHallInfo(info);
                break;

            case SendMessageType.EnterGame:
                if (!info) {
                    throw new Error('please check the params again, every param is required in SendMessageType.EnterGame !');
                }
                commonBinaryData = this.serializeEnterGameInfo(info);
                break;

            case SendMessageType.MatchGame:
                if (!info) {
                    throw new Error('please check the params again, every param is required in SendMessageType.MatchGame !');
                }
                commonBinaryData = this.serializeMatchGameInfo(info);
                break;

            default:
                console.log('unmatch case');
                break;
        }

        return commonBinaryData;

    }

    /** 处理水果的接收到的信息 */
    parseFruitRecieveMessage(pid, msgBinary) {

        let objMessage = null;

        switch (pid) {
            case FRUIT_LIST.TABLE_INFO.pid_res:
                objMessage = FRUIT_LIST.TABLE_INFO.struct_res.decode(msgBinary);
                // console.log('桌子信息', objMessage);
                break;
            case FRUIT_LIST.GAME_START.pid_res:
                objMessage = FRUIT_LIST.GAME_START.struct_res.decode(msgBinary);
                // console.log('开始下注', objMessage);
                break;
            case FRUIT_LIST.GAME_SETTLE.pid_res:
                objMessage = FRUIT_LIST.GAME_SETTLE.struct_res.decode(msgBinary);
                // console.log('停止下注', objMessage);
                break;

            case FRUIT_LIST.BET.pid_res:
                // console.log('下注', msgBinary);
                objMessage = FRUIT_LIST.BET.struct_res.decode(msgBinary);
                break;

            case FRUIT_LIST.BET_BROADCAST.pid_res:
                objMessage = FRUIT_LIST.BET_BROADCAST.struct_res.decode(msgBinary);
                // console.log('其他人下注广播', objMessage);
                break;
            case FRUIT_LIST.FRUIT_HISTORY.pid_res:
                objMessage = FRUIT_LIST.FRUIT_HISTORY.struct_res.decode(msgBinary);
                // console.log('水果历史', objMessage);
                break;

            case FRUIT_LIST.PLAYER_NUMBER.pid_res:
                objMessage = FRUIT_LIST.PLAYER_NUMBER.struct_res.decode(msgBinary);
                // console.log('玩家总数', objMessage);
                break;
        }

        return objMessage;

    }

    /** 序列化 水果发送的消息 */
    serializeFruitSendMessage(pid, info) {

        let binaryData = null;
        const FruitMId = CMD_LIST.FRUIT_RECV_MSG.mid;

        switch (pid) {
            case FRUIT_LIST.TABLE_INFO.pid_req:
                binaryData = composeSocketData(FruitMId, FRUIT_LIST.TABLE_INFO.pid_req, info, FRUIT_LIST.TABLE_INFO.struct_req);
                break;
            case FRUIT_LIST.BET.pid_req:
                binaryData = composeSocketData(FruitMId, FRUIT_LIST.BET.pid_req, info, FRUIT_LIST.BET.struct_req);
                break;

            case FRUIT_LIST.FRUIT_HISTORY.pid_req:
                binaryData = composeSocketData(FruitMId, FRUIT_LIST.FRUIT_HISTORY.pid_req, info, FRUIT_LIST.BET_HISTORY.struct_req);
                break;
        }

        return binaryData;

    }


}


export default new MessageHandler();