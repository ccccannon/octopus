import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

export class GameStatusNoticeMsg extends NetMsgBase {

    public statusType : number;

    constructor() {
        super(MsgCmdConstant.GAME_STATUS_NOTICE_MSG)
    }

    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.statusType = ar.sInt(this.statusType);
    }
}