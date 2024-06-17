
const { ccclass, property } = cc._decorator;

@ccclass
export default class CamelCtrl extends cc.Component {

    /** 骆驼头 */
    @property(cc.Node)
    camel_head: cc.Node = null;

    /** 骆驼头的头像集合 */
    @property([cc.SpriteFrame])
    viewList_camelHead: Array<cc.SpriteFrame> = [];

    /** 脚下阴影 */
    @property(cc.Node)
    camel_bottom_shader: cc.Node = null;

    /** 骆驼尾巴 */
    @property(cc.Node)
    camel_tie: cc.Node = null;

    /** 骆驼身体 */
    @property(cc.Node)
    camel_body: cc.Node = null;

    /** 骆驼驼峰 */
    @property(cc.Node)
    camel_hump: cc.Node = null;

    // @property([cc.SpriteFrame])
    // viewList_hump: Array<cc.SpriteFrame> = [];


    /** 骆驼右前腿 */
    @property(cc.Node)
    camel_leg_front_right: cc.Node = null;

    /** 骆驼左前腿 */
    @property(cc.Node)
    camel_leg_front_left: cc.Node = null;

    /** 骆驼右后腿 */
    @property(cc.Node)
    camel_leg_behind_right: cc.Node = null;

    /** 骆驼左后腿 */
    @property(cc.Node)
    camel_leg_behind_left: cc.Node = null;

    @property(cc.SpriteFrame)
    camel_test_head: cc.SpriteFrame = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    /** 执行动画 */
    startAnimation() {
        // this.camel_head.children[0].active = false;
        // this.camel_head.getComponent(cc.Sprite).spriteFrame = this.camel_test_head;
        this.randomComposeCamelDisplay();
        const anima = this.node.getComponent(cc.Animation);
        anima.play();
    }


    /** 随机组合骆驼的展示 */
    randomComposeCamelDisplay() {
        const len = this.viewList_camelHead.length || 0;
        const headIdx = Math.floor(Math.random() * len);
        // const humpIdx = Math.random() > 0.5 ? 1 : 0;
        this.camel_head.getComponent(cc.Sprite).spriteFrame = this.viewList_camelHead[headIdx];
        // this.camel_hump.getComponent(cc.Sprite).spriteFrame = this.viewList_hump[humpIdx];
        // if ((headIdx + 1) % 5 != 0) {
        //     this.camel_head.children[0].active = false;
        // }
    }



    start() {
        this.startAnimation();
    }

    // update (dt) {}
}
