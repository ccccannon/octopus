// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const Position = cc.Enum({
    TOP: 1,
    BOTTOM: 2,
    LEFT: 3,
    RIGHT: 4,
});

const Type = cc.Enum({
    MOVE: 1,
    MOVE_FADE: 2,
    STATIC: 3,
    FADE: 4,
    SCALE: 5,
})

cc.Class({
    extends: cc.Component,

    properties: {

        // 未进入视线的初始位置
        fadePos: {
            displayName: '进入可视区的位置',
            tooltip: `
            TOP(上): 1,
            BOTTOM(下): 2,
            LEFT(左）: 3, 
            RIGHT(右）: 4,` ,
            default: 2,
            type: cc.Integer,
            set(val) {
                this._fadePos = val;
            },
            get() {
                return this._fadePos;
            }
        },


        actionType: {
            default: Type.MOVE,
            displayName: '运动方式',
            tooltip: `
            MOVE(移动): 1,
            MOVE_FADE(移动+淡入淡出): 2,
            STATIC(直接出现): 3,
            FADE(淡入淡出): 4,
            SCALE(缩放):5,
            `
        },

        mask: {
            default: null,
            type: cc.Node,
            displayName: "遮罩",
        }

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // setDrawPosition();
        this.setDrawPosition();
    },

    getViewSize() {
        return cc.view.getVisibleSize();
    },

    setDrawPosition() {
        const vector = this.getDrawInitPos();
        this.node.setPosition(vector);
        // const tPos = this.getDrwaTargetPos();
        // console.log(tPos.x, 'tPos');
        // console.log(tPos.y, 'tPos');
    },

    // 重置节点的属性
    resetNodeProps(isHide = false) {
        this.node.active = true;
        this.node.opacity = isHide ? 0 : 255;
    },

    // 获取抽屉节点的原始位置
    getDrawInitPos() {
        const viewSize = this.getViewSize();
        const vHeight = viewSize.height;
        const vWidth = viewSize.width;
        let initPosY;
        let initPosX;
        if (this.fadePos === Position.BOTTOM) {
            initPosY = -(this.node.height + vHeight) / 2;
            initPosX = 0;
            return cc.v2(initPosX, initPosY);
        }

        if (this.fadePos === Position.TOP) {
            initPosY = (this.node.height + vHeight) / 2;
            initPosX = 0;
            return cc.v2(initPosX, initPosY);
        }

        if (this.fadePos === Position.LEFT) {
            initPosY = 0;
            initPosX = -(this.node.width + vWidth) / 2;
            return cc.v2(initPosX, initPosY);
        }

        if (this.fadePos === Position.RIGHT) {
            initPosY = 0;
            initPosX = (this.node.width + vWidth) / 2;
            return cc.v2(initPosX, initPosY);
        }

    },

    // 获取抽屉需要移动到的位置
    getDrwaTargetPos() {
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
    },


    moveInAction() {
        // cc.tween(this.node).to(0.2, { position: targetPos }, { easing: 'sineOutIn' }).start();

        // this.mask.active = true;

        const position = this.getDrwaTargetPos();
        const moveAction = this.getMoveAction(0.2, position, 'sineIn');
        cc.tween(this.node).call(() => { this.mask.active = true, this.node.active = true }).then(moveAction).start();

    },

    moveOutAction() {
        const initPos = this.getDrawInitPos();
        const moveAction = this.getMoveAction(0.2, initPos, 'sineOut');
        cc.tween(this.node).then(moveAction).call(() => { this.mask.active = false; this.node.active = false }).start();
    },

    fadeAndMoveInAction() {
        const position = this.getDrwaTargetPos();
        const moveAction = this.getMoveAction(0.2, position, 'sineIn');
        const fadeAction = this.getFadeAction(0.2, 255, 'sineIn');
        cc.tween(this.node).parallel(moveAction, fadeAction).start();
    },

    getMoveAction(time, position, easing) {
        const moveAction = cc.tween().to(time, { position: position }, { easing: easing });
        return moveAction;
    },

    getFadeAction(time, opacity, easing) {
        const fadeAction = cc.tween().to(time, { opacity: opacity }, { easing: easing });
        return fadeAction;
    },

    start() {

        // this.schedule(() => {

        //     this.scheduleOnce(this.moveOutAction.bind(this), 5);
        // }, 2)

    },

    // update (dt) {},
});
