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
        // text_rule: cc.Label,
        // text_title: cc.Label,
        spriteList: [cc.SpriteFrame],
        node_rule: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        // this.text_title = language[window.localLang || 'arab'].text_help_title;
        // this.text_rule.string = language[window.localLang || window.languageType.ARAB].panel_help.content;
        this.setLayoutByLanguage();
        this.setTitle(language[window.localLang || window.languageType.ARAB].panel_help.title);
        this.setInitPos();

    },

    updateRuleText() {
        if (window.localLang == window.languageType.ARAB) {
            this.node_rule.getComponent(cc.Sprite).spriteFrame = this.spriteList[1];
        } else {
            this.node_rule.getComponent(cc.Sprite).spriteFrame = this.spriteList[0];
        }
    },


    showHelp() {

        this.showView(() => {
            // console.log(this);  
            this.updateRuleText();
        });
    },

    // update (dt) {},
});
