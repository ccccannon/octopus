// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameMgr from "../../../../../Script/Managers/GameMgr";
import { LANGUAGE_TYPE } from "../../../../../Script/Mgr/Config";
import { language } from "../Lang/index";

// const ANIMATYPE = cc.Enum({
//     FADE: 0, //淡入淡出
//     FADE_MOVEUP: 1, //淡入向上移动淡出 
//     SCALE: 2, // 缩放进场
//     SCALE_MOVEUP: 3,//缩放进场向上消失
//     SCALE_MOVEUP_FADE: 4,//缩放进场，向上移动消失
// });

enum ANIMATYPE {
    FADE = 0, //淡入淡出
    FADE_MOVEUP, //淡入向上移动淡出 
    SCALE, // 缩放进场
    SCALE_MOVEUP,//缩放进场向上消失
    SCALE_MOVEUP_FADE,//缩放进场，向上移动消失
}

enum TIPTYPE {
    NORMAL = 0,
    WITHANIMATION,
}


const { ccclass, property } = cc._decorator;
@ccclass
export default class item_tips extends cc.Component {
    @property(cc.Label)
    text_tips: cc.Label = null;
    @property(cc.Node)
    targetNode: cc.Node = null;
    // animaType: ANIMATYPE.FADE_MOVEUP,
    animaType: ANIMATYPE = ANIMATYPE.FADE_MOVEUP;
    tipsType: TIPTYPE = TIPTYPE.NORMAL;

    public hideTime: number = 0;

    onLoad() {
        this.setInitPosition();
        // this.showTipsByCode(1002);
    }

    // 根据提示数字 来显示不同的提示
    showTipsByCode(code) {
        const text = this.getShowText(code);
        this.setTextTips(text);
        this.autoSetBackground();
    }

    setAnimaType(type) {
        this.animaType = type;
    }


    // 获取显示文案
    getShowText(code) {
        let text = '';
        const lang = GameMgr.getInstance().Language == LANGUAGE_TYPE.ARAB ? LANGUAGE_TYPE.ARAB : LANGUAGE_TYPE.EN;
        text = language[lang].tips[code + ''];

        return text;
    }


    // 设置文字提醒
    setTextTips(str) {
        this.text_tips.string = str;
    }

    // 根据文本宽度，自动调节背景框的大小。
    autoSetBackground() {

        // @ts-ignore
        this.text_tips._forceUpdateRenderData(true);

        // console.log(this.text_tips.node.width);

        // console.log('autoSetBackground');

        this.node.width = this.text_tips.node.width + 50;
    }

    // 设置提示的初始位置
    setInitPosition() {
        const position = this.node.parent.convertToNodeSpaceAR(this.targetNode.parent.convertToWorldSpaceAR(this.targetNode.position));
        this.node.position = position;
    }

    // 获取动画
    getAnimation(type, callback) {
        let action;
        switch (type) {

            case ANIMATYPE.FADE:
                action = this.fadeInAndOut(callback);
                break;
            case ANIMATYPE.FADE_MOVEUP:
                action = this.fadeInAndMoveUp(callback);
                break;
            case ANIMATYPE.SCALE:
                action = this.scaleInAndOut(callback);
                break;
            case ANIMATYPE.SCALE_MOVEUP:
                action = this.scaleAndMoveUp(callback);
                break;
            case ANIMATYPE.SCALE_MOVEUP_FADE:
                action = this.scaleAndFadeMoveUp(callback);
                break;
        }
        return action;
    }

    // 淡入淡出
    fadeInAndOut(callback) {
        const anima = cc.tween().to(0.2, { opacity: 255 }, { easing: 'sineIn' }).delay(2)
            .to(0.2, { opacity: 0 }, { easing: 'sineIn' }).call(() => {
                callback && callback();
            });;
        return anima;
    }

    // 淡入向上移动淡出
    fadeInAndMoveUp(callback) {
        const aniam = cc.tween().to(0.2, { opacity: 255 }, { easing: 'sineIn' }).delay(2)
            .by(0.2, { opacity: 0, position: cc.v2(0, 50) }, { easing: 'sineIn' }).call(() => {
                callback && callback();
            });;
        return aniam;
    }

    // 缩放进场
    scaleInAndOut(callback) {
        const anima = cc.tween().to(0.2, { scale: 1 }, { easing: 'sineIn' }).delay(2)
            .to(0.2, { scale: 0 }, { easing: 'sineIn' }).call(() => {
                callback && callback();
            });;
        return anima;
    }

    // 缩放进场 向上移动消失
    scaleAndMoveUp(callback) {
        const anima = cc.tween().to(0.2, { scale: 1 }, { easing: 'sineIn' }).delay(2)
            .by(0.2, { position: cc.v2(0, 50) }, { easing: 'sineOut' }).call(() => {
                callback && callback();
            });
        return anima;
    }

    // 缩放进场 向上移动消失
    scaleAndFadeMoveUp(callback) {
        const anima = cc.tween().to(0.2, { scale: 1 }, { easing: 'sineIn' }).delay(2)
            .by(0.2, { opacity: -255, position: cc.v2(0, 50) }, { easing: 'sineIn' }).call(() => {
                callback && callback();
            });;
        return anima;
    }

    // TODO 以后如果遇到要toast的东西特别多的时候，可以考虑给tips加节点池。
    // 移除
    removeTipsFromParent() {
        this.node.destroy();
    }


    //  提示语的 出现动画
    tipsAnimation() {
        this.setNodeStateByAnimaType(this.animaType);
        const action = this.getAnimation(this.animaType, this.removeTipsFromParent.bind(this));
        cc.tween(this.node).then(action).start();
    }


    // 设置节点初始状态
    setNodeStateByAnimaType(type) {

        this.node.active = true;
        if (type === ANIMATYPE.FADE || type === ANIMATYPE.FADE_MOVEUP) {
            this.node.opacity = 0;
            this.node.scale = 1;
            return;
        }

        if (type === ANIMATYPE.SCALE || type === ANIMATYPE.SCALE_MOVEUP || type === ANIMATYPE.SCALE_MOVEUP_FADE) {
            this.node.opacity = 255;
            this.node.scale = 0;
            return;
        }

    }

    // 设置提示类型
    setNodeTipsType(type) {
        this.tipsType = type;
    }

    // 根据提示类型设置节点状态
    setNodeStateByTipsType() {

        if (!this.tipsType) {
            this.tipsType = TIPTYPE.NORMAL;
        }

        if (this.tipsType === TIPTYPE.NORMAL) {
            this.node.active = true;
            this.node.scale = 1;
            this.node.opacity = 255;
        } else {
            this.setNodeStateByAnimaType(this.animaType);
        }

    }

    //  设置关闭时间
    setHideTime(time = 3) {
        this.hideTime = time;
    }

    // 开启关闭定时器
    startHideInterval() {
        const hideTime = this.hideTime ? this.hideTime : 3;
        setTimeout(() => {
            this.removeTipsFromParent();
        }, hideTime * 1000)
    }



}

