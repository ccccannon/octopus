// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { GameDataManager } from "../../Managers/GameDataManager";
import { formatTimeDisplay, getCountryInfoById, handleTranslate } from "../../Utils/utils_common";
import { LANGUAGE_TYPE } from "../Constant";
import { language } from "../Language/index";


const { ccclass, property } = cc._decorator;

@ccclass
export default class PromptPassCtrl extends cc.Component {

    @property(cc.Label)
    text_describe_result: cc.Label = null;

    @property(cc.Sprite)
    view_success_title: cc.Sprite = null;

    @property(cc.SpriteFrame)
    viewTitleList: Array<cc.SpriteFrame> = [];

    @property(cc.Sprite)
    view_country_flag: cc.Sprite = null;

    @property(cc.SpriteFrame)
    viewCountryList: Array<cc.SpriteFrame> = [];

    @property(cc.Node)
    node_mask: cc.Node = null;

    @property(cc.Label)
    text_timeSpent: cc.Label = null;

    @property(cc.SpriteAtlas)
    flagAtlas: cc.SpriteAtlas = null;

    onPromptPassShow(data) {
        this.updatePromptDisplay(data);
        this.node_mask.active = true;
        this.node.active = true;
        this.node.scale = 0;
        cc.tween(this.node).to(0.4, { scale: 1 }, { easing: 'backOut' }).start();
    }

    onPromptPassHide() {
        this.node.active = false;
        this.node_mask.active = false;
    }

    /** 跳转到首页 */
    jumpToIndexPage() {
        this.onPromptPassHide();
        cc.systemEvent.emit('JumpToIndexPage');
    }

    /** 更新界面的视图 */
    updatePromptDisplay(data) {
        // console.log(data);

        const { gameTime, userId, gameNo, tableId } = data;

        const gdm = GameDataManager.getInstance();

        this.setTimeSpent(gameTime);

        this.setTitleView();

        this.setResult();

        const key = userId.toNumber() + '_' + gameNo + '_' + tableId;

        // 移除有可能存在的本地缓存的本局数据
        gdm.removeLocalDataByKey(key);


    }

    // United Arab Emirates

    /** 设置结果 */
    setResult() {
        //  根据语言选择来判断使用什么展示方式
        let teamName: string;
        let transStr: string;
        const countryInfo = getCountryInfoById();
        if (GameDataManager.getInstance().Language == LANGUAGE_TYPE.EN) {
            teamName = countryInfo.name;
            transStr = language.en.join_success;
        } else {
            teamName = countryInfo.name;
            transStr = language.ar.join_success;
        }
        this.text_describe_result.string = handleTranslate(teamName, transStr);
        this.setCountryFlag(countryInfo);

    }

    /** 设置题目 */
    setTitleView() {

        if (GameDataManager.getInstance().Language == LANGUAGE_TYPE.EN) {
            this.view_success_title.spriteFrame = this.viewTitleList[1];
        } else {
            this.view_success_title.spriteFrame = this.viewTitleList[0];
        }

    }

    /** 设置国旗 */
    setCountryFlag(info) {
        this.view_country_flag.spriteFrame = this.flagAtlas.getSpriteFrame(info.shortName);
    }

    /**设置通关时间 */
    setTimeSpent(time: dcodeIO.Long) {
        const timeStr = formatTimeDisplay(time.toNumber());
        let spentStr: string;
        if (GameDataManager.getInstance().Language == LANGUAGE_TYPE.EN) {
            spentStr = handleTranslate(timeStr, language.en.timeSpend);
        } else {
            spentStr = handleTranslate(timeStr, language.ar.timeSpend);
        }
        this.text_timeSpent.string = spentStr;

    }



    start() {
        // this.updatePromptDisplay({});
        this.setResult();
    }

    // update (dt) {}
}
