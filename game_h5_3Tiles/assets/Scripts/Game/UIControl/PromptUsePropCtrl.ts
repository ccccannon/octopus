
import { GameDataManager } from "../../Managers/GameDataManager";
import { LANGUAGE_TYPE } from "../Constant";
import { setFirstRevive } from "../GameUtils";
import { language } from "../Language/index";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PromptUsePropCtrl extends cc.Component {

    @property(cc.Node)
    node_mask: cc.Node = null;

    @property(cc.Label)
    text_title: cc.Label = null;

    @property(cc.Label)
    text_describe: cc.Label = null;

    @property(cc.Label)
    text_name: cc.Label = null;

    @property(cc.Label)
    text_propDescribe: cc.Label = null;

    @property(cc.Node)
    btn_use: cc.Node = null;

    @property(cc.Sprite)
    view_props: cc.Sprite = null;

    @property([cc.SpriteFrame])
    viewList_props: Array<cc.SpriteFrame> = [];

    @property(cc.Sprite)
    use_props: cc.Sprite = null;

    @property([cc.SpriteFrame])
    useList_props: Array<cc.SpriteFrame> = [];

    private isPop: boolean = false;

    protected onLoad(): void {

    }

    onPromptUsePropShow(isPop: boolean, propNum: number) {
        this.isPop = isPop;
        this.node_mask.active = true;
        this.node.active = true;
        this.node.scale = 0;
        cc.tween(this.node).to(0.4, { scale: 1 }, { easing: 'backOut' }).start();
        let id = this.isPop ? 0 : 1;
        this.view_props.spriteFrame = this.viewList_props[id];
        this.updatePropsTextById();
        this.updatePropsBtn(propNum);
    }

    onPromptUsePropHide() {
        this.node.active = false;
        this.node_mask.active = false;
    }

    onUseProp() {
        this.onPromptUsePropHide();
        cc.systemEvent.emit('useProp', this.isPop);
        setFirstRevive();
    }

    onCancel() {
        this.onPromptUsePropHide();
        cc.systemEvent.emit('cancelRevive');
    }

    /** 更新道具文案 */
    updatePropsTextById() {
        let name, discribeStr;
        if (GameDataManager.getInstance().Language == LANGUAGE_TYPE.EN) {
            this.text_title.string = language.en.revive.slotFull;
            this.text_describe.string = language.en.revive.reviveContinue;
            if (this.isPop) {
                name = language.en.props.pop.name;
                discribeStr = language.en.props.pop.discribe;
            } else {
                name = language.en.props.rollback.name;
                discribeStr = language.en.props.rollback.discribe;
            }
        } else {
            this.text_title.string = language.ar.revive.slotFull;
            this.text_describe.string = language.ar.revive.reviveContinue;
            if (this.isPop) {
                name = language.ar.props.pop.name;
                discribeStr = language.ar.props.pop.discribe;
            } else {
                name = language.ar.props.rollback.name;
                discribeStr = language.ar.props.rollback.discribe;
            }
        }
        this.text_name.string = name;
        this.text_propDescribe.string = discribeStr;
    }

    updatePropsBtn(propNum: number) {
        let id = 0;
        if (GameDataManager.getInstance().Language == LANGUAGE_TYPE.EN) {
            id = propNum == 1 ? 1 : 3;
        }
        else {
            id = propNum == 1 ? 0 : 2;
        }
        this.use_props.spriteFrame = this.useList_props[id];
    }


}
