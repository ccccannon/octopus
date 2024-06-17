import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";
import { SnakeRankItem } from "../domain/SnakeRankItem";

export class GetSnakeGameRankMsgAck extends NetMsgBase {

    private snakeRankItemList: Array<SnakeRankItem>;

    private pageNum: number;

    private totalPage: number;

    constructor() {
        super(MsgCmdConstant.MSG_GET_SNAKE_GAME_RANK_ACK);
        // msgCMD = MsgCmdConstant.MSG_GET_SNAKE_GAME_RANK_ACK; // 0xd10014
    }


    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.snakeRankItemList = ar.sSubObjArray(this.snakeRankItemList, SnakeRankItem);
        this.pageNum = ar.sInt(this.pageNum);
        this.totalPage = ar.sInt(this.totalPage);
    }


}
