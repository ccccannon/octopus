import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { BaseObject } from "../DataHandler/Serializer";

/**
 * @Author: Levi
 * @Date: 2023/6/13
 * @Description:
 */
export class YLGYHallItem extends BaseObject {

    // 排行
    private rankNo: number;

    // 国家id
    private areaId: number;

    // 通过次数
    private winning: number;

    // 通过玩家数量
    private winners: number;

    public serialize(ar: ObjectSerializer) {
        // super.serialize(ar);
        this.rankNo = ar.sInt(this.rankNo);
        this.areaId = ar.sInt(this.areaId);
        this.winning = ar.sInt(this.winning);
        this.winners = ar.sInt(this.winners);
    }
}
