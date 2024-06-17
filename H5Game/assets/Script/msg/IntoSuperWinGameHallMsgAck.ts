import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

export class IntoSuperWinGameHallMsgAck extends NetMsgBase {

    private config: string; //报名费信息

    constructor() {
        super(MsgCmdConstant.MSG_INTO_SUPER_WIM_GAME_HALL_ACK);
    }

    // public IntoSuperWinGameHallMsgAck() {
    //     msgCMD = MsgCmdConstant.MSG_INTO_SUPER_WIM_GAME_HALL_ACK; // 0xd10030
    // }

    public serialize(ar: ObjectSerializer): void {
        super.serialize(ar);
        this.config = ar.sString(this.config);
    }

}