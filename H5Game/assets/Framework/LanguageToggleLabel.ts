
import GameMgr from "../Script/Managers/GameMgr";
import { LANGUAGE_TYPE } from "../Script/Mgr/Config";


const { ccclass, property } = cc._decorator;

@ccclass
export default class LanguageToggleLabel extends cc.Component {


    @property
    objProto: string = '';

    /** 更新文字 */
    updateLabel() {
        if (!this.objProto) {
            return;
        }
        const language = globalThis.alloTranslation;
        if (!language) {
            throw new Error('alloTranslation is not on globalThis');
        }
        const lang = GameMgr.getInstance().Language;
        let str;
        if (lang == LANGUAGE_TYPE.ARAB) {
            str = this.getDescendantProp(language['ar'], this.objProto);

        } else {
            str = this.getDescendantProp(language['en'], this.objProto);
        }
        this.node.getComponent(cc.Label).string = str;
    }

    getDescendantProp(obj, desc) {
        var arr = desc.split(".");
        while (arr.length) {
            obj = obj[arr.shift()];
        }
        return obj;
    }

    start() {
        this.updateLabel();
    }

    // update (dt) {}
}
