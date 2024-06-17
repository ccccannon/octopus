
import { Logger } from '../../../../../Script/Managers/Logger';
import { handleTranslate } from '../../../../../Script/Utils/Utils_Common';
import { GameData } from '../MainUI/GameData';
import BaseDraw from './BaseDraw'


// import { handleTranslate } from '../../Utils/utils_common';
const { ccclass, property } = cc._decorator;

@ccclass
export default class draw_result_bet extends BaseDraw {

    @property(cc.Label)
    text_time: cc.Label = null;

    @property(cc.Node)
    resultContainer: cc.Node = null;

    @property(cc.Node)
    topContainer: cc.Node = null;

    @property(cc.Node)
    node_win: cc.Node = null;

    public countDownNumber: number = null;

    private downInterval: number = null;



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

                    if (GameData.getInstance().roundWinGold > 0) {

                        Logger.logView('这里需要执行飞金币的动画，动画持续时间2s');
                        const basePos = this.node_win.parent.convertToWorldSpaceAR(this.node_win.position);
                        const gd = GameData.getInstance();
                        const balance = gd.getBalanceWithoutJackpot();
                        const todayWin = gd.getTodayWinWithoutJackpot();
                        cc.systemEvent.emit('COIN_FLY_BALANCE', basePos, balance);
                        cc.systemEvent.emit('COIN_ROLL_TODAYWIN', todayWin);
                    }

                    cc.systemEvent.emit('SHOW_JACKPOT');

                }

                if (this.countDownNumber < 0) {
                    clearInterval(this.downInterval);
                    this.moveOutAction();
                    callback && callback();
                    // 重置當局游戲贏得的金幣數量
                    // GameData.getInstance().roundWinGold = 0;
                }
            }, 1 * 1000
        )

    }

    /** 停止定时器 */
    stopDownInterval() {
        this.downInterval && clearInterval(this.downInterval);
    }

    // 显示结果抽屉弹窗
    showResultDraw(callback) {
        this.node.active = true;

        // console.log(this.node.y, 'showResultDraw');
        this.moveInAction();
        this.countDown(5, callback);

        // console.log(GameData.bestWinners, GameData.SettleAmount, 'showResultDraw');

        this.updateDrawInfo()

    }

    /** 隐藏抽屉弹窗 */
    hideResultDraw() {
        this.setDrawPosition();
        this.node.stopAllActions();
        this.mask.active = false;
        this.node.active = false;
    }



    updateDrawInfo() {
        const topList = GameData.getInstance().topList;
        // console.log('[draw_result_bet updateDrawInfo] ', topList);
        const resultScript = this.resultContainer.getComponent('container_result');
        // debugger
        if (topList.length <= 0) {
            this.topContainer.active = false;
            resultScript.dispalyCenter();
        } else {
            if (!this.topContainer.active) {
                this.topContainer.active = true;
                resultScript.dispalyTop();
            }
            this.topContainer.getComponent('container_top').init(topList);
        }

        resultScript.init(GameData.getInstance().roundWinGold);
    }


    start() {
        // this.scheduleOnce(this.showResultDraw.bind(this), 1);
        // this.scheduleOnce(this.moveOutAction.bind(this), 4);
    }

    onLoad() {
        // 初始化抽屉的位置在视线外
        this.setDrawPosition();
        // 初始化抽屉内容
        // this.init();
        // 初始化计数器数值
        this.countDownNumber = 0;
    }


}

