
import GameMgr from '../../../../../Script/Managers/GameMgr';
import { LANGUAGE_TYPE } from '../../../../../Script/Mgr/Config';
import { selectBtnList } from './constants'

const { ccclass, property } = cc._decorator;
@ccclass
export default class betCoinSelectArea extends cc.Component {
    @property(cc.Prefab)
    btn_select: cc.Prefab = null;

    public selectList = [];

    public selectBtnInfo = null;

    public cacheGuessBets = null;


    onLoad() {

        this.selectList = [];
        this.selectBtnInfo = {};
        this.setLayout();
    }

    onEnable() {
        cc.systemEvent.on('selectBtnClick', this.onChildBtnClick, this);
    }


    setLayout() {
        const layout = this.node.getComponent(cc.Layout);
        const lang = GameMgr.getInstance().Language == LANGUAGE_TYPE.ARAB ? LANGUAGE_TYPE.ARAB : LANGUAGE_TYPE.EN;
        if (lang == LANGUAGE_TYPE.ARAB) {
            layout.horizontalDirection = cc.Layout.HorizontalDirection.RIGHT_TO_LEFT;
        } else {
            layout.horizontalDirection = cc.Layout.HorizontalDirection.LEFT_TO_RIGHT;
        }
    }

    onChildBtnClick(params) {

        // 如果玩家点击同一个按钮，不进行后续的赋值操作；
        if (params.id === this.selectBtnInfo.id) {
            return;
        }
        // console.log('onChildBtnClick', params);

        this.setSelectBtnInfo(params);

        this.updateBtnStatus(params.id);
    }

    updateBtnStatus(index) {
        this.selectList.map((item) => {
            const script = item.getComponent('item_btn_select');
            if (script.btnInfo.id === index) {
                script.updateSelectStatus(true)
            } else {
                script.updateSelectStatus(false)
            }
        })
    }


    /** 检查配置是否一致 */
    checkSettingSame(list) {

        let isSame = true;
        if (!this.cacheGuessBets) {
            this.cacheGuessBets = list;
            isSame = false;
        } else {
            for (let i = 0, len = list.length; i < len; i++) {
                const cacheItem = this.cacheGuessBets[i];
                const listItem = list[i];
                if (cacheItem.id != listItem.id || cacheItem.value != listItem.value) {
                    isSame = false;
                    break;
                }
            }
        }
        return isSame;
    }



    init(guessBets) {

        const isSame = this.checkSettingSame(guessBets);
        if (isSame) {
            // console.log('按钮配置一致，不更新视图');
            return;
        } else {
            this.cacheGuessBets = guessBets;
        }

        this.node.removeAllChildren();
        const list = this.composeSelectBtnList(guessBets);
        for (let i = 0, len = list.length; i < len; i++) {
            const info = list[i];
            const item = cc.instantiate(this.btn_select);
            const script = item.getComponent('item_btn_select');
            if (info.isSelected) {
                this.setSelectBtnInfo(info);
            }
            script.init(info);
            item.parent = this.node;
            this.selectList.push(item);
        }
    }

    /** 组装数据 */
    composeSelectBtnList(guessBets) {
        // debugger
        let tempList = [];
        for (let i = 0; i < guessBets.length; i++) {
            const item = guessBets[i];
            const obj = {
                id: item.id,
                coinsNumber: item.value,
                isSelected: item.id == 2 ? true : false,
            }
            tempList.push(obj);
        }
        return tempList;
    }


    setSelectBtnInfo(info) {

        this.selectBtnInfo = info;
        // console.log('setSelectBtnInfo', this.selectBtnInfo);
        cc.systemEvent.emit('ON_COIN_SELECT_CLICK', info);

    }

    onDisable() {
        cc.systemEvent.off('selectBtnClick', this.onChildBtnClick, this);
        this.selectList = null;
        this.selectBtnInfo = null;
    }

    start() {

    }
}

