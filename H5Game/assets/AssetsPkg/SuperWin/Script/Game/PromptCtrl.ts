// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { Logger } from "../../../../Script/Managers/Logger";
import UIPrompRuleCtrl from "./GUI/UIPrompRuleCtrl";

const { ccclass, property } = cc._decorator;

const assetInfo = [
    {
        bundleName: 'SuperWin',
        url: 'Assets/Prefab/Rule',
        name: 'rules',
    },
    {
        bundleName: 'SuperWin',
        url: 'Assets/Prefab/Rank',
        name: 'rank',
    },
    {
        bundleName: 'SuperWin',
        url: 'Assets/Prefab/Record',
        name: 'record',
    },
    {
        bundleName: 'SuperWin',
        url: 'Assets/Prefab/Disslove',
        name: 'disslove',
    },
]

@ccclass
export default class PromptCtrl extends cc.Component {

    public promptContainer: Map<string, cc.Node> = null;

    @property(cc.Node)
    promptMask: cc.Node = null;


    protected onLoad(): void {
        this.promptContainer = new Map();
        cc.systemEvent.on('hideRules', this.hideRulesPrompt, this);
        cc.systemEvent.on('hideRank', this.hideRankPrompt, this);
        cc.systemEvent.on('hideRecord', this.hideRecordPrompt, this);
        cc.systemEvent.on('hideDisslove', this.hideDisslovePrompt, this);
        this.preloadPromptRes();

    }

    showRulesPrompt() {
        this.promptMask.active = true;
        if (this.promptContainer.has('rules')) {
            const rules = this.promptContainer.get('rules');

            if (!rules.parent) {
                rules.parent = this.node;
                // if (key == 'disslove') {
                //     rule.y = (rule.height - cc.winSize.height) / 2 + 350;
                // } else {
                // }
            }
            rules.y = (rules.height - cc.winSize.height) / 2 + 100;
            rules.active = true;

        } else {
            this.loadPrompt('SuperWin', 'Assets/Prefab/Rule', "rules", true);
        }

    }

    hideRulesPrompt() {
        this.promptMask.active = false;
        const rules = this.promptContainer.get('rules');
        rules.active = false;
    }

    /** 显示排行榜界面 */
    showRankPrompt() {
        this.promptMask.active = true;
        if (this.promptContainer.has('rank')) {
            const rank = this.promptContainer.get('rank');
            if (!rank.parent) {
                rank.parent = this.node;
            }
            rank.y = (rank.height - cc.winSize.height) / 2 + 100;
            rank.active = true;
        } else {
            this.loadPrompt('SuperWin', 'Assets/Prefab/Rank', "rank", true);
        }
    }

    /** 隐藏排行榜界面 */
    hideRankPrompt() {
        this.promptMask.active = false;
        const rank = this.promptContainer.get('rank');
        rank.active = false;
        // rank.getComponent()
    }

    /** 显示记录弹窗 */
    showRecordPrompt() {
        this.promptMask.active = true;
        if (this.promptContainer.has('record')) {
            const record = this.promptContainer.get('record');
            if (!record.parent) {
                record.parent = this.node;
            }
            record.y = (record.height - cc.winSize.height) / 2 + 100;
            record.active = true;
        } else {
            this.loadPrompt('SuperWin', 'Assets/Prefab/Record', "record", true);
        }
    }


    /** 隐藏记录弹窗 */
    hideRecordPrompt() {
        this.promptMask.active = false;
        const record = this.promptContainer.get('record');
        record.active = false;
    }

    /** 显示解散界面 */
    showDisslovePrompt() {
        this.promptMask.active = true;
        if (this.promptContainer.has('disslove')) {
            const disslove = this.promptContainer.get('disslove');
            if (!disslove.parent) {
                disslove.parent = this.node;
            }
            disslove.y = (disslove.height - cc.winSize.height) / 2 + 350;
            disslove.active = true;
            disslove.zIndex = 10;
        } else {
            this.loadPrompt('SuperWin', 'Assets/Prefab/Disslove', "disslove", true);
        }
    }

    /** 隐藏解散界面 */
    hideDisslovePrompt() {
        this.promptMask.active = false;
        const disslove = this.promptContainer.get('disslove');
        disslove.zIndex = 0;
        disslove.active = false;
        cc.systemEvent.emit('quitGame');
    }

    /** 加载弹窗 */
    loadPrompt(bundleName: string, url: string, key: string, isShow?) {
        const bundle = cc.assetManager.getBundle(bundleName);

        bundle.load(url, cc.Prefab, (err, prefab) => {
            if (err) {
                console.log(err);
                return;
            }
            const pref = cc.instantiate(prefab);
            this.promptContainer.set(key, pref);
            pref.active = false;
            pref.parent = this.node;
            if (!!isShow) {
                if (key == 'disslove') {
                    pref.y = (pref.height - cc.winSize.height) / 2 + 350;
                } else {
                    pref.y = (pref.height - cc.winSize.height) / 2 + 100;
                }
                pref.active = true;
            }

        })

        Logger.logBusiness(bundle, '加载bundle资源');
    }

    preloadPromptRes() {
        for (let i = 0; i < assetInfo.length; i++) {
            const item = assetInfo[i];
            this.loadPrompt(item.bundleName, item.url, item.name);
        }
    }

}
