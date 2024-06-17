
export const LANGUAGE_TYPE = cc.Enum({
    EN: 'en',
    ARAB: 'ar',
})

export const MAX_RECONNECT = 3;

export const MAX_RECORD_LENGTH = 20;

// 按钮集合
export const selectBtnList = [
    {
        id: 1,
        isSelected: false,
        coinsNumber: 10
    },
    {
        id: 2,
        isSelected: true,
        coinsNumber: 100
    },
    {
        id: 3,
        isSelected: false,
        coinsNumber: 1000
    },
    {
        id: 15,
        isSelected: false,
        coinsNumber: 10000
    },
]


/** 下注区域信息 */
export const betAreaPosInfo = [
    cc.v2(0, 180),
    cc.v2(0, 108),
    cc.v2(0, 36),
    cc.v2(0, -36),
    cc.v2(0, -108),
    cc.v2(0, -180),
]

/** 手指循环运动的位置信息 */
export const fingerMovePosition = [
    cc.v2(200, 180),
    cc.v2(200, 108),
    cc.v2(200, 36),
    cc.v2(200, -36),
    cc.v2(200, -108),
    cc.v2(200, -180),
    cc.v2(200, -108),
    cc.v2(200, -36),
    cc.v2(200, 36),
    cc.v2(200, 108),
]


export const winMarkPosList = [
    cc.v2(0, 116),
    cc.v2(0, 44),
    cc.v2(0, -28),
    cc.v2(0, -100),
    cc.v2(0, -172),
    cc.v2(0, -244),
]


//模拟的赛马结果数据
export const mockHorseRecord = [
    0, 1, 2, 4, 5,
    2, 1, 0, 3, 5,
    2, 1, 4, 5, 2,
    3, 5, 2, 1, 3,
]

/**下注等级 */
export const BET_LEVEL = cc.Enum({
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 15,
})

/** 金币动画的展示等级 */
export const BET_LEVEL_COINS = cc.Enum({
    TINY: 1,
    SOME: 3,
    MEDIUM: 5,
    HUGE: 10,
});


/** 游戏状态 */
export const GameStatus = cc.Enum({
    GameStatusInvalid: 0,				// 无效
    GameStatusNormal: 1,		    	// 空闲
    GameStatusPlaying: 2,		    	// 游戏中
    GameStatusSettle: 3,	        	// 结算中
})

/** 自定义游戏状态 */
export const CUSTOM_GAME_STATUS = cc.Enum({
    GAME_PREPARING: 0,
    GAME_START_FORECAST: 1,
    GAME_BETTING: 2,
    GAME_REDAY_GO: 3,
    GAME_RACING: 4,
    GAME_RESULT: 5,
    GAME_INVALID: 6,
})


/** 每个游戏阶段的时间 */
export const TIME_GAME_STATUS = {
    /** 游戏准备 */
    TIME_PREPARING: 2,
    /** 游戏开始预报 */
    TIME_START_FORECAST: 2,
    /** 下注阶段 */
    TIME_BETTING: 15,
    /** 准备出发 */
    TIME_READY_GO: 2,
    /** 赛马 */
    TIME_RACING: 5,
    /** 结果 */
    TIME_RESULT: 5,
}

/** 赛马的信息集合 */
export const horseInfoList = [
    {
        index: 0,
        number: '1',
        color: 'red',
    },
    {
        index: 1,
        number: '2',
        color: 'yellow',
    },
    {
        index: 2,
        number: '3',
        color: 'black',
    },
    {
        index: 3,
        number: '4',
        color: 'blue',
    },
    {
        index: 4,
        number: '6',
        color: 'green',
    },
    {
        index: 5,
        number: '6',
        color: 'purple',
    },
]



