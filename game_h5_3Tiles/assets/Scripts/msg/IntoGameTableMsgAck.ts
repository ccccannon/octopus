import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";
import { GamePlayer } from "../domain/GamePlayer";

export class IntoGameTableMsgAck extends NetMsgBase {

    /**
     * 我的桌子位置
     */
    public tablePos: number = 0;


    /**
 * 玩家列表
 */
    public gamePlayers: Array<GamePlayer> = null;


    /**
     * 总消耗  局数  时间
     */
    public totalConsume: number = 0;

    /**
 * 当前消耗  局数  时间
 */
    public currConsume: number = 0;


    /**
        * 主玩法
        */
    public gameId: number = 0;

    /**
    * 玩家人数
    */
    public playersNum: number = 0;

    /**
      * 子玩法输入项
      */
    public subGamePlayJsonFields: string = "";

    /**
     * 房间类型
     */
    public roomType: number;

    /**
     * 创建时间
     */
    public createTime: Date;


    constructor() {
        super(MsgCmdConstant.MSG_INTO_GAME_TABLE_ACK);
    }

    // public IntoGameTableMsgAck() {
    //     this.msgCMD = MsgCmdConstant.MSG_INTO_GAME_TABLE_ACK;
    // } //0xd50004

    public serialize(ar: ObjectSerializer): void {
        super.serialize(ar);
        this.tablePos = ar.sByte(this.tablePos);
        this.gamePlayers = ar.sObjArray(this.gamePlayers, GamePlayer);
        // 地图id
        this.totalConsume = ar.sInt(this.totalConsume);
        this.currConsume = ar.sInt(this.currConsume);
        // 游戏id
        this.gameId = ar.sInt(this.gameId);
        this.playersNum = ar.sByte(this.playersNum);
        this.subGamePlayJsonFields = ar.sString(this.subGamePlayJsonFields);
        this.roomType = ar.sInt(this.roomType);
        this.createTime = ar.sDate(this.createTime);

    }

}
