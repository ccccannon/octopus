import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";
import { RankItem } from "../domain/RankItem";

/**
 * @Date: 2023/9/12
 * @Description: 水果机游戏结果返回
 */
export class GuessGameResultMsgAck extends NetMsgBase {

    private rankItems: Array<RankItem>; // 前三名
    private winGold: dcodeIO.Long = dcodeIO.Long.fromNumber(-1); //我的中奖金币 -1代表没参与  0 代表没中奖
    private result: number; // 开奖结果
    private random: number; // 随机数
    private gameId:number;//游戏id

    constructor() {
        super(MsgCmdConstant.MSG_GUESS_GAME_RESULT_ACK);
    }

    // public GuessGameResultMsgAck() {
    //     msgCMD = MsgCmdConstant.MSG_GUESS_GAME_RESULT_ACK;// 0xd10023
    // }

    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.rankItems = ar.sObjArray(this.rankItems, RankItem);
        this.winGold = ar.sLong(this.winGold);
        this.result = ar.sInt(this.result);
        this.random = ar.sInt(this.random);
        this.gameId = ar.sInt(this.gameId);
    }
}
