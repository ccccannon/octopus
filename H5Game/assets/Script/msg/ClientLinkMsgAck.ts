import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";


export class ClientLinkMsgAck extends NetMsgBase {

    /**
       * 0 成功 ，1 失败
       */
    public result: number;
    /**
     * 加密信息
     */
    public key: string = ""; // 秘钥
    public passKey: number = 0; // 秘钥和
    public passNum: number = 0; // 偏差

    constructor() {
        super(MsgCmdConstant.MSG_GATE_CLIENT_LINK_ACK);
    }

    public serialize(ar: ObjectSerializer): void {
        super.serialize(ar);
        let self = this;
        this.result = ar.sInt(this.result);
        this.key = ar.sString(this.key);
        this.passKey = ar.sInt(this.passKey);
        this.passNum = ar.sInt(this.passNum);
    }
}