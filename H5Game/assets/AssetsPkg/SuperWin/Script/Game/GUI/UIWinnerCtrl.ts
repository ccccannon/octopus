// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import GameMgr from "../../../../../Script/Managers/GameMgr";
import { Logger } from "../../../../../Script/Managers/Logger";
import { LANGUAGE_TYPE } from "../../../../../Script/Mgr/Config";
import { loadPictureByUrl, subStr } from "../../../../../Script/Utils/Utils_Common";
import { language } from "../Lang/superwin_index";
import { SuperWinData } from "../SuperWinData";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIWinnerCtrl extends cc.Component {

    @property(cc.ParticleSystem)
    particleNode: cc.ParticleSystem = null;

    @property(cc.Sprite)
    spirte_title: cc.Sprite = null;

    @property(cc.Label)
    label_win_coin: cc.Label = null;

    @property(cc.Label)
    label_winner_name: cc.Label = null;

    @property(cc.Node)
    node_lucky: cc.Node = null;

    @property(cc.Sprite)
    spirte_winner_avatar: cc.Sprite = null;

    @property(cc.SpriteFrame)
    sprite_default: cc.SpriteFrame = null;

    @property(cc.Sprite)
    sprite_luckyer_avatar: cc.Sprite = null;

    @property(cc.Label)
    label_luckyer_nickName: cc.Label = null;

    @property(cc.Label)
    label_luckyer_winGold: cc.Label = null;

    @property(cc.Label)
    label_describe_luckyer: cc.Label = null;

    showView() {
        this.node.active = true;
        this.showParticleEffect();
        this.updateWinnnerView();
    }

    /** 展示粒子特效 */
    showParticleEffect() {
        this.particleNode.resetSystem();
    }

    /** 更新赢家的视图 */
    updateWinnnerView() {

        const swd = SuperWinData.getInstance();

        // Logger.logBusiness(swd.winnerGold, '胜利者赢得的金币数量');
        // Logger.logBusiness(swd.winnerId), '胜利者的id';
        // Logger.logBusiness(swd.gamePlayers, '还在牌桌上的玩家');
        // Logger.logBusiness(swd.outPlayerList, '失败玩家列表')

        const winner = swd.gamePlayers[0];
        const { playerName, headImageUrl } = winner;
        this.setWinnerNickName(playerName);
        this.setAvatar(headImageUrl, this.spirte_winner_avatar);
        this.label_win_coin.string = '/' + swd.winnerGold;
        /** 获胜玩家跟幸运玩家是同一人 */
        if (swd.luckyerId == swd.winnerId) {
            this.updateLuckyerView(winner);
        } else {
            /** 从失败玩家中获取幸运玩家信息 */
            const luckyer = swd.getLuckyerFromOutPlayer(swd.luckyerId);
            this.updateLuckyerView(luckyer);
        }

        // const { } = winner;
        // this.setWinnerAvater();
        // this.label_win_coin.string = '/' + coinNumber;


    }

    /** 设置获胜玩家的昵称 */
    setWinnerNickName(name: string) {
        this.label_winner_name.string = subStr(name, 25, '...', 1);
    }

    /** 设置获胜玩家的头像 */
    async setAvatar(headImageUrl, avatar) {
        const func = () => {
            return new Promise((res) => {
                setTimeout(() => {
                    res(this.sprite_default)
                }, 300)
            })
        }
        let sprite = await Promise.race([loadPictureByUrl(headImageUrl), func()]).catch((err) => {
            avatar.spriteFrame = this.sprite_default;
        });
        // @ts-ignore
        const min = Math.min(sprite._originalSize.height, sprite._originalSize.width);

        avatar.spriteFrame = sprite as cc.SpriteFrame;
        avatar.node.scale = avatar.node.parent.width / min;
        console.log(min, avatar.node.parent.width, '尺寸大小');
    }

    /** 更新幸运玩家的视图 */
    updateLuckyerView(luckyer) {
        const swd = SuperWinData.getInstance();
        const { playerName, headImageUrl } = luckyer;
        this.label_luckyer_nickName.string = subStr(playerName, 10, '...', 1);
        this.setAvatar(headImageUrl, this.sprite_luckyer_avatar);
        this.label_luckyer_winGold.string = swd.luckyerWinGold + '';
        // @ts-ignore
        this.label_luckyer_winGold._forceUpdateRenderData();
    }

    /** 更新luckyer文案 */
    updateLuckyerDescribeText() {
        const lang = GameMgr.getInstance().Language;
        if (lang == LANGUAGE_TYPE.ARAB) {
            this.label_describe_luckyer.string = language.ar.rotary.luckyer;
        } else {
            this.label_describe_luckyer.string = language.en.rotary.luckyer;
        }
    }

    hideView() {
        this.node.active = false;
    }

    start() {
        // this.showParticleEffect();
        this.updateLuckyerDescribeText();
    }

    // update (dt) {}
}
