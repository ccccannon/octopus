import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

/**
 * @author:
 * @date:
 * @name:
 */
export class GetGameHallAvatarMsgAck extends NetMsgBase {

    private avatars: Array<string>;
    private areaId: number;

    constructor() {
        super(MsgCmdConstant.MSG_GET_GAME_HALL_AVATAR_ACK);
    }

    // public GetGameHallAvatarMsgAck() {
    //     msgCMD = MsgCmdConstant.MSG_GET_GAME_HALL_AVATAR_ACK; // 0xd10007
    // }

    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.avatars = ar.sStringArray(this.avatars);
        this.areaId = ar.sInt(this.areaId);
    }
}
