import { MsgDispatcher } from "../../DataHandler/MsgDispatcher";
import { GameDataManager } from "../../Managers/GameDataManager";
import { SingleGameUsePropMsg } from "../../msg/SingleGameUsePropMsg";
import { LANGUAGE_TYPE } from "../Constant";
import { GAME_PROPS } from "../GameData";
import { language } from "../Language/index";


const { ccclass, property } = cc._decorator;

@ccclass
export default class PromptPropsCtrl extends cc.Component {

    @property(cc.Label)
    text_name: cc.Label = null;


    @property(cc.Label)
    text_describe: cc.Label = null;

    @property(cc.Sprite)
    view_props: cc.Sprite = null;

    @property([cc.SpriteFrame])
    viewList_props: Array<cc.SpriteFrame> = [];

    @property(cc.Node)
    node_buy_100: cc.Node = null;

    @property(cc.Node)
    node_buy_500: cc.Node = null;

    @property([cc.SpriteFrame])
    nodeBuyViewList: Array<cc.SpriteFrame> = []

    @property(cc.Node)
    mask: cc.Node = null;

    public currentId: number = null;

    public currentRestTimes: number = null;

    public isBuying: boolean = false;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}


    /** 发送道具购买信息 */
    sendBuyPorpsMsg(id) {
        const prop = new SingleGameUsePropMsg();
        prop.propId = id + 1;
        prop.type = 1;
        prop.tableId = GameDataManager.getInstance().TableId;
        MsgDispatcher.sendMsg(prop);
    }


    onPorpsPromptHide() {
        this.node.active = false;
        this.mask.active = false;
        this.isBuying = false;
    }

    onPropsPromptShow(id, restTimes = 2) {
        GameDataManager.getInstance().IsReviveBuyProp = false;
        this.isBuying = false;
        this.currentId = id;
        this.currentRestTimes = restTimes;
        this.updatePropmtViewById(id);
        this.showBuyNode();
        this.updateBuyBtnViewByLanguage();
        this.mask.active = true;
        this.node.active = true;
        this.node.scale = 0;
        cc.tween(this.node).to(0.4, { scale: 1 }, { easing: 'backOut' }).start();
    }


    showBuyNode() {
        if (this.currentRestTimes == 0) {
            this.node_buy_100.active = true;
            this.node_buy_500.active = false;
        }
        else if (this.currentRestTimes == 1) {
            this.node_buy_100.active = false;
            this.node_buy_500.active = true;
        }
    }

    /**根据语言来更新按钮文案 */
    updateBuyBtnViewByLanguage() {

        if (GameDataManager.getInstance().Language == LANGUAGE_TYPE.EN) {
            this.node_buy_100.getComponent(cc.Sprite).spriteFrame = this.nodeBuyViewList[1];
            this.node_buy_500.getComponent(cc.Sprite).spriteFrame = this.nodeBuyViewList[3];
        } else {
            this.node_buy_100.getComponent(cc.Sprite).spriteFrame = this.nodeBuyViewList[0];
            this.node_buy_500.getComponent(cc.Sprite).spriteFrame = this.nodeBuyViewList[2];
        }

    }


    /** 根据 */
    updatePropmtViewById(id) {
        this.view_props.spriteFrame = this.viewList_props[id];
        this.updatePropsTextById(id);
    }

    /** 更新道具文案 */
    updatePropsTextById(id) {

        let name, discribeStr;
        if (GameDataManager.getInstance().Language == LANGUAGE_TYPE.EN) {

            if (id === GAME_PROPS.PROP_SHUFFLE) {
                name = language.en.props.shuffle.name;
                discribeStr = language.en.props.shuffle.discribe
            }
            else if (id == GAME_PROPS.PROP_ROLLBACK) {
                name = language.en.props.rollback.name;
                discribeStr = language.en.props.rollback.discribe;
            }
            else if (id == GAME_PROPS.PROP_POP) {
                name = language.en.props.pop.name;
                discribeStr = language.en.props.pop.discribe;
            }

        } else {
            if (id === GAME_PROPS.PROP_SHUFFLE) {
                name = language.ar.props.shuffle.name;
                discribeStr = language.ar.props.shuffle.discribe
            }
            else if (id == GAME_PROPS.PROP_ROLLBACK) {
                name = language.ar.props.rollback.name;
                discribeStr = language.ar.props.rollback.discribe;
            }
            else if (id == GAME_PROPS.PROP_POP) {
                name = language.ar.props.pop.name;
                discribeStr = language.ar.props.pop.discribe;
            }
        }

        this.text_name.string = name;
        this.text_describe.string = discribeStr;

    }


    /** 购买道具 */
    buyPropsById() {

        // console.log(this.currentId);
        // console.log(this.currentRestTimes);

        // this.onPorpsPromptHide();

        // cc.systemEvent.emit('buyProps', this.view_props.node, this.currentId);   

        /** 节流 */
        if (this.isBuying) {
            return;
        }
        this.isBuying = true;

        this.sendBuyPorpsMsg(this.currentId);

    }

    /** 购买成功后的动画执行 */
    buySuccessAnimaStart() {
        this.onPorpsPromptHide();
        cc.systemEvent.emit('buyProps', this.view_props.node, this.currentId);
    }



    start() {

    }

    // update (dt) {}
}
