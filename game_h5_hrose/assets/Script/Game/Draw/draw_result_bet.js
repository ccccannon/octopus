// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseDraw from './BaseDraw'

import GameData from '../Main/GameData';

import { handleTranslate } from '../../Utils/utils_common';
import { TIME_GAME_STATUS } from '../Constants';

cc.Class({
    extends: BaseDraw,
    properties: {

        text_time: cc.Label,
        resultContainer: cc.Node,
        topContainer: cc.Node,
        node_win: cc.Node,
        bgList: [cc.SpriteFrame],

    },



    // 时间倒计时
    countDown(num, callback) {

        this.countDownNumber = num;
        // 第一秒展示，不能有延时。
        this.text_time.string = handleTranslate(this.countDownNumber, '{}s');

        this.downInterval && clearInterval(this.downInterval);

        this.downInterval = setInterval(
            () => {

                this.countDownNumber--;
                if (this.countDownNumber >= 0) {
                    this.text_time.string = handleTranslate(this.countDownNumber, '{}s');
                }

                if (this.countDownNumber === 2) {
                    // console.log('这里需要执行飞金币的动画，动画持续时间2s');

                    if (GameData.SettleAmount > 0) {
                        // console.log('这里需要执行飞金币的动画，动画持续时间2s');

                        // console.log(GameData.Balance, '余额');

                        // console.log(GameData.TodayWinSet, '进入获利');

                        const basePos = this.node_win.parent.convertToWorldSpaceAR(this.node_win.position);

                        const param = { basePos, time: 1 };

                        cc.game.evtManager.emit('todayWinFly', { ...param, number: GameData.TodayWinSet });

                        cc.game.evtManager.emit('balanceFly', { ...param, number: GameData.Balance });

                    }

                    const obj = {
                        number: 2000,
                        time: 1,
                        callback: () => {

                        },
                        basePos: this.resultContainer.convertToWorldSpaceAR(this.node_win.position),
                    }

                    // cc.systemEvent.emit('ANIMA_COIN', obj);

                    // cc.game.evtManager.emit('');

                    // GameData.Balance


                }

                if (this.countDownNumber < 0) {
                    clearInterval(this.downInterval);
                    this.moveOutAction();
                    const timeLeft = this.timeLeft - TIME_GAME_STATUS.TIME_RESULT;
                    callback && callback(true, timeLeft);
                    // 重置玩家的下注状态
                    GameData.setRebetStatus(0);
                }
            }, 1 * 1000
        )

    },

    // 显示结果抽屉弹窗
    showResultDraw(callback, timeLeft) {
        this.node.active = true;
        this.timeLeft = timeLeft;
        // console.log(this.node.y, 'showResultDraw');
        this.moveInAction();
        this.countDown(5, callback);

        // console.log(GameData.bestWinners, GameData.SettleAmount, 'showResultDraw');

        this.updateDrawInfo()

    },


  

    updateDrawInfo() {
        const topList = GameData.BestWinners;
        // console.log('[draw_result_bet updateDrawInfo] ', topList);
        const resultScript = this.resultContainer.getComponent('container_result');
        if (topList.length <= 0) {
            this.topContainer.active = false;
            resultScript.dispalyCenter();
        } else {
            if (!this.topContainer.active) {
                resultScript.dispalyTop();
                this.topContainer.active = true;
            }
            this.topContainer.getComponent('container_top').init(topList);
        }

        resultScript.init(GameData.SettleAmount, GameData.ReBetStatus);
    },


    start() {
        // this.scheduleOnce(this.showResultDraw.bind(this), 1);
        // this.scheduleOnce(this.moveOutAction.bind(this), 4);
    },

    onLoad() {
        // 初始化抽屉的位置在视线外
        this.setDrawPosition();
        // 初始化抽屉内容
        // this.init();
        // 初始化计数器数值
        this.countDownNumber = 0;
    },

    // update (dt) {},
});
