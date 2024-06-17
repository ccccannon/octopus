
const { ccclass, property } = cc._decorator

@ccclass
export class SpeedUp extends cc.Component {


    @property(cc.Node)
    node_effect: cc.Node = null;

    protected onLoad(): void {
        this.addSpeedUpListener();
        this.node_effect.active = false;
    }

    protected onDestroy(): void {
        this.removeSpeedUpListener();
    }

    /** 显示加速特效 */
    showSpeedEffect() {
        this.node_effect.active = true;
    }

    /**  增加加速按钮的事件监听 */
    addSpeedUpListener() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onSpeedUpBtnTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onSpeedUpBtnTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onSpeedUpBtnTouchEnd, this);

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onSpeedUpBtnTouchStart, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onSpeedUpBtnTouchEnd, this);

    }

    removeSpeedUpListener() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onSpeedUpBtnTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onSpeedUpBtnTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onSpeedUpBtnTouchEnd, this);

        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onSpeedUpBtnTouchStart, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onSpeedUpBtnTouchEnd, this);
    }


    onSpeedUpBtnTouchStart() {
        // console.log('加速按钮被点击');
        cc.systemEvent.emit('SnakeSpeedUp');
        this.node_effect.active = true;
    }

    onSpeedUpBtnTouchEnd() {
        // console.log('加速按钮被放开');
        cc.systemEvent.emit('SnakeSpeedNormal');
        this.node_effect.active = false
    }

}