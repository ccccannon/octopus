import { MsgCmdConstant } from "../DataHandler/MsgCmdConstant";
import { ObjectSerializer } from "../DataHandler/ObjectSerializer";
import { NetMsgBase, SerializerCache } from "../DataHandler/Serializer";

/**
 * @Name:   - NewShowTipAckMsg
 * @Description:  // 新显示tip消息，可以单独发送，也有可能会附带在其他的返回消息中
 */
export class NewShowTipMsgAck extends NetMsgBase {

    // 内容
    public tip: string = "";
    // 0：错误red 1：警告 yellow 2 成功 green 3 弹窗 prompt
    public tipType: number = -1;

    // 编号 lab_server国际化代码
    public tipId: string = "";

    // 扩展的json 带参数的消息参数按顺序转换为json传递
    public tipJson: string = "";

    // 弹窗中点击确认后发出的客户端指令，当时弹窗提示的时候，这个值有效。不是弹窗时，直接发送该客户端指令
    public clientActionCmd: string = "";

    // 点击确认客户端回发消息 可以和 客户端指令同时存在
    // 回发消息ID
    public sendBackMsgCmd: number = 0;
    public sendBackMsg: NetMsgBase = null;

    public needSerializeMsgBase: boolean = true;

    constructor() {
        super(MsgCmdConstant.MSG_SHOW_TIP_MSG_ACK);
    }

    public serialize(ar: ObjectSerializer): void {
        let self = this;
        if (self.needSerializeMsgBase) {
            super.serialize(ar);
        }
        self.tip = ar.sString(self.tip);
        self.tipType = ar.sByte(self.tipType);
        self.tipId = ar.sString(self.tipId);
        self.tipJson = ar.sString(self.tipJson);
        self.clientActionCmd = ar.sString(self.clientActionCmd);
        self.sendBackMsgCmd = ar.sInt(self.sendBackMsgCmd);
        if (ar.readMode) {
            if (self.sendBackMsgCmd > 0) {
                let vNetMsgBase: NetMsgBase = <NetMsgBase>SerializerCache.constructObjByCmd(self.sendBackMsgCmd);
                vNetMsgBase.serialize(ar);
                self.sendBackMsg = vNetMsgBase;
            }
        } else {
            if (self.sendBackMsgCmd > 0) {
                self.sendBackMsg.serialize(ar);
            }
        }
    }

    public static bulidMsgAck(tipType: number, tip: string, tipId?: string, tipJson?: string): NewShowTipMsgAck {
        let msgAck = new NewShowTipMsgAck();
        msgAck.tip = tip;
        msgAck.tipType = tipType;
        msgAck.tipId = tipId;
        msgAck.tipJson = tipJson;
        return msgAck;
    }

    public static bulidTip(tip: string, tipId?: string, tipJson?: string): NewShowTipMsgAck {
        return this.bulidMsgAck(0, tip, tipId, tipJson);
    }

    public static buildPopUp(tip: string, tipId?: string, tipJson?: string): NewShowTipMsgAck {
        return this.bulidMsgAck(2, tip, tipId, tipJson);
    }




}

export enum TipTypeEnum {

    /**
     * 错误
     */
    ERROR = 0,
    /**
     * 警告
     */
    ALERT = 1,
    /**
     * 成功
     */
    SUCCESS = 2,
    /**
     * 弹窗
     */
    POP_UP = 3,


}


