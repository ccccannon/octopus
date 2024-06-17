import { RankItem } from "../domain/RankItem";
import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";


export class GetGameRankMsgAck extends NetMsgBase {

    public rankItemList: Array<RankItem>;

    public myRankItem: RankItem;

    public pageNum: number;

    public totalPage: number;

    constructor() {
        super(MsgCmdConstant.GET_GAME_RANK_MSG_ACK);
    }

    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.rankItemList = ar.sSubObjArray(this.rankItemList, RankItem);
        this.myRankItem = ar.sObject(this.myRankItem, RankItem);
        this.pageNum = ar.sInt(this.pageNum);
        this.totalPage = ar.sInt(this.totalPage);
    }
}