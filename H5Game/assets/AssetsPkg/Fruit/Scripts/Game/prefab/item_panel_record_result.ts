import GameMgr from "../../../../../Script/Managers/GameMgr";
import { LANGUAGE_TYPE } from "../../../../../Script/Mgr/Config";
import { numberFormat, removeZero } from "../../../../../Script/Utils/Utils_Common";
import { language } from "../Lang/index";


const { ccclass, property } = cc._decorator;
@ccclass
export default class item_panel_record_result extends cc.Component {

    @property(cc.Label)
    text_fruit_name: cc.Label = null;
    @property(cc.Label)
    text_betNumber: cc.Label = null;
    @property(cc.Label)
    text_result: cc.Label = null;


    init(info) {
        this.text_fruit_name.string = info.name;
        this.text_betNumber.string = numberFormat(info.number);
        this.setResultColor(info.isRight);
        this.setResultText(info.isRight);
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
