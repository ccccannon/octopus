import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";
import { YLGYRankItem } from "../domain/YLGYRankItem";

/**
 * @author: Levi
 * @date: 2022-09-16
 * @description:
 **/
export class GetYLGYGameRankMsgAck extends NetMsgBase {

    private YLGYRankItemList: Array<YLGYRankItem>;

    private myYLGYRankItem: YLGYRankItem;

    private pageNum: number;

    private totalPage: number;

    private rankType: number

    constructor() {
        super(MsgCmdConstant.MSG_GET_YLGY_GAME_RANK_ACK);
    }

    // public GetYLGYGameRankMsgAck() {
    //     msgCMD = MsgCmdConstant.MSG_GET_YLGY_GAME_RANK_ACK; // 0xd10005
    // }

    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.YLGYRankItemList = ar.sSubObjArray(this.YLGYRankItemList, YLGYRankItem);
        this.myYLGYRankItem = ar.sObject(this.myYLGYRankItem, YLGYRankItem);
        this.pageNum = ar.sInt(this.pageNum);
        this.totalPage = ar.sInt(this.totalPage);
        this.rankType = ar.sInt(this.rankType);
    }


}
