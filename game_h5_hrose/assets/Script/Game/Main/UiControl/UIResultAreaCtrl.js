

import { MAX_RECORD_LENGTH } from '../../Constants';

import { language } from '../../Lang/index';

cc.Class({
    extends: cc.Component,

    properties: {
        text_record: cc.Label,
        recordContianer: cc.Node,
        item_horse_record: cc.Prefab,
        // item_horse_viewList: [cc.SpriteFrame],
        scrollview: cc.ScrollView,
        resNode: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        // cc.game.evtManager.on('add')

        this.initHorseRecordNodePool();
        // this.init();
        this.containerOriginPos = this.recordContianer.position;
        // console.log(this.containerOriginPos.x);

        this.setTextRecordByLanguage();


    },

    // 根据语言设置设置记录文字
    setTextRecordByLanguage() {

        this.text_record.string = language[window.localLang].descibeText.text_result;

    },

    // 初始化赛马记录节点池
    initHorseRecordNodePool() {

        this.horseRecordNodePool = new cc.NodePool();
        const initNumber = 20;
        for (let i = 0; i < initNumber; i++) {
            const item = cc.instantiate(this.item_horse_record);
            this.horseRecordNodePool.put(item);
        }

    },


    // 创建马节点记录
    createRecord(id, isLast) {
        let recordItem;
        if (!this.horseRecordNodePool || this.horseRecordNodePool.size() <= 0) {
            recordItem = cc.instantiate(this.item_horse_record);
        } else {

            recordItem = this.horseRecordNodePool.get();
        }
        recordItem.getComponent(cc.Sprite).spriteFrame = this.item_horse_viewList[id];

        if (isLast) {
            recordItem.isShowNewTag = true;
            recordItem.children[0].active = true;

        } else {
            recordItem.isShowNewTag = false;
            recordItem.children[0].active = false;
        }
        return recordItem;
    },

    // 初始化记录框列表记录
    initRecordContainer(parent, list) {
        this.item_horse_viewList = this.resNode.getComponent('resNodeCtrl').getHorseViewList();
        list = list.reverse();
        // console.log(list, '初始化记录框列表记录');
        for (let i = 0, len = list.length; i < len; i++) {
            const info = list[i];
            const fruitRecord = this.createRecord(info, i == len - 1);
            fruitRecord.parent = parent;
        }
        this.moveToOriginPos();
    },

    // 更新记录
    updateRecordById(id) {
        // const info = fruitInfoList[id];
        // info.isShow = true;
        // debugger
        this.addRecord(id, this.recordContianer, this.containerOriginPos);
    },


    // 添加记录
    addRecord(id, parent, originPos) {
        this.addRecordToContainer(id, parent);
        this.moveToOriginPos(this.recordContianer, originPos);
        this.isNeedDelete();
    },

    // 判断是否需要移除记录
    isNeedDelete() {
        if (this.recordContianer.children.length > MAX_RECORD_LENGTH) {
            this.deleteRecordFromContainer(this.recordContianer);
        }
    },

    // 添加记录到容器中
    addRecordToContainer(id, parent) {
        // console.log(parent.position);
        this.updateRecordStatus(parent);
        const item = this.createRecord(id, true);
        item.parent = parent;
        // const worldPos = item.parent.convertToWorldSpaceAR(item.position);
        // console.log(worldPos, 'worldPos');
    },


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
    },

    // 获取记录节点
    getRecordItem(parentNode, index) {
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
    },


    // 移动的原始位置
    moveToOriginPos(node, originPos) {

        // if (node.position.x === originPos.x) {
        //     return;
        // }
        // cc.tween(node).to(0.2, { position: originPos }).start();
        this.scrollview.scrollToRight(0.2);


    },


    // 更新记录状态
    updateRecordStatus(parent, index) {

        const item = this.getRecordItem(parent, index);
        if (!!item) {
            item.children[0].active = false;
        }

    },


    // 移除记录
    deleteRecordFromContainer(parent, index = 0) {

        if (parent.children.length <= 0) {
            return;
        }

        parent.children.splice(index, 1);

        // 重新设置容器的大小
        this.recordContianer.width -= 67;

    },

    testAdd() {

        // this.getLastestRecordWorldPos();

        const tempRecord = mockRecordList[Math.floor(Math.random() * mockRecordList.length)];
        tempRecord.isShow = true;
        this.addRecord(tempRecord, this.recordContianer, this.containerOriginPos);
    },

    testDelete() {
        this.deleteRecordFromContainer(this.recordContianer);
    },

    // 初始化
    init(historyList) {
        this.recordContianer.removeAllChildren();
        this.initRecordContainer(this.recordContianer, historyList);
    },

    start() {

    },

    // update (dt) {},
});
