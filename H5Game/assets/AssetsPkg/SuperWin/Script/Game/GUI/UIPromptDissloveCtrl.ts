import GameMgr from "../../../../../Script/Managers/GameMgr";
import { LANGUAGE_TYPE } from "../../../../../Script/Mgr/Config";
import { language } from "../Lang/superwin_index";


const { ccclass, property } = cc._decorator;

@ccclass
export default class UIPromptDissloveCtrl extends cc.Component {

    @property(cc.Label)
    label_tips: cc.Label = null;

    /** 更新提示文案 */
    updateTextTips() {
        const lang = GameMgr.getInstance().Language;
        if (lang == LANGUAGE_TYPE.ARAB) {
            this.label_tips.string = language.ar.disslove;
        } else {
            this.label_tips.string = language.en.disslove;
        }
    }

    /** 隐藏节点 */
    hideView() {
        cc.systemEvent.emit('hideDisslove');
    }

    start() {
        this.updateTextTips();
    }

    // update (dt) {}
}
