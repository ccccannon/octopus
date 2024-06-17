import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { BaseObject } from "../DataHandler/Serializer";

export class playerGameRecord extends BaseObject {

    public gameId = 0;

    public gameType = 0;

    public playerIndex = 0;

    public okCount = 0;

    public isOk = false;

    public totalCount = 0;

    public firstDate: Date;

    public lastDate: Date;

    public firstOkDate: Date;
    public lastOkDate: Date;

    public minOkTime = 0;
    public lastOkTime = 0;


    public serialize(ar: ObjectSerializer) {

        this.gameId = ar.sInt(this.gameId);
        this.gameType = ar.sInt(this.gameType);
        this.playerIndex = ar.sInt(this.playerIndex);
        this.okCount = ar.sInt(this.okCount);
        this.isOk = ar.sBoolean(this.isOk);
        this.totalCount = ar.sInt(this.totalCount);
        this.firstDate = ar.sDate(this.firstDate);
        this.lastDate = ar.sDate(this.lastDate);
        this.firstOkDate = ar.sDate(this.firstOkDate);
        this.lastOkDate = ar.sDate(this.lastOkDate);
        this.minOkTime = ar.sInt(this.minOkTime);
        this.lastOkTime = ar.sInt(this.lastOkTime);
    }

}