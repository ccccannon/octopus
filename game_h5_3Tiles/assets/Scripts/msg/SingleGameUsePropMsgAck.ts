import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

export class SingleGameUsePropMsgAck extends NetMsgBase {
    public propJson: string;
    public type: number;

    constructor() {
        super(MsgCmdConstant.MSG_SINGLE_GAME_USE_PROP_ACK);
    }


    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.type = ar.sInt(this.type);
        this.propJson = ar.sString(this.propJson);
    }


}