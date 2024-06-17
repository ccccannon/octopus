

// 水果名称枚举类
// export const fruitName = cc.Enum({
//     ORANGE: "orange",
//     PITAYA: "pitaya",
//     WATERMELON: "watermelon",
//     APPLE: "apple",
//     LEMON: "lemon",
//     STRAWBERRY: "strawberry",
//     PLUM: "plum",
//     GRAPE: "grape",
// })

export const fruitNameList = ["orange", "pitaya", "watermelon", "apple", "lemon", "strawberry", "plum", "grape"]

export const MAX_RECONNECT = 5;

// 水果id枚举
export const fruitId = cc.Enum({
    ORANGE: 1,
    PITAYA: 2,
    WATERMELON: 3,
    APPLE: 4,
    LEMON: 5,
    STRAWBERRY: 6,
    PLUM: 7,
    GRAPE: 8,
})

export const BET_LEVEL = cc.Enum({
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
})


//默认的游戏元素倍数
export const FRUIT_VALUES = [5, 5, 5, 5, 10, 15, 25, 40]

// 默认需要进行缓动的水果个数
export const DEFAULT_EASE_NUMBER = 7;

// 水果的位置
export const fruitPosList = [
    cc.v2(-205, 180),
    cc.v2(0, 180),
    cc.v2(205, 180),
    cc.v2(205, 0),
    cc.v2(205, -180),
    cc.v2(0, -180),
    cc.v2(-205, -180),
    cc.v2(-205, 0),
]

// 水果子节点高度
export const FRUIT_ITEM_HEIGHT = 194;

// 水果子节点宽度
export const FRUIT_ITEM_WIDTH = 172;


//水果数据集合
// export const fruitInfoList = [

//     {
//         name: fruitName.ORANGE,
//         id: fruitId.ORANGE,
//         rewardTimes: FRUIT_VALUES[fruitId.ORANGE - 1],
//         pos: fruitPosList[fruitId.ORANGE - 1]
//     },
//     {
//         name: fruitName.PITAYA,
//         id: fruitId.PITAYA,
//         rewardTimes: FRUIT_VALUES[fruitId.PITAYA - 1],
//         pos: fruitPosList[fruitId.PITAYA - 1]
//     },
//     {
//         name: fruitName.WATERMELON,
//         id: fruitId.WATERMELON,
//         rewardTimes: FRUIT_VALUES[fruitId.WATERMELON - 1],
//         pos: fruitPosList[fruitId.WATERMELON - 1]
//     },
//     {
//         name: fruitName.APPLE,
//         id: fruitId.APPLE,
//         rewardTimes: FRUIT_VALUES[fruitId.APPLE - 1],
//         pos: fruitPosList[fruitId.APPLE - 1]
//     },
//     {
//         name: fruitName.LEMON,
//         id: fruitId.LEMON,
//         rewardTimes: FRUIT_VALUES[fruitId.LEMON - 1],
//         pos: fruitPosList[fruitId.LEMON - 1]
//     },
//     {
//         name: fruitName.STRAWBERRY,
//         id: fruitId.STRAWBERRY,
//         rewardTimes: FRUIT_VALUES[fruitId.STRAWBERRY - 1],
//         pos: fruitPosList[fruitId.STRAWBERRY - 1]
//     },
//     {
//         name: fruitName.PLUM,
//         id: fruitId.PLUM,
//         rewardTimes: FRUIT_VALUES[fruitId.PLUM - 1],
//         pos: fruitPosList[fruitId.PLUM - 1]
//     },
//     {
//         name: fruitName.GRAPE,
//         id: fruitId.GRAPE,
//         rewardTimes: FRUIT_VALUES[fruitId.GRAPE - 1],
//         pos: fruitPosList[fruitId.GRAPE - 1]
//     },

// ]


/** 动画事件 */
export enum EVENT_ANIMA {
    COIN_OBTAIN = 'ANIMA_COIN_OBTAIN',
    COIN_BET = 'ANIMA_COIN_BET',
    AVATAR = 'ANIMA_AVATAR',
}


/** 下注动画 */
export enum BET_LEVEL_COINS {
    TINY = 1,
    SOME = 3,
    MEDIUM = 5,
    HUGE = 10,
}

export enum BET_LEVEL_LEN {
    TINY = 0,
    SOME = 20,
    MEDIUM = 30,
    HUGE = 40,
}

// const BET_LEVEL_LEN = cc.Enum({
//     TINY: 0,
//     SOME: 20,
//     MEDIUM: 30,
//     HUGE: 40,
// });



// 模拟的水果记录数据
// export const mockRecordList = [
//     {
//         id: fruitId.APPLE,
//         name: fruitName.APPLE,
//         isShow: false,
//     },
//     {
//         id: fruitId.ORANGE,
//         name: fruitName.ORANGE,
//         isShow: false,
//     },
//     {
//         id: fruitId.APPLE,
//         name: fruitName.APPLE,
//         isShow: false,
//     },
//     {
//         id: fruitId.WATERMELON,
//         name: fruitName.WATERMELON,
//         isShow: false,
//     },
//     {
//         id: fruitId.PLUM,
//         name: fruitName.PLUM,
//         isShow: false,
//     },
//     {
//         id: fruitId.APPLE,
//         name: fruitName.APPLE,
//         isShow: false,
//     },
//     {
//         id: fruitId.ORANGE,
//         name: fruitName.ORANGE,
//         isShow: false,
//     },
//     {
//         id: fruitId.APPLE,
//         name: fruitName.APPLE,
//         isShow: false,
//     },
//     {
//         id: fruitId.WATERMELON,
//         name: fruitName.WATERMELON,
//         isShow: false,
//     },
//     {
//         id: fruitId.PLUM,
//         name: fruitName.PLUM,
//         isShow: false,
//     },
//     {
//         id: fruitId.APPLE,
//         name: fruitName.APPLE,
//         isShow: false,
//     },
//     {
//         id: fruitId.ORANGE,
//         name: fruitName.ORANGE,
//         isShow: false,
//     },
//     {
//         id: fruitId.APPLE,
//         name: fruitName.APPLE,
//         isShow: false,
//     },
//     {
//         id: fruitId.WATERMELON,
//         name: fruitName.WATERMELON,
//         isShow: false,
//     },
//     {
//         id: fruitId.PLUM,
//         name: fruitName.PLUM,
//         isShow: false,
//     },
//     {
//         id: fruitId.APPLE,
//         name: fruitName.APPLE,
//         isShow: false,
//     },
//     {
//         id: fruitId.ORANGE,
//         name: fruitName.ORANGE,
//         isShow: false,
//     },
//     {
//         id: fruitId.APPLE,
//         name: fruitName.APPLE,
//         isShow: false,
//     },
//     {
//         id: fruitId.WATERMELON,
//         name: fruitName.WATERMELON,
//         isShow: false,
//     },
//     {
//         id: fruitId.PLUM,
//         name: fruitName.PLUM,
//         isShow: false,
//     },
//     {
//         id: fruitId.STRAWBERRY,
//         name: fruitName.STRAWBERRY,
//         isShow: true,
//     }
// ]

export const MAX_RECORD_LENGTH = 20;


// 按钮集合
export const selectBtnList = [
    {
        id: BET_LEVEL.ONE,
        isSelected: false,
        coinsNumber: 10
    },
    {
        id: BET_LEVEL.TWO,
        isSelected: true,
        coinsNumber: 100
    },
    {
        id: BET_LEVEL.THREE,
        isSelected: false,
        coinsNumber: 1000
    },
    {
        id: BET_LEVEL.FOUR,
        isSelected: false,
        coinsNumber: 10000
    },
]

export const fruitBgMode = cc.Enum({
    DARK: 'dark',
    NORMAL: 'normal',
    LIGHT: 'light',
})


//水果单注筹码列表
export const FRUIT_BET_VALUES = [1, 10, 100, 1000];

// 最大的可下注区域
export const MAX_SELECT_AREA = 8;

// 最大的允许下注区域
export const MAX_BET_AREA = 6;


//中间旋转的圈数
export const SPIN_DEFAULT_CNT = 4;
//旋转的所用的时间
export const SPIN_DEFAULT_TIME = 4;

//旋转的速度
export const SPIN_DEFAULT_SPEED = 2000;

// 定义游戏阶段
// export const GameStatus = cc.Enum({
//     GameStatusInvalid: 0,				// 无效
//     GameStatusNormal: 1,		    	// 空闲
//     GameStatusPlaying: 2,		    	// 游戏中
//     GameStatusSettle: 3,	        	// 结算中
//     GameStatusPrepare: 4,               //准备阶段
//     GameStatusInit: 5,                  //初始化状态
// }) 


export enum GameStatus {
    GameStatusInvalid = 0,				// 无效
    GameStatusNormal,	    	// 空闲
    GameStatusPlaying,		    	// 游戏中
    GameStatusSettle,	        	// 结算中
    GameStatusPrepare,             //准备阶段
    GameStatusInit,               //初始化状态
}