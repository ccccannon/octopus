import GameMgr from "../../../../../Script/Managers/GameMgr";
import { LANGUAGE_TYPE } from "../../../../../Script/Mgr/Config";
import { numberFormat } from "../../../../../Script/Utils/Utils_Common";
import { language } from "../Lang/index";

const { ccclass, property } = cc._decorator;


enum StatusCode {
    WIN = 1,
    LOST,
    NOPLAY,
    WAIT
}

const ResultText = [
    '',
    'win',
    'lost',
    'noplay',
    'wait',
]



@ccclass
export default class container_result extends cc.Component {

    @property(cc.Label)
    text_title: cc.Label = null;
    @property(cc.Label)
    text_detail: cc.Label = null;
    @property(cc.Label)
    text_win_coin: cc.Label = null;
    @property(cc.Node)
    node_win: cc.Node = null;

    public lang: string = null;

    onLoad() {



        // console.log(this.getText(this.lang, 'result', 'title', ResultText[2]), 'resultDisplay onload');
        // const code = Math.floor(Math.random() * (ResultText.length - 1)) + 1;
        // this.setTitle(code)
        // const info = {
        //     win: 1000000,
        //     code: code,
        //     // code: 1,
        // }
        // this.init(info);
    }

    // 设置标题
    setTitle(code) {

        const str = this.getText('result', 'title', ResultText[code]);
        this.text_title.string = str;
    }

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
            const str = this.getText('result', 'discribe', ResultText[code]);
            this.text_detail.string = str;
        }

    }

    // 居中显示
    dispalyCenter() {
        const widget = this.node.getComponent(cc.Widget);
        widget.top = 70;
        widget.updateAlignment();
    }

    // 居中显示
    dispalyTop() {
        const widget = this.node.getComponent(cc.Widget);
        widget.top = 30;
        widget.updateAlignment();
    }


    // 设置赢得金币
    setWinCoin(num) {
        const strNum = numberFormat(num, 2);
        this.text_win_coin.string = strNum;
        // @ts-ignore
        this.text_win_coin._forceUpdateRenderData(true);
    }

    // 初始化
    init(settleAmount) {
        const info = this.calcStatusCode(settleAmount);
        this.setTitle(info.code);
        this.setDetail(info);
    }


    calcStatusCode(settleAmount) {
        // -1代表没参与  0 代表没中奖
        if (settleAmount > 0) {
            return { code: StatusCode.WIN, win: settleAmount };
        }

        if (settleAmount == 0) {
            return { code: StatusCode.LOST, win: 0 };
        }

        if (settleAmount == -1) {
            return { code: StatusCode.NOPLAY, win: 0 }
        }

        return { code: StatusCode.WAIT, win: 0 }
    }


    // 获取文本文案
    getText(oneMode, twoMode, key) {
        const lang = GameMgr.getInstance().Language == LANGUAGE_TYPE.ARAB ? LANGUAGE_TYPE.ARAB : LANGUAGE_TYPE.EN;
        return language[lang][oneMode][twoMode][key] || "";
    }

    start() {

    }

}
