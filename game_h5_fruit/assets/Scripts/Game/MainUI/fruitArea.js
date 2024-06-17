// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import { fruitInfoList, SPIN_DEFAULT_SPEED, DEFAULT_EASE_NUMBER } from "./constants"

cc.Class({
    extends: cc.Component,

    properties: {
        fruit_item: cc.Prefab,
        fruitView: cc.SpriteAtlas,
        // horseRaceLamp: cc.Node,
        betArea: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // console.log('[fruitArea onload]');
        this.nodeList = [];
        this.initFruitArea(fruitInfoList);
        this.rewardIndex = 0;

        this.betAreaScript = this.betArea.getComponent('betArea');


    },


    // 初始化水果区域的界面展示
    initFruitArea(list) {
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

    },


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
    },



    // 默认转圈的时间
    defalutSpinAnimation(startIndex, step, callFun) {

        // console.log(startIndex, step, 'defalutSpinAnimation');
        const defaultTime = SPIN_DEFAULT_SPEED * 1;
        const len = fruitInfoList.length;
        const fromIndex = startIndex;
        const delayTime = Math.floor(defaultTime / step);
        this.fruitDefaultLuckyDrawFrame(fromIndex, delayTime, len, step, callFun);
    },

    // 计算结果动画
    calcResultAnimation(currentStep, restMove, delayTime) {
        // console.log('calcResultAnimation', currentStep, restMove, delayTime);
        const step = currentStep;
        const len = fruitInfoList.length;
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
            const idx = (step + 1 + i) % len;
            const isLast = i === (delayTimeList.length - 1);
            setTimeout(() => {
                // console.log(i);
                this.updateNodeListInfo(idx, isLast);
            }, delayTimeList[i])

        }

    },

    // 更新节点列表信息
    updateNodeListInfo(index, isLast = true) {
        this.betNodeList = this.betAreaScript.betBtnList;
        this.nodeList.map((item) => {
            const script = item.getComponent('item_fruit');
            if (script.itemInfo.id === index) {
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
            if (script.betInfo.id === index) {
                if (!isLast) {

                } else {
                    script.updateSelectedTotalBetColor(true);
                }
            } else {
                script.updateSelectedTotalBetColor(false);
            }

        })


    },


    //重置节点列表信息
    resetNodeListInfo() {
        this.nodeList.map((item) => {
            item.getComponent('item_fruit').reset();
            return item;
        })
    },


    // 根据id设置水果的选中状态
    setFruitSelectedById(id) {

        const item = this.nodeList[id];

        const script = item.getComponent('item_fruit');

        script.setSelectStatus(true);

    },


    /**
     * 更新水果选择的状态
     */
    updateFruitSelectStatus(list) {
        for (let i = 0, len = list.length; i < len; i++) {
            if (list[i] != 0) {
                this.setFruitSelectedById(i);
            }
        }
    },


    testSpinAnimation(startIndex, endIndex, roundCount) {
        const len = fruitInfoList.length;
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

    },


    /**
     * 转圈动画: 包含默认转圈动画 + 结果转圈动画 
     */
    spinAnimation(startIndex, endIndex, roundCount) {

        //回调：默认转圈动画结束，执行结果转圈动画
        const defaultAnimationCallback = (delayTime, currentStep, restMove = DEFAULT_EASE_NUMBER) => {
            this.calcResultAnimation(currentStep, restMove, delayTime);
        }
        const len = fruitInfoList.length;

        // 总移动步数
        const totalMove = len - startIndex + 1 + endIndex + roundCount * len;

        // 默认等频率转圈的次数
        const defaultMove = totalMove - DEFAULT_EASE_NUMBER;

        // 等频率转圈动画
        this.defalutSpinAnimation(startIndex, defaultMove, defaultAnimationCallback);
    },

    test() {

        let startIndex = 7, endIndex = 0, roundCount = 5;

        // 转圈动画
        this.spinAnimation(startIndex, endIndex, roundCount);

        // 重置转盘状态
        this.resetNodeListInfo();

        // 设置获奖索引；
        this.rewardIndex = endIndex;
    },


    // 获取抽中的水果索引；
    getRewardFruitIndex() {
        return this.rewardIndex;
    },


    // 准备竞猜动画
    beforeGuessAnimation() {

        this.nodeList.map((item) => {
            const script = item.getComponent('item_fruit');
            script.beforeGuessAnimation();
        })

    },


    //设置水果展示盘的游戏状态
    setFruitAreaGameStatus(status) {
        this.gameStatus = status;
    },

    start() {
        this.betNodeList = this.betAreaScript.betBtnList;
    },

    // update (dt) {},
});
