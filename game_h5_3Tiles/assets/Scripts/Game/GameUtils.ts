

import { GameDataManager } from "../Managers/GameDataManager";
import { formatDate } from "../Utils/utils_common";
import { blockHeight, blockWidth, gap } from "./Constant"

import { stageInfo, randomItem } from "./GameData";

/** 将单层行列转换成坐标 */
export const indexToPosSingle = (row: number, col: number, gap: number) => {
    const x = gap + (blockWidth) * col + blockWidth / 2;
    const y = (blockHeight) * row + blockHeight / 2;
    return cc.v3(x, y, 0);
}


/** 将双层行列转换成坐标 */
export const indexToPosDouble = (row, col, gap) => {
    const x = gap + (blockWidth) * col + blockWidth;
    const y = (blockHeight) * row + blockHeight;
    return cc.v3(x, y, 0);
}

/**洗牌算法 */

export const shuffle = (array: Array<any>, size?: number) => {

    var index = -1,
        length = array.length,
        lastIndex = length - 1;

    size = size === undefined ? length : size;
    while (++index < size) {

        let rand = baseRandom(index, lastIndex);
        const value = array[rand];
        array[rand] = array[index];
        array[index] = value;

    }
    array.length = size;
    return array;

}


/** 获取一个随机数值 */
export const baseRandom = (lower: number, upper: number) => {
    return lower + Math.floor(Math.random() * (upper - lower + 1));
}


/** 获取方块的总个数 */
export const getTotalBlockNumber = (stageInfo: stageInfo): number => {

    const { normalList, randomList } = stageInfo;

    const normalNum = getNormalBlockNumber(normalList);

    const randomNum = getRandomBlockNumber(randomList);

    return randomNum + normalNum;
}

/** 获取普通方块的数量 */
export const getNormalBlockNumber = (normalList: Array<any>): number => {
    let normalNum = 0;
    for (let n = 0; n < normalList.length; n++) {
        const levelList = normalList[n];
        const len = levelList.length;
        for (let i = 0; i < len; i++) {
            const colList = levelList[i];
            const colLen = colList.length;
            for (let j = 0; j < colLen; j++) {
                if (colList[j] != 0) {
                    normalNum++;
                }
            }
        }

    }
    return normalNum;
}

/** 获取随机方块的数量 */
export const getRandomBlockNumber = (randomList: Array<randomItem>): number => {
    let randomNum = randomList.reduce((pre: number, cur: randomItem) => {
        return pre + cur.Len
    }, 0)
    return randomNum;
}

/** 是否今日首次复活 */
export const getIsTodayFirstRevive = (): boolean => {
    const firstResurrection = cc.sys.localStorage.getItem('firstResurrection');
    if (firstResurrection == undefined || firstResurrection == null) {
        return true;
    }
    else {
        const curTime = formatDate(GameDataManager.getInstance().LoginServerTime);
        return firstResurrection != curTime;
    }
}

/** 设置存储今日首次复活时间 */
export const setFirstRevive = () => {
    const curTime = formatDate(GameDataManager.getInstance().LoginServerTime);
    cc.sys.localStorage.setItem('firstResurrection', curTime);
}

