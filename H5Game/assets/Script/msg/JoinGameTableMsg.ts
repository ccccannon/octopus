/**
 * 加入房间
 *
 * @author LiChong
 */

import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

export class JoinGameTableMsg extends NetMsgBase {

    /**
     * 位置
     */
    public tablePos: number = -1;


    /**
     * IntoTypeConstant  默认0  坐下2
     */
    public intoType: number;


    constructor() {
        super(MsgCmdConstant.MSG_JOIN_GAME_TABLE);
    }


    // public JoinGameTableMsg() {
    //     msgCMD = MsgCmdConstant.MSG_JOIN_GAME_TABLE;  // 0xd50002
    // }


    public serialize(ar: ObjectSerializer): void {
        super.serialize(ar);
        this.intoType = ar.sInt(this.intoType);
        this.tablePos = ar.sInt(this.tablePos);
    }


}