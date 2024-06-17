import { GameDataManager } from "../../Managers/GameDataManager";
import { subStr } from "../../Utils/utils_common";
import { nameLengthLimited } from "../Config";
import { ItemType, LANGUAGE_TYPE } from "../Constant";
import { language } from "../Language/index";

const { ccclass, property } = cc._decorator;

@ccclass
export default class prefab_rank_item_ctrl extends cc.Component {

    @property(cc.Label)
    // label: cc.Label = null;
    text_rank: cc.Label = null;

    @property(cc.Node)
    node_avatar: cc.Node = null;

    @property(cc.Label)
    text_user_name: cc.Label = null;

    @property(cc.Label)
    text_winning: cc.Label = null;

    @property(cc.Label)
    text_gameWin: cc.Label = null;

    @property(cc.SpriteAtlas)
    atlas_country: cc.SpriteAtlas = null;

    initRankItem(info, type: ItemType = ItemType.Friend) {

        // console.log('info', info);
        let { avatar, name, rankNo, winning, id } = info;
        this.setDescribeText();
        this.setLabeString(this.text_rank, rankNo);
        this.setLabeString(this.text_winning, winning);
        id = id.toNumber();
        if (ItemType.country == type) {
            let cInfo = this.getCountryInfoById(id);
            name = cInfo.name;
            // console.log(cInfo.shortName, '国家简称');
            this.setUserName(name);
            this.setCountryFlag(cInfo.shortName, type);
            // console.log(cc.Mask.Type.IMAGE_STENCIL, cc.Mask.Type.ELLIPSE, cc.Mask.Type.RECT);
            // console.log(ItemType.country, ItemType.Room, ItemType.Friend);


        } else {
            this.setUserName(name);
            this.setUserAvatar(avatar, type);
        }

        // console.log(cInfo);

    }

    getCountryInfoById(id) {
        const lan = GameDataManager.getInstance().Language;
        // let cInfo;
        // if (language[lan].country[id]) {
        //     cInfo = language[lan].country[id]
        // } else {

        //     if (lan == LANGUAGE_TYPE.EN) {
        //         cInfo = {
        //             name: language.en.singBoard.unknown,
        //             shortName: 'default',
        //         }
        //     } else {
        //         cInfo = {
        //             name: language.ar.singBoard.unknown,
        //             shortName: 'default',
        //         }
        //     }
        // }
        let cInfo = {
            name: language.en.singBoard.unknown,
            shortName: 'default',
          }

        return cInfo;
    }


    /** 设置用户名 */
    setUserName(nickName) {

        let type = null;
        if (GameDataManager.getInstance().Language == LANGUAGE_TYPE.EN) {
            type = 1;
        } else {
            type = 2;
        }

        const str = subStr(nickName, nameLengthLimited, '...', type);

        this.setLabeString(this.text_user_name, str);

    }

    /** 根据语言展示文字 */
    setDescribeText() {
        if (GameDataManager.getInstance().Language == LANGUAGE_TYPE.EN) {
            this.setLabeString(this.text_gameWin, language.en.rank.item.gameWin);
        } else {
            this.setLabeString(this.text_gameWin, language.ar.rank.item.gameWin);
        }
    }

    /**设置用户的头像 */
    setUserAvatar(url, type) {
        const script = this.node_avatar.getComponent('prefab_avatar_ctrl');
        let mType;

        if (type == ItemType.Friend) {
            mType = cc.Mask.Type.ELLIPSE;
        }
        else if (type == ItemType.Room) {
            mType = cc.Mask.Type.IMAGE_STENCIL;
        }
        else if (type == ItemType.country) {
            debugger
            mType = cc.Mask.Type.RECT;
        }
        
        script.setDefaultView(72, null, mType);

        if (url) {
            script.setAvatarView(72, url, mType);
        } 
        // else {
        //     script.setDefaultView(72, null, mType);
        // }
    }

    /** 设置国旗 */
    setCountryFlag(shortName, type) {
        const script = this.node_avatar.getComponent('prefab_avatar_ctrl');
        // console.log(this.atlas_country, '设置国旗');
        const country = this.atlas_country.getSpriteFrame(shortName);
        let mType;

        if (type == ItemType.Friend) {
            mType = cc.Mask.Type.ELLIPSE;
        }
        else if (type == ItemType.Room) {
            mType = cc.Mask.Type.IMAGE_STENCIL;
        }
        else if (type == ItemType.country) {
            mType = cc.Mask.Type.RECT;
        }
        script.setMaskMode(mType);
        script.setAvatarSize(80);
        script.showImageFull(country);
    }

    /** */
    setLabeString(label: cc.Label, str: string) {
        label.string = str;
        // @ts-ignore
        label._forceUpdateRenderData(true);
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {} 

    // update (dt) {}
}
