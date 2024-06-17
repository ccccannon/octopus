// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import GameMgr from "../../../../../Script/Managers/GameMgr";
import { LANGUAGE_TYPE } from "../../../../../Script/Mgr/Config";
import { language } from "../Lang/superwin_index";


const { ccclass, property } = cc._decorator;

@ccclass
export default class UIPrompRuleCtrl extends cc.Component {

    @property(cc.Label)
    label_title: cc.Label = null;

    hideView() {
        // this.node.active = false;
        cc.systemEvent.emit("hideRules");
    }

    updateTitle() {
        const lang = GameMgr.getInstance().Language;
        if (lang == LANGUAGE_TYPE.ARAB) {
            this.label_title.string = language.ar.rule;
        } else {
            this.label_title.string = language.en.rule;
        }
    }
    protected start(): void {
        this.updateTitle();
    }
}
