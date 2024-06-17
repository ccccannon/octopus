import { RankItem } from "../domain/RankItem";
import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";


export class GetGameRankMsgAck extends NetMsgBase {

    public rankItems: Array<RankItem>;

    private myRankItem: RankItem;

    public limit: number;

    public gameId: number;

    constructor() {
        super(MsgCmdConstant.MSG_GET_GAME_RANK_ACK);//0xd30005
    }

    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.rankItems = ar.sSubObjArray(this.rankItems, RankItem);
        this.myRankItem = ar.sObject(this.myRankItem, RankItem);
        this.limit = ar.sInt(this.limit);
        this.gameId = ar.sInt(this.gameId);
    }
}