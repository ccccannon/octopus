import GameMgr from "../../../../../Script/Managers/GameMgr";
import { LANGUAGE_TYPE } from "../../../../../Script/Mgr/Config";
import { numberFormat } from "../../../../../Script/Utils/Utils_Common";
import { language } from "../Lang/horse_index";

const { ccclass, property } = cc._decorator

@ccclass
export default class ItemRecordBetRestult extends cc.Component {
    @property(cc.Sprite)
    view_horse: cc.Sprite = null;
    @property(cc.Label)
    text_betNumber: cc.Label = null;
    @property(cc.Label)
    text_result: cc.Label = null;


    init(info, viewList) {
        // console.log(info);
        const { id, isRight, number } = info;
        this.view_horse.spriteFrame = viewList[id - 1];
        this.text_betNumber.string = numberFormat(number);
        this.setResultColor(isRight);
        this.setResultText(isRight);
    }

    //  设置颜色
    setResultColor(res) {
        // console.log(res);
        if (res) {

            this.text_result.node.color = new cc.Color(17, 163, 51, 255);

        } else {
            this.text_result.node.color = new cc.Color(223, 52, 52, 255);
        }
    }

    // 设置文本
    setResultText(res) {
        const lang = GameMgr.getInstance().Language == LANGUAGE_TYPE.ARAB ? LANGUAGE_TYPE.ARAB : LANGUAGE_TYPE.EN;

        if (res) {
            this.text_result.string = language[lang].panel_record.correct;
        } else {
            this.text_result.string = language[lang].panel_record.wrong;
        }
    }

}