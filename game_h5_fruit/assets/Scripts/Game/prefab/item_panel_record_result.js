// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:

import { numberFormat } from "../../Utils/utils_common";
import { language } from "../Lang/index";

//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        text_fruit_name: cc.Label,
        text_betNumber: cc.Label,
        text_result: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    init(info) {

        // console.log(info);

        this.text_fruit_name.string = info.name;
        this.text_betNumber.string = numberFormat(info.number);
        this.setResultColor(info.isRight);
        this.setResultText(info.isRight);
    },

    //  设置颜色
    setResultColor(res) {
        // console.log(res);
        if (res) {

            this.text_result.node.color = new cc.Color(17, 163, 51, 255);

        } else {
            this.text_result.node.color = new cc.Color(223, 52, 52, 255);
        }
    },

    // 设置文本
    setResultText(res) {
       
        if (res) {
            this.text_result.string =  language[window.localLang].panel_record.correct;
        } else {
            this.text_result.string = language[window.localLang].panel_record.wrong;
        }
    },


    start() {

    },

    // update (dt) {},
});
