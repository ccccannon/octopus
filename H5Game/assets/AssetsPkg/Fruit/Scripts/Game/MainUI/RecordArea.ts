

import { MAX_RECORD_LENGTH,fruitNameList } from './constants';
import { language } from '../Lang/index';
import GameMgr from '../../../../../Script/Managers/GameMgr';
import { Logger } from '../../../../../Script/Managers/Logger';
import { LANGUAGE_TYPE } from '../../../../../Script/Mgr/Config';


const { ccclass, property } = cc._decorator;
@ccclass
export default class RecordArea extends cc.Component {
    @property(cc.Label)
    text_record: cc.Label = null;

    @property(cc.Node)
    recordContianer: cc.Node = null;

    @property(cc.Prefab)
    item_fruit_record: cc.Prefab = null;

    @property(cc.ScrollView)
    scrollview: cc.ScrollView = null;


    private containerOriginPos: cc.Vec3 = null;

    FruitRecordNodePool: cc.NodePool = null;

    private cacheHistory: string = null;


    onLoad() {
        this.initFruitRecordNodePool();
        // this.init();
        this.containerOriginPos = this.recordContianer.position;
        // console.log(this.containerOriginPos.x);

        this.setTextRecordByLanguage();
    }

    // 根据语言设置设置记录文字
    setTextRecordByLanguage() {
        //TODO

        const lang = GameMgr.getInstance().Language == LANGUAGE_TYPE.ARAB ? LANGUAGE_TYPE.ARAB : LANGUAGE_TYPE.EN;

        if (lang == LANGUAGE_TYPE.ARAB) {
            this.text_record.string = language[LANGUAGE_TYPE.ARAB].descibeText.text_result;
        } else {
            this.text_record.string = language[LANGUAGE_TYPE.EN].descibeText.text_result;

        }
    }

    // 初始化水果记录节点池
    initFruitRecordNodePool() {

        this.FruitRecordNodePool = new cc.NodePool();
        const initNumber = 20;
        for (let i = 0; i < initNumber; i++) {
            const item = cc.instantiate(this.item_fruit_record);
            this.FruitRecordNodePool.put(item);
        }

    }


    // 创建水果节点记录
    createFruitRecord(id, isLast) {
        let fruitRecordItem;
        if (!this.FruitRecordNodePool || this.FruitRecordNodePool.size() <= 0) {
            fruitRecordItem = cc.instantiate(this.item_fruit_record);
        } else {

            fruitRecordItem = this.FruitRecordNodePool.get();
        }
        const script = fruitRecordItem.getComponent('item_fruit_record');
        // const info = fruitInfoList[id - 1];

        const info = {
            name: fruitNameList[id - 1],
            isShow: isLast,
        }
        script.init(info);
        return fruitRecordItem;
    }

    // 初始话记录框列表记录
    initRecordContainer(parent, list) {
        // list = list.reverse();
        for (let i = 0, len = list.length; i < len; i++) {
            let fId = list[i];
            fId = parseInt(fId);
            const fruitRecord = this.createFruitRecord(fId, i == len - 1);
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
        const item = this.createFruitRecord(id, true);
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
        this.scrollview.scrollToRight(0.2);
    }


    // 更新记录状态
    updateRecordStatus(parent, index?) {

        const item = this.getRecordItem(parent, index);
        if (!!item) {
            item.getComponent('item_fruit_record').isShowTag(false);
        }

    }


    // 移除记录
    deleteRecordFromContainer(parent, index = 0) {

        if (parent.children.length <= 0) {
            return;
        }

        this.FruitRecordNodePool.put(parent.children[index]);

        // 重新设置容器的大小
        this.recordContianer.width -= 67;

    }

    testAdd() {

        // this.getLastestRecordWorldPos();

        // const tempRecord = mockRecordList[Math.floor(Math.random() * mockRecordList.length)];
        // tempRecord.isShow = true;
        // this.addRecord(tempRecord, this.recordContianer, this.containerOriginPos);

        this.updateRecordById(1);
    }

    testDelete() {
        this.deleteRecordFromContainer(this.recordContianer);
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
            return;
        }

        const list = historyList.split(',');
        list.shift();
        // console.log(list,historyList,'1111111111111111111111');
        // console.log(list.shift());
        // return;    
        this.recordContianer.removeAllChildren();
        this.initRecordContainer(this.recordContianer, list);
    }

    start() {

    }
}

