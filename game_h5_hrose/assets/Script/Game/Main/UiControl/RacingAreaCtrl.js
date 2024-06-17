// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

export const raceState = cc.Enum({
    STOP: 1,
    RUN_SLOW: 2,
    RUN_FAST: 3,
    END: 4,
    AFTERWIN: 5,
})

cc.Class({
    extends: cc.Component,
    properties: {
        racingHorseNodeList: [cc.Node],
        recordCamera: cc.Node,
        flagList: [cc.SpriteFrame],
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // this.stopAnimationById(0);
        // this.stopAllSkeleton();

        this.timeCount = 0;
    },




    /** 赛跑开始 */
    RacingStart(result) {
        this.timeCount = 0;
        this.setWinner(result);
        // console.log(result, '比赛结果');
        this.initRaceHorsePosition();
        this.setRaceState(raceState.RUN_SLOW);
        this.raceStateChangeInterval();
        this.resumeAllSkeleton();
    },

    /** 赛跑中断 注：该状态发生在玩家在赛跑中途退出游戏时触发 */
    RacingStop() {
        this.timeCount = 0;
        this.initRaceHorsePosition();
        this.setRaceState(raceState.END);
        this.raceInterval && clearInterval(this.raceInterval);
        this.stopAllSkeleton();
    },


    /** 获取当前跑在最前面的赛马 */

    getCurrentFirstRacingHorse() {

        const len = this.racingHorseNodeList.length;
        let tempList = [];
        for (let i = 0; i < len; i++) {
            const posX = this.racingHorseNodeList[i].x;
            tempList.push({ index: i, posX: posX });
        }
        tempList.sort((a, b) => {
            return b.posX - a.posX;
        })
        return tempList[0];
    },


    /** 移动摄像机 */
    moveCamera() {

        // 只有当处于跑马状态时 才移动摄像机
        if (this.raceState != raceState.RUN_SLOW && this.raceState != raceState.RUN_FAST) {
            return;
        }
        const horseInfo = this.getCurrentFirstRacingHorse();
        this.recordCamera.x = horseInfo.posX + 50;
        const flag = this.recordCamera.children[0];
        flag.active = true;
        flag.getComponent(cc.Sprite).spriteFrame = this.flagList[horseInfo.index];

    },


    /** 重置摄像机的状态 */
    resetCamera() {
        this.recordCamera.children[0].active = false;
        cc.tween(this.recordCamera).to(3, { position: cc.v2(-320, -25) }, { easing: 'elasticOut' }).start()
    },


    /** 比赛状态转变定时器 */
    raceStateChangeInterval() {

        this.raceInterval && clearInterval(this.raceInterval);

        this.raceInterval = setInterval(() => {
            this.timeCount++;
            if (this.timeCount > 2) {
                this.setRaceState(raceState.RUN_FAST);
            }
        }, 1000);

    },

    /** 决出胜者之后 让所有马匹跑出视线 */
    afterGetWinner() {

        // debugger
        // console.log('决出胜者之后');

        this.setRaceState(raceState.AFTERWIN);
        this.resumeAllSkeleton();
        cc.game.evtManager.emit('hideWinMarkNode');
        // this.moveWithFastSpeed(dt);
        setTimeout(() => {
            this.setRaceState(raceState.END);
            this.stopAllSkeleton();
        }, 3000);
    },




    /** 设置竞赛状态 */
    setRaceState(val) {
        this.raceState = val;
    },


    /**恢复所有的spine动画 */
    resumeAllSkeleton() {

        const len = this.racingHorseNodeList.length;
        for (let i = 0; i < len; i++) {
            this.resumeAnimationById(i);
        }

    },


    resumeAnimationById(index) {
        const spine = this.racingHorseNodeList[index].getComponent(sp.Skeleton);
        spine.paused = false;
    },

    pauseAnimationById(index) {

        const spine = this.racingHorseNodeList[index].getComponent(sp.Skeleton);
        spine.paused = true;

    },


    /** 清除当前骨骼动画的缓存 重置为动画的初始状态 */
    resetSkeleton(index) {
        const spine = this.racingHorseNodeList[index].getComponent(sp.Skeleton);
        spine.clearTracks();
        spine.setToSetupPose();
    },


    /**清除所有骨骼动画的缓存 */
    clearAllSkeleton() {
        const len = this.racingHorseNodeList.length;
        for (let i = 0; i < len; i++) {
            this.resetSkeleton(i);
        }
    },

    /** 暂停所有的骨骼动画 */
    stopAllSkeleton() {

        const len = this.racingHorseNodeList.length;
        for (let i = 0; i < len; i++) {
            // setTimeout(() => {
            this.pauseAnimationById(i);
            // }, i * 1000);
        }

    },


    // 跑马阶段分成两个

    //随机初始位置

    initRaceHorsePosition() {

        const gap = 150;

        for (let i = 0, len = this.racingHorseNodeList.length; i < len; i++) {

            this.racingHorseNodeList[i].x = -450 + Math.random() * gap;

        }

    },

    /**设置剩余事件 */
    setTimeLeft(timeLeft) {
        this.timeLeft = timeLeft;
    },

    // 设置胜利者
    setWinner(index) {
        this.winnerIndex = index;
    },

    // 第一阶段 以随机速度向前跑动
    moveWithConstantSpeed(dt) {
        const baseSpeed = 40 * dt;
        for (let i = 0, len = this.racingHorseNodeList.length; i < len; i++) {

            this.racingHorseNodeList[i].x += baseSpeed * (1 + Math.random());
        }
    },

    // 第二阶段，给确定要胜出的战马增加一个速度，确保赛马一定能胜出
    moveWithFastSpeed(dt) {
        const baseSpeed = 30 * dt;
        for (let i = 0, len = this.racingHorseNodeList.length; i < len; i++) {
            if ((this.winnerIndex !== null || this.winnerIndex !== undefined) && i == this.winnerIndex) {
                this.racingHorseNodeList[i].x += baseSpeed * 4;
            } else {
                const rate = 2 + Math.random();
                // console.log(baseSpeed * (rate));
                this.racingHorseNodeList[i].x += baseSpeed * (rate);
            }
        }

    },


    // 第三阶段 跑出界面
    moveOutWindow() {
        const baseSpeed = 8;
        for (let i = 0, len = this.racingHorseNodeList.length; i < len; i++) {
            this.racingHorseNodeList[i].x += baseSpeed;
        }
    },



    // 决出胜出的马匹的条件
    isRacingFinished() {
        const winPosX = 260;
        for (let i = 0, len = this.racingHorseNodeList.length; i < len; i++) {
            if (this.racingHorseNodeList[i].x >= winPosX) {
                // console.log('胜出的是：' + i + ' 号');
                this.setRaceState(raceState.END);
                this.raceInterval && clearInterval(this.raceInterval);
                this.stopAllSkeleton();
                // console.log(this.timeCount, '结束时间');
                const lefttime = this.timeLeft - this.timeCount;
                cc.game.evtManager.emit('onGameEnd', i, lefttime);
                // console.log(this.raceState,'赛跑状态');
                // console.log(this.raceState === raceState.END);
                return;
            }
        }
    },




    update(dt) {

        if (this.raceState === raceState.END) {
            // console.log(this.raceState, '赛跑状态', raceState.RUN_FAST);
            return;
        }

        if (this.raceState === raceState.STOP) {
            return;
        }

        if (this.raceState === raceState.RUN_SLOW) {
            this.moveWithConstantSpeed(dt);
            // this.getCurrentFirstRacingHorse();
            this.moveCamera();
            return;
        }

        if (this.raceState === raceState.RUN_FAST) {
            this.moveWithFastSpeed(dt);
            this.isRacingFinished();
            // this.getCurrentFirstRacingHorse();
            this.moveCamera();
            return;
        }

        if (this.raceState === raceState.AFTERWIN) {
            this.moveOutWindow(dt);
            return;
        }


    },





    start() {

    },

    // update (dt) {},
});
