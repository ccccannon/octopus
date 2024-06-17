import GameData from "./GameData";
// import evtManager from "./Manager/EventManager";
import { numberFormat } from "../../Utils/utils_common";
export const EVENT_ANIMA = cc.Enum({
    COIN_OBTAIN: 'ANIMA_COIN_OBTAIN',
    COIN_BET: 'ANIMA_COIN_BET',
    AVATAR: 'ANIMA_AVATAR',
});

const BET_LEVEL_COINS = cc.Enum({
    TINY: 1,
    SOME: 3,
    MEDIUM: 5,
    HUGE: 10,
});

const BET_LEVEL_LEN = cc.Enum({
    TINY: 0,
    SOME: 20,
    MEDIUM: 30,
    HUGE: 40,
});


cc.Class({

    extends: cc.Component,
    properties: {
        prefab_coin: cc.Prefab,
        prefab_avatar: cc.Prefab,
        target_coin_balance: cc.Node,
        target_coin_win: cc.Node,
        betArea: cc.Node,
        selectBtnArea: cc.Node,
        spriteAtlas: cc.SpriteAtlas,
        btnSelectNode: cc.Node,
    },

    onLoad() {
        this.initCoinNodePool();
        this.initAvatarNodePool();
        this.addEventListener();

        this.addAnimationListener();

        this.targetPos = this.node.convertToNodeSpaceAR(this.btnSelectNode.parent.convertToWorldSpaceAR(this.btnSelectNode.position));

    },

    onDestroy() {
        this.removeEventListener();
    },



    addAnimationListener() {
        cc.game.evtManager.on('userAvatarFly', this.avatarAnimation, this);
        cc.game.evtManager.on('todayWinFly', this.coinsMoveToTodayWin, this);
        cc.game.evtManager.on('balanceFly', this.coinsMoveToBalance, this);

    },

    // 添加事件监听
    addEventListener() {
        cc.systemEvent.on(EVENT_ANIMA.COIN_OBTAIN, this.coinFly, this);
        cc.systemEvent.on(EVENT_ANIMA.COIN_BET, this.coinBet, this);
        cc.systemEvent.on(EVENT_ANIMA.AVATAR, this.avatarFly, this);
    },

    // 移除事件监听
    removeEventListener() {
        cc.systemEvent.off(EVENT_ANIMA.COIN_OBTAIN, this.coinFly, this);
        cc.systemEvent.off(EVENT_ANIMA.AVATAR, this.avatarFly, this);
    },


    // 飞金币
    coinFly(param) {
        // console.log(param, 'animationLayerManager');
        if (!param) {
            return;
        }
        this.coinsMoveToBalance(param);
        this.coinsMoveToTodayWin(param);
    },



    // 飞头像
    avatarFly() {

    },


    // 获取下注等级长度
    getBetLevelLen(betLevel) {

        if (betLevel === BET_LEVEL_COINS.TINY) {
            return BET_LEVEL_LEN.TINY;
        }

        if (betLevel === BET_LEVEL_COINS.SOME) {
            return BET_LEVEL_LEN.SOME;
        }

        if (betLevel === BET_LEVEL_COINS.MEDIUM) {
            return BET_LEVEL_LEN.MEDIUM;
        }

        if (betLevel === BET_LEVEL_COINS.HUGE) {
            return BET_LEVEL_LEN.HUGE;
        }
        return BET_LEVEL_LEN.TINY;
    },

    // 金币下注
    coinBet(param) {
        // console.log(param, 'animationLayerManager coinBet');
        const basePosition = this.target_coin_balance.parent.convertToWorldSpaceAR(this.target_coin_balance.position);
        const speed = 800;

        const time = basePosition.sub(param.worldPos).mag() / speed;

        this.coinBetAnimation(basePosition, param.worldPos, param.betLevel, this.getBetLevelLen(param.betLevel), time);
        this.numberRollAnimation(this.target_coin_balance, {
            number: param.balance, time: 0.6, callback: () => {
                // console.log('下注的回调');
                param.callback && param.callback(param);
            }
        });
    },

    // 金币下注动画
    coinBetAnimation(basePos, targetPos, num = 1, len, time) {

        this.startCoinAnimation(basePos, targetPos, len, time);

        setTimeout(() => {
            cc.game.soundManager.coinEffect();
        }, 50);

        for (let i = 0; i < num - 1; i++) {
            setTimeout(() => {
                this.startCoinAnimation(basePos, targetPos, len, time);
            }, 50 + i * 20)
        }

    },


    // 初始化金币节点池
    initCoinNodePool() {
        const coinNum = 20;
        this.coinNodePool = new cc.NodePool();
        for (let i = 0; i < coinNum; i++) {
            const item = cc.instantiate(this.prefab_coin);
            this.coinNodePool.put(item);
        }
    },


    // 初始化头像节点池
    initAvatarNodePool() {
        const avatarNum = 20;
        this.avatarNodePool = new cc.NodePool();
        for (let i = 0; i < avatarNum; i++) {
            const item = cc.instantiate(this.prefab_avatar);
            this.avatarNodePool.put(item);
        }
    },

    // 获取头像节点
    async getAvatarNode(url, uid) {
        let avatar;
        let sprite;
        if (this.avatarNodePool.size() > 0) {
            avatar = this.avatarNodePool.get();
        } else {
            avatar = cc.instantiate(this.prefab_avatar);
        }
        try {
            sprite = await GameData.getPictureFromCache(uid, url);
        } catch (err) {
            console.log(err);
            sprite = this.spriteAtlas.getSpriteFrame('view_user_avatar_default');
        }

        avatar.getChildByName('avatar').getComponent(cc.Sprite).spriteFrame = sprite;
        avatar.scale = 1;
        avatar.active = true;
        avatar.opacity = 255;
        return avatar;
    },

    //头像的动画
    async avatarAnimation(url, uid, id, number) {

        // console.log("avatarAnimation");
        // const id = Math.floor(Math.random() * 8);
        const avatar = await this.getAvatarNode(url, uid);
        const basePos = this.getAvatarFromAsideById(id);
        this.setNodePosition(avatar, basePos);
        const targetPos = this.node.convertToNodeSpaceAR(this.getTargetPositionById(id));

        const time = basePos.sub(targetPos).mag() / 400;
        const callback = () => {
            this.avatarNodePool.put(avatar);
        }
        const action = this.getAvatarAnimation(basePos, targetPos, callback, time);

        cc.tween(avatar).then(action).start();

        const script = this.getBetScriptById(id);

        this.scheduleOnce(() => {
            // label.getComponent('numberRoll').startNumberAnimationTo(number, 0.01, () => {
            //     // console.log('zheshi huidiaoo ');
            // })
            // node_total.active && (node_total.active = true);
            // label.active = true;
            // label.getComponent(cc.Label).string = numberFormat(number);
            script.setTotalNumber(number);
            // 其他人下注音效
            cc.game.soundManager.otherPlayerBet();

        }, time)

    },


    getBetScriptById(id) {
        const betBtnList = this.betArea.getComponent('betArea').betBtnList;
        const item = betBtnList[id];
        const script = item.getComponent("item_bet");
        return script;
    },

    getTargetNodeById(id) {
        const betBtnList = this.betArea.getComponent('betArea').betBtnList;
        const item = betBtnList[id];
        const node_total = item.getComponent("item_bet").node_total;
        return node_total;
    },

    //  获取目标位置
    getTargetPositionById(id) {
        const node_total = this.getTargetNodeById(id);
        const worldPos = node_total.parent.convertToWorldSpaceAR(node_total.position);
        return worldPos;
    },

    // 获取头像飞出的位置
    getAvatarFromAsideById(id) {
        const leftList = [1, 2, 3, 4];
        // const rightList = [0, 5, 6, 7];
        const leftPos = cc.v2(-500, this.targetPos.y);
        const rightPos = cc.v2(500, this.targetPos.y);

        if (leftList.indexOf(id) > -1) {
            return rightPos;
        } else {
            return leftPos;
        }
    },

    getAvatarAnimation(basePos, targetPos, callback, time = 1) {

        return cc.tween().bezierTo(time,
            cc.v2(basePos.x, basePos.y),
            cc.v2(basePos.x, targetPos.y),

            targetPos).call(() => {
                callback && callback();
            });
    },



    // 获取金币实体
    getCoinNode() {
        let coin;
        if (this.coinNodePool.size() > 0) {
            coin = this.coinNodePool.get();
        } else {
            coin = cc.instantiate(this.prefab_coin);
        }

        // 初始化coin的状态
        coin.scale = 1;
        coin.active = true;
        coin.opacity = 255;

        return coin;
    },

    // 获取金币的初始位置
    getCoinInitPosition(basePos, randomLen) {
        const pos = this.node.convertToNodeSpaceAR(basePos);
        const newPos = cc.v2(pos.x + Math.random() * randomLen, pos.y + Math.random() * randomLen);
        return newPos;
    },

    // 设置金币位置
    setNodePosition(node, pos) {
        node.position = pos;
        node.parent = this.node;
    },

    // 获取金币的动画
    getCoinAnimation(targetPos, callback, time = 1) {
        const anima = cc.tween().to(time, { position: targetPos, scale: 0.8 }, { easing: 'sineIn' }).call(() => {
            callback && callback();
        });
        return anima;
    },

    // 开始金币动画
    startCoinAnimation(basePos, targetWorldPos, randomLen = 100, time) {


        const targetPos = this.node.convertToNodeSpaceAR(targetWorldPos);
        const coin = this.getCoinNode();
        const coinPos = this.getCoinInitPosition(basePos, randomLen);
        this.setNodePosition(coin, coinPos);

        const callback = () => {
            this.coinNodePool.put(coin);
        }

        const anima = this.getCoinAnimation(targetPos, callback, time);

        cc.tween(coin).then(anima).start();

    },

    // 一堆金币动画
    coinsAnimation(startPos, targetWorldPos) {

        // const targetWorldPos = targetNode.parent.convertToWorldSpaceAR(targetNode.position);
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                this.startCoinAnimation(startPos, targetWorldPos);
            }, 50 + i * 20)
        }

    },

    getNodeWorldPos(node) {
        return node.parent.convertToWorldSpaceAR(node.position);
    },

    // 金币飞向余额
    coinsMoveToBalance(param) {

        // console.log(param, 'coinsMoveToBalance');
        // return;

        this.coinsAnimation(param.basePos, this.getNodeWorldPos(this.target_coin_balance));

        setTimeout(() => {
            this.numberRollAnimation(this.target_coin_balance, param);
            cc.game.soundManager.winEffect();
        }, param.time * 1000);


    },

    // 金币飞向今日获利
    coinsMoveToTodayWin(param) {
        // this.coinsAnimation(param.basePos, this.getNodeWorldPos(this.target_coin_win));
        setTimeout(() => {
            this.numberRollAnimation(this.target_coin_win, param);
            // cc.game.soundManager.coinEffect();
        }, param.time * 1000);
    },

    // 测试函数
    coinTest() {

        const obj = {
            number: Math.floor(20000 * Math.random()),
            time: 1,
            callback: () => {
                // console.log('这里是测试动画');
            },
            basePos: cc.v2(200, 200),
        }
        this.coinsMoveToBalance(obj);
        this.coinsMoveToTodayWin(obj);
    },

    // 数字滚动
    numberRollAnimation(targetNode, param) {
        // debugger;
        const rollScript = targetNode.parent.getComponent('numberRoll');

        if (rollScript) {
            // rollScript.startNumberAnimationTo(param.number, param.time, param.callback);
            rollScript.startNumberAnimationTo(param.number, param.time);

            setTimeout(() => {
                param.callback && param.callback();
            }, param.time)

        }
    },

    // // 头像动画
    // avatarAnimation(id) {

    // },

});