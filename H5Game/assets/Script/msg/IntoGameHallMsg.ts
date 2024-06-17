import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

/**
 * @Author: Levi
 * @Date: 2023/6/8
 * @Description: 进入游戏大厅请求
 */
export class IntoGameHallMsg extends NetMsgBase {

    public userId: dcodeIO.Long;

    public gameId: number;

    public roomUid: dcodeIO.Long;

    constructor() {
        super(MsgCmdConstant.MSG_INTO_GAME_HALL);
    }

    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.userId = ar.sLong(this.userId);
        this.gameId = ar.sInt(this.gameId);
        this.roomUid = ar.sLong(this.roomUid);
    }

}
