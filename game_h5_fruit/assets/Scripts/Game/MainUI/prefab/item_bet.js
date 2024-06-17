import { language } from '../../Lang/index';
import { numberFormat } from '../../../Utils/utils_common';
cc.Class({
    extends: cc.Component,
    properties: {
        isTotalShow: false,
        isMyBetShow: false,
        totalNumber: 0,
        myBetNumber: 0,
        label_totalNumber: cc.Label,
        label_myBetNumber: cc.Label,
        node_total: cc.Node,
        node_myBet: cc.Node,
    },

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onBetBtnClick, this);
    },

    // 初始化
    init(info) {
        this.setBetPosition(info.pos);
        // this.setRewardTimesLabel(info.rewardTimes);
        this.betInfo = info;
        // console.log(this.node);

    },

    setHeight(val) {
        this.node.height = val;
    },

    setWidth(val) {
        this.node.width = val;
    },

    // 设置位置
    setBetPosition(pos) {
        this.node.setPosition(pos);
    },

    setWorldPos() {
        const worldPos = this.node.parent.convertToWorldSpaceAR(this.node.position);
        this.betInfo.worldPos = worldPos;

    },

    // 获取下注按钮的世界坐标
    getWorldPos() {
        if (!this.betInfo.worldPos) {
            this.setWorldPos();
        }
        return this.betInfo.worldPos;
    },


    /** 设置总金币 */
    setTotalNumber(number) {
        if (number <= 0 || number < this.totalNumber) {
            return;
        }
        this.totalNumber = number;
        if (!this.isTotalShow) {
            this.isTotalShow = true;
            this.node_total.active = true;
        }
        this.label_totalNumber.string = numberFormat(number);
        this.label_totalNumber.node.active = false;
        this.label_totalNumber._forceUpdateRenderData(true);
        this.label_totalNumber.node.active = true;

    },


    /** 更新被选择水果的倍数颜色 */
    updateSelectedTotalBetColor(isChange) {
        if (isChange) {
            this.label_totalNumber.node.color = new cc.color(105, 67, 39);
        } else {
            this.label_totalNumber.node.color = new cc.color(255, 255, 255);
        }
    },


    // 设置总金额的数量
    // setTotalNumber(val) {
    //     this.totalNumber += val;
    //     if (!this.isTotalShow) {
    //         this.isTotalShow = true;
    //         this.node_total.active = true;
    //     }



    // this.label_totalNumber.node.getComponent('numberRoll').startNumberAnimationTo(this.totalNumber, 1);
    // },

    //设置我的金币数量 
    setMyBetNumber(val) {
        this.myBetNumber += val;
        if (!this.isMyBetShow) {
            this.isMyBetShow = true;
            this.node_myBet.active = true;
        }
        this.label_myBetNumber.node.getComponent('numberRoll').startNumberAnimationTo(this.myBetNumber, 1);
    },


    // 重置状态
    resetBetBtnState() {

        this.isTotalShow = false;
        this.isMyBetShow = false;
        this.node_total.active = false;
        this.node_myBet.active = false;
        this.totalNumber = 0;
        this.myBetNumber = 0;
        this.label_myBetNumber.node.getComponent('numberRoll').number = 0;
        this.label_totalNumber.node.getComponent('numberRoll').number = 0;
        this.updateSelectedTotalBetColor(false);

    },


    // 设置奖励文字数据
    setRewardTimesLabel(val) {
        // console.log(window.localLang, 'window.localLang');
        this.label_times.string = val + " " + language[window.localLang].times;
    },

    onBetBtnClick() {
        // console.log(this.betInfo, 'betInfo');
        this.setWorldPos();
        cc.systemEvent.emit('ON_BET_CLICK', this.betInfo);
    },

    onDestroy() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onBetBtnClick, this);
    }



})