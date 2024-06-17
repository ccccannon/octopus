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
import { SuperWinData } from "../SuperWinData";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIOutCtrl extends cc.Component {

    @property(cc.Sprite)
    sprite_title: cc.Sprite = null;

    @property([cc.SpriteFrame])
    titleViewList: Array<cc.SpriteFrame> = [];

    @property(cc.Sprite)
    sprite_avatar: cc.Sprite = null;

    @property(cc.Label)
    label_nickName: cc.Label = null;

    @property(cc.SpriteFrame)
    defaultImg: cc.SpriteFrame = null;

    showView() {
        this.node.active = true;
        this.updateTitleWithLang();
        this.playWingMoveAnimation();

        setTimeout(() => {
            this.hideView();
        }, 2000)
    }


    /** 更新标题 */
    updateTitleWithLang() {
        const lang = GameMgr.getInstance().Language == LANGUAGE_TYPE.ARAB ? LANGUAGE_TYPE.ARAB : LANGUAGE_TYPE.EN;
        if (lang == LANGUAGE_TYPE.ARAB) {
            this.sprite_title.spriteFrame = this.titleViewList[1];
        } else {
            this.sprite_title.spriteFrame = this.titleViewList[0];
        }
    }

    /** 播放翅膀动画 */
    playWingMoveAnimation() {
        const anima = this.node.getComponent(cc.Animation);
        anima.play('Out');
    }

    /** 更新失败者的头像*/
    async updateLoserAvatar() {
        const outPlayer = SuperWinData.getInstance().roundOutPlayer;
        // Logger.logBusiness(outPlayer, '失败者信息');
        const { headImageUrl, playerName } = outPlayer;
        this.label_nickName.string = subStr(playerName, 25, '...', 1);
        const func = () => {
            return new Promise((res) => {
                setTimeout(() => {
                    res(this.defaultImg)
                }, 300)
            })
        }
        let sprite = await Promise.race([loadPictureByUrl(headImageUrl), func()]).catch((err) => {
            this.sprite_avatar.spriteFrame = this.defaultImg;
        });
        // @ts-ignore
        const min = Math.min(sprite._originalSize.height, sprite._originalSize.width);

        this.sprite_avatar.spriteFrame = sprite as cc.SpriteFrame;
        this.sprite_avatar.node.scale = this.sprite_avatar.node.parent.width / min;
        console.log(min, this.sprite_avatar.node.parent.width, '尺寸大小');
    }


    hideView() {
        this.node.active = false;
    }


}
