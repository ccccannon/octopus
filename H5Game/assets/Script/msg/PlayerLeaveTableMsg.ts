import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";
import { Player } from "../domain/Player";

/**
 * 离开房间，不需要参数
 * 
 * @author LiChong
 * 
 */
export class PlayerLeaveTableMsg extends NetMsgBase {

    /**
     * LeaveFlagConstant   3 房间解散  5站起
     */
    public leaveFlag: number = 0;

    // public player: Player;

    constructor() {
        super(MsgCmdConstant.MSG_PLAYER_LEAVE_TABLE);
    }

    // public PlayerLeaveTableMsg() {
    //     msgCMD = MsgCmdConstant.MSG_PLAYER_LEAVE_TABLE; // 0xd50022
    // }

    // @Override
    public serialize(ar: ObjectSerializer): void {
        super.serialize(ar);
        this.leaveFlag = ar.sInt(this.leaveFlag);
    }

}
