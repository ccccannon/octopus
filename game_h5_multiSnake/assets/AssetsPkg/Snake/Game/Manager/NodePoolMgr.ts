export default class NodePoolManager {

    private static _instance: NodePoolManager = null;

    private _coinNodePool: cc.NodePool = null;

    private _porpsNodePool: cc.NodePool = null;

    private _snakeBodyNodePool: cc.NodePool = null;

    private _deathBodtNodePool: cc.NodePool = null;

    private _noticeNumberPool: cc.NodePool = null;

    private _effectNodePool: cc.NodePool = null;

    public static getInstance() {
        if (!this._instance) {
            this._instance = new NodePoolManager();
        }
        return this._instance;
    }

    /** 金币节点池 */
    get CoinNodePool() {
        if (!this._coinNodePool) {
            this._coinNodePool = new cc.NodePool();
        }
        return this._coinNodePool;
    }

    /** 道具节点池 */
    get PorpsNodePool() {
        if (!this._porpsNodePool) {
            this._porpsNodePool = new cc.NodePool();
        }
        return this._porpsNodePool;
    }

    /** 蛇身节点池 */
    get SnakeBodyNodePool() {
        if (!this._snakeBodyNodePool) {
            this._snakeBodyNodePool = new cc.NodePool();
        }
        return this._snakeBodyNodePool;
    }

    /** 蛇死后的食物节点池 */
    get DeathBodyNodePool() {
        if (!this._deathBodtNodePool) {
            this._deathBodtNodePool = new cc.NodePool();
        }
        return this._deathBodtNodePool;
    }

    /** 数字提醒的节点池 */
    get NoticeNumberPool() {

        if (!this._noticeNumberPool) {
            this._noticeNumberPool = new cc.NodePool();
        }
        return this._noticeNumberPool;

    }

    get EffectNodePool() {
        if (!this._effectNodePool) {
            this._effectNodePool = new cc.NodePool();
        }
        return this._effectNodePool;
    }


    /**清除所有的节点池 */
    public clearAll() {
        this.CoinNodePool.clear();
        this.PorpsNodePool.clear();
        this.SnakeBodyNodePool.clear();
        this.DeathBodyNodePool.clear();
        this.EffectNodePool.clear();
    }


}