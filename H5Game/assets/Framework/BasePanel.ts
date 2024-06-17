// const alignDirect = cc.Enum({
//     LEFT: 'left',
//     RIGHT: 'right',
//     TOP: 'top',
//     BOTTOM: 'bottom',
// });

import GameMgr from "../Script/Managers/GameMgr";
import { LANGUAGE_TYPE } from "../Script/Mgr/Config";


enum alignDirect {
    LEFT = 'left',
    RIGHT = 'right',
    TOP = 'top',
    BOTTOM = 'bottom',
}

enum isAlign {
    isAbsoluteVerticalCenter = 'isAbsoluteVerticalCenter',
    isAlignBottom = 'isAlignBottom',
    isAlignHorizontalCenter = 'isAlignHorizontalCenter',
    isAlignLeft = 'isAlignLeft',
    isAlignRight = 'isAlignRight',
    isAlignTop = 'isAlignTop',
    isAlignVerticalCenter = 'isAlignVerticalCenter'
}

// const isAlign = cc.Enum({
//     isAbsoluteVerticalCenter: 'isAbsoluteVerticalCenter',
//     isAlignBottom: 'isAlignBottom',
//     isAlignHorizontalCenter: 'isAlignHorizontalCenter',
//     isAlignLeft: 'isAlignLeft',
//     isAlignRight: 'isAlignRight',
//     isAlignTop: 'isAlignTop',
//     isAlignVerticalCenter: 'isAlignVerticalCenter'
// });


enum Position {
    TOP = 1,
    BOTTOM,
    LEFT,
    RIGHT,
}

// const Position = cc.Enum({
//     TOP: 1,
//     BOTTOM: 2,
//     LEFT: 3,
//     RIGHT: 4,
// });

const { ccclass, property } = cc._decorator;
@ccclass
export default class BasePanel extends cc.Component {

    public fadePos: Position = Position.BOTTOM;
    @property(cc.Label)
    text_name: cc.Label=null;;

    @property(cc.Node)
    node_close: cc.Node=null;;

    @property(cc.Node)
    mask: cc.Node=null;;

    @property(cc.Node)
    loading: cc.Node=null;;


    // 更新节点的
    updateNodeWidgetArab(node, offset) {
        const widget = node.getComponent(cc.Widget);
        if (!widget) {
            throw new Error('check the node, make sure the node have widget!');
        }
        widget[isAlign.isAlignLeft] = true;
        widget[isAlign.isAlignRight] = false;
        widget[alignDirect.LEFT] = offset;
        widget.updateAlignment();
    }

    updateNodeWidgetEn(node, offset) {
        const widget = node.getComponent(cc.Widget);
        if (!widget) {
            throw new Error('check the node, make sure the node have widget!');
        }
        widget[isAlign.isAlignLeft] = false;
        widget[isAlign.isAlignRight] = true;
        widget[alignDirect.RIGHT] = offset;
        widget.updateAlignment();
    }

    // 获取视图尺度
    getViewSize() {
        return cc.view.getVisibleSize();
    }


    // 获取弹窗的原始位置
    getInitPos() {
        const viewSize = this.getViewSize();
        const vHeight = viewSize.height;
        const vWidth = viewSize.width;
        let initPosY;
        let initPosX;
        if (this.fadePos === Position.BOTTOM) {
            initPosY = -(this.node.height + vHeight) / 2;
            initPosX = 0;
            return cc.v3(initPosX, initPosY);
        }

        if (this.fadePos === Position.TOP) {
            initPosY = (this.node.height + vHeight) / 2;
            initPosX = 0;
            return cc.v3(initPosX, initPosY);
        }

        if (this.fadePos === Position.LEFT) {
            initPosY = 0;
            initPosX = -(this.node.width + vWidth) / 2;
            return cc.v3(initPosX, initPosY);
        }

        if (this.fadePos === Position.RIGHT) {
            initPosY = 0;
            initPosX = (this.node.width + vWidth) / 2;
            return cc.v3(initPosX, initPosY);
        }

    }

    // 设置初始化的位置
    setInitPos() {
        const pos = this.getInitPos();
        // console.log(pos, '设置初始化的位置');
        this.node.position = pos;
    }


    // 获取需要移动到的位置
    getTargetPos() {
        const viewSize = this.getViewSize();
        const vHeight = viewSize.height;
        const vWidth = viewSize.width;
        let initPosY;
        let initPosX;
        if (this.fadePos === Position.BOTTOM) {
            initPosY = -(vHeight - this.node.height) / 2;
            initPosX = 0;
            return cc.v2(initPosX, initPosY);
        }

        if (this.fadePos === Position.TOP) {
            initPosY = (vHeight - this.node.height) / 2;
            initPosX = 0;
            return cc.v2(initPosX, initPosY);
        }

        if (this.fadePos === Position.LEFT) {
            initPosY = 0;
            initPosX = -(vWidth - this.node.width) / 2;
            return cc.v2(initPosX, initPosY);
        }

        if (this.fadePos === Position.RIGHT) {
            initPosY = 0;
            initPosX = (vWidth - this.node.width) / 2;
            return cc.v2(initPosX, initPosY);
        }
    }

    // 获取淡入动画
    getFadeInAnimation(targetPos, callback) {

        const action = cc.tween().to(0.2, { position: targetPos }, { easing: 'sineIn' }).call(() => {
            callback && callback();
        })
        return action;
    }

    arabUiDisplay() {
        this.updateNodeWidgetArab(this.node_close, 30);
    }

    enUiDisplay() {
        this.updateNodeWidgetEn(this.node_close, 30);
    }


    hideView(callback) {
        this.setInitPos();
        if (typeof callback === 'function') {
            callback();
        }
        this.node.active = false;
        this.mask.active = false;
        if (this.loading) {
            this.loading.active = false;
        }
        this.showAnimationLayer();
    }

    showView(callback) {
        this.node.active = true;
        this.mask.active = true;
        // debugger
        this.hideAnimationLayer();
        const targetPos = this.getTargetPos();
        const action = this.getFadeInAnimation(targetPos, callback);
        cc.tween(this.node).then(action).start();

    }

    /** 隐藏动画层 */
    hideAnimationLayer() {

        const animaLayer = cc.find('Home/animationLayer');
        if (animaLayer) {
            animaLayer.active = false;
        }
    }


    /** 显示动画层 */
    showAnimationLayer() {
        const animaLayer = cc.find('Home/animationLayer');
        if (animaLayer) {
            animaLayer.active = true;
        }
    }


    // 加载状态
    showLoading() {
        if (this.loading) {
            this.loading.active = true;
            cc.tween(this.loading).by(2, { angle: -360 }).repeatForever().start();
        }
    }

    // 隐藏状态
    hideLoading() {
        if (this.loading) {
            this.loading.stopAllActions();
            this.loading.active = false;
        }
    }

    // 根据语言设置布局
    setLayoutByLanguage() {
        if (GameMgr.getInstance().Language == LANGUAGE_TYPE.ARAB) {
            this.arabUiDisplay();
        } else {
            this.enUiDisplay();
        }
    }

    setTitle(str) {
        this.text_name.string = str;
    }

    onLoad() {
        // this.arabUiDisplay();
        // this.setLayoutByLanguage();
        // this.setInitPos();

    }

}

