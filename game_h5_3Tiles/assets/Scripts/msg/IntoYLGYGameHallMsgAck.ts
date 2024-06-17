import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";
import { YLGYHallItem } from "../domain/YLGYHallItem";

/**
 * @author:
 * @date:
 * @name:
 *  返回大厅的信息
 * 
 */
export class IntoYLGYGameHallMsgAck extends NetMsgBase {

    public items: Array<YLGYHallItem>;

    public myRank: number = -1;

    public winnersName: Array<string>;

    constructor() {
        super(MsgCmdConstant.MSG_INTO_YLGY_GAME_HALL_ACK);
    }

    // public IntoYLGYGameHallMsgAck() {
    //     msgCMD = MsgCmdConstant.MSG_INTO_YLGY_GAME_HALL_ACK; // 0xd10001
    // }

    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.items = ar.sObjArray(this.items, YLGYHallItem);
        this.myRank = ar.sInt(this.myRank);
        this.winnersName = ar.sStringArray(this.winnersName);
    }

}
