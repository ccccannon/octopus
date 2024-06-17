import GameMgr from "../../../../../Script/Managers/GameMgr";
import { LANGUAGE_TYPE } from "../../../../../Script/Mgr/Config";
import { loadPictureByUrl, numberFormat, subStr } from "../../../../../Script/Utils/Utils_Common";


const NAME_LEN_LIMIT = 36;

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
export default class item_rank_borad extends cc.Component {

    @property(cc.Label)
    text_coin: cc.Label = null;

    @property(cc.Sprite)
    sprite_avatar: cc.Sprite = null;

    @property(cc.Label)
    text_name: cc.Label = null;

    @property(cc.Label)
    text_rank: cc.Label = null;

    @property(cc.Sprite)
    sprite_rank: cc.Sprite = null;

    @property(cc.Sprite)
    sprite_sex: cc.Sprite = null;
    // rankSpriteList: [cc.SpriteFrame],
    // sexSpriteList: [cc.SpriteFrame],
    @property(cc.SpriteAtlas)
    spriteAltas: cc.SpriteAtlas = null;

    init(info) {
        // const tempUrl = 'https://img-community.csdnimg.cn/avatar/d104fc8a00d14620a33edc5c9fab6d74.png';  

        // console.log(info);

        this.setCoins(info.winGold.toNumber());
        this.setNickName(info.playerName);
        this.setRank(info.rankNo);
        this.setAvatar(info.playerAvatar);
        this.setSex(info.playerSex);
      
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
        try {
            sprite = await loadPictureByUrl(url);
        } catch (err) {
            console.log(err);
            sprite = this.getSpriteByName('view_user_avatar_default', this.spriteAltas);
        }

        const min = Math.min(sprite._originalSize.height, sprite._originalSize.width);

        this.sprite_avatar.spriteFrame = sprite;

        this.sprite_avatar.node.scale = 100 / min;

    }


    // 根据名字从贴图中获取图片资源
    getSpriteByName(name, altas) {
        const sprite = altas.getSpriteFrame(name);
        return sprite;
    }


    setSex(num) {

        // 0 保密 1男 2女

        // 性别图片的展示
        if (num == SEX.SECRET) {
            this.sprite_sex.spriteFrame = this.getSpriteByName('icon_sex_secrecy', this.spriteAltas);
            return;
        }

        if (num == SEX.MALE) {
            this.sprite_sex.spriteFrame = this.getSpriteByName('icon_sex_male', this.spriteAltas);
            return;
        }

        if (num == SEX.FEMALE) {
            this.sprite_sex.spriteFrame = this.getSpriteByName('icon_sex_female', this.spriteAltas);
            return;
        }

    }

    // 设置排行
    setRank(num) {

        if (num > TOP.THREE) {
            this.sprite_rank.node.active = false;
            this.text_rank.node.active = true;
            this.text_rank.string = num;
        } else {
            this.sprite_rank.node.active = true;
            this.text_rank.node.active = false;
            this.sprite_rank.spriteFrame = this.getSpriteByName('top' + num, this.spriteAltas);
            // if (num == TOP.ONE) {

            //     return;
            // }
            // if (num == TOP.TWO) {
            //     this.sprite_rank.spriteFrame = '';
            //     return;
            // }
            // if (num == TOP.THREE) {
            //     this.sprite_rank.spriteFrame = '';
            //     return;
            // }
        }

    }
}


