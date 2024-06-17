// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { GameDataManager } from "../../Managers/GameDataManager";
import { getCountryInfoById, handleTranslate } from "../../Utils/utils_common";
import { LANGUAGE_TYPE } from "../Constant";
import { language } from "../Language/index";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PromptDiffcultCtrl extends cc.Component {

    @property(cc.Label)
    label_country: cc.Label = null;

    @property(cc.Node)
    node_mask: cc.Node = null;

    @property(cc.Sprite)
    sprite_difficult: cc.Sprite = null;

    @property([cc.SpriteFrame])
    viewList_difficult: Array<cc.SpriteFrame> = [];

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    onPromptDiffcultShow() {
        this.node_mask.active = true;
        this.node.active = true;
        const posX = cc.view.getVisibleSizeInPixel().width;
        this.node.x = -posX
        cc.tween(this.node).to(0.4, { position: cc.v3(0, 0, 0) }, { easing: 'backOut' }).delay(2).to(0.4, { position: cc.v3(posX, 0, 0) }, { easing: 'backOut' }).call(() => {
            this.onPromptDiffcultHide();
        }).start();
    }

    onPromptDiffcultHide() {
        this.node.active = false;
        this.node_mask.active = false;
    }

    /** 更新标题 */
    updateTitleByLanguage() {
        if (GameDataManager.getInstance().Language == LANGUAGE_TYPE.EN) {
            this.sprite_difficult.spriteFrame = this.viewList_difficult[1];
        } else {
            this.sprite_difficult.spriteFrame = this.viewList_difficult[0];
        }
    }

    /** 更新目标 */
    updateTargetText() {
        const countryInfo = getCountryInfoById();
        if (GameDataManager.getInstance().Language == LANGUAGE_TYPE.EN) {
            // this.label_country.string = this.viewList_difficult[1];

            this.label_country.string = handleTranslate(countryInfo.name, language.en.difficult);

        } else {
            // this.sprite_difficult.spriteFrame = this.viewList_difficult[0];
            this.label_country.string = handleTranslate(countryInfo.name, language.ar.difficult);
        }
    }

    start() {
        this.updateTargetText();
        this.updateTitleByLanguage();
    }

    // update (dt) {}
}
