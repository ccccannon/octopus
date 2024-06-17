import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { BaseObject } from "../DataHandler/Serializer";

/**
 * @author: Levi
 * @date: 2022-11-06
 * @description:
 **/
export class YLGYRankItem extends BaseObject {

    public id: dcodeIO.Long;
    public rankNo: number;
    public name: string;
    public avatar: string;
    public winning: number;

    public serialize(ar: ObjectSerializer) {
        this.id = ar.sLong(this.id);
        this.rankNo = ar.sInt(this.rankNo);
        this.name = ar.sString(this.name);
        this.avatar = ar.sString(this.avatar);
        this.winning = ar.sInt(this.winning);

    }
}
