
/** 是否为ios平台 */
export const isIos = () => {
    return cc.sys.os === cc.sys.OS_IOS
}

/** 是否为安卓平台 */
export const isAndroid = () => {
    return cc.sys.os === cc.sys.OS_ANDROID;
}

/** h5游戏加载完毕 通知原生 */
export const loadAssetFinished = () => {


    if (CC_DEBUG) {
        console.log('h5游戏加载完毕 通知原生: loadAssetFinished');
    }

    if (isIos()) {
        // @ts-ignore
        window.webkit.messageHandlers.loadWebFinish.postMessage({});
        return;
    }

    if (isAndroid()) {
        // @ts-ignore
        window.androidJsObj.loadWebFinish();
        return;
    }

    if (CC_DEBUG) {
        console.log('unhandle situation', cc.sys.os);
    }

}


/** 唤起app的充值界面  */
export const evokeNativeChargePage = () => {

    if (isIos()) {
        // @ts-ignore
        window.webkit.messageHandlers.opencharge.postMessage({});
        return;
    }

    if (isAndroid()) {
        // 0 表示app充值 1表示游戏充值 
        // @ts-ignore
        window.androidJsObj.openChargePage(1);
        return;
    }

    if (CC_DEBUG) {
        console.log('unhandle situation', cc.sys.os);
    }
}


/**关闭游戏 */
export const evokeNativeToQuitGame = () => {

   

    if (CC_DEBUG ) {
        console.trace();
        console.log('触发关闭游戏方法: evokeNativeToQuitGame');
    }

    if (isIos()) {
        // @ts-ignore
        const handler = window.webkit.messageHandlers;
        if (handler.alloFinish) {
            handler.alloFinish.postMessage({});
        } else if (handler.finish) {
            handler.finish.postMessage({});
        } else {
            console.log('unexcept sutiation on evokeNativeToQuitGame in ios')
        }
        return;
    }

    if (isAndroid()) {
        // @ts-ignore
        const handler = window.androidJsObj;
        if (handler.alloFinish) {
            handler.alloFinish(true);
        } else if (handler.finish) {
            handler.finish(true);
        } else {
            console.log('unexcept sutiation on evokeNativeToQuitGame in android ');
        }

        return;
    }

    console.log('unhandle situation', cc.sys.os);

}

/** 重新唤起游戏界面 */
export const setRefreshGameView = (callback) => {
    // @ts-ignore
    if (window && !window.refreshGameView) {
        if (CC_DEBUG) {
            console.log('添加游戏界面刷新的监听: setRefreshGameView');
        }
        // @ts-ignore
        window.refreshGameView = () => {
            callback && callback();
        };
    } else {
        callback = null;
    }
}


