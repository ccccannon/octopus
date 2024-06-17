// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { language } from "../Lang/index.js";

import { numberFormat } from "../../Utils/utils_common.js"

// const ResultStatus = cc.Enum({
//     WIN: {
//         name: 'win',
//         code: 1,
//     },
//     LOSE: {
//         name: 'lost',
//         code: 2,
//     },
//     NOPLAY: {
//         name: 'noplay',
//         code: 3,
//     },
//     WAIT: {
//         name: 'wait',
//         code: 4,
//     },
// })

const StatusCode = cc.Enum({
    WIN: 1,
    LOST: 2,
    NOPLAY: 3,
    WAIT: 4
})

const ResultText = [
    '',
    'win',
    'lost',
    'noplay',
    'wait',
]

cc.Class({
    extends: cc.Component,

    properties: {
        text_title: cc.Label,
        text_detail: cc.Label,
        node_win: cc.Node,
        text_win_coin: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.lang = window.localLang || window.languageType.ARAB;

        // console.log(this.getText(this.lang, 'result', 'title', ResultText[2]), 'resultDisplay onload');
        const code = Math.floor(Math.random() * (ResultText.length - 1)) + 1;
        this.setTitle()
        const info = {
            win: 1000000,
            code: code,
            // code: 1,
        }
        this.init(info);
    },

    // 设置标题
    setTitle(code) {

        const str = this.getText(this.lang, 'result', 'title', ResultText[code]);
        this.text_title.string = str;
        if (code == 1) {
            // 如果状态为赢，将标题设置为黄色，否则为白色
            this.text_title.node.color = cc.color(234, 255, 0);
        } else {
            this.text_title.node.color = cc.Color.WHITE;
        }
    },

    // 设置细节
    setDetail(info) {
        const code = info.code;
        const number = info.win;
        if (code === StatusCode.WIN) {
            this.setWinCoin(number);
            this.text_detail.node.active = false;
            this.node_win.active = true;
            return;
        } else {
            this.text_detail.node.active = true;
            this.node_win.active = false;
            const str = this.getText(this.lang, 'result', 'discribe', ResultText[code]);
            this.text_detail.string = str;
        }

    },

    // 居中显示
    dispalyCenter() {
        const widget = this.node.getComponent(cc.Widget);
        widget.top = 70;
        widget.updateAlignment();
    },

    // 居中显示
    dispalyTop() {
        const widget = this.node.getComponent(cc.Widget);
        widget.top = 30;
        widget.updateAlignment();
    },


    // 设置赢得金币
    setWinCoin(num) {
        const strNum = numberFormat(num);
        this.text_win_coin.string = "+" + strNum;
        this.text_win_coin._forceUpdateRenderData(true);
    },

    // 初始化
    init(settleAmount, reBetStatus) {
        const info = this.calcStatusCode(settleAmount, reBetStatus);

        this.updateBgByResultStatus(info.code);

        this.setTitle(info.code);
        this.setDetail(info);
    },

    /** 根据结果状态来更新背景图片 */
    updateBgByResultStatus(code) {

        const draw = this.node.parent
        const script = draw.getComponent('draw_result_bet')
        if (code == 1) {
            // 如果状态为赢，更新背景为黄色带高亮
            draw.getComponent(cc.Sprite).spriteFrame = script.bgList[0];

        } else {
            //    设置背景为普通
            draw.getComponent(cc.Sprite).spriteFrame = script.bgList[1];
        }

    },



    calcStatusCode(settleAmount, reBetStatus) {

        if (settleAmount > 0) {
            return { code: StatusCode.WIN, win: settleAmount };
        }

        if (settleAmount <= 0) {
            if (reBetStatus > 0) {
                return { code: StatusCode.LOST, win: 0 };
            } else {
                return { code: StatusCode.NOPLAY, win: 0 }
            }
        }

        return { code: StatusCode.WAIT, win: 0 }
    },


    // 获取文本文案
    getText(lang, oneMode, twoMode, key) {
        return language[lang][oneMode][twoMode][key] || "";
    },

    start() {

    },

    // update (dt) {},
});
