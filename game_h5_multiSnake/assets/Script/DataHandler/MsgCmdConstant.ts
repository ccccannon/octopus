import { ClientHeartMsgAck } from "../msg/ClientHeartMsgAck";
import { ClientLinkMsgAck } from "../msg/ClientLinkMsgAck";
import { GameStatusNoticeMsgAck } from "../msg/GameStatusNoticeMsgAck";
import { GameUsePropMsgAck } from "../msg/GameUsePropMsgAck";
import { GetGameHallAvatarMsgAck } from "../msg/GetGameHallAvatarMsgAck";
import { GetGameNickAvatarMsg } from "../msg/GetGameNickAvatarMsg";
import { GetGameNickAvatarMsgAck } from "../msg/GetGameNickAvatarMsgAck";
import { GetGameRankMsgAck } from "../msg/GetGameRankMsgAck";
import { GetSnakeGameRankMsg } from "../msg/GetSnakeGameRankMsg";
import { GetSnakeGameRankMsgAck } from "../msg/GetSnakeGameRankMsgAck";
import GetSnakeGameResultMsg from "../msg/GetSnakeGameResultMsg";
import { GetYLGYGameRankMsgAck } from "../msg/GetYLGYGameRankMsgAck";
import { IntoGameTableMsgAck } from "../msg/IntoGameTableMsgAck";
import { IntoSnakeGameHallMsgAck } from "../msg/IntoSnakeGameHallMsgAck";
import { IntoYLGYGameHallMsgAck } from "../msg/IntoYLGYGameHallMsgAck";
import { LoginMsgAck } from "../msg/LoginMsgAck";
import { NewShowTipMsgAck } from "../msg/NewShowTipMsgAck";
import { OtherLoginMsgAck } from "../msg/OtherLoginMsgAck";
import { SingleGameResultMsgAck } from "../msg/SingleGameResultMsgAck";
import { SingleGameUsePropMsg } from "../msg/SingleGameUsePropMsg";
import { SingleGameUsePropMsgAck } from "../msg/SingleGameUsePropMsgAck";
import { UpdatePlayerMsgAck } from "../msg/UpdatePlayerMsgAck";
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

    public static readonly GET_GAME_RANK_MSG: number = 0xc40009; //
    public static readonly GET_GAME_RANK_MSG_ACK: number = 0xc40010;


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
        cmdMsgMap.set(MsgCmdConstant.GET_GAME_RANK_MSG_ACK, GetGameRankMsgAck);
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
        // cmdMsgMap.set(MsgCmdConstant.MSG_INTO_GAME_TABLE_ACK)
    }


}