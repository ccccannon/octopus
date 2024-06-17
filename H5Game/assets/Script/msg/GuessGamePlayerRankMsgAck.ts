import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";
import { RankItem } from "../domain/RankItem";

/**
 * @Date: 2023/9/5
 * @Description: 水果机游戏结果返回
 */
export class GuessGamePlayerRankMsgAck extends NetMsgBase {

    private rankItems: Array<RankItem>;

    constructor() {
        super(MsgCmdConstant.MSG_GUESS_GAME_PLAYER_RANK_ACK);
    }

    // public GuessGamePlayerRankMsgAck() {
    //     msgCMD = MsgCmdConstant.MSG_GUESS_GAME_PLAYER_RANK_ACK;// 0xd10025
    // }


    public serialize(ar: ObjectSerializer): void {
        super.serialize(ar);
        this.rankItems = ar.sObjArray(this.rankItems, RankItem);
    }
}
