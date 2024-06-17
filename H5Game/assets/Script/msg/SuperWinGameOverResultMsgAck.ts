
/**
 * @author:
 * @date:
 * @name:
 */

import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

export class SuperWinGameOverResultMsgAck extends NetMsgBase {

    private outPlayerId: dcodeIO.Long;

    constructor() {
        super(MsgCmdConstant.MSG_SUPER_WIN_GAME_OVER_RESULT_ACK);
    }
    // public SuperWinGameOverResultMsgAck() {
    //     msgCMD = MsgCmdConstant.MSG_SUPER_WIN_GAME_OVER_RESULT_ACK; // 0xd10031
    // }

    public serialize(ar: ObjectSerializer): void {
        super.serialize(ar);
        this.outPlayerId = ar.sLong(this.outPlayerId);
    }

}
