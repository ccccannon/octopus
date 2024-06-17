import BaseSnake from "./Prefab/BaseSnake";
import SnakePlayerCtrl from "./Prefab/SnakeModeGoldPlayer";

const { ccclass, property } = cc._decorator

@ccclass
export class JoyStick extends cc.Component {

    @property
    maxSpeed: number = 0;

    @property(cc.Camera)
    myView: cc.Camera = null;

    @property(cc.Node)
    node_touch: cc.Node = null;

    joyStickBtn: cc.Node = null;

    dir: cc.Vec3 = null;

    // isStop: boolean = false;

    // @property(cc.Node)
    // snake: cc.Node = null;

    @property(cc.Node)
    player: cc.Node = null;

    protected onLoad(): void {
        // cc.debug.setDisplayStats(false);

        // get joyStickBtn
        this.joyStickBtn = this.node.getChildByName('joystick_btn');

        // Player's move direction
        this.dir = cc.v3(0, 0, 0);

        // touch event
        this.node_touch.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node_touch.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node_touch.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node_touch.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);


    }

    protected onDestroy(): void {
        this.node_touch.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node_touch.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node_touch.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node_touch.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
    }

    onTouchStart(event) {
        // when touch starts, set joyStickBtn's position 
        let pos = this.node.convertToNodeSpaceAR(event.getLocation());
        this.joyStickBtn.setPosition(pos);
    }

    onTouchMove(event) {

        // return
        let posDelta = event.getDelta();
        this.joyStickBtn.setPosition(this.joyStickBtn.position.add(posDelta));

        // get direction

        const newVec = this.joyStickBtn.position.normalize();

        if (Math.abs(newVec.x - this.dir.x) < 0.1 && Math.abs(newVec.y - this.dir.y) < 0.1) {
            return;
        }

        this.dir = newVec;
        this.setPlayerDir();

        // event.propagationStopped = true;
        /** 停止事件冒泡 */
        event.stopPropagation();


    }

    onTouchEnd(event) {
        // reset
        this.resetJoyStick();
    }

    onTouchCancel(event) {
        // reset
        this.resetJoyStick();
    }

    /** 设置玩家 */
    setPlayerNode(node) {
        this.player = node;
    }

    /**隐藏触摸按钮 */
    hideJoyStick() {
        this.node_touch.active = false;
        this.node.active = false;
    }

    /** 显示触摸按钮 */
    showJoyStick(){
        this.node_touch.active = true;
        this.node.active = true;
    }

    /** 重置摇杆位置 */
    resetJoyStick() {
        this.joyStickBtn.setPosition(cc.v2(0, 0));
    }


    /** 设置玩家的方向 */
    setPlayerDir() {

        if (!this.player) {
            return;
        }
        this.player.getComponent(BaseSnake).dir = this.dir;

    }

    /** 设置当前 */
    setCameraPos() {
        if (!this.player) {
            return;
        }
        this.myView.node.position = this.player.position;
    }


    protected update(dt: number): void {
        let len = this.joyStickBtn.position.mag();
        let maxLen = this.node.width / 2;
        let ratio = len / maxLen;
        if (ratio > 1) {
            this.joyStickBtn.setPosition(this.joyStickBtn.position.div(ratio));
        }
    }

    // updateFrame(dt) {


    // }

}

