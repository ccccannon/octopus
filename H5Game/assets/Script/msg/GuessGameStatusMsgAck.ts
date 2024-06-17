import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase } from "../DataHandler/Serializer";

export class GuessGameStatusMsgAck extends NetMsgBase {

    // 桌子状态， 5 表示开始,  8 表示结算中 , 9 表示等待开始
    private tableState: number;
    // 开奖结果
    private results: string;
    // 桌子配置信息
    private tableConfig: string;
    // 倒计时 毫秒
    private countDownTime: dcodeIO.Long;
    // 当前局数
    private currConsume: number;
    // 桌子编号
    private tableIndex: number;

    // 我的押注信息
    private myStakeJson: string;

    // 其他人的押注信息
    private otherStakeJson: string;

    // 游戏id
    private gameId: number

    private jackPotPool: dcodeIO.Long;



    constructor() {
        super(MsgCmdConstant.MSG_GUESS_GAME_STATUS_ACK);
    }

    // public GuessGameJoinOldTableMsgAck() {
    //     msgCMD = MsgCmdConstant.MSG_GUESS_GAME_JOIN_OLD_TABLE_ACK; //0xd10020
    // }


    public serialize(ar: ObjectSerializer) {
        super.serialize(ar);
        this.tableState = ar.sInt(this.tableState);
        this.results = ar.sString(this.results);
        this.tableConfig = ar.sString(this.tableConfig);
        this.countDownTime = ar.sLong(this.countDownTime);
        this.currConsume = ar.sInt(this.currConsume);
        this.tableIndex = ar.sInt(this.tableIndex);
        this.myStakeJson = ar.sString(this.myStakeJson);
        this.otherStakeJson = ar.sString(this.otherStakeJson);
        this.gameId = ar.sInt(this.gameId);
        this.jackPotPool = ar.sLong(this.jackPotPool);
    }

}