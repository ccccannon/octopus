
// /** 随机蛇的颜色 */
// export const randomColor = () => {
//     // get random color
//     let red = Math.round(Math.random() * 255);
//     let green = Math.round(Math.random() * 255);
//     let blue = Math.round(Math.random() * 255);
//     return new cc.Color(red, green, blue);
// }


// /** 随机种子 */
// export let seed = 5;

// /** 随机函数 */
// export const seededRandom = function (max?: number, min?: number) {
//     max = max || 1;
//     min = min || 0;

//     seed = (seed * 9301 + 49297) % 233280;
//     var rnd = seed / 233280.0;
//     console.log(seed, '随机种子');
//     console.log(rnd, '随机数');
//     console.log(Math.random(),'系统伪随机');
//     return Math.ceil(min + rnd * (max - min));   // Math.ceil实现取整功能，可以根据需要取消取整
// };

import { formatDate } from "../../../../Script/Utils/utils_common";
import { FRESH_COIN_NUMBER } from "../Constant";
import { SnakeDataMgr } from "../SnakeDataMgr";


export class SnakeUtilMgr {

    private static _instance: SnakeUtilMgr = null;

    public static getInstance(): SnakeUtilMgr {
        if (!this._instance) {
            this._instance = new SnakeUtilMgr();
        }
        return this._instance;
    }

    private _seed: number = null;

    set Seed(val: number) {
        this._seed = val;
    }

    get Seed() {
        return this._seed;
    }


    /** 获取随机数 */
    getRandomNumer(max?: number, min?: number) {
        max = max || 1;
        min = min || 0;
        const rnd = this.Seed / 233280.0;
        this.Seed = (this.Seed * 9301 + 49297) % 233280;
        return Math.floor(min + rnd * (max - min))
    }


    /** 获取随机列表 */
    getRandomList(len: number, max?: number, min?: number) {

        max = max || 1;
        min = min || 0;
        let list = [];
        for (let i = 0; i < len; i++) {
            const ranNum = this.getRandomNumer(max, min);
            list.push(ranNum);
        }
        return list;
    }

    /** 获取随机位置 */
    getRandomPos(max?: number, min?: number): cc.Vec3 {
        max = max || 1;
        min = min || 0;
        const posX = this.getRandomNumer(max, min);
        const posY = this.getRandomNumer(max, min);
        return cc.v3(posX, posY, 0);
    }

    /** 获取随机位置列表 */
    getRandomPosList(len: number, max?: number, min?: number): Array<cc.Vec3> {
        max = max || 1;
        min = min || 0;
        let posList: Array<cc.Vec3> = [];
        const posXList = this.getRandomList(len, max, min);
        const posYList = this.getRandomList(len, max, min);
        for (let i = 0; i < len; i++) {
            const pos = cc.v3(posXList[i], posYList[i]);
            posList.push(pos);
        }
        return posList;
    }



    /** 随机数生成方法 */
    public seededRandom = function (max?: number, min?: number, randomSeed?: number) {
        max = max || 1;
        min = min || 0;
        // randomSeed = (this.randomSeed * 9301 + 49297) % 233280;
        var rnd = randomSeed / 233280.0;
        return Math.ceil(min + rnd * (max - min));   // Math.ceil实现取整功能，可以根据需要取消取整
    };

    /**
     * 获取随机种子获取列表
     * @param max 随机数的最大值
     * @param min 随机数的最小值
     * @param randomSeed 随机种子
     * @param length 数组长度
     * 
     * @returns 随机数数组
     */
    public createRandomListBySeed(max: number, min: number, randomSeed?: number, length?: number): Array<number> {

        let nSeed = randomSeed;
        let tempList = [];
        for (let i = 0; i < length; i++) {
            const tempRandom = this.seededRandom(max, min, nSeed);
            tempList.push(tempRandom);
            nSeed = (nSeed * 9301 + 49297) % 233280;
        }
        return tempList;
    }

    /**
     * 
     * @param arrange 范围列表
     * @param seedList 种子列表
     * @param len 长度
     * @returns 位置坐标列表
     */
    public createRandomPosListBySeedList(arrange: Array<number>, seedList: Array<number>, len: number) {

        if (!arrange || arrange.length <= 0) {
            console.error('the arrange list is null');
            return;
        }

        if (!seedList || seedList.length <= 0) {
            console.error('the seedList is null');
            return;
        }

        if (!len) {
            console.error('len is null or 0');
            return;
        }

        let max = arrange[0], min = arrange[1];
        if (max < min) {
            max = arrange[1];
            min = arrange[0];
        }

        const xList = this.createRandomListBySeed(max, min, seedList[0], len);
        const yList = this.createRandomListBySeed(max, min, seedList[1], len);
        let posList = [];
        for (let i = 0; i < len; i++) {
            const pos = cc.v3(xList[i], yList[i], 0);
            posList.push(pos);
        }
        return posList;
    }



    /** 分帧执行 */
    executePreFrame(generator: Generator, duration: number) {
        return new Promise((resolve, reject) => {
            let gen = generator;
            // 创建执行函数
            let execute = () => {

                // 执行之前，先记录开始时间戳
                let startTime = new Date().getTime();

                // 然后一直从 Generator 中获取已经拆分好的代码段出来执行
                for (let iter = gen.next(); ; iter = gen.next()) {

                    // 判断是否已经执行完所有 Generator 的小代码段
                    // 如果是的话，那么就表示任务完成
                    if (iter == null || iter.done) {
                        resolve(null);
                        return;
                    }

                    // 每执行完一段小代码段，都检查一下是否
                    // 已经超过我们分配给本帧，这些小代码端的最大可执行时间
                    if (new Date().getTime() - startTime > duration) {

                        // 如果超过了，那么本帧就不在执行，开定时器，让下一帧再执行
                        setTimeout(() => {
                            execute();
                        });
                        return;
                    }
                }
            };

            // 运行执行函数
            execute();
        });
    }

    /** 是否今日首次复活 */
    getIsTodayFirstRevive() {
        const firstResurrection = cc.sys.localStorage.getItem('firstResurrection');
        if (firstResurrection == undefined || firstResurrection == null) {
            return true;
        }
        else {
            const curTime = formatDate(SnakeDataMgr.getInstance().loginServerTime);
            return firstResurrection != curTime;
        }
    }

    /** 设置存储今日首次复活时间 */
    setFirstRevive() {
        const curTime = formatDate(SnakeDataMgr.getInstance().loginServerTime);
        cc.sys.localStorage.setItem('firstResurrection', curTime);
    }

}
