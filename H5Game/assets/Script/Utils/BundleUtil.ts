/** bundle工具 */
export default class BundleUtil {

    /**
     * 加载bundle中预制体
     * @param bundleName bundle名称
     * @param prefabPath prefab路径
     * @returns 
     */
    static async loadPrefab(bundleName: string, prefabPath: string): Promise<cc.Prefab> {
        let _bundle = await this.loadBundle(bundleName);
        if (!_bundle) {
            return null;
        }
        return new Promise<cc.Prefab | null>(rs => {
            const pfb = _bundle.get(prefabPath, cc.Prefab);
            if (!pfb) {
                rs(null);
            }
            rs(pfb);
        })
    }

    /** 预制节点缓存列表 */
    static bundlePrefabNodeList: Map<string, cc.Node> = new Map();

    /**
     * 加载预制节点(节点会放入缓存池)
     * @param bundleName 
     * @param prefabPath 
     * @returns 
     */
    static async loadPrefabNode(bundleName: string, prefabPath: string) {
        let curPrefabNode = this.bundlePrefabNodeList.get(prefabPath);
        if (curPrefabNode) {
            return curPrefabNode;
        } else {
            let prefab = await this.loadPrefab(bundleName, prefabPath);
            curPrefabNode = cc.instantiate(prefab);
            this.bundlePrefabNodeList.set(prefabPath, curPrefabNode);
            return curPrefabNode;
        }
    }

    /** 移除缓存池预制节点 */
    static deletePrefabNode(prefabPath: string) {
        this.bundlePrefabNodeList.delete(prefabPath);
    }

    /**
     * 加载bundle
     * @param _name 
     */
    static async loadBundle(_name: string) {
        let _bundle = cc.assetManager.getBundle(_name);
        if (_bundle) {
            return _bundle;
        }
        return new Promise<cc.AssetManager.Bundle | null>(rs => {

            cc.assetManager.loadBundle(_name, async (err, bundle) => {
                if (err) {
                    console.error(err)
                    rs(await this.loadBundle(_name));
                }
                else {
                    let loadDir = () => {
                        _bundle = cc.assetManager.getBundle(_name);
                        if (!_bundle) {
                            return;
                        }
                        //加载bunle下的所有资源
                        _bundle.loadDir('', async (err, res) => {
                            if (err) {
                                console.error(err)
                                setTimeout(() => {
                                    loadDir();
                                }, 100);
                                return;
                            }
                            else {
                                rs(bundle);
                            }
                        });
                    }
                    loadDir();
                }

            });
        })

    }

    /**
     * 释放bundle
     * @param _name 
     * @returns 
     */
    static releaseBundle(_name: string) {
        let bundle = cc.assetManager.getBundle(_name);
        if (!bundle) {
            return;
        }
        // 释放所有属于 Asset Bundle 的资源
        bundle.releaseAll();
        cc.assetManager.removeBundle(bundle);
    }

    /** 远程图片缓存列表 */
    static bundleSpriteList: Map<string, cc.SpriteFrame> = new Map();

    /** 加载bundle图片 */
    static async getSpriteFrameInBundle(bundleName: string, imagePath: string) {
        let _bundle = await this.loadBundle(bundleName);
        if (!_bundle) {
            return null;
        }
        let curSpriteFrame = this.bundleSpriteList.get(imagePath);
        if (curSpriteFrame) {
            return curSpriteFrame;
        }
        else {
            return new Promise<cc.SpriteFrame | null>(rs => {
                _bundle!.load(imagePath + `/spriteFrame`, cc.SpriteFrame, (err, spriteFrame) => {
                    if (err) {
                        console.error('getSpriteFrameInBundle ', err);
                    }
                    this.bundleSpriteList.set(imagePath, spriteFrame);
                    rs(spriteFrame || null);
                });
            });
        }
    }
}

