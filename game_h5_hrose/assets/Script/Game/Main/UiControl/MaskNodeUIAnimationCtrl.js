
import { fingerMovePosition } from '../../Constants'

cc.Class({
    extends: cc.Component,

    properties: {
        node_bet_area: cc.Node,
        node_view_finger: cc.Node,
        node_view_fly_screen: cc.Node,
        viewFlyScreenList: [cc.SpriteFrame],
        node_mask_area: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node_view_finger.position = this.node.convertToNodeSpaceAR(this.node_bet_area.convertToWorldSpaceAR(fingerMovePosition[0]));
        this.center = this.node.convertToNodeSpaceAR(this.node_mask_area.convertToWorldSpaceAR(cc.v2(0, 0)));
    },

    /** 显示手指，执行移动动画 */
    showFingerAnimation() {

        if (!this.node_view_finger.active) {
            this.node_view_finger.active = true;
        }
        this.node_view_finger.stopAllActions();

        const actionList = this.getFingerAciton(1);

        cc.tween(this.node_view_finger).sequence(...actionList).repeatForever().start();

    },


    /**隐藏手指 停止手指动画 重置手指位置 */
    hideFinger() {
        this.node_view_finger.active = false;
        this.node_view_finger.stopAllActions();
        this.node_view_finger.position = this.node.convertToNodeSpaceAR(this.node_bet_area.convertToWorldSpaceAR(fingerMovePosition[0]));
    },


    /**  获取手指的移动动画*/
    getFingerAciton(stepTime) {

        let actionList = [];
        for (let i = 0, len = fingerMovePosition.length; i < len; i++) {
            // 进行坐标转换
            const pos = this.node.convertToNodeSpaceAR(this.node_bet_area.convertToWorldSpaceAR(fingerMovePosition[i]));
            const anima = cc.tween().to(stepTime, { position: pos }).delay(1);
            actionList.push(anima);
        }
        return actionList;

    },


    /** 展示静态飘屏 */
    showFlyScreenStatic(type) {
        this.node_view_fly_screen.getComponent(cc.Sprite).spriteFrame = this.viewFlyScreenList[type];
        this.node_view_fly_screen.active = true;
        this.node_view_fly_screen.position = this.center;
    },

    /** 展示动态飘屏 */
    showFlySceenDynamic(type) {
        this.node_view_fly_screen.getComponent(cc.Sprite).spriteFrame = this.viewFlyScreenList[type];
        this.initFlyScreenPosition();
        this.node_view_fly_screen.active = true;
        const action = this.getFlyScreenFadeInAnimation();
        cc.tween(this.node_view_fly_screen).then(action).start();

    },

    /**隐藏飘屏 */
    hideFlyScreen() {
        this.node_view_fly_screen.stopAllActions();
        this.node_view_fly_screen.active = false;
    },

    /**初始化飘屏的位置 */
    initFlyScreenPosition() {

        const viewSize = cc.view.getVisibleSizeInPixel();
        // console.log(viewSize);
        this.node_view_fly_screen.position = cc.v2(-(viewSize.width + this.node_view_fly_screen.width) / 2, this.center.y);

    },


    /** 获得飘屏的渐入动画 */
    getFlyScreenFadeInAnimation() {

        const viewSize = cc.view.getVisibleSizeInPixel();

        const action = cc.tween()
            .to(0.2, { position: cc.v2(0, 0) }, { easing: 'sineIn' })
            .delay(1.6)
            .to(0.2, { position: cc.v2((viewSize.width + this.node_view_fly_screen.width) / 2, this.center.y) }, { easing: 'sineIn' });

        return action;

    },




    start() {

    },

    // update (dt) {},
});
