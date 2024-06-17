/**
 * @author:
 * @date:
 * @name:
 */

import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

export class SuperWinTableOverResultMsgAck extends NetMsgBase {

    private luckPlayerId: dcodeIO.Long;
    private winPlayerId: dcodeIO.Long;
    private luckGold: dcodeIO.Long;
    private bigWinGold: dcodeIO.Long;

    constructor(){
        super(MsgCmdConstant.MSG_SUPER_WIN_TABLE_OVER_RESULT_ACK);
    }
    // public SuperWinTableOverResultMsgAck() {
    //     msgCMD = MsgCmdConstant.MSG_SUPER_WIN_TABLE_OVER_RESULT_ACK; // 0xd10032
    // }

    public serialize(ar: ObjectSerializer): void {
        super.serialize(ar);
        this.luckPlayerId = ar.sLong(this.luckPlayerId);
        this.winPlayerId = ar.sLong(this.winPlayerId);
        this.luckGold = ar.sLong(this.luckGold);
        this.bigWinGold = ar.sLong(this.bigWinGold);
    }

}
