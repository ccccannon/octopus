import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";


export class GameStatusNoticeMsgAck extends NetMsgBase {


    public statusType : number;

    public faceType : number;

    public okTime : number;

    constructor() {
        super(MsgCmdConstant.GAME_STATUS_NOTICE_MSG_ACK)
    }

    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.statusType = ar.sInt(this.statusType);
        this.faceType = ar.sInt(this.faceType);
        this.okTime = ar.sInt(this.okTime);
    }
}