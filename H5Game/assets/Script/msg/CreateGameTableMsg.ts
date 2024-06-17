/**
 * 创建房间
 *
 * @author LiChong
 */

import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

export class CreateGameTableMsg extends NetMsgBase {
    /**
     * 消耗单位，局数或者分钟，根据tableType确定
     */
    public totalConsume: number;

    /**
     * 主玩法
     */
    public gameId: number = 0;

    /**
     * 子玩法
     */
    public subGamePlayRuleList: Array<number>;

    public subGamePlayJsonFields: string;

    /**
     * 玩家人数
     */
    public playerMaxNum: number = 0;

    /**
     * 创建类型，0代表普通
     */
    public createType: number = 0;


    /**
     * 房间uid
     */
    public roomUid: dcodeIO.Long;

    /**
     * 是否在mic上
     */
    public isOnMic: boolean;

    constructor() {
        super(MsgCmdConstant.MSG_CREATE_GAME_TABLE);
    }

    // public CreateGameTableMsg() {
    //     msgCMD = MsgCmdConstant.MSG_CREATE_GAME_TABLE; // 0xd50001
    // }


    public serialize(ar: ObjectSerializer): void {
        super.serialize(ar);
        this.totalConsume = ar.sInt(this.totalConsume);
        this.playerMaxNum = ar.sInt(this.playerMaxNum);
        this.gameId = ar.sInt(this.gameId);
        this.subGamePlayRuleList = ar.sIntArray(this.subGamePlayRuleList);
        this.subGamePlayJsonFields = ar.sString(this.subGamePlayJsonFields);
        this.createType = ar.sInt(this.createType);
        this.roomUid = ar.sLong(this.roomUid);
        this.isOnMic = ar.sBoolean(this.isOnMic);
       
    }

}