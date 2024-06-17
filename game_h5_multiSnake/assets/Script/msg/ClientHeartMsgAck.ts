import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

/**
 * 心跳消息包
 */
export class ClientHeartMsgAck extends NetMsgBase {

    public serverTime: dcodeIO.Long = dcodeIO.Long.ZERO;

    public clientTime: dcodeIO.Long = dcodeIO.Long.ZERO;

    constructor() {
        super(MsgCmdConstant.MSG_GATE_CLIENT_HEART_ACK);
    }

    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.serverTime = ar.sLong(this.serverTime);
        this.clientTime = ar.sLong(this.clientTime);
    }

}