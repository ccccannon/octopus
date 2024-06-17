import { numberFormat } from '../Utils/utils_common.js'
cc.Class({

    extends: cc.Component,
    properties: {
        number: {
            displayName: '数字',
            type: cc.Integer,
            default: 0,
        },
        label: cc.Label,
        isNumberRolling: false,
        addNumberList: [],
    },

    /**
    * 滚动数值
    * @param target 目标值
    * @param time 时间
    * @param callback 完成回调
    */
    numberRollTo() {

        if (this.addNumberList.length <= 0) {
            this.isNumberRolling = false;

            return;
        }
        const obj = this.addNumberList.shift();
        const time = obj.time;
        const target = obj.target;
        const callback = obj.callback;
        this.isNumberRolling = true;

        // 如果进来的数值太小 ，就不执行数字滚动特效；
        if (Math.abs(target - this.number) < 10) {
            this.setNumber(target);
            callback && callback();
            this.isNumberRolling = false;
            this.numberRollTo();
            return;
        }

        // 执行数字滚动特效
        cc.tween(this).to(time, { number: target }, {
            progress: (start, end, current, ratio) => {
                this.setNumber(Math.floor(current));
                return start + (end - start) * ratio;
            }
        }).call(() => {
            this.setNumber(target);
            callback && callback();
            this.isNumberRolling = false;
            this.numberRollTo();
        }).start();

    },


    numberRollImmediately(target, time) {

        if (this.isNumberRolling) {
            this.stopAllActions();
        }

        cc.tween(this).to(time, { number: target }, {
            progress: (start, end, current, ratio) => {
                this.setNumber(Math.floor(current));
                return start + (end - start) * ratio;
            }
        }).call(() => {
            this.setNumber(target);
            this.isNumberRolling = false;
        }).start();

        //    = true;


    },




    // 数字动画的开始
    // addToNumberList(number) {
    //     this.addNumberList.push(number);
    // },

    startNumberAnimationTo(target, time, callback) {
        // const obj = { target, time, callback };
        // if (this.isNumberRolling) {
        //     this.addNumberList.push(obj);
        // } else {
        //     if (this.addNumberList.length <= 0) {
        //         this.addNumberList.push(obj);
        //     }
        //     this.numberRollTo();
        // }
        // console.log(target, time, 'startNumberAnimationTo');
        this.numberRollImmediately(target, time);
    },

    test() {
        // this.numberRollTo(1000, 1, () => { console.log("1000") });
        // this.startNumberAnimationTo(2000, 1, () => { console.log("2000") });
        // this.startNumberAnimation(3000, 1, () => { console.log("3000") });
        // this.startNumberAnimation(4000, 1, () => { console.log(this) });
        // this.startNumberAnimation(5000, 1, () => { console.log("5000") });
        // this.startNumberAnimation(6000, 1, () => { console.log("6000") });
        // this.startNumberAnimation(7000, 1, () => { console.log("7000") });
    },


    /** 
     * @param addNumber 增加的数量
     * @param time 时间
     * @param callback 回调函数
     * 
    */
    numberRollBy(addNumber, time, callback) {

        let target = this.number + addNumber;
        this.startNumberAnimationTo(target, time, callback);

    },

    // 重新刷新标签的大小
    updateLabelSize() {
        this.label.node.active = false;
        this.label._forceUpdateRenderData(true);
        this.label.node.active = true;
    },


    // 设置数字
    setNumber(val) {
        this.number = val;
        this.label.string = numberFormat(val);
        this.updateLabelSize();
        // this.label._forceUpdateRenderData(true);
    },
    onLoad() {
        // this.label._forceUpdateRenderData(true);
    },


});