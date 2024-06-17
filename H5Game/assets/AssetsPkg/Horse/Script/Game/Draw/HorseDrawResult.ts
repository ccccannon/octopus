
import { Logger } from '../../../../../Script/Managers/Logger';
import { handleTranslate } from '../../../../../Script/Utils/Utils_Common';
import { TIME_GAME_STATUS } from '../Constants';
import { HorseData } from '../Main/HorseData';
import HorseBaseDraw from './HorseBaseDraw';
import HorseContainerResult from './HorseContainerResult';
import HorseContainerTop from './HorseContainerTop';

// import { handleTranslate } from '../../Utils/utils_common';
const { ccclass, property } = cc._decorator;

@ccclass
export default class HorseDrawResult extends HorseBaseDraw {

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

    private timeLeft: number = 0;


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

                    if (HorseData.getInstance().roundWinGold > 0) {

                        Logger.logView('这里需要执行飞金币的动画，动画持续时间2s');
                        const basePos = this.node_win.parent.convertToWorldSpaceAR(this.node_win.position);
                        cc.systemEvent.emit('COIN_FLY_BALANCE', basePos);
                        cc.systemEvent.emit('COIN_ROLL_TODAYWIN');
                    }

                }

                if (this.countDownNumber < 0) {
                    clearInterval(this.downInterval);
                    this.moveOutAction();
                    const timeLeft = this.timeLeft - TIME_GAME_STATUS.TIME_RESULT;
                    callback && callback(true, timeLeft);
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
    showResultDraw(callback, timeLeft) {
        this.node.active = true;

        this.timeLeft = timeLeft;
        // console.log(this.node.y, 'showResultDraw');
        this.moveInAction();
        this.countDown(5, callback);

        // console.log(GameData.bestWinners, GameData.SettleAmount, 'showResultDraw');

        this.updateDrawInfo()

    }


    /** 清除抽屉弹窗的状态 */
    clearDrawStatus() {
        this.stopDownInterval();
        this.timeLeft = 0;
        this.node.stopAllActions();
        this.node.active = false;
    }


    updateDrawInfo() {
        const topList = HorseData.getInstance().topList;
        // console.log('[draw_result_bet updateDrawInfo] ', topList);
        const resultScript = this.resultContainer.getComponent(HorseContainerResult);
        // debugger
        if (topList.length <= 0) {
            this.topContainer.active = false;
            resultScript.dispalyCenter();
        } else {
            if (!this.topContainer.active) {
                this.topContainer.active = true;
                resultScript.dispalyTop();
            }
            this.topContainer.getComponent(HorseContainerTop).init(topList);
        }

        resultScript.init(HorseData.getInstance().roundWinGold);
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

