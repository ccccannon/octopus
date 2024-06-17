
import GameMgr from "../../../../../Script/Managers/GameMgr";
import { LANGUAGE_TYPE } from "../../../../../Script/Mgr/Config";
import { language } from "../Lang/index";
import BasePanel from "../../../../../Framework/BasePanel";

const { ccclass, property } = cc._decorator;
@ccclass
export default class Panel_Help extends BasePanel {

    @property(cc.Label)

    text_rule: cc.Label=null;;

    @property(cc.Label)
    text_title: cc.Label=null;;

    @property(cc.Node)
    node_ar: cc.Node=null;;

    @property(cc.Node)
    node_content: cc.Node=null;;

    onLoad() {

        // this.text_title = language[window.localLang || 'arab'].text_help_title;
        const lang = GameMgr.getInstance().Language == LANGUAGE_TYPE.ARAB ? LANGUAGE_TYPE.ARAB : LANGUAGE_TYPE.EN;
        this.text_rule.string = language[lang].panel_help.content;
        this.setLayoutByLanguage();
        this.setTitle(language[lang].panel_help.title);
        this.setLayout();
        this.setInitPos();
    }

    setLayout() {
        if (GameMgr.getInstance().Language == LANGUAGE_TYPE.ARAB) {
            this.text_rule.horizontalAlign = cc.Label.HorizontalAlign.RIGHT;
            this.node_content.active = false;
            this.node_ar.active = true;
        } else {
            this.text_rule.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
            this.node_content.active = true;
            this.node_ar.active = false;
        }
    }

    showHelp() {

        this.showView(() => {
            // console.log(this);
        });
    }

}
