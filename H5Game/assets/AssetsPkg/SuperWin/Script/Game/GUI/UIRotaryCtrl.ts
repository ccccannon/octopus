import GameMgr from "../../../../../Script/Managers/GameMgr";
import { Logger } from "../../../../../Script/Managers/Logger";
import { LANGUAGE_TYPE } from "../../../../../Script/Mgr/Config";
import { formatTimeDisplay, loadPictureByUrl } from "../../../../../Script/Utils/Utils_Common";
import { RotaryStatus, SectorInfo, PlayerRadius, PlayerView } from "../../Constant";
import { language } from "../Lang/superwin_index";
import { SuperWinData } from "../SuperWinData";
import UIOutCtrl from "./UIOutCtrl";
import UIWinnerCtrl from "./UIWinnerCtrl";




const { ccclass, property } = cc._decorator

//转盘个数
const WheelCount = 6;
//转盘
@ccclass
export class UIRotaryCtrl extends cc.Component {
    public static Instance: UIRotaryCtrl
    public PrefabName = 'PanelRotary'

    private _wheel: cc.Node;      //转盘

    private curSpeed: number = 0;    // 当前速度
    private maxSpeed: number = 20;    //最大速度

    private WheelState: RotaryStatus = RotaryStatus.STATIC;       //转盘状态 0- 静止 / 1 - 加速旋转  2 -减速旋转

    private curDuration: number = 0;    //转盘减速前当前旋转时间
    private MaxDuration: number = 1.5;    //转盘减速前最大旋转时间

    private accSpeed: number = 1;    //转盘当前加速度

    public targetId: number = 0//RandomNumber(0, 6);    //指定结束时的齿轮
    private isback: Boolean = false; //旋转结束是否回弹 

    private defaultAngle = 0//360 / WheelCount / 2;       //修正默认角度

    private singleAngle: number = 0;     //每个齿轮角度
    private targeAngle = 0;              //目标指定的角度
    private finalAngle = 0;             //最终结果指定的角度
    private needRoAngle = 0;           //减速需要旋转角度

    private decAngle = 720              //减速旋转1圈

    public static rotaryInfo: any = null;

    @property(cc.Node)
    node_rotary: cc.Node = null;

    @property(cc.Graphics)
    Graphics: cc.Graphics = null;

    @property(cc.Node)
    mask: cc.Node = null;

    @property(cc.Prefab)
    userItem: cc.Prefab = null;

    @property(cc.Prefab)
    itemPlayer: cc.Prefab = null;

    @property(cc.Node)
    bgLayer: cc.Node = null;

    @property(cc.Node)
    removeNode: cc.Node = null;

    @property(cc.Node)
    container: cc.Node = null;

    @property(cc.Node)
    gap: cc.Node = null;

    @property(cc.Node)
    gapLayer: cc.Node = null;

    @property(cc.Label)
    remainingTime: cc.Label = null;

    @property([cc.SpriteFrame])
    AreaViewList: Array<cc.SpriteFrame> = [];

    @property([cc.SpriteFrame])
    arTextViewList: Array<cc.SpriteFrame> = [];

    @property([cc.SpriteFrame])
    enTextViewList: Array<cc.SpriteFrame> = [];

    @property([cc.SpriteFrame])
    enTicketViewList: Array<cc.SpriteFrame> = [];

    @property([cc.SpriteFrame])
    arTicketViewList: Array<cc.SpriteFrame> = [];

    @property(cc.Node)
    btn_exit: cc.Node = null;

    @property(cc.Node)
    btn_start: cc.Node = null;

    @property(cc.Node)
    btn_join: cc.Node = null;

    @property(cc.Node)
    btn_quit: cc.Node = null;

    @property(cc.Label)
    label_jackpot: cc.Label = null;

    @property(cc.Node)
    rotaryContainer: cc.Node = null;

    @property(UIOutCtrl)
    OutCtrl: UIOutCtrl = null;

    @property(UIWinnerCtrl)
    winnerCtrl: UIWinnerCtrl = null;

    @property(cc.Label)
    rule_tips: cc.Label = null;

    // @property(cc.Sprite)
    // sprite_jackpot: cc.Sprite = null;

    // @property([cc.SpriteFrame])
    // jackpotViewList: Array<cc.SpriteFrame> = [];

    public itemPlayerList: Array<cc.Node> = [];

    public itemBgList: Array<cc.Node> = [];

    public gapList: Array<cc.Node> = [];

    public itemPool: cc.NodePool = null;

    public playerNumber: number = 0;

    private restTime: number = 0;

    private restTimeInterval: number = 0;

    private aotuStartTimeInterval: number = 0;

    private resultTimeout: number = 0;


    Mock_updateWheelStatus() {
        this.targetId = Math.floor(Math.random() * this.playerNumber);
        this.singleAngle = 360 / this.playerNumber;
        this.defaultAngle = this.singleAngle / 2;
        this.mask.active = false;

        Logger.logView(this.targetId, 'targetId');
        this.updateWheelStatus(RotaryStatus.ROTATE);
    }

    Mock_addUserItemToRatary() {

        if (this.playerNumber >= 10) {
            Logger.logBusiness(this.playerNumber, '参与玩家已达上限');
            return;
        }

        this.addPlayerBgToRotary();
        // this.addPlayerToRotary();
        this.addGapToRotary();
        this.mask.active = false;

    }


    Mock_removePlayerFromRotary() {

        const id = Math.floor(Math.random() * this.itemPlayerList.length);
        this.removePlayerFromRotaryById(id);

    }


    protected onLoad(): void {
        this.initItemPool();
    }

    protected onDestroy(): void {

    }

    protected onEnable(): void {
        this.updateRuleTips();
    }

    start() {
        this._wheel = this.node_rotary;
        // this.WheelState = RotaryStatus.ROTATE;

        // this.drawSector();

        // this.initPlayerRate(2);
        // this.init();
    }


    updateRuleTips() {
        const lang = GameMgr.getInstance().Language;
        if (lang == LANGUAGE_TYPE.ARAB) {
            this.rule_tips.string = language.ar.rotary.tips;
        } else {
            this.rule_tips.string = language.en.rotary.tips;
        }
    }

    /** 初始化用户节点池 */
    initItemPool() {

        if (!this.itemPool) {
            this.itemPool = new cc.NodePool();
        }

        for (let i = 0; i < 10; i++) {
            this.itemPool.put(cc.instantiate(this.userItem));
        }

    }

    /**获取用户节点实例 */
    getItemInstance() {
        let instance;
        if (this.itemPool.size() > 0) {
            instance = this.itemPool.get();
        } else {
            instance = cc.instantiate(this.userItem);
        }
        return instance;
    }

    /** 移除用户节点实例 */
    removeUserItem() {

        for (let i = this.container.children.length - 1; i >= 0; i--) {
            const item = this.container.children[i];
            if (item.name == 'UserItem') {
                this.itemPool.put(item);
            }
        }
        // UserItem
    }


    /** 更新转盘的状态  */
    updateWheelStatus(val: RotaryStatus) {
        this.WheelState = val;
    }


    /**将玩家移除圈子 */
    removeUserItemFromRotary(num) {
        // console.log(num,'')
        Logger.logBusiness(num, '被移除的玩家序号');


    }

    /** 将移除玩家变成黑色 */
    highLightRemovedPlayer(num) {
        const len = this.container.childrenCount;
        this.mask.active = true;
        const itemBg = this.itemBgList[num];
        const itemPlayer = this.itemPlayerList[num];
        itemBg.parent = this.removeNode;
        itemPlayer.parent = this.removeNode;
    }

    /** 添加背景框 */
    addBgRotary() {
        const userItem = cc.instantiate(this.userItem);
        userItem.parent = this.container;
        this.itemBgList.push(userItem);
    }


    /** 移除背景 */
    removeBgById(id: number) {

        if (SuperWinData.getInstance().gamePlayers.length <= 1 && this.itemBgList.length <= 1) {
            return;
        }
        const item = this.itemBgList.splice(id, 1)[0];
        item.destroy();

    }

    /** 移除背景 */
    clearAllBg() {
        for (let i = this.itemBgList.length - 1; i >= 0; i--) {
            this.itemBgList[i].destroy();
        }
        this.itemBgList = [];
    }



    /** 增加用户的背景占比 */
    addPlayerBgToRotary() {
        this.addBgRotary();
        this.updateBgOccupy();
        // this.mask.setSiblingIndex(this.bgLayer.childrenCount);
        this.node_rotary.angle = 0;
    }


    /** 增加间隔  */
    addGapToRotary() {
        this.addPlayerBgGap();
        this.updatePlayerBgGapPos();
    }


    /** 增加玩家之间的间隔 */
    addPlayerBgGap() {

        const gap = cc.instantiate(this.gap);
        gap.parent = this.gapLayer;
        this.gapList.push(gap);

    }

    removePlayerGapById(id: number) {

        const item = this.gapList.splice(id, 1)[0];
        item.destroy();
        this.playerNumber--;
        if (this.gapList.length == 1) {
            setTimeout(() => {
                this.gapList[0].active = false;
            })
        }
    }


    /** 隐藏gap */
    hideAllGap() {
        for (let i = 0; i < this.gapList.length; i++) {
            this.gapList[i].active = false;
        }
    }

    /** 移除所有Gap */
    clearAllGap() {
        for (let i = this.gapList.length - 1; i >= 0; i--) {
            this.gapList[i].destroy();
        }
        this.gapList = [];
    }

    /** 更新玩家的间隔的位置 */
    updatePlayerBgGapPos() {
        // debugger
        const len = this.gapList.length;

        if (len <= 1) {
            this.hideAllGap();
            return;
        }

        const rotation = 360 / len;
        for (let i = 0; i < len; i++) {
            const item = this.gapList[i];
            item.angle = -90 + rotation * i;
            item.active = true;
        }
    }


    /** 更新背景占比大小 */
    updateBgOccupy() {
        const len = this.itemBgList.length;
        const rotation = 360 / len;
        const idx = len > 1 ? len : 1;
        const displayInfo = SectorInfo['' + idx];
        const range = 1 / len;
        for (let i = 0; i < len; i++) {
            const item = this.itemBgList[i];
            const itemInfo = displayInfo[i];
            const sprite = item.getComponent(cc.Sprite);
            sprite.fillRange = range;
            sprite.spriteFrame = this.AreaViewList[itemInfo];
            item.angle = -(rotation + rotation * i) + 90;
            // item.color = itemInfo.color;
            item.parent = this.container;
            item.setSiblingIndex(i);
        }
    }




    async addPlayer(playerInfo) {
        const player = cc.instantiate(this.itemPlayer);

        // @ts-ignore
        player.playerInfo = playerInfo;

        player.parent = this.container;
        this.itemPlayerList.push(player);
        this.playerNumber = this.itemPlayerList.length;
        const { headImageUrl } = playerInfo;

        const sprite = await loadPictureByUrl(headImageUrl);
        // @ts-ignore
        const min = Math.min(sprite._originalSize.height, sprite._originalSize.width);
        const avatar = player.children[0].getChildByName('frame').children[0];
        avatar.getComponent(cc.Sprite).spriteFrame = sprite;
        avatar.scale = player.children[0].width / min;

    }


    /** 移除玩家 */
    removePlayerById(id: number) {

        const item = this.itemPlayerList.splice(id, 1)[0];
        item.destroy();
        const len = this.itemPlayerList.length;
        this.singleAngle = 360 / len;
    }


    /** 移除所有的玩家头像 */
    clearAllPlayerAvatar() {

        for (let i = this.itemPlayerList.length - 1; i >= 0; i--) {
            this.itemPlayerList[i].destroy();
        }
        this.itemPlayerList = [];
    }

    /** 将玩家加入转盘 */
    addPlayerToRotary(playerInfo) {
        this.addPlayer(playerInfo);
        const len = this.itemPlayerList.length;
        // const idx = len > 2 ? len : 2;
        this.singleAngle = 360 / len;
        this.updatePlayerPosition();
    }

    /** 根据id将玩家移出转盘 */
    removePlayerFromRotaryById(id) {
        this.removeBgById(id);
        this.removePlayerById(id);
        this.removePlayerGapById(id);
        this.updatePlayerPosition();
        this.updatePlayerBgGapPos();
        this.updateBgOccupy();
        this.mask.active = false;
        this.node_rotary.angle = 0;
    }


    /**排列玩家的位置 */
    updatePlayerPosition() {

        const len = this.itemPlayerList.length;
        if (len > 1) {
            for (let i = 0; i < len; i++) {
                const item = this.itemPlayerList[i];
                const angle = this.singleAngle / 2 + i * this.singleAngle;
                const posX = Math.sin(angle * Math.PI / 180);
                const posY = Math.cos(angle * Math.PI / 180);
                item.position = cc.v3(posX, posY).normalize().mul(PlayerRadius);
                item.setSiblingIndex(this.itemBgList.length + i);
            }
        } else {

            if (len == 1) {
                const item = this.itemPlayerList[0];
                item.position = cc.v3(0, 1, 0).mul(PlayerRadius);
                item.setSiblingIndex(this.itemBgList.length + 1);
            }

        }

    }


    /** 画扇形 */
    drawSector() {
        this.Graphics.clear();
        this.Graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
        this.Graphics.fillColor = cc.Color.GREEN;
        this.Graphics.strokeColor = cc.Color.RED;
        this.Graphics.lineWidth = 10;
        let r = 300 //半径
        let startRadians = 0; //起始角度
        let endRadian = 0.3 * Math.PI;//结束角度
        let start = cc.v2(0, 0); //圆心点
        let point1 = cc.v2(Math.cos(startRadians) * r + start.x, Math.sin(startRadians) * r + start.y)
        // let point2 = cc.v2(Math.cos(endRadian)*r + start.x, Math.sin(endRadian)*r + start.y)

        // //画扇形的三角区域
        this.Graphics.moveTo(start.x, start.y);
        this.Graphics.lineTo(point1.x, point1.y);
        this.Graphics.arc(start.x, start.y, r, startRadians, endRadian, true)
        this.Graphics.lineTo(start.x, start.y);
        // this.Graphics.fill();
        this.Graphics.stroke();

    }


    /** 倒计时展示 */
    restTimeCountDown() {

        /** 如果游戏已经开始 或者 游戏参与人数已达上限 不开启定时器 */
        const swd = SuperWinData.getInstance();
        if (swd.isGameStart || swd.isCanAutoStart()) {
            return;
        };

        this.removeTimeCountInterval();
        this.restTime = Math.floor(SuperWinData.getInstance().tableInfo.remainingTime / 1000);
        this.remainingTime.node.active = true;
        // this.restTime = Math.floor(10000000 / 1000);

        this.restTimeInterval = setInterval(() => {
            this.restTime--;
            this.remainingTime.string = formatTimeDisplay(this.restTime, true);
            if (this.restTime <= 0) {
                this.removeTimeCountInterval();
            }
        }, 1000)

    }

    /** 移除倒计时定时器 */
    removeTimeCountInterval() {

        this.restTimeInterval && clearInterval(this.restTimeInterval);

    }


    /** 隐藏倒计时 */
    hideTimeCountDown() {
        this.removeTimeCountInterval();
        this.remainingTime.node.active = false;
    }


    /** 根据玩家状态控制按钮的展示状态 */
    btnDisplayByPlayerStatus(status: PlayerView) {

        switch (status) {
            case PlayerView.Host:
                this.hosterView();
                break;
            case PlayerView.Participation:
                this.joinInPlayerView();
                break;
            case PlayerView.UnParticipation:
                this.notJoinInPlayerView();
                break;
            case PlayerView.Watch:
                this.watchView();
                break;
        }

    }


    /** 控制加入按钮的金币数量 */
    jionTicketDisplay(lang) {

        let spriteList;
        if (lang === LANGUAGE_TYPE.ARAB) {
            spriteList = this.arTicketViewList;
        } else {
            spriteList = this.enTicketViewList;
        }
        const idx = SuperWinData.getInstance().coinLevel;
        this.btn_join.children[0].getComponent(cc.Sprite).spriteFrame = spriteList[idx];

    }


    /** 不同的语言的展示 */
    diffLanguageDisplay() {

        const lang = GameMgr.getInstance().Language == LANGUAGE_TYPE.ARAB ? LANGUAGE_TYPE.ARAB : LANGUAGE_TYPE.EN;

        if (lang == LANGUAGE_TYPE.ARAB) {
            this.btn_start.children[0].getComponent(cc.Sprite).spriteFrame = this.arTextViewList[0];
            this.btn_exit.children[0].getComponent(cc.Sprite).spriteFrame = this.arTextViewList[1];
            this.btn_quit.children[0].getComponent(cc.Sprite).spriteFrame = this.arTextViewList[2];
            // this.btn_exit.children[0].getComponent(cc.Sprite).spriteFrame = this.arTextViewList[1];
        } else {
            this.btn_start.children[0].getComponent(cc.Sprite).spriteFrame = this.enTextViewList[0];
            this.btn_exit.children[0].getComponent(cc.Sprite).spriteFrame = this.enTextViewList[1];
            this.btn_quit.children[0].getComponent(cc.Sprite).spriteFrame = this.enTextViewList[2];
        }

        this.jionTicketDisplay(lang);

    }



    /** 房主视角 */
    hosterView() {
        this.btn_exit.active = true;
        this.btn_start.active = true;
        this.btn_join.active = false;
        this.btn_quit.active = false;
        this.rule_tips.node.active = true;
    }

    /** 未参与玩家视角 */
    notJoinInPlayerView() {
        this.btn_exit.active = false;
        this.btn_start.active = false;
        this.btn_join.active = true;
        this.btn_quit.active = false;
        this.rule_tips.node.active = true;
    }


    /** 已加入玩家视角 */
    joinInPlayerView() {
        this.btn_exit.active = false;
        this.btn_start.active = false;
        this.btn_join.active = false;
        this.btn_quit.active = true;
        this.rule_tips.node.active = true;
    }

    /**观战视角 */
    watchView() {
        this.btn_exit.active = false;
        this.btn_start.active = false;
        this.btn_join.active = false;
        this.btn_quit.active = false;
        this.rule_tips.node.active = false;
        this.hideTimeCountDown();
    }


    /** 下移转盘的位置 */
    moveDownRotary() {

        this.rotaryContainer.stopAllActions();

        cc.tween(this.rotaryContainer).to(0.3, { position: cc.v3(0, -20, 0) }).start();

    }

    /** 转盘回归到默认状态 */
    resetRotaryDefaultPos() {

        this.rotaryContainer.stopAllActions();
        
        this.rotaryContainer.position = cc.v3(0, 40, 0);
    }



    /** 渲染当前已经加入游戏的玩家头像 */
    renderGamePlayer(playerList) {


        this.clearAllBg();
        this.clearAllGap();
        this.clearAllPlayerAvatar();

        if (playerList.length <= 0) {
            this.addBgRotary();
            this.updateBgOccupy();
        }

        for (let i = 0; i < playerList.length; i++) {
            const info = playerList[i];
            this.addUserItemToRatary(info);
        }
    }

    /** 显示当前的奖池金币数量 */
    updateJackpot() {
        const swd = SuperWinData.getInstance();
        const coinNumber = (swd.gamePlayers.length + swd.outPlayerList.length) * swd.ticket * 0.9;
        this.label_jackpot.string = coinNumber + '';
    }

    /** 将玩家加入到转盘中 */
    addUserItemToRatary(playerInfo, isFirst?) {
        if (!isFirst) {
            this.addPlayerBgToRotary();
        }
        this.addPlayerToRotary(playerInfo);
        this.addGapToRotary();
        this.mask.active = false;
    }


    /** 转盘转动 */
    rotaryLaunch(idx: number) {
        this.singleAngle = 360 / this.playerNumber;
        this.defaultAngle = this.singleAngle / 2;
        this.mask.active = false;
        this.targetId = idx;
        this.updateWheelStatus(RotaryStatus.ROTATE);
    }


    /** 移除所有的玩家数据 */
    removeAllPlayer() {

    }


    /** 将玩家移除出转盘 */
    removePlayerFromRotary(userId) {

        //TODO: 找出需要删除的item的索引
        const idx = this.findIndexByUserId(12345);

        this.removePlayerFromRotaryById(idx);

    }

    /** 根据玩家id找出相对应的索引 */
    findIndexByUserId(id: number) {
        let idx = -1;
        return idx;
    }

    /** 判断当前玩家是否在游戏中 */
    getCurrentPlayerGameStatus(playerList) {
        const myId = GameMgr.getInstance().UserId;
        const swd = SuperWinData.getInstance();
        /** 当前参与玩家已达上限，返回观察状态 */
        if (swd.gameMaxNum <= playerList.length) {
            return PlayerView.Watch;
        }
        let isContain = false;
        for (let i = 0; i < playerList.length; i++) {
            const { playerId } = playerList[i];
            if (playerId.toNumber() == myId) {
                isContain = true;
                break;
            }
        }

        if (isContain) {
            return PlayerView.Participation;
        } else {
            return PlayerView.UnParticipation;
        }

    }


    /** 更新游戏主持者标识 */
    updateGameHostTag() {
        // const playerInfo = SuperWinData.getInstance().gamePlayers;

        // let minTime;
        // for(let i)
    }


    /** 自动开始时，主持者的界面展示 */
    autoStartViewDisplay() {
        this.btn_start.children[0].position = cc.v3(-20, 0, 0);
        this.btn_start.children[1].active = true;
        this.btn_start.children[1].getComponent(cc.Label).string = '(5)';
    }

    /** 非自动开始状态，主持者的界面展示 */
    notAuotStartViewDisplay() {
        this.btn_start.children[0].position = cc.v3(0, 0, 0);
        this.btn_start.children[1].active = false;
    }

    /** 自动开始倒计时 */
    autoStartTimeDown() {
        this.stopAutoStartInterval();
        let restTime = 5;
        this.aotuStartTimeInterval = setInterval(() => {
            restTime--;
            if (restTime <= 0) {
                this.stopAutoStartInterval();
            }
            this.btn_start.children[1].getComponent(cc.Label).string = '(' + restTime + ')';

        }, 1000);
    }

    /** 停止自动倒计时定时器  */
    stopAutoStartInterval() {
        this.aotuStartTimeInterval && clearInterval(this.aotuStartTimeInterval)
    }


    /** 显示房主的标记 */
    showTableHosterTag() {

        const swd = SuperWinData.getInstance();
        const hosterId = swd.getHosterId();
        for (let i = 0; i < this.itemPlayerList.length; i++) {
            const node = this.itemPlayerList[i];
            // @ts-ignore
            if (node.playerInfo.playerId.toNumber() == hosterId) {
                node.children[1].active = true;
            } else {
                node.children[1].active = false;
            }
        }

    }





    showView() {
        this.node.active = true;
        this.rotaryContainer.active = true;
        this.diffLanguageDisplay();
        this.restTimeCountDown();
        const hosterId = SuperWinData.getInstance().getHosterId();
        Logger.logBusiness(hosterId, '房间主持者的id');
    }

    /** 显示赢家的界面 */
    showWinnerView() {
        this.rotaryContainer.active = false;
        this.OutCtrl.hideView();
        this.winnerCtrl.showView();
    }


    hideView() {
        this.stopRotaryAnimation();
        this.node.active = false;
    }

    /** 停止转盘动画 */
    stopRotaryAnimation() {
        this.resultTimeout && clearTimeout(this.resultTimeout);
        this.WheelState = RotaryStatus.STATIC;
        this.curDuration = 0;
        if (this._wheel) {
            this._wheel.angle = 0;
        }
        this.clearAllBg();
        this.clearAllGap();
        this.clearAllPlayerAvatar();
    }

    update(dt) {
        if (this.WheelState === RotaryStatus.STATIC) {
            return;
        }
        if (this.WheelState == RotaryStatus.ROTATE) {
            this.curDuration += dt;
            this._wheel.angle = this._wheel.angle + this.curSpeed;
            if (this.curSpeed <= this.maxSpeed) {
                this.curSpeed += this.accSpeed;
            }
            else {
                if (this.curDuration < this.MaxDuration) {
                    return;
                }
                //设置目标角度
                this.targeAngle = this.targetId * this.singleAngle + this.defaultAngle;
                this.finalAngle = this.decAngle + 360 - (this._wheel.angle % 360) + this.targeAngle + this._wheel.angle;
                this.needRoAngle = this.finalAngle - this._wheel.angle;
                this.maxSpeed = this.curSpeed;
                if (this.isback) {
                    this.targeAngle += this.singleAngle;
                }
                // this._wheel.rotation = this.finalAngle;
                this.WheelState = RotaryStatus.DECAY;
            }
        }

        else if (this.WheelState == RotaryStatus.DECAY) {

            var curRo = this._wheel.angle;   //应该等于finalAngle
            let needRo = this.finalAngle - curRo;

            this.curSpeed = this.maxSpeed * (needRo / this.needRoAngle) + 1;
            this._wheel.angle = curRo + this.curSpeed;

            if (needRo <= 0) {
                this.WheelState = RotaryStatus.STATIC;
                this._wheel.angle = this.targeAngle;
                // this.removeUserItemFromRotary(this.targetId);
                this.highLightRemovedPlayer(this.targetId);


                this.resultTimeout = setTimeout(() => {
                    /** 移除被筛选节点*/
                    this.removePlayerFromRotaryById(this.targetId);

                    Logger.logBusiness(SuperWinData.getInstance().gamePlayers.length, '剩余数据的长度');

                    const len = SuperWinData.getInstance().gamePlayers.length;

                    if (len > 1) {
                        /** 更新淘汰框的内容 */
                        this.OutCtrl.updateLoserAvatar();
                        /** 弹 淘汰框 */
                        this.OutCtrl.showView();
                    } else {
                        /** 展示 */
                        // this.winnerCtrl.showView();
                        this.showWinnerView();
                    }


                }, 1000);
                this.curDuration = 0;
                // if (this.isback) {
                //倒转一个齿轮
                // var act = cc.rotateBy(0.6, -this.singleAngle);
                // var seq = cc.sequence(cc.delayTime(0.2), act, cc.callFunc(() => {
                //to do  亮灯
                // Log.Error("结束 >>>" + this.targetId);
                // this.curDuration = 0;
                // this.LightItem();
                // }, this));
                // this._wheel.runAction(seq);
                // }
                // else {
                //to do  亮灯
                // this.LightItem();

                // Log.Error("结束了 >>>" + this.targetId);
                // }
            }
        }
    }

}
