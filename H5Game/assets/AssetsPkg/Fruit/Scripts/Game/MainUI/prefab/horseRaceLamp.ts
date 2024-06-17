

const { ccclass, property } = cc._decorator;


@ccclass
export default class horseRaceLamp extends cc.Component {

    // @property([cc.Sprite])
    // bgList: Array<cc.Sprite> = [];

    @property(cc.Label)
    changeNumber: cc.Label = null;

    @property(cc.Node)
    bg: cc.Node = null;

    private betTimerInterval: number = null;

    private horesRaceShinkTimer: number = null;

    onLoad() {
        this.bgShinkAnima();
        // 将跑马灯的状态设置为空闲状态
    }

    getChangeNumberString(number) {
        return number >= 10 ? number : "0" + number;
    }

    // 三秒倒计时
    threeSecondTimer() {
        let jumpNumber = 4;
        this.betTimer(jumpNumber);
    }

    /** 下注阶段 */
    /**
     * 从服务器获取当前的倒计时初始值
     * @param {Number} startIndex 开始时间
     * @param {Function} callback 回调函数
     */
    betTimer(startIndex, callback?: Function) {
        if (this.betTimerInterval) {
            clearInterval(this.betTimerInterval);
        };

        let jumpNumber = startIndex;

        this.changeNumber.string = this.getChangeNumberString(jumpNumber);
        this.betTimerInterval = setInterval(() => {
            jumpNumber--;
            if (jumpNumber >= 0) {
                this.changeNumber.string = this.getChangeNumberString(jumpNumber);
            }
            if (jumpNumber < 0) {
                clearInterval(this.betTimerInterval);
                if (callback) {
                    callback();
                }
            }
        }, 1000);

    }

    /** 停止下注的定时器 */
    stopBetTimer(){
        this.betTimerInterval && clearInterval(this.betTimerInterval);
    }

    // 跑马灯闪烁动画
    bgShinkAnima() {
        let oppsite = 1;
        this.horesRaceShinkTimer = setInterval(() => {
            oppsite = -oppsite;
            this.bg.scaleX = oppsite;
        }, 800)
    }

    onDestroy() {
        // 清除跑马灯闪烁动画
        clearInterval(this.horesRaceShinkTimer);
    }

}

