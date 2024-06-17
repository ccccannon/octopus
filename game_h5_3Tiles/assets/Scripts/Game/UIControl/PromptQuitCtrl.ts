// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { MsgDispatcher } from "../../DataHandler/MsgDispatcher";
import { GameDataManager } from "../../Managers/GameDataManager";
import { SingleGameStatusMsg } from "../../msg/SingleGameStatusMsg";
import { LANGUAGE_TYPE } from "../Constant";
import { language } from "../Language/index";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PromptQuitCtrl extends cc.Component {
    @property(cc.Node)
    node_mask: cc.Node = null;

    @property(cc.Label)
    text_describe_warn: cc.Label = null;


    /** 发送游戏通关状态 */
    sendGameQuitStatus() {
        const gameStatus = new SingleGameStatusMsg();
        const gdm = GameDataManager.getInstance();
        gameStatus.userId = dcodeIO.Long.fromNumber(gdm.UserId);
        gameStatus.gameId = gdm.GameId;
        gameStatus.gameNo = gdm.MapId;
        gameStatus.statusType = 2;
        gameStatus.tableId = GameDataManager.getInstance().getLocalTableId(gdm.UserId) + '';
        MsgDispatcher.sendMsg(gameStatus);

        this.jumpToIndexPage();
    }

    onPromptQuitShow() {
        this.updateQuitText();
        this.node_mask.active = true;
        this.node.active = true;
        this.node.scale = 0;
        cc.tween(this.node).to(0.4, { scale: 1 }, { easing: 'backOut' }).start();
    }

    onPromptQuitHide() {
        this.node.active = false;
        this.node_mask.active = false;
    }


    updateQuitText() {
        const lang = GameDataManager.getInstance().Language;
        if (lang == LANGUAGE_TYPE.EN) {
            this.text_describe_warn.string = language.en.quit.warn;
        } else {
            this.text_describe_warn.string = language.ar.quit.warn;
        }
    }


    /** 跳转到首页 */
    jumpToIndexPage() {
        this.onPromptQuitHide();
        cc.systemEvent.emit('JumpToIndexPage')

    }

    // update (dt) {}
}
