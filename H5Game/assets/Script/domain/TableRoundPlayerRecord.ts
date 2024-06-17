import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { BaseObject } from "../DataHandler/Serializer";

export class TableRoundPlayerRecord extends BaseObject {

    /**
     * 玩家id
     */
    private playerId: dcodeIO.Long;

    /**
     * 玩家性别
     */
    private tableIndex: number;

  
    /**
     * 玩具牌局信息
     */
    private gameInfo: string;

    /**
     * 游戏id
     */
    private currConsume: number;

   
    // 创建时间
    private createTime: Date;

   
    public serialize(ar: ObjectSerializer): void {

        // this.playerId = ar.sLong(this.playerId);
        // this.playerName = ar.sString(this.playerName);
        // this.playerAvatar = ar.sString(this.playerAvatar);
        // this.playerSex = ar.sInt(this.playerSex);
        // this.totalWinGold = ar.sLong(this.totalWinGold);
        // this.totalConsumeGold = ar.sLong(this.totalConsumeGold);
        // this.gameId = ar.sInt(this.gameId);
        // this.gameInfo = ar.sString(this.gameInfo);
        // this.createTime = ar.sDate(this.createTime);

        this.tableIndex = ar.sInt(this.tableIndex);
        this.currConsume = ar.sInt(this.currConsume);
        this.gameInfo = ar.sString(this.gameInfo);
        this.createTime = ar.sDate(this.createTime);
        this.playerId = ar.sLong(this.playerId);
    }

}