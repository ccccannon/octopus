import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";
import { RankItem } from "../domain/RankItem";

/**
 * @Author: Levi
 * @Date: 2023/10/26
 * @Description: 水果机jackpot游戏结果返回
 */
export class GuessGameJackPotMsgAck extends NetMsgBase {

    private rankItems: Array<RankItem>; // 前三名
    private jackPotWin: dcodeIO.Long = dcodeIO.Long.fromNumber(-1); //我的中奖金币 -1代表没参与  0 代表没中奖

    constructor() {
        super(MsgCmdConstant.MSG_GUESS_GAME_JACKPOT_ACK);
    }
    // public GuessGameJackPotMsgAck() {
    //     msgCMD = MsgCmdConstant.MSG_GUESS_GAME_JACKPOT_ACK;// 0xd10019
    // }

    public serialize(ar: ObjectSerializer): void {
        super.serialize(ar);
        this.rankItems = ar.sObjArray(this.rankItems, RankItem);
        this.jackPotWin = ar.sLong(this.jackPotWin);
    }
}
