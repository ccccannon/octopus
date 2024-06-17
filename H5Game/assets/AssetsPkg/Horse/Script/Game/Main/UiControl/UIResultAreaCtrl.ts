

import GameMgr from '../../../../../../Script/Managers/GameMgr';
import { Logger } from '../../../../../../Script/Managers/Logger';
import { LANGUAGE_TYPE } from '../../../../../../Script/Mgr/Config';
import { MAX_RECORD_LENGTH } from '../../Constants';
import { language } from '../../Lang/horse_index';

const { ccclass, property } = cc._decorator;
@ccclass
export default class UIResultAreaCtrl extends cc.Component {

    @property(cc.Label)
    text_record: cc.Label = null;

    @property(cc.Node)
    recordContianer: cc.Node = null;

    @property(cc.Prefab)
    item_horse_record: cc.Prefab = null;
    // item_horse_viewList: [cc.SpriteFrame],

    @property(cc.ScrollView)
    scrollview: cc.ScrollView = null;

    @property(cc.Node)
    resNode: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    public horseRecordNodePool: cc.NodePool = null;

    public containerOriginPos: cc.Vec3 = null;

    public cacheHistory: any = null;

    public horseView: Array<cc.SpriteFrame> = [];


    onLoad() {

        // cc.game.evtManager.on('add')

        this.horseView = this.resNode.getComponent('resNodeCtrl').getHorseViewList();

        this.initHorseRecordNodePool();
        // this.init();
        this.containerOriginPos = this.recordContianer.position;
        // console.log(this.containerOriginPos.x);

        this.setTextRecordByLanguage();


    }

    // 根据语言设置设置记录文字
    setTextRecordByLanguage() {

        const lang = GameMgr.getInstance().Language == LANGUAGE_TYPE.ARAB ? LANGUAGE_TYPE.ARAB : LANGUAGE_TYPE.EN;

        this.text_record.string = language[lang].descibeText.text_result;

    }

    // 初始化赛马记录节点池
    initHorseRecordNodePool() {

        this.horseRecordNodePool = new cc.NodePool();
        const initNumber = 20;
        for (let i = 0; i < initNumber; i++) {
            const item = cc.instantiate(this.item_horse_record);
            this.horseRecordNodePool.put(item);
        }

    }


    // 创建马节点记录
    createRecord(id, isLast) {
        let recordItem;
        if (!this.horseRecordNodePool || this.horseRecordNodePool.size() <= 0) {
            recordItem = cc.instantiate(this.item_horse_record);
        } else {

            recordItem = this.horseRecordNodePool.get();
        }
        recordItem.getComponent(cc.Sprite).spriteFrame = this.horseView[id];

        if (isLast) {
            recordItem.isShowNewTag = true;
            recordItem.children[0].active = true;

        } else {
            recordItem.isShowNewTag = false;
            recordItem.children[0].active = false;
        }
        return recordItem;
    }


    // 初始化记录框列表记录
    initRecordContainer(parent, list) {


        Logger.logBusiness(list, '历史记录');

        // list = list.reverse();
        // console.log(list, '初始化记录框列表记录');
        for (let i = 0, len = list.length; i < len; i++) {
            let fId = list[i];
            fId = parseInt(fId);
            const fruitRecord = this.createRecord(fId - 1, i == len - 1);
            fruitRecord.parent = parent;
        }
        this.moveToOriginPos();
    }

    // 更新记录
    updateRecordById(id) {
        // const info = fruitInfoList[id];
        // info.isShow = true;
        // debugger
        this.addRecord(id, this.recordContianer, this.containerOriginPos);
    }


    // 添加记录
    addRecord(id, parent, originPos) {
        this.addRecordToContainer(id, parent);
        this.moveToOriginPos();
        this.isNeedDelete();
    }

    // 判断是否需要移除记录
    isNeedDelete() {
        if (this.recordContianer.children.length > MAX_RECORD_LENGTH) {
            this.deleteRecordFromContainer(this.recordContianer);
        }
    }

    // 添加记录到容器中
    addRecordToContainer(id, parent) {
        // console.log(parent.position);
        this.updateRecordStatus(parent);
        const item = this.createRecord(id, true);
        item.parent = parent;
        // const worldPos = item.parent.convertToWorldSpaceAR(item.position);
        // console.log(worldPos, 'worldPos');
    }


    // 获取最新记录的世界坐标
    getLastestRecordWorldPos() {
        const lastestRecordItem = this.getRecordItem(this.recordContianer);
        let worldPos;
        if (lastestRecordItem) {
            worldPos = lastestRecordItem.parent.convertToWorldSpaceAR(lastestRecordItem.position);
        } else {
            worldPos = this.recordContianer.convertToWorldSpaceAR(cc.v3(0, 0, 0));
        }
        // console.log('[RecordArea getLastestRecordWorldPos] worldPos', worldPos);
        return worldPos;
    }

    // 获取记录节点
    getRecordItem(parentNode, index?) {
        let len;
        if (index) {
            len = index;
            return parentNode.children[len];
        } else {
            len = parentNode.children.length;
            if (len <= 0) {
                return;
            }
            return parentNode.children[len - 1];
        }
    }


    // 移动的原始位置
    moveToOriginPos() {

        // if (node.position.x === originPos.x) {
        //     return;
        // }
        // cc.tween(node).to(0.2, { position: originPos }).start();
        this.scrollview.scrollToRight(0.2);


    }


    // 更新记录状态
    updateRecordStatus(parent, index?) {

        const item = this.getRecordItem(parent, index);
        if (!!item) {
            item.children[0].active = false;
        }

    }


    // 移除记录
    deleteRecordFromContainer(parent, index = 0) {

        if (parent.children.length <= 0) {
            return;
        }

        parent.children.splice(index, 1);

        // 重新设置容器的大小
        this.recordContianer.width -= 67;

    }


    // 初始化
    init(historyList) {

        if (!historyList) {
            Logger.logBusiness('check the param historyList again please!')
            return;
        }

        if (!this.cacheHistory) {
            this.cacheHistory = historyList;
        } else {
            // console.log('本地存在历史记录,不通过该接口执行记录');
            Logger.logBusiness('本地存在历史记录,不通过该接口执行记录');
            return;
        }

        const list = historyList.split(',');
        list.shift();

        Logger.logBusiness(list, '历史记录');
        // console.log(list,historyList,'1111111111111111111111');
        // console.log(list.shift());
        // return;    
        this.recordContianer.removeAllChildren();
        this.initRecordContainer(this.recordContianer, list);
    }

    clearCacheHistory() {
        this.cacheHistory = null;
    }


    testAdd() {

        // this.getLastestRecordWorldPos();

        // const tempRecord = mockRecordList[Math.floor(Math.random() * mockRecordList.length)];
        // tempRecord.isShow = true;
        // this.addRecord(tempRecord, this.recordContianer, this.containerOriginPos);
    }

    testDelete() {
        this.deleteRecordFromContainer(this.recordContianer);
    }

    // // 初始化
    // init(historyList) {
    //     this.recordContianer.removeAllChildren();
    //     this.initRecordContainer(this.recordContianer, historyList);
    // }






    // update (dt) {},
}
