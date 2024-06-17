
import { numberFormat } from "../../../Utils/utils_common";

cc.Class({
    extends: cc.Component,

    properties: {
        coinList: [cc.SpriteFrame],
        totalCoinView: cc.Sprite,
        label_totalNumber: cc.Label,
        node_totalBet: cc.Node,
        node_myBet: cc.Node,
        label_myBetNumber: cc.Label,

        bg_glod_me: cc.Sprite,
        bg_spriteList: [cc.SpriteFrame],

    },

    onLoad() {

        this.node.on(cc.Node.EventType.TOUCH_START, this.onBetItemClick, this);
        this.resetNumberValue();

    },

    /** 初始化 */
    init(index) {
        this.areaIndex = index;
    },


    /** 更新本人下注背景图片 */
    updateMybetBg() {
        if (this.areaIndex == 5) {
            this.bg_glod_me.spriteFrame = this.bg_spriteList[1];
        } else {
            this.bg_glod_me.spriteFrame = this.bg_spriteList[0];
        }
    },

    /** 重置下注区域的数据 */
    resetBetArea() {
        this.hideNumberNode();
        this.resetNumberValue();
    },

    /** 重置数字的大小 */
    resetNumberValue() {

        this.numberMyBet = 0;
        this.numberTotal = 0;
        this.label_myBetNumber.node.getComponent('numberRoll').number = 0;
        this.coinViewIndex = 0;

    },

    /** 隐藏节点 */
    hideNumberNode() {

        this.totalCoinView.spriteFrame = this.coinList[0];
        this.isTotalShow = false;
        this.node_totalBet.active = false;

        this.isMyBetShow = false;
        this.node_myBet.active = false;

    },

    /** 根据数值返回展示等级 */
    getCoinViewLevelByNumber(number) {

        if (0 >= number || number <= 10) {
            return 0;
        }

        if (10 ** 2 >= number && number > 10) {
            return 1;
        }

        if (10 ** 3 >= number && number > 10 ** 2) {
            return 2;
        }

        if (10 ** 4 >= number && number > 10 ** 3) {
            return 3;
        }

        if (10 * 8 >= number && number > 10 ** 4) {
            return 4;
        }

        if (number > 10 * 8) {
            return 5;
        }

    },



    updateCoinView(number) {

        const lv = this.getCoinViewLevelByNumber(number);
        /**当计算出来的等级跟当前等级不一样的时候，替换金币展示图片 */
        if (lv != this.coinViewIndex) {

            const node = this.totalCoinView.node;
            node.stopAllActions();
            cc.tween(node).to(0.1, { scale: 1.2 }, { easing: 'sineIn' }).call(() => {
                this.totalCoinView.spriteFrame = this.coinList[lv];
                this.coinViewIndex = lv;
            }).to(0.1, { scale: 1 }, { easing: 'sineIn' }).start();

        }

    },



    /** 设置总金币 */
    setTotalNumber(number) {
        if (number <= 0 || number < this.totalNumber) {
            return;
        }
        this.numberTotal = number;

        this.updateCoinView(number);

        if (!this.isTotalShow) {
            this.isTotalShow = true;
            this.node_totalBet.active = true;
        }
        this.label_totalNumber.string = numberFormat(number);
        this.labelForceUpdate(this.label_totalNumber);

    },

    /** label组件强制更新长度 */
    labelForceUpdate(label) {
        label.node.active = false;
        label._forceUpdateRenderData(true);
        label.node.active = true;
    },

    //设置我的金币数量 
    setMyBetNumber(val) {
        this.numberMyBet += val;
        if (!this.isMyBetShow) {

            this.updateMybetBg();
            this.isMyBetShow = true;
            this.node_myBet.active = true;
        }
        this.label_myBetNumber.node.getComponent('numberRoll').startNumberAnimationTo(this.numberMyBet, 1);
    },


    /** 下注区域点击事件 */
    onBetItemClick() {
        // console.log(this.node.position.y);
        const mybetWorldPos = this.node.convertToWorldSpaceAR(this.node_myBet.position);
        cc.game.evtManager.emit('onBet', { index: this.areaIndex, worldPos: mybetWorldPos });

    },

    start() {

    },

    // update (dt) {},
});
