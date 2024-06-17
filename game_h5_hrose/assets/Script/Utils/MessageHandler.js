
import { pb, protoPlatform, MillionProtocol } from "./dataHandle";

import { composeSocketData } from "./dataHandle";

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
    },

    // 赛马信息
    HORSE_RECV_MSG: {
        mid: protoPlatform.ServerType.SERVER_TYPE_HORSERACING_
    }

}

// 赛马的协议号 结构体
export const HORSE_LIST = {

    TABLE_INFO: {
        // HorseTableStatusReq	           		= 1;		// 请求获取游戏数据，此协议应该在客户端资源加载完成后请求（通常为刚进游戏，比如匹配成功/断线重连）GameCommonReq
        pid_req: MillionProtocol.MillionTableStatusReq,
        struct_req: pb.GameCommonReq,

        // HorseTableStatusResp	        	= 2;		// 回复：FruitMsgTableStatusResp
        pid_res: MillionProtocol.MillionTableStatusResp,
        struct_res: pb.HorseMsgTableStatusResp
    },

    // 游戏开始
    GAME_START: {
        // HorseGameStartResp	            	= 4;		// 游戏阶段转换协议/开始下注
        pid_res: MillionProtocol.MillionGameStartResp,
        struct_res: pb.HorseMsgGameStartResp
    },

    // 游戏结算
    GAME_SETTLE: {
        // HorseGameSettleResp	                = 6;		// 游戏阶段转换协议/停止下注
        pid_res: MillionProtocol.MillionGameSettleResp,
        struct_res: pb.HorseMsgGameSettleResp
    },

    // 下注
    BET: {
        // HorseBetReq                 		= 7;		// 请求下注
        pid_req: MillionProtocol.MillionBetReq,
        struct_req: pb.GameMsgBetReq,

        // HorseBetResp	                	= 8;		// 请求下注返回
        pid_res: MillionProtocol.MillionBetResp,
        struct_res: pb.GameMsgBetResp,
    },

    //其他人下注广播 
    BET_BROADCAST: {
        // MillionBetBroadcast
        pid_res: MillionProtocol.MillionBetBroadcast,
        struct_res: pb.GameMsgBetBroadcastResp
    },

    // 下注历史
    HORSE_HISTORY: {
        // HorseHistoryReq                     = 11;     // 请求历史记录 GameCommonReq
        pid_req: MillionProtocol.MillionHistoryReq,
        struct_req: pb.GameCommonReq,

        //  HorseHistoryResp                    = 12;     // 历史记录返回
        pid_res: MillionProtocol.MillionHistoryResp,
        struct_res: pb.HorseMsgHistoryResp
    },

    // 玩家总数
    PLAYER_NUMBER: {
        // FruitPlayerNumResp					= 20;		// 在线人数广播更新 
        pid_res: MillionProtocol.MillionPlayerNumResp,
        struct_res: pb.GameMsgPlayerNumResp,
    },

    // 离开房间
    LEAVE_ROOM: {
        pid_req: MillionProtocol.MillionLeaveReq,
        struct_req: pb.GameCommonReq,

        pid_res: MillionProtocol.MillionLeaveResp,
        struct_res: pb.GameCommonResp
    }

}

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
            cc.game.DebugMgr && cc.game.DebugMgr.log(name, '[MessageHandler wakeupListener] check the name and make sure name is exist');
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
        cc.game.DebugMgr && cc.game.DebugMgr.log('获取匹配信息', matchInfo);
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

            } else if (pid === CMD_LIST.LOGOUT_OUT.pid_res) {
                cc.game.DebugMgr && cc.game.DebugMgr.log('注销登录响应');
            }
            else {
                cc.game.DebugMgr && cc.game.DebugMgr.log('unhandle pid in SERVER_TYPE_GATEWAY ', pid);
            }

            parsedData = { mid, pid, parsedMsg: '' };

            return parsedData;
        }

        // 通用
        if (mid === protoPlatform.ServerType.SERVER_TYPE_COMMON) {

            if (pid === CMD_LIST.RED_POINT.pid_res) {
                cc.game.DebugMgr && cc.game.DebugMgr.log('红点推送响应')
                parsedData = { mid, pid, parsedMsg: '' };
                return parsedData;
            } else if (pid === CMD_LIST.ENTER_GAME.pid_res) {
                cc.game.DebugMgr && cc.game.DebugMgr.log('登录游戏响应');
                const parsedMsg = CMD_LIST.ENTER_GAME.struct_res.decode(msgBinary);
                parsedData = { mid, pid, parsedMsg };
                return parsedData;
            } else if (pid === CMD_LIST.PLAYER_BALANCE.pid_res) {
                cc.game.DebugMgr && cc.game.DebugMgr.log('用户余额');
                const parsedMsg = CMD_LIST.PLAYER_BALANCE.struct_res.decode(msgBinary);
                parsedData = { mid, pid, parsedMsg };
                return parsedData;
            }

            else {
                cc.game.DebugMgr && cc.game.DebugMgr.log('unhandle pid in SERVER_TYPE_COMMON ', pid);
            }
        }

        // 匹配
        if (mid === protoPlatform.ServerType.SERVER_TYPE_MATCH) {

            if (pid === CMD_LIST.MATCH_GAME.pid_res) {
                const parsedMsg = CMD_LIST.MATCH_GAME.struct_res.decode(msgBinary);
                cc.game.DebugMgr && cc.game.DebugMgr.log('服务器收到了匹配请求');
                parsedData = { mid, pid, parsedMsg };
                return parsedData;
            } else if (pid === CMD_LIST.MATCH_OK.pid_res) {
                const parsedMsg = CMD_LIST.MATCH_OK.struct_res.decode(msgBinary);
                cc.game.DebugMgr && cc.game.DebugMgr.log('匹配成功');
                parsedData = { mid, pid, parsedMsg };
                return parsedData;
            } else {
                cc.game.DebugMgr && cc.game.DebugMgr.log('unhandle pid in SERVER_TYPE_MATCH ', pid);
            }

        }

        // 赛马
        if (mid === protoPlatform.ServerType.SERVER_TYPE_HORSERACING_) {

            cc.game.DebugMgr && cc.game.DebugMgr.log(mid, pid, '赛马的消息');
            const parsedMsg = this.parseHorseRecieveMessage(pid, msgBinary);
            parsedData = { mid, pid, parsedMsg };
            return parsedData;
        }

        cc.game.DebugMgr && cc.game.DebugMgr.log('unexcept mid and pid', mid, pid);
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

    /** 处理赛马的接收到的信息 */
    parseHorseRecieveMessage(pid, msgBinary) {

        let objMessage = null;

        switch (pid) {
            case HORSE_LIST.TABLE_INFO.pid_res:
                objMessage = HORSE_LIST.TABLE_INFO.struct_res.decode(msgBinary);
                cc.game.DebugMgr && cc.game.DebugMgr.log('桌子信息', objMessage);
                break;
            case HORSE_LIST.GAME_START.pid_res:
                objMessage = HORSE_LIST.GAME_START.struct_res.decode(msgBinary);
                cc.game.DebugMgr && cc.game.DebugMgr.log('开始下注', objMessage);
                break;
            case HORSE_LIST.GAME_SETTLE.pid_res:
                objMessage = HORSE_LIST.GAME_SETTLE.struct_res.decode(msgBinary);
                cc.game.DebugMgr && cc.game.DebugMgr.log('停止下注', objMessage);
                break;

            case HORSE_LIST.BET.pid_res:
                cc.game.DebugMgr && cc.game.DebugMgr.log('下注', msgBinary);
                objMessage = HORSE_LIST.BET.struct_res.decode(msgBinary);
                break;

            case HORSE_LIST.BET_BROADCAST.pid_res:
                objMessage = HORSE_LIST.BET_BROADCAST.struct_res.decode(msgBinary);
                // console.log('其他人下注广播', objMessage);
                break;
            case HORSE_LIST.HORSE_HISTORY.pid_res:
                objMessage = HORSE_LIST.HORSE_HISTORY.struct_res.decode(msgBinary);
                cc.game.DebugMgr && cc.game.DebugMgr.log('赛马历史', objMessage);
                break;

            case HORSE_LIST.PLAYER_NUMBER.pid_res:
                objMessage = HORSE_LIST.PLAYER_NUMBER.struct_res.decode(msgBinary);
                cc.game.DebugMgr && cc.game.DebugMgr.log('玩家总数', objMessage);
                break;
        }

        return objMessage;

    }

    /** 序列化 水果发送的消息 */
    serializeFruitSendMessage(pid, info) {

        let binaryData = null;
        const HorseMId = CMD_LIST.HORSE_RECV_MSG.mid;

        switch (pid) {
            case HORSE_LIST.TABLE_INFO.pid_req:
                binaryData = composeSocketData(HorseMId, HORSE_LIST.TABLE_INFO.pid_req, info, HORSE_LIST.TABLE_INFO.struct_req);
                break;
            case HORSE_LIST.BET.pid_req:
                binaryData = composeSocketData(HorseMId, HORSE_LIST.BET.pid_req, info, HORSE_LIST.BET.struct_req);
                break;

            case HORSE_LIST.HORSE_HISTORY.pid_req:
                binaryData = composeSocketData(HorseMId, HORSE_LIST.HORSE_HISTORY.pid_req, info, HORSE_LIST.BET_HISTORY.struct_req);
                break;
        }

        return binaryData;

    }


}


export default new MessageHandler();