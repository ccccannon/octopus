
import { GameDataManager } from "../../Managers/GameDataManager";
import { LANGUAGE_TYPE } from "../Constant";
import { GAME_PROPS, GAME_STATUS } from "../GameData";
import { setFirstRevive } from "../GameUtils";
import { language } from "../Language/index";
import PromptBuyPropCtrl from "./PromptBuyPropCtrl";
import PromptUseProp from "./PromptUsePropCtrl";

const { ccclass, property } = cc._decorator;

/** 复活类型 */
enum ReviveType {
    UsePropShare,   // 使用道具或分享复活
    BuyPropShare,   // 购买道具或分享复活
    Share,          // 分享复活
}

@ccclass
export default class PromptReviveCtrl extends cc.Component {

    @property(cc.Node)
    node_mask: cc.Node = null;

    @property(cc.Label)
    text_title: cc.Label = null;

    @property(cc.Label)
    text_describe: cc.Label = null;

    @property(cc.Label)
    text_share: cc.Label = null;

    @property(cc.Node)
    btn_use: cc.Node = null;

    @property(cc.Node)
    btn_buy: cc.Node = null;

    @property(cc.Node)
    btn_share: cc.Node = null;

    @property(cc.Node)
    btn_revive: cc.Node = null;

    @property(cc.Sprite)
    view_props: cc.Sprite = null;

    @property([cc.SpriteFrame])
    viewList_props: Array<cc.SpriteFrame> = [];

    @property(PromptUseProp)
    promptUseProp: PromptUseProp = null;

    @property(PromptBuyPropCtrl)
    promptBuyPropCtrl: PromptBuyPropCtrl = null;

    private isPop: boolean = false;
    private propNum: number = 0;
    private buyTimes: number = 0;

    protected onLoad(): void {

    }

    onPromptReviveShow() {
        this.node_mask.active = true;
        this.node.active = true;
        this.node.scale = 0;
        cc.tween(this.node).to(0.4, { scale: 1 }, { easing: 'backOut' }).start();
    }

    onPromptReviveHide() {
        this.node.active = false;
        this.node_mask.active = false;
    }

    /** 使用道具或分享复活 */
    onUsePropShare(isPop: boolean, propNum: number) {
        this.isPop = isPop;
        this.propNum = propNum;
        this.onPromptReviveShow();
        this.updateRevive(ReviveType.UsePropShare);
    }

    /** 购买道具或分享复活 */
    onBuyPropShare(isPop: boolean, buyTimes: number) {
        this.isPop = isPop;
        this.buyTimes = buyTimes;
        this.onPromptReviveShow();
        this.updateRevive(ReviveType.BuyPropShare);
    }

    /** 分享复活 */
    onShowShare() {
        this.isPop = true;
        this.onPromptReviveShow();
        this.updateRevive(ReviveType.Share);
    }

    onUseProp() {
        this.onPromptReviveHide();
        this.promptUseProp.onPromptUsePropShow(this.isPop, this.propNum);
    }

    onBuyProp() {
        this.onPromptReviveHide();
        if (this.isPop) {
            this.promptBuyPropCtrl.onPropsPromptShow(GAME_PROPS.PROP_POP, this.buyTimes);
        } else {
            this.promptBuyPropCtrl.onPropsPromptShow(GAME_PROPS.PROP_ROLLBACK, this.buyTimes);
        }
    }

    onShare() {
        this.onPromptReviveHide();
        // TODO 需调用分享接口

        cc.systemEvent.emit('shiftBlock');
        cc.game.gameStatus = GAME_STATUS.GAME_PLAYING;
        setFirstRevive();
    }

    onCancel() {
        this.onPromptReviveHide();
        cc.systemEvent.emit('cancelRevive');
    }

    /** 更新视图文字 */
    updateDescribeTextByLanguage() {

        if (GameDataManager.getInstance().Language == LANGUAGE_TYPE.EN) {
            this.text_title.string = language.en.revive.slotFull;
            this.text_describe.string = language.en.revive.reviveContinue;
            this.text_share.string = language.en.revive.shareFriends;
        } else {
            this.text_title.string = language.ar.revive.slotFull;
            this.text_describe.string = language.ar.revive.reviveContinue;
            this.text_share.string = language.ar.revive.shareFriends;
        }
    }

    updateRevive(type: ReviveType) {
        this.btn_use.active = type == ReviveType.UsePropShare;
        this.btn_buy.active = type == ReviveType.BuyPropShare;
        this.btn_revive.active = type == ReviveType.Share;
        this.btn_share.active = type != ReviveType.Share;
        this.updateDescribeTextByLanguage();
        let id = this.isPop ? 0 : 1;
        this.view_props.spriteFrame = this.viewList_props[id];
    }


}
