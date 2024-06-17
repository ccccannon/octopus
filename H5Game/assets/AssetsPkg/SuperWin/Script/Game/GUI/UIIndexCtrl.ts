// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import GameMgr from "../../../../../Script/Managers/GameMgr";
import { Logger } from "../../../../../Script/Managers/Logger";
import { LANGUAGE_TYPE } from "../../../../../Script/Mgr/Config";
import { language } from "../Lang/superwin_index";
import { SuperWinData } from "../SuperWinData";


const coinList = [100, 1000, 5000, 10000];

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIIndexCtrl extends cc.Component {

    @property(cc.Node)
    btnContainer: cc.Node = null;

    @property(cc.Label)
    tips: cc.Label = null;

    @property([cc.SpriteFrame])
    btnViewList: Array<cc.SpriteFrame> = [];

    @property(cc.Sprite)
    btn_text_turnOn: cc.Sprite = null;

    @property([cc.SpriteFrame])
    turnOnTextViewList: Array<cc.SpriteFrame> = [];

    @property(cc.Sprite)
    title: cc.Sprite = null;

    @property([cc.SpriteFrame])
    titleViewList: Array<cc.SpriteFrame> = [];

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // this.setDefautCoinLevel(1);


        this.initDefault();
        this.updateLanguageDisplay();

    }

    setDefautCoinLevel(lv: number) {
        // debugger
        this.setSelectedBtnById(null, lv);
    }


    /** 将按钮置为普通状态 */
    resumeSelectBtn() {
        const count = this.btnContainer.childrenCount;
        for (let i = 0; i < count; i++) {
            const btn = this.btnContainer.children[i];
            btn.getComponent(cc.Sprite).spriteFrame = this.btnViewList[0];
        }
    }

    /** 将按钮置为选中状态 */
    setSelectedBtnById(event, id) {
        id = parseInt(id);
        const swd = SuperWinData.getInstance();
        // if (swd.coinLevel == id) {
        //     return;
        // }
        this.resumeSelectBtn();
        this.btnContainer.children[id].getComponent(cc.Sprite).spriteFrame = this.btnViewList[1];
        swd.coinLevel = id;
        swd.ticket = coinList[id];
        this.cacheLastCoinLevel(id);
        // console.log(swd);
        Logger.logBusiness(swd, '转盘游戏数据');
    }

    /** 默认初始化 */
    initDefault() {

        const lastRecord = localStorage.getItem('lastCoinLevel');
        // debugger
        if (lastRecord) {
            const lv = JSON.parse(lastRecord);
            this.setDefautCoinLevel(lv);
        } else {
            this.setDefautCoinLevel(1);
        }

    }


    /** 缓存上一次的选择 */
    cacheLastCoinLevel(lv: number) {
        localStorage.setItem('lastCoinLevel', JSON.stringify(lv));
    }

    /**
     * 
     * 更新语言的展示
     */
    updateLanguageDisplay() {

        const lang = GameMgr.getInstance().Language === LANGUAGE_TYPE.ARAB ? LANGUAGE_TYPE.ARAB : LANGUAGE_TYPE.EN;
        this.updateTitle(lang);
        this.updateTips(lang);
        this.updateBtnText(lang);

    }


    /** 更新标题语言 */
    updateTitle(lang) {
        if (lang === LANGUAGE_TYPE.ARAB) {
            this.title.spriteFrame = this.titleViewList[1];
        } else {
            this.title.spriteFrame = this.titleViewList[0];
        }
    }

    /** 更新提示 */
    updateTips(lang) {

        if (lang === LANGUAGE_TYPE.ARAB) {
            this.tips.string = language.ar.index.tips;
        } else {
            this.tips.string = language.en.index.tips;
        }

    }

    /** 更新按钮的信息 */
    updateBtnText(lang) {
        if (lang === LANGUAGE_TYPE.ARAB) {
            this.btn_text_turnOn.spriteFrame = this.turnOnTextViewList[1];
        } else {
            this.btn_text_turnOn.spriteFrame = this.turnOnTextViewList[0];
        }
    }


    /** 隐藏节点 */
    hideView() {
        this.node.active = false;
    }

    /** 显示节点 */
    showView() {
        this.initDefault();
        this.node.active = true;
    }


    start() {

    }

    // update (dt) {}
}
