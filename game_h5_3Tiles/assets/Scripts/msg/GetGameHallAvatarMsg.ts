import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

/**
 * @Author: Levi
 * @Date: 2023/6/8
 * @Description: 进入游戏大厅请求
 */
export class GetGameHallAvatarMsg extends NetMsgBase {

    public areaId: number;

    public gameId: number;

    constructor() {
        super(MsgCmdConstant.MSG_GET_GAME_HALL_AVATAR_URL);
    }
    // public GetGameHallAvatarMsg() {
    //     msgCMD = MsgCmdConstant.MSG_GET_GAME_HALL_AVATAR_URL; // 0xd10006
    // }


    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.areaId = ar.sInt(this.areaId);
        this.gameId = ar.sInt(this.gameId);
    }

}
