
const { ccclass, property } = cc._decorator;

enum Position {
    TOP = 1,
    BOTTOM,
    LEFT,
    RIGHT
}

enum Type {
    MOVE = 1,
    MOVE_FADE,
    STATIC,
    FADE,
    SCALE
}


@ccclass
export default class HorseBaseDraw extends cc.Component {

    @property
    fadePos: Position = Position.BOTTOM;

    @property
    actionType: Type = Type.MOVE;

    @property(cc.Node)
    mask: cc.Node = null;

    onLoad() {
        // setDrawPosition();
        this.setDrawPosition();
    }

    getViewSize() {
        return cc.view.getVisibleSize();
    }

    setDrawPosition() {
        const vector = this.getDrawInitPos();
        this.node.setPosition(vector);
    }

    // 重置节点的属性
    resetNodeProps(isHide = false) {
        this.node.active = true;
        this.node.opacity = isHide ? 0 : 255;
    }

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

    }

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
    }


    moveInAction() {
        // cc.tween(this.node).to(0.2, { position: targetPos }, { easing: 'sineOutIn' }).start();

        // this.mask.active = true;

        const position = this.getDrwaTargetPos();
        const moveAction = this.getMoveAction(0.2, position, 'sineIn');
        cc.tween(this.node).call(() => { this.mask.active = true, this.node.active = true }).then(moveAction).start();

    }

    moveOutAction() {
        const initPos = this.getDrawInitPos();
        const moveAction = this.getMoveAction(0.2, initPos, 'sineOut');
        cc.tween(this.node).then(moveAction).call(() => { this.mask.active = false; this.node.active = false }).start();
    }

    fadeAndMoveInAction() {
        const position = this.getDrwaTargetPos();
        const moveAction = this.getMoveAction(0.2, position, 'sineIn');
        const fadeAction = this.getFadeAction(0.2, 255, 'sineIn');
        cc.tween(this.node).parallel(moveAction, fadeAction).start();
    }

    getMoveAction(time, position, easing) {
        const moveAction = cc.tween().to(time, { position: position }, { easing: easing });
        return moveAction;
    }

    getFadeAction(time, opacity, easing) {
        const fadeAction = cc.tween().to(time, { opacity: opacity }, { easing: easing });
        return fadeAction;
    }

    start() {

    }

}

