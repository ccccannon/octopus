import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

/**
 * 离开房间消息回复，如果玩家座位是自己，则返回大厅，如果state是-1，则牌桌中删除该玩家，否则标记为离线状态
 *
 * @author Levi
 */
export class GamePlayerLeaveTableMsgAck extends NetMsgBase {

    /**
     * 离开标识
     */
    private leaveFlag: number;

    /**
     * 玩家id
     */
    private playerId: dcodeIO.Long;

    constructor() {
        super(MsgCmdConstant.MSG_GAME_PLAYER_LEAVE_TABLE_ACK);
    }

    // public GamePlayerLeaveTableMsgAck() {
    //     this.msgCMD = MsgCmdConstant.MSG_GAME_PLAYER_LEAVE_TABLE_ACK; // 0xd50023
    // }


    public serialize(ar: ObjectSerializer): void {
        super.serialize(ar);
        this.leaveFlag = ar.sInt(this.leaveFlag);
        this.playerId = ar.sLong(this.playerId);
    }

}
