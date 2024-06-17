// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { language } from "../Lang/index";

const BasePanel = require('./BasePanel');

cc.Class({
    extends: BasePanel,

    properties: {
        text_rule: cc.Label,
        text_title: cc.Label,
        node_ar: cc.Node,
        node_content: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        // this.text_title = language[window.localLang || 'arab'].text_help_title;
        this.text_rule.string = language[window.localLang || window.languageType.ARAB].panel_help.content;
        this.setLayoutByLanguage();
        this.setTitle(language[window.localLang || window.languageType.ARAB].panel_help.title);
        this.setLayout();
        this.setInitPos();
    },

    setLayout() {
        if (window.localLang === window.languageType.ARAB) {
            this.text_rule.horizontalAlign = cc.Label.HorizontalAlign.RIGHT;
            this.node_content.active = false;
            this.node_ar.active = true;
        } else {
            this.text_rule.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
            this.node_content.active = true;
            this.node_ar.active = false;
        }
    },

    showHelp() {

        this.showView(() => {
            // console.log(this);
        });
    },

    // update (dt) {},
});
