import { BlockType, randomItem } from "../Game/GameData";
import { loadAssetFinished } from "../Utils/App_connect";
import { getQueryString } from "../Utils/utils_common";
import { Player } from "../domain/Player";

interface MapData {
    mapNormalList?: Array<any>,
    mapRandomList?: Array<randomItem>,
    typeNum?: number
    collectList?: Array<any>,
    propsSlotList?: Array<any>,
    blockTypeList?: Array<any>,
    restBlockTypeList?: Array<any>
    removedBlockList?: Array<any>,
}

export class GameDataManager {

    private static _instance: GameDataManager;

    // YLGY(40000, "羊了个羊"),
    //游戏id
    public GameId: number = 40000;

    public isContinue: boolean = false;

    //用户id 
    public UserId: number = -1;

    public Token: string = '';

    public Player: Player = null;

    // 语言
    public Language: string = 'en';

    // 道具
    public Props: object = null;

    // 地图id
    public MapId: number = 1;

    // 自己的信息
    public MyInfo: object = null;

    // 桌子的id
    public TableId: string = null;

    public MapInfo: Array<any> = null;

    public typeNum: number = null;

    // 地图中的数据方块类型集合
    public blockTypeList: Array<number> = null;

    // 正常地图信息
    public mapNormalList: Array<any> = null;

    // 随机地图信息
    public mapRandomList: Array<randomItem> = null;

    // 收集槽信息
    public collectList: Array<any> = null;

    // 道具槽信息
    public propsSlotList: Array<any> = null;

    // 被移除的方块
    public removedBlockList: Array<any> = [];

    // 剩下的方块类型
    public restBlockTypeList: Array<any> = [];

    /** 是否复活购买道具 */
    public isReviveBuyProp: boolean = false;

    /** 游戏登录时间 */
    public loginServerTime: number = 0;

    constructor() {
        this.getInfoFromUrl();

    }


    public static getInstance(): GameDataManager {
        if (!this._instance) {
            this._instance = new GameDataManager();
        }
        return this._instance;
    }



    /** 设置正常地图信息 */
    set MapNormal(value) {
        this.mapNormalList = value;
    }

    /** 获取正常地图信息 */
    get MapNormal() {
        return this.mapNormalList;
    }

    /** 更新正常地图信息 */
    updateMapNormal(lv: number, row: number, col: number) {
        this.mapNormalList[lv][row][col] = 0;
    }


    /** 设置随机地图信息 */
    set MapRandom(value) {
        this.mapRandomList = value;
    }

    /** 获取随机地图信息 */
    get MapRandom() {
        return this.mapRandomList;
    }

    /**更新随机地图信息 */
    updateMapRandom(index) {
        // 每次消除后 对数据进行处理
        this.mapRandomList[index].Len--;
    }

    // 初始方块类型列表
    set BlockType(value) {
        this.blockTypeList = value;
    }

    get BlockType() {
        return this.blockTypeList;
    }

    // 剩余方块类型列表
    set RestBlockType(value) {
        this.restBlockTypeList = value;
    }

    get RestBlockType() {
        return this.restBlockTypeList;
    }


    /** 收集槽中的数据 */
    set CollectSlot(value) {
        this.collectList = value;
    }

    get CollectSlot() {
        return this.collectList;
    }

    /** 道具槽中的数据 */
    set PropsSlot(value) {
        this.propsSlotList = value;
    }

    get PropsSlot() {
        return this.propsSlotList;
    }

    set IsReviveBuyProp(value: boolean) {
        this.isReviveBuyProp = value;
    }

    get IsReviveBuyProp() {
        return this.isReviveBuyProp;
    }

    set LoginServerTime(value: number) {
        this.loginServerTime = value;
    }

    get LoginServerTime() {
        return this.loginServerTime;
    }

    /** 更新地图信息 */
    updateMapInfo(info: BlockType) {
        if (info.randomId == null || info.randomId == undefined) {
            this.updateMapNormal(info.level, info.row, info.col);
            // console.log(this.MapNormal);
        } else {
            this.updateMapRandom(info.randomId);
            // console.log(this.MapRandom);
        }
        this.updateRemovedList(info);
    }

    /** 更新删除方块信息 */
    updateRemovedList(info: BlockType) {
        let removeItem = {
            level: info.level,
            row: info.row,
            col: info.col,
            type: info.type,
        }

        if (!this.removedBlockList) {
            this.removedBlockList = [];
        }
        this.removedBlockList.push(removeItem);
    }



    /** 从url中获取消息 */
    getInfoFromUrl() {
        if (!window || !globalThis) {
            return;
        }
        // this.UserId = parseInt(getQueryString('uid', window.location.href));
        // this.Token = getQueryString('token', window.location.href);
        // this.Language = getQueryString('lan', window.location.href);

    }



    /** 对比服务器和本地数据 */
    diffServerAndLocalData(userId) {

        const isContinue = this.isGameContinue(userId);
        this.isContinue = isContinue;
        // console.log('对比服务器和本地数据', isContinue);
        if (!isContinue) {
            // 移除上一次缓存的数据
            this.removeLastData(userId);
            // 重新存储新的键名
            this.saveDataKey(userId);
        }

    }

    /** 判断是否沿用上一局的数据 */
    isGameContinue(userId) {
        let res = false;
        const dataValue = this.getDataKey(userId);
        if (dataValue) {
            const tempList = dataValue.split('_');
            // debugger
            if (tempList[0] == this.UserId && tempList[1] == this.MapId && tempList[2] == this.TableId && !!this.getGameData(userId)) {
                res = true;
            }
            // debugger
        }
        return res
    }

    /** 获取数据的键名 */
    getDataValueName() {
        return this.UserId + '_' + this.MapId + '_' + this.TableId;
    }

    /** 获取本地的tableId */
    getLocalTableId(userId) {
        let tableId = null;
        const dataValue = this.getDataKey(userId);
        if (!!dataValue) {
            // debugger
            const tempList = dataValue.split('_');
            tableId = tempList[2];
        }
        return tableId;
    }

    /** 获取本地的地图id*/
    getLocalMapId(userId) {
        let mapId = null;
        const dataKey = this.getDataKey(userId);
        if (!!dataKey) {
            const tempList = dataKey.split('_');
            mapId = tempList[1];
        }
        return mapId;
    }

    /** 保存数据的键名 */
    saveDataKey(userId) {
        const key = this.getDataValueName();
        cc.sys.localStorage.setItem('' + userId, JSON.stringify(key));
    }

    /**  获取数据的键名 */
    getDataKey(userId) {
        let key = cc.sys.localStorage.getItem('' + userId);

        if (key) {
            key = JSON.parse(key);
        } else {
            this.saveDataKey(userId);
            key = this.getDataValueName();
        }

        return key;
    }

    /** 移除上一次保存的数据 */
    removeLastData(userId) {
        const key = this.getDataKey(userId);
        cc.sys.localStorage.removeItem(key);
        cc.sys.localStorage.removeItem('' + userId);
    }

    /**移除特定的本地数据 */
    removeLocalDataByKey(key: string) {
        const localData = cc.sys.localStorage.getItem(key);
        if (!!localData) {
            cc.sys.localStorage.removeItem(key);
        } else {
            console.log('The key ' + key + ' is not exist local data');
        }
    }



    /**保存游戏数据 */
    saveGameData(userId) {
        const key = this.getDataKey(userId);

        // console.log(this.mapNormalList);
        // console.log(this.mapRandomList);
        // console.log(this.collectList);
        // console.log(this.propsSlotList);

        let mapInfo: MapData = {
            // mapNormalList: this.MapNormal,
            // mapRandomList: this.MapRandom,
            collectList: this.CollectSlot,
            propsSlotList: this.PropsSlot,
            blockTypeList: this.BlockType,
            removedBlockList: this.removedBlockList,
            restBlockTypeList: this.RestBlockType,
        };
        // mapInfo.mapNormalList = 
        // mapInfo.mapRandomList = JSON.parse(JSON.stringify(this.mapRandomList));
        // mapInfo.collectList = this.collectList;
        // mapInfo.propsSlotList = this.propsSlotList;

        // console.log(mapInfo);

        cc.sys.localStorage.setItem(key, JSON.stringify(mapInfo));
    }


    /** 获取本地数据 */
    getGameData(userId) {
        const key = this.getDataKey(userId);
        let GameData = cc.sys.localStorage.getItem(key);
        if (!!GameData) {
            GameData = JSON.parse(GameData);
        }
        return GameData;
    }


    text() {
        // let node = new cc.Node('nodeName');
        // let texture = new cc.Texture2D;
        // let spriteFrame = new cc.SpriteFrame;
        // texture.initWithData(new Uint8Array([0, 0, 0]), cc.Texture2D.PixelFormat.RGB888, 1, 1, cc.winSize);
        // spriteFrame.setTexture(texture);
        // spriteFrame.setRect(cc.rect(0, 0, cc.winSize.width * 20, cc.winSize.width * 20));
        // node.addComponent(cc.Sprite).spriteFrame = spriteFrame;

    }


}   