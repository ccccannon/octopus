// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { GameDataManager } from "../../Managers/GameDataManager";
import { handleTranslate } from "../../Utils/utils_common";
import { LANGUAGE_TYPE } from "../Constant";
import { language } from "../Language/index";

const { ccclass, property } = cc._decorator;

const rankSetting = [
    {
        // #C93C00
        country: cc.color(201, 60, 0),
        // #DE5D26
        clearTime: cc.color(222, 93, 38),
    },
    {
        //#0171C2
        country: cc.color(1, 113, 194),
        // #2398DB
        clearTime: cc.color(35, 152, 218),
    },
    {
        // #924F12
        country: cc.color(146, 80, 18),
        // #B37236
        clearTime: cc.color(178, 114, 54),
    },
    {
        // #13126D
        country: cc.color(19, 18, 109),
        //#333294
        clearTime: cc.color(52, 50, 148),

    },

]



@ccclass
export default class prefab_signBoard_ctrl extends cc.Component {

    @property([cc.SpriteFrame])
    bgViewList: Array<cc.SpriteFrame> = [];

    @property([cc.SpriteFrame])
    TopRankEnList: Array<cc.SpriteFrame> = [];

    @property([cc.SpriteFrame])
    TopRankArList: Array<cc.SpriteFrame> = [];

    @property(cc.Sprite)
    view_bg: cc.Sprite = null;

    @property(cc.Node)
    view_rank: cc.Node = null;

    @property(cc.Label)
    text_rank: cc.Label = null;

    @property(cc.Label)
    text_country: cc.Label = null;

    @property(cc.Label)
    text_ClearTime: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    @property(cc.Node)
    node_noPlayer: cc.Node = null;

    @property([cc.SpriteFrame])
    viewList_noPlayer: Array<cc.SpriteFrame> = [];

    // onLoad () {}


    /** 初始化飘屏 */
    initSignBoard(info) {
        // info.rankNo = 4;
        // info.areaId = 225;
        // info.winning = 1234567;
        if (!!info) {
            this.updateBgAndColor(info.rankNo);
            this.updateRank(info.rankNo);
            this.updateClearTimes(info.winning);
            this.updateCountryName(info.areaId);
        } else {
            this.showNoPlayerSignBoard();
        }
        // console.log(info, '飘屏的消息');
    }

    /** 显示无人占领的指示牌 */
    showNoPlayerSignBoard() {
        this.node_noPlayer.active = true;
        if (GameDataManager.getInstance().Language == LANGUAGE_TYPE.EN) {
            this.node_noPlayer.children[0].getComponent(cc.Sprite).spriteFrame = this.viewList_noPlayer[1];
        } else {
            this.node_noPlayer.children[0].getComponent(cc.Sprite).spriteFrame = this.viewList_noPlayer[0];
        }
    }


    /**更新背景框 */
    updateBgAndColor(rank: number) {
        if (rank <= 3) {
            this.view_bg.spriteFrame = this.bgViewList[rank - 1];
            this.text_country.node.color = rankSetting[rank - 1].country;
            this.text_ClearTime.node.color = rankSetting[rank - 1].clearTime;
        } else {
            this.view_bg.spriteFrame = this.bgViewList[this.bgViewList.length - 1];
            this.text_country.node.color = rankSetting[rankSetting.length - 1].country;
            this.text_ClearTime.node.color = rankSetting[rankSetting.length - 1].clearTime;
        }
    }

    /** 更新排名 */
    updateRank(rank) {
        if (rank <= 3) {
            this.view_rank.active = true;
            this.text_rank.node.active = false;
            if (GameDataManager.getInstance().Language == LANGUAGE_TYPE.EN) {
                this.view_rank.getComponent(cc.Sprite).spriteFrame = this.TopRankEnList[rank - 1];
            } else {
                this.view_rank.getComponent(cc.Sprite).spriteFrame = this.TopRankArList[rank - 1];
            }
        } else {
            this.view_rank.active = false;
            this.text_rank.node.active = true;
            let strRank;
            if (GameDataManager.getInstance().Language == LANGUAGE_TYPE.EN) {
                strRank = handleTranslate(rank, language.en.singBoard.rank);
            } else {
                strRank = handleTranslate(rank, language.ar.singBoard.rank);
            }
            this.text_rank.string = strRank;
        }

    }

    /** 更新通关次数 */
    updateClearTimes(num) {

        let strNum: string;

        if (GameDataManager.getInstance().Language == LANGUAGE_TYPE.EN) {
            strNum = handleTranslate(num, language.en.singBoard.winning);
        } else {
            strNum = handleTranslate(num, language.ar.singBoard.winning);
        }
        this.text_ClearTime.string = strNum;
    }

    /** 更新国家名称 */
    updateCountryName(areaId) {
        let strCountry: string;
        if (GameDataManager.getInstance().Language == LANGUAGE_TYPE.EN) {
            strCountry = language.en.country['' + areaId] ? language.en.country['' + areaId].name : language.en.singBoard.unknown;
        } else {
            strCountry = language.ar.country['' + areaId] ? language.ar.country['' + areaId].name : language.ar.singBoard.unknown;
        }
        this.text_country.string = strCountry;
    }



    start() {

    }

    // update (dt) {}
}
