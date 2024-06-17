
import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

/**
 * 心跳消息包
 **/
export class ClientHeartMsg extends NetMsgBase {

    public clientTime: dcodeIO.Long = dcodeIO.Long.ZERO;

    constructor() {
        super(MsgCmdConstant.MSG_GATE_CLIENT_HEART);
    }

    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.clientTime = ar.sLong(this.clientTime);
    }
}