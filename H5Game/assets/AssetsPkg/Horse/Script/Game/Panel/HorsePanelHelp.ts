import BasePanel from "../../../../../Framework/BasePanel";
import GameMgr from "../../../../../Script/Managers/GameMgr";
import { LANGUAGE_TYPE } from "../../../../../Script/Mgr/Config";
import { language } from "../Lang/horse_index";


const { ccclass, property } = cc._decorator;

@ccclass
export default class HorsePanelHelp extends BasePanel {


    // text_rule: cc.Label,
    // text_title: cc.Label,
    @property([cc.SpriteFrame])
    spriteList: Array<cc.SpriteFrame> = [];

    @property(cc.Node)
    node_rule: cc.Node = null;


    public Lang: string = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.Lang = GameMgr.getInstance().Language == LANGUAGE_TYPE.ARAB ? LANGUAGE_TYPE.ARAB : LANGUAGE_TYPE.EN;
        this.setLayoutByLanguage();
        this.setTitle(language[this.Lang].panel_help.title);
        this.setInitPos();

    }

    updateRuleText() {

        if (this.Lang == LANGUAGE_TYPE.ARAB) {
            this.node_rule.getComponent(cc.Sprite).spriteFrame = this.spriteList[1];
        } else {
            this.node_rule.getComponent(cc.Sprite).spriteFrame = this.spriteList[0];
        }
    }


    showHelp() {

        this.showView(() => {
            // console.log(this);  
            this.updateRuleText();
        });
    }

    // update (dt) {},
}
