import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";


export class ClientLinkMsg extends NetMsgBase{


    constructor() {
        super(MsgCmdConstant.MSG_GATE_CLIENT_LINK);
    }

    public serialize(ar:ObjectSerializer):void {
        // debugger
        super.serialize(ar);
        let self = this;
        
    }
}