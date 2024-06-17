// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

// import { GameDataManager } from "../../Managers/GameDataManager";

import GameMgr from "../../../../Script/Managers/GameMgr";
import { LANGUAGE_TYPE } from "../Constant";
import { language } from "../Lang/index";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PromptHelpCtrl extends cc.Component {

    public fadeConst: number = null;

    @property(cc.Node)
    node_content: cc.Node = null;

    @property(cc.Label)
    text_title: cc.Label = null;
    // LIFE-CYCLE CALLBACKS:

    @property([cc.SpriteFrame])
    viewList_content: Array<cc.SpriteFrame> = [];

    @property(cc.Node)
    node_mask: cc.Node = null;

    onLoad() {
        this.updatePromptTitle();
        this.updateRulesContent();

    }

    /** 更新弹窗的标题 */
    updatePromptTitle() {
        if (GameMgr.getInstance().Language != LANGUAGE_TYPE.ARAB) {
            this.text_title.string = language.en.rules;
        } else {
            this.text_title.string = language.ar.rules;

        }
    }

    /** 更新规则的内容 */
    updateRulesContent() {
        if (GameMgr.getInstance().Language != LANGUAGE_TYPE.ARAB) {
            this.node_content.getComponent(cc.Sprite).spriteFrame = this.viewList_content[0];
        } else {
            this.node_content.getComponent(cc.Sprite).spriteFrame = this.viewList_content[1];
        }
    }


    /** 打开帮助 */
    onHelpPromptShow() {
        this.node.active = true;
        this.node_mask.active = true;
        this.node.position = cc.v3(0, 0, 0);

    }

    /** 帮助隐藏 */
    onHelpPromptHide() {
        this.node.active = false;
        this.node_mask.active = false;
    }


    start() {

    }

    // update (dt) {}
}
