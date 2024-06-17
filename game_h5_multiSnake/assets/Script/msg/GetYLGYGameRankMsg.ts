import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

/**
 * @author: Levi
 * @date: 2022-09-16
 * @description:
 **/
export class GetYLGYGameRankMsg extends NetMsgBase {

    public gameId: number;
    public pageNum: number = 1;
    public pageSize: number = 10;
    // 排行榜类型 0 朋友 1 房间 2 国家
    public rankType: number;

    constructor() {
        super(MsgCmdConstant.MSG_GET_YLGY_GAME_RANK);
    }

    // public GetYLGYGameRankMsg() {
    //     msgCMD = MsgCmdConstant.MSG_GET_YLGY_GAME_RANK; // 0xd10004
    // }

    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.gameId = ar.sInt(this.gameId);
        this.pageNum = ar.sInt(this.pageNum);
        this.pageSize = ar.sInt(this.pageSize);
        this.rankType = ar.sInt(this.rankType);
    }


}
