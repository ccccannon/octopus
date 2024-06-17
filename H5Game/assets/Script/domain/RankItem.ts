import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { BaseObject } from "../DataHandler/Serializer";

/**
 * @date: 2022-11-06
 * @description:
 **/
export class RankItem extends BaseObject {

    private rankNo: number;
    private playerName: string;
    private playerAvatar: string;
    private playerSex: number; //性别
    private winGold: dcodeIO.Long; // 金币数量
    private userId: dcodeIO.Long; //
   

    public serialize(ar: ObjectSerializer): void {
        this.rankNo = ar.sInt(this.rankNo);
        this.playerName = ar.sString(this.playerName);
        this.playerAvatar = ar.sString(this.playerAvatar);
        this.playerSex = ar.sInt(this.playerSex);
        this.winGold = ar.sLong(this.winGold);
        this.userId = ar.sLong(this.userId);
    }

}
