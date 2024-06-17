import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";



export class IntoSnakeGameHallMsgAck extends NetMsgBase {


    private myRecord: dcodeIO.Long;  // 我的最高记录

    private maxRecord: dcodeIO.Long; // 无尽模式最高记录

    constructor() {

        super(MsgCmdConstant.MSG_INTO_SNAKE_GAME_HALL_ACK);

        // msgCMD = MsgCmdConstant.MSG_INTO_SNAKE_GAME_HALL_ACK; // 0xd10010
    }

    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.myRecord = ar.sLong(this.myRecord);
        this.maxRecord = ar.sLong(this.maxRecord);

    }
}


