import { language } from '../../Lang/index';

import { numberFormat } from "../../../../../../Script/Utils/Utils_Common";

const { ccclass, property } = cc._decorator;
@ccclass
export default class item_bet extends cc.Component {
    @property(cc.Label)
    label_totalNumber: cc.Label = null;
    @property(cc.Label)
    label_myBetNumber: cc.Label = null;
    @property(cc.Node)
    node_total: cc.Node = null;
    @property(cc.Node)
    node_myBet: cc.Node = null;

    public isTotalShow: boolean = false;
    public isMyBetShow: boolean = false;
    public totalNumber: number = 0;
    public myBetNumber: number = 0;
    public betInfo: any = null;

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onBetBtnClick, this);
    }

    // 初始化
    init(info) {

        this.setBetPosition(info.pos);
        // this.setRewardTimesLabel(info.rewardTimes);
        this.betInfo = info;
        // console.log(this.node);

    }

    setHeight(val) {
        this.node.height = val;
    }

    setWidth(val) {
        this.node.width = val;
    }

    // 设置位置
    setBetPosition(pos) {
        this.node.setPosition(pos);
    }

    setWorldPos() {
        const worldPos = this.node.parent.convertToWorldSpaceAR(this.node.position);
        this.betInfo.worldPos = worldPos;

    }

    // 获取下注按钮的世界坐标
    getWorldPos() {
        if (!this.betInfo.worldPos) {
            this.setWorldPos();
        }
        return this.betInfo.worldPos;
    }


    /**  增加总金币 */
    addTotalNumber(number) {
        // if (number <= 0 || number < this.totalNumber) {
        //     return;
        // }

        // debugger
        if (number <= 0) {
            return;
        }
        this.totalNumber += number;
        if (!this.isTotalShow) {
            this.isTotalShow = true;
            this.node_total.active = true;
        }
        this.label_totalNumber.string = numberFormat(this.totalNumber);
        this.label_totalNumber.node.active = false;
        // @ts-ignore
        this.label_totalNumber._forceUpdateRenderData(true);
        this.label_totalNumber.node.active = true;

    }

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

        this.label_totalNumber.string = numberFormat(this.totalNumber);
        this.label_totalNumber.node.active = false;
        // @ts-ignore
        this.label_totalNumber._forceUpdateRenderData(true);
        this.label_totalNumber.node.active = true;

    }

    /** 更新被选择水果的倍数颜色 */
    updateSelectedTotalBetColor(isChange) {
        if (isChange) {
            this.label_totalNumber.node.color = cc.color(105, 67, 39);
        } else {
            this.label_totalNumber.node.color = cc.color(255, 255, 255);
        }
    }


    // 设置总金额的数量
    // setTotalNumber(val) {
    //     this.totalNumber += val;
    //     if (!this.isTotalShow) {
    //         this.isTotalShow = true;
    //         this.node_total.active = true;
    //     }


    /** 设置我的下注金额 */
    setMyBetNumber(val) {
        this.myBetNumber = val;
        if (!this.isMyBetShow) {
            this.isMyBetShow = true;
            this.node_myBet.active = true;
        }
        this.label_myBetNumber.string = numberFormat(this.myBetNumber);
        this.label_myBetNumber.node.active = true;
        this.label_myBetNumber.node.getComponent('numberRoll').number = this.myBetNumber;
    }


    // this.label_totalNumber.node.getComponent('numberRoll').startNumberAnimationTo(this.totalNumber, 1);
    // },

    //增加我的金币数量 
    addMyBetNumber(val) {
        this.myBetNumber += val;
        if (!this.isMyBetShow) {
            this.isMyBetShow = true;
            this.node_myBet.active = true;
        }
        this.label_myBetNumber.node.getComponent('numberRoll').startNumberAnimationTo(this.myBetNumber, 1);
    }

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

    }


    // // 设置奖励文字数据
    // setRewardTimesLabel(val) {
    //     // console.log(window.localLang, 'window.localLang');
    //     this.label_times.string = val + " " + language[window.localLang].times;
    // }

    onBetBtnClick() {
        // console.log(this.betInfo, 'betInfo');
        this.setWorldPos();
        cc.systemEvent.emit('ON_BET_CLICK', this.betInfo);
    }

    onDestroy() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onBetBtnClick, this);
    }

}

