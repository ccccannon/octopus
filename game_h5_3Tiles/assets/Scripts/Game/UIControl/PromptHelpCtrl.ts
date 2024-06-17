// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { GameDataManager } from "../../Managers/GameDataManager";
import { LANGUAGE_TYPE } from "../Constant";
import { language } from "../Language/index";

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

    onLoad() {
        this.initFadeConst();
        this.updatePromptTitle();
    }

    /** 更新弹窗的标题 */
    updatePromptTitle() {
        if (GameDataManager.getInstance().Language == LANGUAGE_TYPE.EN) {
            this.text_title.string = language.en.help.title;
        } else {
            this.text_title.string = language.ar.help.title;

        }
    }

    /** 初始化 乘数的值 */
    initFadeConst() {
        if (GameDataManager.getInstance().Language == LANGUAGE_TYPE.EN) {
            this.fadeConst = -1;
            this.node_content.getComponent(cc.Sprite).spriteFrame = this.viewList_content[0];
        } else {
            this.fadeConst = 1;
            this.node_content.getComponent(cc.Sprite).spriteFrame = this.viewList_content[1];
        }
    }

    /** 打开帮助 */
    onHelpPromptShow() {
        this.node.active = true;
        this.node.position = cc.v3(0, 0, 0);
        // cc.tween(this.node).to(0.5, { position: cc.v3(0, 0, 0) }, { easing: 'sineOut' }).start();

    }

    /** 帮助隐藏 */
    onHelpPromptHide() {
        // cc.tween(this.node).to(0.5, { position: cc.v3(this.fadeConst * (cc.view.getVisibleSizeInPixel().width + this.node.width) / 2, 0, 0) }, { easing: 'sineOut' }).call(() => {
            this.node.active = false;
        // }).start();
    }


    start() {

    }

    // update (dt) {}
}
