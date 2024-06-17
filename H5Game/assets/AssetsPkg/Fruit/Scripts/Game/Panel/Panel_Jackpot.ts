import { Logger } from "../../../../../Script/Managers/Logger";
import { loadPictureByUrl, numberFormat, subStr } from "../../../../../Script/Utils/Utils_Common";
import { GameData } from "../MainUI/GameData";

const { ccclass, property } = cc._decorator;

// const defaultRankInfo = {

// }

@ccclass
export default class Panel_Jackpot extends cc.Component {

    @property(cc.Node)
    node_myJpWin: cc.Node = null;

    @property([cc.Node])
    rankContainer: Array<cc.Node> = [];

    @property(cc.SpriteAtlas)
    texture: cc.SpriteAtlas = null;

    public hideTimeout: number = 0;

    @property([cc.Node])
    lightList: Array<cc.Node> = [];

    private isFlash = false;

    private flashInterval: number = 0;

    public jackpotCoin: number = 0;


    /** 更新jackpot赢得的金币数量 */
    updateMyJackpotNumber() {
        const numberRoll = this.node_myJpWin.getComponent("numberRoll");
        const jpWin = GameData.getInstance().jackpotWin;
        Logger.logBusiness(jpWin, 'jackpot奖励金额');
        const randomNumber = jpWin;
        this.jackpotCoin = jpWin;
        const time = 1;
        numberRoll.startNumberAnimationTo(randomNumber, time, null, false);
    }

    protected start(): void {
        // this.schedule(this.updateMyJackpotNumber.bind(this), 3);

        // this.scheduleOnce(this.hideView.bind(this), 3);

        this.showView();

    }

    hideView() {
        this.resetMyJpWinNumber();
        this.stopFlashLamp();
        if (this.jackpotCoin > 0) {
            this.showJackportCoinFlyAnimation();
            this.jackpotCoin = 0;
        }
        this.node.active = false;
    }


    /** jackpot飞金币动画 */
    showJackportCoinFlyAnimation() {
        const worldPos = this.node_myJpWin.parent.convertToWorldSpaceAR(this.node_myJpWin.position);
        cc.systemEvent.emit('COIN_FLY_BALANCE', worldPos, GameData.getInstance().balance);
        cc.systemEvent.emit('COIN_ROLL_TODAYWIN');
    }



    /** 重置玩家赢得的金币 */
    resetMyJpWinNumber() {
        this.node_myJpWin.getComponent('numberRoll').number = 0;
    }


    /** 胜利者视角 */
    winnerView() {
        this.node_myJpWin.parent.active = true;
        this.updateMyJackpotNumber();
    }

    /** 旁观者视角 */
    watcherView() {
        this.node_myJpWin.parent.active = false;
    }


    /** 启动闪光灯 */
    launchFlashLamp() {
        this.lightList[0].active = this.isFlash;
        this.lightList[1].active = !this.isFlash;
        this.flashInterval = setInterval(() => {
            this.isFlash = !this.isFlash;
            this.lightList[0].active = this.isFlash;
            this.lightList[1].active = !this.isFlash;
        }, 500);
    }


    stopFlashLamp() {
        this.flashInterval && clearInterval(this.flashInterval);
        this.lightList[0].active = false;
    }


    /** 显示jackpot的前三名 */
    async showRankDisplay(rankItems) {
        // console.log(rankItems);
        this.hideAllRank();
        for (let i = 0; i < rankItems.length; i++) {
            const { playerAvatar, winGold, playerName } = rankItems[i];
            const rankItem = this.rankContainer[i];
            rankItem.active = true;
            const avatarNode = rankItem.children[0].children[0];
            // const url = 'https://pic.hghggh.com/avatar/16546767826711200_800.gif';
            /** 更新头像 */
            await this.setSpriteToNode(avatarNode, playerAvatar);

            /** 更新赢得金币 */
            const coinLabel = rankItem.children[2].children[1].getComponent(cc.Label);
            coinLabel.string = winGold.toNumber();
            coinLabel.node.active = false;
            // @ts-ignore
            coinLabel._forceUpdateRenderData();
            coinLabel.node.active = true;

            /** 更新用户昵称 */
            rankItem.children[2].children[0].getComponent(cc.Label).string = subStr(playerName, 10, '...', 1);

        }
    }

    /** 设置图片到节点 */
    async setSpriteToNode(node: cc.Node, url: string) {

        let sprite = node.getComponent(cc.Sprite);
        const func = () => {
            return new Promise((res) => {
                setTimeout(() => {
                    res(this.getSpriteByName('view_user_avatar_default', this.texture))
                }, 1000)
            })
        }
        let sf;
        try {
            sf = await Promise.race([loadPictureByUrl(url), func()]).catch(() => {
                sf = this.getSpriteByName('view_user_avatar_default', this.texture);
            });
        } catch (err) {
            sf = this.getSpriteByName('view_user_avatar_default', this.texture);
        }

        // console.log(sf);
        const min = Math.min(sf._originalSize.height, sf._originalSize.width);

        sprite.spriteFrame = sf;

        node.scale = node.parent.width / min;

    }

    // 根据名字从贴图中获取图片资源
    getSpriteByName(name, altas) {
        const sprite = altas.getSpriteFrame(name);
        return sprite;
    }

    /**隐藏所有的排行榜 */
    hideAllRank() {
        for (let i = 0; i < this.rankContainer.length; i++) {
            this.rankContainer[i].active = false;
        }
    }


    showView() {

        this.node.active = true;
        // this.scheduleOnce(this.hideView.bind(this), 3);
        this.launchFlashLamp();
        const jackpot = GameData.getInstance().jackpotWin;

        if (jackpot > 0) {
            this.winnerView();
        } else {
            this.watcherView();
        }
        this.hideTimeout && clearTimeout(this.hideTimeout);
        // this.hideTimeout = setTimeout(() => {
        //     this.hideView();
        // }, 5000);
    }

}