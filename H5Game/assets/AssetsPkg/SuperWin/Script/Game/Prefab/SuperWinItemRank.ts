import GameMgr from "../../../../../Script/Managers/GameMgr";
import { LANGUAGE_TYPE } from "../../../../../Script/Mgr/Config";
import { loadPictureByUrl, numberFormat, subStr } from "../../../../../Script/Utils/Utils_Common";


const NAME_LEN_LIMIT = 15;

const TOP = cc.Enum({
    ONE: 1,
    TWO: 2,
    THREE: 3,
})

const SEX = cc.Enum({
    SECRET: 0,
    MALE: 1,
    FEMALE: 2
})

const { ccclass, property } = cc._decorator;
@ccclass
export default class SuperWinItemRank extends cc.Component {

    @property(cc.Label)
    text_coin: cc.Label = null;

    @property(cc.Sprite)
    sprite_avatar: cc.Sprite = null;

    @property(cc.Label)
    text_name: cc.Label = null;

    @property(cc.Label)
    text_rank: cc.Label = null;

    @property(cc.SpriteFrame)
    viewDeafult: cc.SpriteFrame = null;

    init(info) {
        this.setCoins(info.winGold.toNumber());
        this.setNickName(info.playerName);
        this.setRank(info.rankNo);
        this.setAvatar(info.playerAvatar);
    }

    // 设置金币数量
    setCoins(num) {
        const str = numberFormat(num);
        this.text_coin.string = str;
    }

    // 设置昵称
    setNickName(nickName) {

        let type = null;

        type = GameMgr.getInstance().Language == LANGUAGE_TYPE.ARAB ? 2 : 1;

        this.text_name.string = subStr(nickName, NAME_LEN_LIMIT, null, type);
    }

    // 设置头像
    async setAvatar(url) {
        let sprite;

        const func = () => {
            return new Promise((res) => {
                setTimeout(() => {
                    res(this.viewDeafult)
                }, 300)
            })
        }
        // let 
        try {
            sprite = await Promise.race([loadPictureByUrl(url), func()]).catch((err) => {
                this.sprite_avatar.spriteFrame = this.viewDeafult;
            });
        } catch (err) {
            console.log(err);
            sprite = this.viewDeafult;
        }

        const min = Math.min(sprite._originalSize.height, sprite._originalSize.width);

        this.sprite_avatar.spriteFrame = sprite;

        this.sprite_avatar.node.scale = 100 / min;

    }


    // 设置排行
    setRank(num) {
        if (num > 0) {
            this.text_rank.string = num;
        } else {
            this.text_rank.string = '30+';
        }
    }
}


