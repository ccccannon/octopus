export const blockHeight: number = 88;
export const blockWidth: number = 88;
export const gap = 0;

export const collectContianerLength: number = 7;

export const maxRow = 5;
export const maxCol = 7;



/** 管卡信息 */
interface LevelInfo {
    /** 收集卡槽的最大容量 */
    slotNum: number,
    /** 累计收集的可消除个数 */
    composeNum: number,
    /** 收集物的类型 */
    typeNum: number,
    /** 单层方块的数量 */
    levelBlockNum: number,
    /** 边界 */
    borderStep: number,
    /** 层数 */
    levelNum: number,
    /** 总列表 */
    goods: Array<number>,
}

/** 总列表 */
export const Goods = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16
]

/** 关卡信息 */
export const levelInfoList: Array<LevelInfo> = [
    {
        slotNum: 7,
        composeNum: 3,
        typeNum: 2,
        levelBlockNum: 24,
        borderStep: 1,
        levelNum: 2,
        goods: Goods,
    },
    {

        slotNum: 7,
        composeNum: 3,
        typeNum: 12,
        levelBlockNum: 24,
        borderStep: 1,
        levelNum: 11,
        goods: Goods,
    }
]



/**
 * 块类型
 */
export interface BlockType {
    id: number;
    x: number;
    y: number;
    level: number;
    type: string;
    // 0 - 正常, 1 - 已点击, 2 - 已消除
    status: 0 | 1 | 2;
    // 压住的其他块
    higherThanBlocks: BlockType[];
    // 被哪些块压住（为空表示可点击）
    lowerThanBlocks: BlockType[];
}

/**
 * 每个格子单元类型
 */
export interface ChessBoardUnitType {
    // 放到当前格子里的块（层级越高下标越大）
    blocks: BlockType[];
}

/**
 * 技能类型
 */
export interface SkillType {
    name: string;
    desc: string;
    icon: string;
    action: Function;
}


export const LANGUAGE_TYPE = cc.Enum({
    EN: 'en',
    ARAB: 'ar',
})


export const circlePosList = [
    // 第一排 9
    cc.v3(-230, 140, 0),
    cc.v3(-280, 90, 0),
    cc.v3(-150, 170, 0),
    cc.v3(-80, 190, 0),
    cc.v3(0, 190, 0),
    cc.v3(80, 190, 0),
    cc.v3(150, 170, 0),
    cc.v3(230, 140, 0),
    cc.v3(280, 90, 0),

    // 第二排 8
    cc.v3(-290, 0, 0),
    cc.v3(-210, 50, 0),
    cc.v3(-130, 90, 0),
    cc.v3(-50, 90, 0),
    cc.v3(40, 90, 0),
    cc.v3(130, 90, 0),
    cc.v3(210, 50, 0),
    cc.v3(290, 0, 0),

    // 第三排7
    cc.v3(-210, -30, 0),
    cc.v3(-135, 20, 0),
    cc.v3(130, 20, 0),
    cc.v3(-120, -35, 0),
    cc.v3(120, -40, 0),
    cc.v3(210, -30, 0),
    cc.v3(290, -30, 0),

    // 第四排 8
    cc.v3(-260, -100, 0),
    cc.v3(-180, -100, 0),
    cc.v3(-100, -140, 0),
    cc.v3(-10, -140, 0),
    cc.v3(70, -140, 0),
    cc.v3(160, -140, 0),
    cc.v3(180, -100, 0),
    cc.v3(260, -100, 0),

    // 第五排 8

    cc.v3(-230, -150, 0),
    cc.v3(-160, -180, 0),
    cc.v3(-80, -190, 0),
    cc.v3(0, -190, 0),
    cc.v3(80, -190, 0),
    cc.v3(160, -190, 0),
    cc.v3(240, -170, 0),
    cc.v3(310, -130, 0),
]


export enum ItemType {
    Friend = 0,
    Room,
    country
}
