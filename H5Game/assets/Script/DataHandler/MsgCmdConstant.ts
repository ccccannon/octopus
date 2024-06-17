import { TableRoundPlayerRecord } from "../domain/TableRoundPlayerRecord";
import { ClientHeartMsgAck } from "../msg/ClientHeartMsgAck";
import { ClientLinkMsgAck } from "../msg/ClientLinkMsgAck";
import { CreateGameTableMsg } from "../msg/CreateGameTableMsg";
import { DismissGameTableMsg } from "../msg/DismissGameTableMsg";
import { GamePlayerInfoChangeMsgAck } from "../msg/GamePlayerInfoChangeMsgAck";
import { GamePlayerLeaveTableMsgAck } from "../msg/GamePlayerLeaveTableMsgAck";
import { GameStatusNoticeMsgAck } from "../msg/GameStatusNoticeMsgAck";
import { GameTableBeginMsg } from "../msg/GameTableBeginMsg";
import { GameUsePropMsgAck } from "../msg/GameUsePropMsgAck";
import { GetGameHallAvatarMsgAck } from "../msg/GetGameHallAvatarMsgAck";
import { GetGameNickAvatarMsg } from "../msg/GetGameNickAvatarMsg";
import { GetGameNickAvatarMsgAck } from "../msg/GetGameNickAvatarMsgAck";
import { GetGameRankMsg } from "../msg/GetGameRankMsg";
import { GetGameRankMsgAck } from "../msg/GetGameRankMsgAck";
import { GetSnakeGameRankMsg } from "../msg/GetSnakeGameRankMsg";
import { GetSnakeGameRankMsgAck } from "../msg/GetSnakeGameRankMsgAck";
import GetSnakeGameResultMsg from "../msg/GetSnakeGameResultMsg";
import { GetTablePlayerRecordMsg } from "../msg/GetTablePlayerRecordMsg";
import { GetTablePlayerRecordMsgAck } from "../msg/GetTablePlayerRecordMsgAck";
import { GetTableRoundRecordMsg } from "../msg/GetTableRoundRecordMsg";
import { GetTableRoundRecordMsgAck } from "../msg/GetTableRoundRecordMsgAck";
import { GetYLGYGameRankMsgAck } from "../msg/GetYLGYGameRankMsgAck";
import { GuessGameJackPotMsgAck } from "../msg/GuessGameJackPotMsgAck";
import { GuessGamePlayerRankMsg } from "../msg/GuessGamePlayerRankMsg";
import { GuessGamePlayerRankMsgAck } from "../msg/GuessGamePlayerRankMsgAck";
import { GuessGamePlayerRecordMsg } from "../msg/GuessGamePlayerRecordMsg";
import { GuessGamePlayerRecordMsgAck } from "../msg/GuessGamePlayerRecordMsgAck";
import { GuessGamePlayerTodayWinMsg } from "../msg/GuessGamePlayerTodayWinMsg";
import { GuessGamePlayerTodayWinMsgAck } from "../msg/GuessGamePlayerTodayWinMsgAck";
import { GuessGameResultMsgAck } from "../msg/GuessGameResultMsgAck";
import { GuessGameStakeMsg } from "../msg/GuessGameStakeMsg";
import { GuessGameStakeMsgAck } from "../msg/GuessGameStakeMsgAck";
import { GuessGameStatusMsgAck } from "../msg/GuessGameStatusMsgAck";
import { IntoGameTableMsgAck } from "../msg/IntoGameTableMsgAck";
import { IntoSnakeGameHallMsgAck } from "../msg/IntoSnakeGameHallMsgAck";
import { IntoSuperWinGameHallMsgAck } from "../msg/IntoSuperWinGameHallMsgAck";
import { IntoYLGYGameHallMsgAck } from "../msg/IntoYLGYGameHallMsgAck";
import { JoinGameTableMsg } from "../msg/JoinGameTableMsg";
import { LoginMsgAck } from "../msg/LoginMsgAck";
import { NewShowTipMsgAck } from "../msg/NewShowTipMsgAck";
import { OtherLoginMsgAck } from "../msg/OtherLoginMsgAck";
import { PlayerLeaveTableMsg } from "../msg/PlayerLeaveTableMsg";
import { SingleGameResultMsgAck } from "../msg/SingleGameResultMsgAck";
import { SingleGameUsePropMsg } from "../msg/SingleGameUsePropMsg";
import { SingleGameUsePropMsgAck } from "../msg/SingleGameUsePropMsgAck";
import { SuperWinGameOverResultMsgAck } from "../msg/SuperWinGameOverResultMsgAck";
import { SuperWinTableOverResultMsgAck } from "../msg/SuperWinTableOverResultMsgAck";
import { UpdatePlayerMsgAck } from "../msg/UpdatePlayerMsgAck";
import { UpdatePlayerPurseMsg } from "../msg/UpdatePlayerPurseMsg";
import { UpdatePlayerPurseMsgAck } from "../msg/UpdatePlayerPurseMsgAck";
import { MsgDispatcher } from "./MsgDispatcher";

export class MsgCmdConstant {


    public static readonly MSG_GATE_CLIENT_HEART: number = 0xa10001;
    public static readonly MSG_GATE_CLIENT_HEART_ACK: number = 0xa10002;
    /**
     * 客户端连接消息
     */
    public static readonly MSG_GATE_CLIENT_LINK: number = 0xa10003;
    public static readonly MSG_GATE_CLIENT_LINK_ACK: number = 0xa10004;


    public static readonly MSG_GAME_LOGIN: number = 0xc30001;
    public static readonly MSG_GAME_LOGIN_ACK: number = 0xc30023;

    public static readonly MSG_GAME_UPDATE_PLAYER_ACK: number = 0xc30002;



    // 登录大厅
    public static readonly MSG_INTO_GAME_HALL: number = 0xd10000;

    /**获取大厅信息 */
    public static readonly MSG_INTO_YLGY_GAME_HALL_ACK: number = 0xd10001;

    /**更新游戏状态 */
    public static readonly MSG_SINGLE_GAME_STATUS: number = 0xd10002;

    /** 游戏结果响应  */
    public static readonly MSG_SINGLE_GAME_RESULT_ACK: number = 0xd10003;


    /** 房间桌子信息响应 */
    public static readonly MSG_INTO_GAME_TABLE_ACK: number = 0xd50004;

    /** 道具 */
    public static readonly MSG_SINGLE_GAME_USE_PROP: number = 0xd10008;

    /**道具响应 */
    public static readonly MSG_SINGLE_GAME_USE_PROP_ACK: number = 0xd10009;

    /** 排行榜 */
    public static readonly MSG_GET_YLGY_GAME_RANK: number = 0xd10004;

    /** 排行榜响应 */
    public static readonly MSG_GET_YLGY_GAME_RANK_ACK: number = 0xd10005;

    /** 头像 */
    public static readonly MSG_GET_GAME_HALL_AVATAR_URL: number = 0xd10006;

    /** 头像响应 */
    public static readonly MSG_GET_GAME_HALL_AVATAR_ACK: number = 0xd10007;

    /** 处理顶号逻辑 */
    public static readonly MSG_GAME_OTHER_LOGIN_ACK: number = 0xc30205;

    /** Snake 进入大厅 */
    public static readonly MSG_INTO_SNAKE_GAME_HALL_ACK: number = 0xd10010;

    /** Snake 发送获取ai信息的消息 */
    public static readonly MSG_GET_GAME_NICK_AVATAR: number = 0xd10015;

    /** snake 获取ai信息  */
    public static readonly MSG_GET_GAME_NICK_AVATAR_ACK: number = 0xd10016;

    /** snake 上报蛇的得分 */
    public static readonly MSG_SNAKE_GAME_RESULT: number = 0xd10011;

    /** snake 发送获取蛇的排行榜信息 */
    public static readonly MSG_GET_SNAKE_GAME_RANK: number = 0xd10013;

    /** snake 排行榜信息 */
    public static readonly MSG_GET_SNAKE_GAME_RANK_ACK: number = 0xd10014;



    /** 竞猜游戏  发送更新账户信息  */
    public static readonly MSG_UPDATE_PLAYER_PURSE: number = 0xd49999;

    /** 竞猜游戏  接收账户信息 */
    public static readonly MSG_UPDATE_PLAYER_PURSE_ACK: number = 0xd50000;

    /** 竞猜游戏 接收桌子信息 */
    public static readonly MSG_GUESS_GAME_STATUS_ACK: number = 0xd10020;

    /** 竞猜游戏  发送下注信息  */
    public static readonly MSG_GUESS_GAME_STAKE: number = 0xd10021;

    /** 竞猜游戏  接收下注信息  */
    public static readonly MSG_GUESS_STAKE_GAME_ACK: number = 0xd10022;

    /** 竞猜游戏  接收游戏结果 */
    public static readonly MSG_GUESS_GAME_RESULT_ACK: number = 0xd10023;

    /** 竞猜游戏  发送获取排行榜信息 */
    public static readonly MSG_GUESS_GAME_PLAYER_RANK: number = 0xd10024;

    /** 竞猜游戏  接收排行榜信息 */
    public static readonly MSG_GUESS_GAME_PLAYER_RANK_ACK: number = 0xd10025;

    /** 竞猜游戏  发送获取用户下注记录信息*/
    public static readonly MSG_GUESS_GAME_PLAYER_RECORD: number = 0xd10026;

    /** 竞猜游戏  接收用户下注记录信息 */
    public static readonly MSG_GUESS_GAME_PLAYER_RECORD_ACK: number = 0xd10027;

    /** 竞猜游戏 发送更新今日赢得金币信息 */
    public static readonly MSG_GUESS_GAME_PLAYER_TODAY_WIN: number = 0xd10028;

    /** 竞猜游戏 接收今日赢得金币信息 */
    public static readonly MSG_GUESS_GAME_PLAYER_TODAY_WIN_ACK: number = 0xd10029;

    /** 竞猜游戏 jackpot 返回 */
    public static readonly MSG_GUESS_GAME_JACKPOT_ACK: number = 0xd10019;

    /** 竞猜游戏 返回小局记录 */
    public static readonly MSG_GET_TABLE_ROUND_ACK: number = 0xd30007;

     /** 竞猜游戏 发送获取返回小局记录的信息*/
     public static readonly MSG_GET_TABLE_ROUND_RECORD: number = 0xd30006;


    /** 转盘游戏 接收登录大厅的响应 */
    public static readonly MSG_INTO_SUPER_WIM_GAME_HALL_ACK: number = 0xd10030;

    /** 转盘游戏  玩家创建游戏 */
    public static readonly MSG_CREATE_GAME_TABLE: number = 0xd50001;

    /** 转盘游戏 开始游戏 */
    public static readonly MSG_GAME_TABLE_BEGIN: number = 0xd55132;

    /** 转盘游戏  加入游戏 */
    public static readonly MSG_JOIN_GAME_TABLE: number = 0xd50002;

    /** 转盘游戏 玩家离开座位 */
    public static readonly MSG_PLAYER_LEAVE_TABLE: number = 0xd50022;

    /** 转盘游戏 玩家离开桌子的响应 */
    public static readonly MSG_GAME_PLAYER_LEAVE_TABLE_ACK: number = 0xd50023;

    /**转盘游戏 游戏玩家的数据变化 */
    public static readonly MSG_GAME_PLAYER_INFO_CHANGE_ACK: number = 0xd50024;

    /** 转盘游戏 单局结果 */
    public static readonly MSG_SUPER_WIN_GAME_OVER_RESULT_ACK: number = 0xd10031;

    /** 转盘游戏 桌子解散 */
    public static readonly MSG_SUPER_WIN_TABLE_OVER_RESULT_ACK: number = 0xd10032;

    /** 转盘游戏 获取排行榜 */
    public static readonly MSG_GET_GAME_RANK: number = 0xd30004;

    /** 转盘游戏 获取排行榜的响应 */
    public static readonly MSG_GET_GAME_RANK_ACK: number = 0xd30005;

    /** 转盘游戏 获取个人记录 */
    public static readonly MSG_GET_TABLE_PLAYER_RECORD: number = 0xd30000;

    /** 转盘游戏 获取个人记录的响应 */
    public static readonly MSG_GET_TABLE_PLAYER_RECORD_ACK: number = 0xd30001;

    /** 转盘游戏 解散桌子 */
    public static readonly MSG_DISMISS_GAME_TABLE: number = 0xd58827;











    /** 新显示tip消息，可以单独发送，也有可能会附带在其他的返回消息中 */
    public static readonly MSG_SHOW_TIP_MSG_ACK: number = 0xd59999;

    public static readonly GET_GAME_ITEM_LIST_MSG: number = 0xc40001; //
    public static readonly GET_GAME_ITEM_LIST_MSG_ACK: number = 0xc40002; //

    public static readonly GET_GAME_ITEM_MSG: number = 0xc40003; //
    public static readonly GET_GAME_ITEM_MSG_ACK: number = 0xc40004; //

    public static readonly GAME_STATUS_NOTICE_MSG: number = 0xc40005; // 游戏状态通知
    public static readonly GAME_STATUS_NOTICE_MSG_ACK: number = 0xc40006;

    public static readonly GAME_USE_PROP_MSG: number = 0xc40007; //
    public static readonly GAME_USE_PROP_MSG_ACK: number = 0xc40008;

    // public static readonly GET_GAME_RANK_MSG: number = 0xc40009; //
    // public static readonly GET_GAME_RANK_MSG_ACK: number = 0xc40010;


    public static registerAllMsgAck() {

        let cmdMsgMap = MsgDispatcher._cmdMsgMap;
        // this._msgList[0] 
        cmdMsgMap.set(MsgCmdConstant.MSG_GAME_UPDATE_PLAYER_ACK, UpdatePlayerMsgAck);
        cmdMsgMap.set(MsgCmdConstant.MSG_GATE_CLIENT_LINK_ACK, ClientLinkMsgAck);
        cmdMsgMap.set(MsgCmdConstant.MSG_GATE_CLIENT_HEART_ACK, ClientHeartMsgAck);
        cmdMsgMap.set(MsgCmdConstant.MSG_GAME_LOGIN_ACK, LoginMsgAck);
        cmdMsgMap.set(MsgCmdConstant.MSG_SHOW_TIP_MSG_ACK, NewShowTipMsgAck);
        cmdMsgMap.set(MsgCmdConstant.GAME_STATUS_NOTICE_MSG_ACK, GameStatusNoticeMsgAck);
        cmdMsgMap.set(MsgCmdConstant.GAME_USE_PROP_MSG_ACK, GameUsePropMsgAck);

        cmdMsgMap.set(MsgCmdConstant.MSG_INTO_YLGY_GAME_HALL_ACK, IntoYLGYGameHallMsgAck);
        cmdMsgMap.set(MsgCmdConstant.MSG_INTO_GAME_TABLE_ACK, IntoGameTableMsgAck);
        cmdMsgMap.set(MsgCmdConstant.MSG_SINGLE_GAME_RESULT_ACK, SingleGameResultMsgAck);
        cmdMsgMap.set(MsgCmdConstant.MSG_SINGLE_GAME_USE_PROP, SingleGameUsePropMsg);
        cmdMsgMap.set(MsgCmdConstant.MSG_SINGLE_GAME_USE_PROP_ACK, SingleGameUsePropMsgAck);
        cmdMsgMap.set(MsgCmdConstant.MSG_GET_YLGY_GAME_RANK_ACK, GetYLGYGameRankMsgAck);
        cmdMsgMap.set(MsgCmdConstant.MSG_GET_GAME_HALL_AVATAR_ACK, GetGameHallAvatarMsgAck);
        cmdMsgMap.set(MsgCmdConstant.MSG_GAME_OTHER_LOGIN_ACK, OtherLoginMsgAck);
        cmdMsgMap.set(MsgCmdConstant.MSG_INTO_SNAKE_GAME_HALL_ACK, IntoSnakeGameHallMsgAck);
        cmdMsgMap.set(MsgCmdConstant.MSG_GET_GAME_NICK_AVATAR, GetGameNickAvatarMsg);
        cmdMsgMap.set(MsgCmdConstant.MSG_GET_GAME_NICK_AVATAR_ACK, GetGameNickAvatarMsgAck);
        cmdMsgMap.set(MsgCmdConstant.MSG_SNAKE_GAME_RESULT, GetSnakeGameResultMsg);
        cmdMsgMap.set(MsgCmdConstant.MSG_GET_SNAKE_GAME_RANK, GetSnakeGameRankMsg);
        cmdMsgMap.set(MsgCmdConstant.MSG_GET_SNAKE_GAME_RANK_ACK, GetSnakeGameRankMsgAck);
        cmdMsgMap.set(MsgCmdConstant.MSG_GUESS_GAME_STATUS_ACK, GuessGameStatusMsgAck);
        cmdMsgMap.set(MsgCmdConstant.MSG_GUESS_GAME_STAKE, GuessGameStakeMsg);
        cmdMsgMap.set(MsgCmdConstant.MSG_GUESS_STAKE_GAME_ACK, GuessGameStakeMsgAck);
        cmdMsgMap.set(MsgCmdConstant.MSG_UPDATE_PLAYER_PURSE, UpdatePlayerPurseMsg);
        cmdMsgMap.set(MsgCmdConstant.MSG_UPDATE_PLAYER_PURSE_ACK, UpdatePlayerPurseMsgAck);

        cmdMsgMap.set(MsgCmdConstant.MSG_GUESS_GAME_RESULT_ACK, GuessGameResultMsgAck);
        cmdMsgMap.set(MsgCmdConstant.MSG_GUESS_GAME_PLAYER_TODAY_WIN, GuessGamePlayerTodayWinMsg);
        cmdMsgMap.set(MsgCmdConstant.MSG_GUESS_GAME_PLAYER_TODAY_WIN_ACK, GuessGamePlayerTodayWinMsgAck);
        cmdMsgMap.set(MsgCmdConstant.MSG_GUESS_GAME_PLAYER_RANK, GuessGamePlayerRankMsg);
        cmdMsgMap.set(MsgCmdConstant.MSG_GUESS_GAME_PLAYER_RANK_ACK, GuessGamePlayerRankMsgAck);
        cmdMsgMap.set(MsgCmdConstant.MSG_GUESS_GAME_PLAYER_RECORD, GuessGamePlayerRecordMsg);
        cmdMsgMap.set(MsgCmdConstant.MSG_GUESS_GAME_PLAYER_RECORD_ACK, GuessGamePlayerRecordMsgAck);
        cmdMsgMap.set(MsgCmdConstant.MSG_GUESS_GAME_JACKPOT_ACK, GuessGameJackPotMsgAck);
        cmdMsgMap.set(MsgCmdConstant.MSG_GET_TABLE_ROUND_ACK, GetTableRoundRecordMsgAck);
        cmdMsgMap.set(MsgCmdConstant.MSG_GET_TABLE_ROUND_RECORD, GetTableRoundRecordMsg);

        

        cmdMsgMap.set(MsgCmdConstant.MSG_INTO_SUPER_WIM_GAME_HALL_ACK, IntoSuperWinGameHallMsgAck);
        cmdMsgMap.set(MsgCmdConstant.MSG_CREATE_GAME_TABLE, CreateGameTableMsg);
        cmdMsgMap.set(MsgCmdConstant.MSG_PLAYER_LEAVE_TABLE, PlayerLeaveTableMsg);
        cmdMsgMap.set(MsgCmdConstant.MSG_GAME_PLAYER_LEAVE_TABLE_ACK, GamePlayerLeaveTableMsgAck);
        cmdMsgMap.set(MsgCmdConstant.MSG_GAME_PLAYER_INFO_CHANGE_ACK, GamePlayerInfoChangeMsgAck);
        cmdMsgMap.set(MsgCmdConstant.MSG_GAME_TABLE_BEGIN, GameTableBeginMsg);
        cmdMsgMap.set(MsgCmdConstant.MSG_JOIN_GAME_TABLE, JoinGameTableMsg);
        cmdMsgMap.set(MsgCmdConstant.MSG_SUPER_WIN_GAME_OVER_RESULT_ACK, SuperWinGameOverResultMsgAck);
        cmdMsgMap.set(MsgCmdConstant.MSG_SUPER_WIN_TABLE_OVER_RESULT_ACK, SuperWinTableOverResultMsgAck);
        cmdMsgMap.set(MsgCmdConstant.MSG_GET_GAME_RANK, GetGameRankMsg);
        cmdMsgMap.set(MsgCmdConstant.MSG_GET_GAME_RANK_ACK, GetGameRankMsgAck);
        cmdMsgMap.set(MsgCmdConstant.MSG_GET_TABLE_PLAYER_RECORD, GetTablePlayerRecordMsg);
        cmdMsgMap.set(MsgCmdConstant.MSG_GET_TABLE_PLAYER_RECORD_ACK, GetTablePlayerRecordMsgAck);
        cmdMsgMap.set(MsgCmdConstant.MSG_DISMISS_GAME_TABLE, DismissGameTableMsg);
        // cmdMsgMap.set(MsgCmdConstant.MSG_INTO_GAME_TABLE_ACK)
    }


}