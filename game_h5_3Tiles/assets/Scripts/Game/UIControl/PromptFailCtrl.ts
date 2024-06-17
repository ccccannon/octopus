// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { MsgDispatcher } from "../../DataHandler/MsgDispatcher";
import { GameDataManager } from "../../Managers/GameDataManager";
import { getCountryInfoById, handleTranslate } from "../../Utils/utils_common";
import { SingleGameStatusMsg } from "../../msg/SingleGameStatusMsg";
import { LANGUAGE_TYPE } from "../Constant";
import { language } from "../Language/index";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PromptFailCtrl extends cc.Component {

    @property(cc.Label)
    text_fail_result: cc.Label = null;

    @property(cc.Node)
    node_mask: cc.Node = null;

    @property(cc.Label)
    text_title: cc.Label = null;

    @property(cc.Label)
    text_fail_describe: cc.Label = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}


    /** 发送游戏通关状态 */
    sendGameStatus(statusType: number) {
        const gameStatus = new SingleGameStatusMsg();
        const gdm = GameDataManager.getInstance();
        gameStatus.userId = dcodeIO.Long.fromNumber(gdm.UserId);
        gameStatus.gameId = gdm.GameId;
        gameStatus.gameNo = gdm.MapId;
        gameStatus.statusType = statusType;
        gameStatus.tableId = GameDataManager.getInstance().getLocalTableId(gdm.UserId) + '';
        MsgDispatcher.sendMsg(gameStatus);
    }



    onPromptFailShow() {
        this.updateDescribeTextByLanguage();
        this.node_mask.active = true;
        this.node.active = true;
        this.node.scale = 0;
        cc.tween(this.node).to(0.4, { scale: 1 }, { easing: 'backOut' }).start();

        /** 通知放弃挑战 */
        this.sendGameStatus(2);

    }

    onPromptFailHide() {
        this.node.active = false;
        this.node_mask.active = false;
    }




    /** 重新开始游戏 */
    gameRechallenge() {
        this.onPromptFailHide();
        /** 发送重新开始 */
        this.sendGameStatus(0);
       
    }

    /** 跳转到首页 */
    jumpToIndexPage() {
        this.onPromptFailHide();
        cc.systemEvent.emit('JumpToIndexPage')
    }

    /** 更新视图文字 */
    updateDescribeTextByLanguage() {

        if (GameDataManager.getInstance().Language == LANGUAGE_TYPE.EN) {
            this.text_title.string = language.en.fail.title;
            this.text_fail_describe.string = language.en.fail.failToWin;
            const info = getCountryInfoById();
            this.text_fail_result.string = handleTranslate(info.name, language.en.fail.failToJoin);
        } else {
            this.text_title.string = language.ar.fail.title;
            this.text_fail_describe.string = language.ar.fail.failToWin;
            const info = getCountryInfoById();
            this.text_fail_result.string = handleTranslate(info.name, language.ar.fail.failToJoin);
        }
    }


    start() {

    }

    // update (dt) {}
}
