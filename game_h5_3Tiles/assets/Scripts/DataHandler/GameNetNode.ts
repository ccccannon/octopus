// import { Message } from "../../../../../extensions/oops-plugin-framework/assets/core/common/event/MessageManager";

// import { oops } from "../../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { INetworkTips } from "../Network/NetInterface";

import { Logger } from "../Managers/Logger";

import { NetNode, NetTipsType } from "../Network/NetNode";

// import { GameEvent } from "../config/GameEvent";
// import { UIID } from "../config/GameUIConfig";
// import { ClientHeartMsg } from "../msg/ClientHeartMsg";
// import { ClientLinkMsg } from "../msg/ClientLinkMsg";
import { MsgDispatcher } from "./MsgDispatcher";
import { NetMsgBase } from "./Serializer";
import { ClientLinkMsg } from "../msg/ClientLinkMsg";
import { ClientHeartMsg } from "../msg/ClientHeartMsg";
import { showTips } from "../Utils/utils_common";



export class GameNetNode extends NetNode {

    protected onMessage(msg: any): void {
        // Logger.logNet(`接受消息状态为【${NetNodeStateStrs[this._state]}】`);




        // 进行头部的校验（实际包长与头部长度是否匹配）
        // if (!this._protocolHelper!.checkResponsePackage(msgData)) {
        //     error(`校验接受消息数据异常`);
        //     return;
        // }


        let netMsgBase: NetMsgBase = MsgDispatcher.decore(msg);


        if (netMsgBase == null) {
            if (this._networkTips) {
                this._networkTips.responseErrorCode(1);
            }
            return;
        }

        // 接受到数据，重新定时收数据计时器
        // this.resetReceiveMsgTimer();
        // 重置心跳包发送器
        // this.resetHearbeatTimer();

        // 触发消息执行
        let rspCmd = netMsgBase.msgCMD;

        // Logger.logNet(`接受到命令【${MsgDispatcher.numToHexStr(rspCmd)}】的消息`);
        // 优先触发request队列
        if (this._requests.length > 0) {
            for (let reqIdx in this._requests) {
                let req = this._requests[reqIdx];
                if (req.rspCmd == rspCmd.toString() && req.rspObject) {
                    Logger.logNet(`触发请求命令【${rspCmd}】的回调`);
                    this._callbackExecuter!(req.rspObject, netMsgBase);
                    this._requests.splice(parseInt(reqIdx), 1);
                    break;
                }
            }

            if (this._requests.length == 0) {
                this.updateNetTips(NetTipsType.Requesting, false);
            }
            else {
                Logger.logNet(`请求队列中还有【${this._requests.length}】个请求在等待`);
            }

        }

        this.exeMsgAck(netMsgBase);

    }

    /**
     * 
     * @param netMsgBase 执行消息
     */
    public exeMsgAck(netMsgBase: NetMsgBase) {

        let listeners = this._listener[netMsgBase.msgCMD];
        if (null != listeners) {
            for (const rsp of listeners) {
                if (MsgDispatcher.numToHexStr(netMsgBase.msgCMD) != "0xa10002") {
                    Logger.logNet(`触发监听命令【${rsp.callback.name}】的回调`);
                    Logger.logModel(netMsgBase, '服务器返回数据' + netMsgBase.msgCMD);

                    this._callbackExecuter!(rsp, netMsgBase);
                }
            }
        }
    }

    /** 连接验证成功，进入工作状态 */
    protected onChecked() {

        super.onChecked();

        // 发送连接校验
        let msg = new ClientLinkMsg();
        MsgDispatcher.sendMsg(msg);

        Logger.logNet(`服务器连接成功，发送连接检查:ClientLinkMsg`);

    }


    protected resetHearbeatTimer() {
        if (this._keepAliveTimer !== null) {
            clearInterval(this._keepAliveTimer);
        }

        this._keepAliveTimer = setInterval(() => {
            let msg = new ClientHeartMsg();
            // msg.clientTime = dcodeIO.Long.fromNumber(oops.timer.getLocalTime());
            MsgDispatcher.sendMsg(msg);
            Logger.logNet(`发送心跳包:ClientHeartMsg`);

        }, this._heartTime);
    }


}




export class NetGameTips implements INetworkTips {
    /** 连接提示 */
    connectTips(isShow: boolean): void {
        if (isShow) {
            Logger.logNet("游戏服务器正在连接");
        }
        else {
            Logger.logNet("游戏服务器连接成功");
            // Message.dispatchEvent(GameEvent.GameServerConnected);
        }
    }

    /** 重连接提示 */
    reconnectTips(isShow: boolean): void {
        if (isShow) {
            Logger.logNet("重连开始");
            // oops.gui.open(UIID.Netinstable);
            showTips('lab_client_1004');
        }
        else {
            Logger.logNet("重连成功");
            // oops.gui.remove(UIID.Netinstable);
        }
    }

    /** 请求提示 */
    requestTips(isShow: boolean): void {
        if (isShow) {
            Logger.logNet("请求数据开始");
        }
        else {
            Logger.logNet("请求数据完成");
        }
    }

    /** 响应错误码提示 */
    responseErrorCode(code: number): void {
        Logger.logNet("游戏服务器错误码", code + '');
    }
}