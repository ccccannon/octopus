import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { BaseObject } from "../DataHandler/Serializer";


export class RankItem extends BaseObject {

    public rank: number;
    public playerIndex: number;
    public minOkTime: number;
    public playerName: string;
    public headImageUrl: string;

    public serialize(ar: ObjectSerializer) {
        this.rank = ar.sInt(this.rank);
        this.playerIndex = ar.sInt(this.playerIndex);
        this.minOkTime = ar.sInt(this.minOkTime);
        this.playerName = ar.sString(this.playerName);
        this.headImageUrl = ar.sString(this.headImageUrl);

    }
}