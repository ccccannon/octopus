// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { GameStatus } from '../constants'

cc.Class({
    extends: cc.Component,

    properties: {
        bgList: [cc.Sprite],
        changeNumber: cc.Label,
        bg: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.bgShinkAnima();
        // 将跑马灯的状态设置为空闲状态
    },

    getChangeNumberString(number) {
        return number >= 10 ? number : "0" + number;
    },

    // 三秒倒计时
    threeSecondTimer() {
        let jumpNumber = 4;
        this.betTimer(jumpNumber);
    },

    /** 下注阶段 */
    /**
     * 从服务器获取当前的倒计时初始值
     * @param {Number} startIndex 开始时间
     * @param {Function} callback 回调函数
     */
    betTimer(startIndex, callback) {
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

    },


    // 跑马灯闪烁动画
    bgShinkAnima() {
        let oppsite = 1;
        this.horesRaceShinkTimer = setInterval(() => {
            oppsite = -oppsite;
            this.bg.scaleX = oppsite;
        }, 800)
    },

    onDestroy() {
        // 清除跑马灯闪烁动画
        clearInterval(this.horesRaceShinkTimer);
    },


    start() {

    },

    // update (dt) {},
});
