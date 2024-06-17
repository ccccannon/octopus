// import { error } from "cc";
import { GameDataManager } from "../Managers/GameDataManager";
import { Logger } from "../Managers/Logger";
import { NetMgr } from "../Managers/NetMgr";
// import { StringUtil } from "../../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil";
// import { GameConfig } from "../../GameConfig";
// import { NetMgr } from "../../manager/NetMgr";
// import { ClientHeartMsgAck } from "../msg/ClientHeartMsgAck";
// import { ClientLinkMsgAck } from "../msg/ClientLinkMsgAck";
import { ByteArray, Endian } from "./ByteArray";
// import { MsgCmdConstant } from "./MsgCmdConstant";
import { ObjectSerializer } from "./ObjectSerializer";
import { NetMsgBase } from "./Serializer";

export class MsgDispatcher {




    public static _cmdMsgMap: Map<number, any> = new Map();


    /**
     * 加密三人组
     */
    private static key: string = null;

    private static passKey: number = 0;

    private static passNum: number = 0;

    /**
     * 协议头
     */
    public static _msgHeaderFlag: number = 12458629;

    /**
     * 协议头大小  4+4+8+4
     */
    public static _msgHeaderSize: number = 20;




    /**
     * 
     * @param msg 编码
     * @returns 
     */
    public static encore(msg: NetMsgBase): ByteArray {

        let byteArray: ByteArray = new ByteArray();
        // byteArray.endian = Endian.LITTLE_ENDIAN;

        let objectSerializer: ObjectSerializer = new ObjectSerializer(false, byteArray);

        byteArray.writeInt(this._msgHeaderFlag);
        byteArray.writeInt(0);
        // 补充8个字节  
        byteArray.writeInt(0)
        byteArray.writeInt(0)

        let pos = byteArray.position; // 记录位置
        byteArray.writeInt(0)

        msg.serialize(objectSerializer);


        let bufSzie = byteArray.position;
        let msgSize = bufSzie - this._msgHeaderSize;

        // console.log("msgSize：" + msgSize)


        byteArray.position = pos;
        byteArray.writeInt(msgSize); // 把数据大小写进去
        // byteArray.position = bufSzie;
        byteArray.position = 0 // 归位

        return byteArray;

    }


    public static decore(data: any): NetMsgBase {

        let byteArray = new ByteArray();
        byteArray.endian = Endian.LITTLE_ENDIAN;
        byteArray.buffer = data;


        let flag = byteArray.readInt()
        if (flag != this._msgHeaderFlag) {
            Logger.logNet(`消息协议头错误：` + flag);
            return;
        }

        // 无用字节
        byteArray.readInt();
        byteArray.readInt();
        byteArray.readInt();

        let msgSize = byteArray.readInt();
        if (msgSize != byteArray.length - this._msgHeaderSize) {
            Logger.logNet(`消息数据大小错误：` + msgSize);
            return;
        }

        let pos = byteArray.position;
        let cmd = byteArray.readInt();
        let msgFun = this._cmdMsgMap.get(cmd); // 获取对象
        if (msgFun == null) {
            Logger.logNet(`接收到的消息不存在：` + this.numToHexStr(cmd));
            return;
        }

        // 归位
        byteArray.position = pos;

        let netMsgBase = new msgFun();
        let objSerializer = new ObjectSerializer(true, byteArray);
        netMsgBase.serialize(objSerializer);

        return netMsgBase;
    }



    public static sendMsg(msg: NetMsgBase) {
        msg.uid = dcodeIO.Long.fromNumber(GameDataManager.getInstance().UserId);
        if (MsgDispatcher.numToHexStr(msg.msgCMD) != "0xa10001") {
            Logger.logNet("向服务器发送消息：" + MsgDispatcher.numToHexStr(msg.msgCMD))
        }
        let byteArray: ByteArray = this.encore(msg);
        // Logger.logNet("--------:" + byteArray.length)
        NetMgr.getInstance().send(byteArray.buffer);
    }



    /**
         * 数字转化为16进制的字符串
         * @param {number} num
         * @returns {string}
         */
    public static numToHexStr(num: number): string {
        if (!num && num !== 0) {
            return "null";
        }
        return "0x" + num.toString(16);
    }

}