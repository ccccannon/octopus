import { ByteArray } from "../DataHandler/ByteArray";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { BaseObject } from "../DataHandler/Serializer";


export class SystemConfigPara extends BaseObject {

    private paraID: number = 0;

    private valueInt: number = 0;
    private pro_1: number = 0;
    private pro_2: number = 0;
    private pro_3: number = 0;
    private pro_4: number = 0;
    private pro_5: number = 0;
    private isClient: number = 0;
    private valueStr: string = "";

    /**
     * valueStr 加密后的字节数组
     */
    private bytesValue: ByteArray;

    public serialize(ar: ObjectSerializer) {
        this.paraID = ar.sInt(this.paraID);
        this.valueInt = ar.sInt(this.valueInt);
        this.pro_1 = ar.sInt(this.pro_1);
        this.pro_2 = ar.sInt(this.pro_2);
        this.pro_3 = ar.sInt(this.pro_3);
        this.pro_4 = ar.sInt(this.pro_4);
        this.pro_5 = ar.sInt(this.pro_5);
        this.isClient = ar.sInt(this.isClient);
        this.valueStr = ar.sString(this.valueStr);
        this.bytesValue = ar.sBytes(this.bytesValue);
    }
}