export enum RotaryStatus {
    STATIC = 0,
    ROTATE, // 旋转
    DECAY, //速度衰减
}

export const SectorColorList = [
    cc.color(255, 171, 70),
    cc.color(255, 209, 88),
    cc.color(255, 195, 77),
]

export enum SectorColor {
    ORANGE = 0,
    RED,
    YELLOW,
}

export const SectorInfo = {
    1:[
        SectorColor.ORANGE,
    ],

    2: [

        // 0, 180,
        SectorColor.ORANGE,
        SectorColor.RED,

    ]

    ,

    3: [
        SectorColor.ORANGE, SectorColor.RED, SectorColor.YELLOW
        // {
        //     color: SectorColorList[SectorColor.ORANGE],
        // },
        // {
        //     color: SectorColorList[SectorColor.RED],
        // },
        // {
        //     color: SectorColorList[SectorColor.YELLOW],
        // },
    ]

    ,
    4: [
        SectorColor.ORANGE, SectorColor.RED, SectorColor.ORANGE, SectorColor.RED
        // {
        //     color: SectorColorList[SectorColor.ORANGE],
        // },
        // {
        //     color: SectorColorList[SectorColor.RED],
        // },
        // {
        //     color: SectorColorList[SectorColor.ORANGE],
        // },
        // {
        //     color: SectorColorList[SectorColor.RED],
        // },
    ],
    5: [
        SectorColor.ORANGE, SectorColor.RED, SectorColor.ORANGE, SectorColor.RED, SectorColor.YELLOW,
        // {
        //     color: SectorColorList[SectorColor.ORANGE],
        // },
        // {
        //     color: SectorColorList[SectorColor.RED],
        // },
        // {
        //     color: SectorColorList[SectorColor.ORANGE],
        // },
        // {
        //     color: SectorColorList[SectorColor.RED],
        // },
        // {
        //     color: SectorColorList[SectorColor.YELLOW],
        // },
    ],
    6: [
        SectorColor.ORANGE, SectorColor.RED, SectorColor.YELLOW, SectorColor.ORANGE, SectorColor.RED, SectorColor.YELLOW,
        // {
        //     color: SectorColorList[SectorColor.ORANGE],
        // },
        // {
        //     color: SectorColorList[SectorColor.RED],
        // },
        // {
        //     color: SectorColorList[SectorColor.YELLOW],
        // },
        // {
        //     color: SectorColorList[SectorColor.ORANGE],
        // },
        // {
        //     color: SectorColorList[SectorColor.RED],
        // },
        // {
        //     color: SectorColorList[SectorColor.YELLOW],
        // },
    ],
    7: [
        SectorColor.ORANGE, SectorColor.RED, SectorColor.YELLOW, SectorColor.ORANGE, SectorColor.RED, SectorColor.YELLOW, SectorColor.RED
        // {
        //     color: SectorColorList[SectorColor.ORANGE],
        // },
        // {
        //     color: SectorColorList[SectorColor.RED],
        // },
        // {
        //     color: SectorColorList[SectorColor.YELLOW],
        // },
        // {
        //     color: SectorColorList[SectorColor.ORANGE],
        // },
        // {
        //     color: SectorColorList[SectorColor.RED],
        // },
        // {
        //     color: SectorColorList[SectorColor.YELLOW],
        // },
        // {
        //     color: SectorColorList[SectorColor.RED],
        // },
    ],
    8: [
        SectorColor.ORANGE, SectorColor.RED, SectorColor.YELLOW, SectorColor.ORANGE, SectorColor.RED, SectorColor.YELLOW, SectorColor.ORANGE, SectorColor.RED,
        // {
        //     color: SectorColorList[SectorColor.ORANGE],
        // },
        // {
        //     color: SectorColorList[SectorColor.RED],
        // },
        // {
        //     color: SectorColorList[SectorColor.YELLOW],
        // },
        // {
        //     color: SectorColorList[SectorColor.ORANGE],
        // },
        // {
        //     color: SectorColorList[SectorColor.RED],
        // },
        // {
        //     color: SectorColorList[SectorColor.YELLOW],
        // },
        // {
        //     color: SectorColorList[SectorColor.ORANGE],
        // },
        // {
        //     color: SectorColorList[SectorColor.RED],
        // },
    ],
    9: [
        SectorColor.ORANGE, SectorColor.RED, SectorColor.YELLOW, SectorColor.ORANGE, SectorColor.RED, SectorColor.YELLOW, SectorColor.ORANGE, SectorColor.RED, SectorColor.YELLOW,
        // {
        //     color: SectorColorList[SectorColor.ORANGE],
        // },
        // {
        //     color: SectorColorList[SectorColor.RED],
        // },
        // {
        //     color: SectorColorList[SectorColor.YELLOW],
        // },
        // {
        //     color: SectorColorList[SectorColor.ORANGE],
        // },
        // {
        //     color: SectorColorList[SectorColor.RED],
        // },
        // {
        //     color: SectorColorList[SectorColor.YELLOW],
        // },
        // {
        //     color: SectorColorList[SectorColor.ORANGE],
        // },
        // {
        //     color: SectorColorList[SectorColor.RED],
        // },
        // {
        //     color: SectorColorList[SectorColor.YELLOW],
        // },
    ],
    10: [
        SectorColor.ORANGE, SectorColor.RED, SectorColor.YELLOW, SectorColor.ORANGE, SectorColor.RED, SectorColor.YELLOW, SectorColor.ORANGE, SectorColor.RED, SectorColor.YELLOW, SectorColor.RED
        // {
        //     color: SectorColorList[SectorColor.ORANGE],
        // },
        // {
        //     color: SectorColorList[SectorColor.RED],
        // },
        // {
        //     color: SectorColorList[SectorColor.YELLOW],
        // },
        // {
        //     color: SectorColorList[SectorColor.ORANGE],
        // },
        // {
        //     color: SectorColorList[SectorColor.RED],
        // },
        // {
        //     color: SectorColorList[SectorColor.YELLOW],
        // },
        // {
        //     color: SectorColorList[SectorColor.ORANGE],
        // },
        // {
        //     color: SectorColorList[SectorColor.RED],
        // },
        // {
        //     color: SectorColorList[SectorColor.YELLOW],
        // },
        // {
        //     color: SectorColorList[SectorColor.RED],
        // },
    ]

}

export const PlayerRadius = 170;

export enum PlayerView {
    Host = 0,
    Participation,
    UnParticipation,
    Watch,
}

