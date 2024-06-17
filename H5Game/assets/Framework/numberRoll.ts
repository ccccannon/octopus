import { numberFormat } from "../Script/Utils/Utils_Common";



const { ccclass, property } = cc._decorator;

@ccclass
export default class numberRoll extends cc.Component {

    @property(cc.Label)
    text_number: cc.Label = null;

    public isNumberRolling: boolean = false;

    public addNumberList = [];

    @property
    public number: number = 0;


    public numTw = null;

    /**
   * 滚动数值
   * @param target 目标值
   * @param time 时间
   * @param callback 完成回调
   */
    numberRollTo() {

        // if (this.addNumberList.length <= 0) {
        //     this.isNumberRolling = false;

        //     return;
        // }
        // const obj = this.addNumberList.shift();
        // const time = obj.time;
        // const target = obj.target as number;
        // const callback = obj.callback;
        // this.isNumberRolling = true;

        // // 如果进来的数值太小 ，就不执行数字滚动特效；
        // if (Math.abs(target - this.number) < 10) {
        //     this.setNumber(target);
        //     callback && callback();
        //     this.isNumberRolling = false;
        //     this.numberRollTo();
        //     return;
        // }

        // // 执行数字滚动特效
        // cc.tween(this).to(time, { number: target }, {
        //     progress: (start, end, current, ratio) => {
        //         this.setNumber(Math.floor(current));
        //         return start + (end - start) * ratio;
        //     }
        // }).call(() => {
        //     this.setNumber(target);
        //     callback && callback();
        //     this.isNumberRolling = false;
        //     this.numberRollTo();
        // }).start();

    }


    numberRollImmediately(target, time, isFormat?) {

        if (this.isNumberRolling) {
            this.node.stopAllActions();
        }

        // @ts-ignore
        cc.tween(this).to(time, { number: target }, {
            progress: (start, end, current, ratio) => {
                this.setNumber(Math.floor(current), isFormat);
                return start + (end - start) * ratio;
            }
        }).call(() => {
            this.setNumber(target, isFormat);
            this.isNumberRolling = false;
        }).start();

        //    = true;

        // cc.tween(this).to(0.2,{this.number:1000}).start();


    }



    // rollHandler(event: cc.Node.EventType) {
    //     if (this.numTw) {
    //         this.numTw.stop();
    //     }

    //     this.numTw = cc.tween(this).to(0.2, { lab : Number(this.text_number.string)}).start();
    // }

    // get lab(): number {
    //     return Number(this.text_number.string);
    // }


    // set lab(text: number) {
    //     this.text_number.string = "" + Math.floor(text);
    // }





    // 数字动画的开始
    // addToNumberList(number) {
    //     this.addNumberList.push(number);
    // },

    startNumberAnimationTo(target, time, callback, isFormat?) {
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

        this.numberRollImmediately(target, time, isFormat);
    }

    test() {
        // this.numberRollTo(1000, 1, () => { console.log("1000") });
        // this.startNumberAnimationTo(2000, 1, () => { console.log("2000") });
        // this.startNumberAnimation(3000, 1, () => { console.log("3000") });
        // this.startNumberAnimation(4000, 1, () => { console.log(this) });
        // this.startNumberAnimation(5000, 1, () => { console.log("5000") });
        // this.startNumberAnimation(6000, 1, () => { console.log("6000") });
        // this.startNumberAnimation(7000, 1, () => { console.log("7000") });
    }


    /** 
     * @param addNumber 增加的数量
     * @param time 时间
     * @param callback 回调函数
     * 
    */
    numberRollBy(addNumber, time, callback) {

        let target = this.number + addNumber;
        this.startNumberAnimationTo(target, time, callback);

    }

    // 重新刷新标签的大小
    updateLabelSize() {
        this.text_number.node.active = false;
        // @ts-ignore
        this.text_number._forceUpdateRenderData(true);
        this.text_number.node.active = true;
    }


    // 设置数字
    setNumber(val, isFormat = true) {
        this.number = val;
        if (isFormat) {
            this.text_number.string = numberFormat(val);
        } else {
            this.text_number.string = val;
        }
        this.updateLabelSize();
        // this.label._forceUpdateRenderData(true);
    }

    onLoad() {
        // this.label._forceUpdateRenderData(true);
    }
}
