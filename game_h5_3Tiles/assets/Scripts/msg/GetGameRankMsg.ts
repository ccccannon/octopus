import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

export class GetGameRankMsg extends NetMsgBase {


    public pageNum = 1;
    public pageSize = 10;


    constructor() {
        super(MsgCmdConstant.GET_GAME_RANK_MSG);
    }

    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.pageNum = ar.sInt(this.pageNum);
        this.pageSize = ar.sInt(this.pageSize);
    }
}