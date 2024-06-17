import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { BaseObject } from "../DataHandler/Serializer";

export  class TableServer extends BaseObject {
    /**
     * 桌子编号
     */
    private tableIndex: number;

    /**
     * 服务器ID
     */
    private serverId: number;

    /**
     * 桌子ID
     */
    private tableID: string;

    /**
     * 创建类型
     */
    private createType: number;

    /**
     * 游戏ID
     */
    private gameId: number;

    private isViewer: boolean;


    public serialize(ar: ObjectSerializer) {
        this.tableIndex = ar.sInt(this.tableIndex);
        this.serverId = ar.sInt(this.serverId);
        this.tableID = ar.sString(this.tableID);
        this.createType = ar.sInt(this.createType);
        this.gameId = ar.sInt(this.gameId);
        this.isViewer = ar.sBoolean(this.isViewer);
    }


}
