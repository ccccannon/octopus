
import betArea from "./betArea";
import { SPIN_DEFAULT_SPEED, DEFAULT_EASE_NUMBER, GameStatus, fruitNameList, fruitId, fruitPosList } from "./constants"
const { ccclass, property } = cc._decorator;

const FRUIT_LENGTH = fruitNameList.length;

@ccclass
export default class fruitArea extends cc.Component {

    @property(cc.Prefab)
    fruit_item: cc.Prefab = null;

    @property(cc.SpriteAtlas)
    fruitView: cc.SpriteAtlas = null;

    @property(betArea)
    betAreaCtrl: betArea = null;

    public nodeList: Array<cc.Node> = [];

    public rewardIndex = 0;

    public gameStatus: GameStatus = 0;

    private defaultDrawTimer: number = null;

    public betNodeList: Array<cc.Node> = [];

    public cacheGuessItems;

    public ResultTimeoutList: Array<number> = [];

    onLoad() {
        // console.log('[fruitArea onload]');
        this.nodeList = [];
        // this.initFruitArea(fruitInfoList);
        this.rewardIndex = 0;

        // this.betAreaScript = this.betArea.getComponent('betArea');


    }


    // 初始化水果区域的界面展示
    initFruitArea(guessItems) {

        const isSame = this.checkSettingSame(guessItems);
        if (isSame) {
            // console.log('配置与视图一致，不更新');
            return;
        } else {
            this.cacheGuessItems = guessItems;
        }

        const list = this.composeFruitInfo(guessItems);
        if (!list || list.length <= 0) {
            console.log('[fruitArea initFruitArea]', 'the params is invild!');
            return;
        }
        const len = list.length;

        for (let i = 0; i < len; i++) {
            const fruit_item = cc.instantiate(this.fruit_item);
            fruit_item.getComponent('item_fruit').init(list[i]);
            fruit_item.parent = this.node;
            // 用一个数组先缓存节点
            this.nodeList.push(fruit_item);
        }

    }


    /** 检查配置是否一致 */
    checkSettingSame(list) {

        let isSame = true;
        if (!this.cacheGuessItems) {
            this.cacheGuessItems = list;
            isSame = false;
        } else {
            for (let i = 0, len = list.length; i < len; i++) {
                const cacheItem = this.cacheGuessItems[i];
                const listItem = list[i];
                if (cacheItem.id != listItem.id || cacheItem.odds != listItem.odds) {
                    isSame = false;
                    break;
                }
            }
        }
        return isSame;
    }



    /** 同步服务器的水果机倍率 */
    composeFruitInfo(guessItems) {

        // {
        //     name: fruitName.ORANGE,
        //     id: fruitId.ORANGE,
        //     rewardTimes: FRUIT_VALUES[fruitId.ORANGE - 1],
        //     pos: fruitPosList[fruitId.ORANGE - 1]
        // },
        let tempList = [];
        for (let i = 0, len = guessItems.length; i < len; i++) {
            const item = guessItems[i];
            const obj = {
                name: fruitNameList[i],
                id: item.id,
                rewardTimes: item.odds,
                pos: fruitPosList[i],
            }
            tempList.push(obj);
        }
        return tempList;
    }




    // 默认转圈动画 
    fruitDefaultLuckyDrawFrame(fromIndex, delayTime, len, step, callFun) {
        // console.log(delayTime, step);
        let defaultCount = fromIndex;

        if (this.defaultDrawTimer) {
            clearInterval(this.defaultDrawTimer);
        }
        // console.log(defaultCou)
        let count = 0;
        this.defaultDrawTimer = setInterval(() => {
            // console.log(count)
            count++;
            if (defaultCount >= step + fromIndex - 1) {
                clearInterval(this.defaultDrawTimer);
                const currentStep = (defaultCount) % len;
                callFun && callFun(delayTime, currentStep);
            }
            const nodeIndex = defaultCount % len;

            this.updateNodeListInfo(nodeIndex);

            defaultCount++;


        }, delayTime);
    }

    stopDefaultDrawTimer() {
        this.defaultDrawTimer && clearInterval(this.defaultDrawTimer);
    }

    /** 移除定时器 */
    removeTimer() {
        this.stopDefaultDrawTimer();
        this.removeTimeoutAnimation(this.ResultTimeoutList);
    }


    // 默认转圈的时间
    defalutSpinAnimation(startIndex, step, callFun) {

        // console.log(startIndex, step, 'defalutSpinAnimation');
        const defaultTime = SPIN_DEFAULT_SPEED * 1;
        const len = FRUIT_LENGTH;
        const fromIndex = startIndex;
        const delayTime = Math.floor(defaultTime / step);
        this.fruitDefaultLuckyDrawFrame(fromIndex, delayTime, len, step, callFun);
    }

    // 计算结果动画
    calcResultAnimation(currentStep, restMove, delayTime) {
        // console.log('calcResultAnimation', currentStep, restMove, delayTime);
        const step = currentStep;
        const len = FRUIT_LENGTH;
        const move = restMove;
        const timeGap = 100;

        // 默认时间的转圈间隔为初始值
        const timeBasic = delayTime;
        // 延时时间列表
        let delayTimeList = [];
        // 初始延时时间
        let tempDelayTime = 0;
        // 填充延时列表
        for (let i = 0; i < move; i++) {
            tempDelayTime += timeBasic + timeGap * i;
            delayTimeList.push(tempDelayTime);
        }
        // console.log(delayTimeList, 'delayTimeList');

        // 节点动画 
        for (let i = 0; i < delayTimeList.length; i++) {
            const idx = (step + i) % len;
            const isLast = i === (delayTimeList.length - 1);
            const timeout = setTimeout(() => {
                // console.log(i);
                this.updateNodeListInfo(idx, isLast);
            }, delayTimeList[i])
            this.ResultTimeoutList.push(timeout);
        }

    }

    /** 清除定时器动画 */
    removeTimeoutAnimation(list) {
        while (list.length > 0) {
            const timeout = list.pop();
            clearTimeout(timeout);
        }
    }

    // 更新节点列表信息
    updateNodeListInfo(index, isLast = true) {
        this.betNodeList = this.betAreaCtrl.betBtnList;
        this.nodeList.map((item) => {
            const script = item.getComponent('item_fruit');
            if (script.itemInfo.id - 1 == index) {
                if (!isLast) {
                    script.setBackgroundAnimation('dark');
                } else {
                    script.setBackground('light');
                    script.updateSelectedTimeColor(true);
                }
            } else {
                script.setBackground('dark');
                script.updateSelectedTimeColor(false);
            }
            return item;
        });


        // 更新下注节点的总金额的颜色
        this.betNodeList.map((item) => {
            const script = item.getComponent('item_bet');
            if (script.betInfo.id - 1 === index) {
                if (!isLast) {

                } else {
                    script.updateSelectedTotalBetColor(true);
                }
            } else {
                script.updateSelectedTotalBetColor(false);
            }

        })


    }


    //重置节点列表信息
    resetNodeListInfo() {
        this.nodeList.map((item) => {
            item.getComponent('item_fruit').reset();
            return item;
        })
    }


    // 根据id设置水果的选中状态
    setFruitSelectedById(id) {

        const item = this.nodeList[id];

        // const item = this.nodeList.find((item)=>{
        //     item.getComponent()
        // })

        const script = item.getComponent('item_fruit');

        script.setSelectStatus(true);

    }


    /**
     * 更新水果选择的状态
     */
    updateFruitSelectStatus(list) {
        for (let i = 0, len = list.length; i < len; i++) {
            if (list[i] != 0) {
                this.setFruitSelectedById(i);
            }
        }
    }


    testSpinAnimation(startIndex, endIndex, roundCount) {
        const len = FRUIT_LENGTH;
        // 总移动步数
        const totalMove = len - startIndex + 1 + endIndex + roundCount * len;

        const gap = 5;
        const basic = 18;
        let delayTimeList = [];
        let tempDelayTime = 0;

        for (let i = 0; i < totalMove; i++) {
            tempDelayTime += basic + gap * i;
            delayTimeList.push(tempDelayTime);
        }

        // console.log(delayTimeList);

    }


    /**
     * 转圈动画: 包含默认转圈动画 + 结果转圈动画 
     */
    spinAnimation(startIndex, endIndex, roundCount) {

        //回调：默认转圈动画结束，执行结果转圈动画
        const defaultAnimationCallback = (delayTime, currentStep, restMove = DEFAULT_EASE_NUMBER) => {
            this.calcResultAnimation(currentStep, restMove, delayTime);
        }
        const len = FRUIT_LENGTH;

        // 总移动步数
        const totalMove = len - startIndex + 1 + endIndex + roundCount * len;

        // 默认等频率转圈的次数
        const defaultMove = totalMove - DEFAULT_EASE_NUMBER;

        // 等频率转圈动画
        this.defalutSpinAnimation(startIndex, defaultMove, defaultAnimationCallback);
    }

    test() {

        let startIndex = 7, endIndex = 0, roundCount = 5;

        // 转圈动画
        this.spinAnimation(startIndex, endIndex, roundCount);

        // 重置转盘状态
        this.resetNodeListInfo();

        // 设置获奖索引；
        this.rewardIndex = endIndex;
    }


    // 获取抽中的水果索引；
    getRewardFruitIndex() {
        return this.rewardIndex;
    }


    // 准备竞猜动画
    beforeGuessAnimation() {

        this.nodeList.map((item) => {
            const script = item.getComponent('item_fruit');
            script.beforeGuessAnimation();
        })

    }


    //设置水果展示盘的游戏状态
    setFruitAreaGameStatus(status) {
        this.gameStatus = status;
    }

    start() {
        this.betNodeList = this.betAreaCtrl.betBtnList;
    }

}

