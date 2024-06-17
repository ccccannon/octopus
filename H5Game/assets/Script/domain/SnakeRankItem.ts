import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { BaseObject } from "../DataHandler/Serializer";

export class SnakeRankItem extends BaseObject {

    private rankNo: number;
    private name: string;
    private avatar: string;
    private length: dcodeIO.Long; // 长度
    private userId: dcodeIO.Long; // 用户唯一标识


    public serialize(ar: ObjectSerializer) {
        this.rankNo = ar.sInt(this.rankNo);
        this.name = ar.sString(this.name);
        this.avatar = ar.sString(this.avatar);
        this.length = ar.sLong(this.length);
        this.userId = ar.sLong(this.userId);
    }

}
