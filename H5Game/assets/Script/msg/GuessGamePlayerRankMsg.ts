import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

/**
 * @Date: 2023/9/5
 * @Description:水果机排行榜记录
 */
export class GuessGamePlayerRankMsg extends NetMsgBase {

    public gameId: number;

    constructor() {
        super(MsgCmdConstant.MSG_GUESS_GAME_PLAYER_RANK);
    }

    // public GuessGamePlayerRankMsg() {
    //     msgThreadEnum = MsgThreadEnum.ASYNC_IO;
    //     msgCMD = MsgCmdConstant.MSG_GUESS_GAME_PLAYER_RANK; // 0xd10024
    // }
    public serialize(ar: ObjectSerializer): void {
        super.serialize(ar);
        this.gameId = ar.sInt(this.gameId);
    }
}