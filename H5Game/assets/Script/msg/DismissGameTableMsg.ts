import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

/**
 * 解散桌子协议
 */
export class DismissGameTableMsg extends NetMsgBase {

    // public DismissGameTableMsg() {
    //     msgCMD = MsgCmdConstant.MSG_DISMISS_GAME_TABLE; // 0xd58827
    // }

    constructor() {
        super(MsgCmdConstant.MSG_DISMISS_GAME_TABLE);
    }

    public serialize(ar: ObjectSerializer): void {
        super.serialize(ar);
    }

}