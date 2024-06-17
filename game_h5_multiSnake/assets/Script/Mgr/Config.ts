export enum PlatformEnum {
    /**
    * faceBook 账号登录
    */
    FACEBOOK = 1001,

    /**
     * 谷歌账号
     */
    GOOGLE = 1002,

    /**
     * 手机号
     */
    MOBILE_PHONE = 1003,

    /**
     * 来宾
     */
    GUEST = 1004,

    /**
     * 苹果
     */
    APPLE = 1005,
    /**
     * 微信
     */
    WX = 1006,
    /**
     * token
     */
    TOKEN = 1007,
    /**
     * 账号、邮箱登录
     */
    ACCOUNT = 1010,

}

export enum GameSessionId {
    Tiles = 40000,
    Snake = 40001,
}

export const platformType = PlatformEnum.TOKEN;

export const GameId = GameSessionId.Snake;

export const SocketIp = '192.168.1.95';

export const SocketPort = 16829;

export const SocketProtocol = 'ws';

// 名字的字符长度限制
export const nameLengthLimited = 34;

// uid:2145
// token:60e400cb4ceb5c5b4a86c761dd1a980c

// uid:2144
// token:de84ae06182d9c004d6f94645b1702e3

export const TestPlayerInfoList = [
    {
        uid: 2145,
        token: "60e400cb4ceb5c5b4a86c761dd1a980c",
    },
    {
        uid: 2144,
        token: "de84ae06182d9c004d6f94645b1702e3",
    },
]

