export enum SnakeMoveState {

    /** 正常 */
    Normal = 1,

    /** 加速状态 */
    AddSpeed

}

export enum SnakeStatus {
    Alive = 1,
    Death,
}


/** 道具种类 */
export enum PorpsType {
    Coin = 0,//金币
    Rocket, // 更快的加速速度
    Shield, //护盾
    Absorb, // 吸铁石
    Mushroom, // 蘑菇
}

/** 道具名称 */
export const PropsNameList = [
    'Coin',
    'Rocket',
    'Shield',
    'Absorb',
    'Mushroom',
]



/** 蛇的道具状态 */
export enum SnakeProps {

    /** 火箭 */
    Rocket = 1,

    /** 盾牌 */
    Shield,

    /** 吸铁石 */
    Absorb,

    /**变长变大 */
    Mushroom,

    /** 没有道具状态 */
    None,

}

export enum AbsorbArea {

    Normal = 100,

    Strong = 300

}

/** 初始吸金币范围 */
export const ABSORB_ORIGIN_AREA = 50;

/** 磁铁的持续时间 */
export const ABSORB_DURATION = 15;

/** 磁铁的吸金币范围 */
export const ABSORB_AREA = 150;


/** 蛇的最大吸金币范围 */
export const SNAKE_ABSORB_MAX_AREA = 100;

/** 蛇身间的最小间隙 */
export const SNAKE_GAP_MIN = 20;

/**蛇身的最长长度 */
export const SNAKE_MAX_LENGTH = 150;

/**蛇身的最短长度 */
export const SNAKE_MIN_LENGTH = 6;

/** 食物掉落的蛇身长度 */
export const FOOD_DROP_LENGTH = 50;

/** 食物的移动速度 */
export const FoodMoveSpeed = 1000;



export const PropsDuration = 10;

/**单次地图刷新的金币数量 */
export const FRESH_COIN_NUMBER = 100;

/** 单次地图的道具的刷新数量 */
export const FRESH_PROP_NUMBER = 10;

/** 单次地图上障碍物的刷新数量 */
export const FRESH_OBSTACLE_NUMBER = 10;

/** 蛇变长的长度 */
export const SNAKE_STRONG_LENGHT = 10;

/** 蛇变大的倍数 */
export const SNAKE_SCALE = 1.5;

export const MAX_SNAKE_SCALE = 2;

/** 护盾持续时间 */
export const SHIELD_PERSIST_TIME = 15;

/** 出生保护时间 */
export const SHIELD_PERSIST_BORN = 5;

/** 渲染帧时间 */
export const RENDER_FRAME_DT = 60;

/** 逻辑帧时间 */
export const LOGIC_FRAME_DT = 10;

/** 蛇的移动速度 */
export const SNAKE_SPEED = 300;

/**蛇的加速倍数 */
export const SNAKE_TIMES = 2;

/** 皮肤信息 */
export const SKININFO = {
    JOKER: {
        name: 'body_joker',
        setionLen: 50,
        scale: 1,
    }
}


export interface Snake {
    // 节点大小
    bodySize: number,
    // 身长
    sectionLen: number,
    //蛇长
    length: number,
    //皮肤
    skin: number,
    //类型
    type: number,
    //速度
    speed: number,
    //方向
    dir: cc.Vec3,
    //编号
    id: number,
    //状态
    status: SnakeStatus,
    //缩放
    scale: number,
    //蛇身位置
    posList: Array<cc.Vec3>,
}

export interface Prop {
    //类型
    type: PorpsType,
    //速度
    speed: number,
    //方向
    dir: cc.Vec3,
    //编号
    id: number,
    //状态
    status: number,
    //位置
    pos: cc.Vec3

}

export interface trueTimeItem {
    name: string,
    score: number,
    rank: number,
    id?: number,
    avatar?: string
}

export enum SnakeType {
    Self,
    Other
}

/** 游戏状态 */
export enum GameState {
    Connecting, // 连接中
    Reconnect, //重连
    Playing, // 游戏中
    Observe, //  观战
    Pause, // 暂停
    End, //死亡
    Over,  // 结束
}

/** 游戏模式 */
export enum GameMode {
    /**赏金模式 */
    Gold,

    /** 无尽模式 */
    Unlimited,

    /**练习模式 */
    Practice
}

/**语言类型 */
export const LANGUAGE_TYPE = cc.Enum({
    EN: 'en',
    ARAB: 'ar',
})