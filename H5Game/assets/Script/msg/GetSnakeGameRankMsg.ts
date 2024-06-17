import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

export class GetSnakeGameRankMsg extends NetMsgBase {
    public gameId: number;
    public pageNum: number = 1;
    public pageSize: number = 10;
    constructor() {
        super(MsgCmdConstant.MSG_GET_SNAKE_GAME_RANK);
        // msgCMD = MsgCmdConstant.MSG_GET_SNAKE_GAME_RANK; // 0xd10013
    }


    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.gameId = ar.sInt(this.gameId);
        this.pageNum = ar.sInt(this.pageNum);
        this.pageSize = ar.sInt(this.pageSize);
    }

}
