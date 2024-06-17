/**
 * 每局记录表 t_table_round_record

 */

import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { BaseObject } from "../DataHandler/Serializer";

export class TableRoundRecord extends BaseObject {

    /**
     * 第几局
     */
    private round: number;

    /**
     * 结束时间
     */
    private endTime: Date;

    /**
     * 游戏id
     */
    private gameId: number;

    /**
     * 当前局数描述
     */
    private consumeDesc: string = "";
    /**
     * jackpot信息
     */
    private jackPotInfo: string;


    public serialize(ar: ObjectSerializer): void {
        this.gameId = ar.sInt(this.gameId);
        this.round = ar.sInt(this.round);
        this.endTime = ar.sDate(this.endTime);
        this.consumeDesc = ar.sString(this.consumeDesc);
        this.jackPotInfo = ar.sString(this.jackPotInfo);
    }


}