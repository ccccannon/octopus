import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { BaseObject } from "../DataHandler/Serializer";

export class TablePlayerRecord extends BaseObject {

    /**
     * 玩家id
     */
    private playerId: dcodeIO.Long;

    /**
     * 玩家名字
     */
    private playerName: string;

    /**
     * 玩家头像
     */
    private playerAvatar: string;

    /**
     * 玩家性别
     */
    private playerSex: number;

    /**
     * 赢的金币
     */
    private totalWinGold: dcodeIO.Long;
    /**
     * 消耗金币
     */
    private totalConsumeGold: dcodeIO.Long;

    /**
     * 玩具牌局信息
     */
    private tableInfo: string;

    /**
     * 游戏id
     */
    private gameId: number;

   
    // 创建时间
    private createTime: Date;

   
    public serialize(ar: ObjectSerializer): void {

        this.playerId = ar.sLong(this.playerId);
        this.playerName = ar.sString(this.playerName);
        this.playerAvatar = ar.sString(this.playerAvatar);
        this.playerSex = ar.sInt(this.playerSex);
        this.totalWinGold = ar.sLong(this.totalWinGold);
        this.totalConsumeGold = ar.sLong(this.totalConsumeGold);
        this.gameId = ar.sInt(this.gameId);
        this.tableInfo = ar.sString(this.tableInfo);
        this.createTime = ar.sDate(this.createTime);
    }

}