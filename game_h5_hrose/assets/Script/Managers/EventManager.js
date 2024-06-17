class EventManager {

    constructor() {
        this.normalEventsMap = new Map();
        this.onceEventsMap = new Map();
    }

    /** 注册监听事件 */
    on(evtName, callback, target = null) {

        if (this.normalEventsMap.has(evtName)) {
            console.error(evtName + ' is exist,please change one');
            return;
        }

        this.normalEventsMap.set(evtName, [callback, target]);

    }

    /** 注册一次行监听事件 */
    once(evtName, callback, target = null) {

        if (this.onceEventsMap.has(evtName)) {
            console.error(evtName + ' is exist,please change one');
            return;
        }

        this.onceEventsMap.set(evtName, [callback, target]);

    }


    /** 移除监听 */
    off(evtName) {

        if (this.normalEventsMap.has(evtName)) {
            this.normalEventsMap.delete(evtName);
        } else {
            console.log(evtName + " is offed already");
        }

    }


    /** 触发事件 */
    emit(evtName, ...args) {

        if (this.normalEventsMap.has(evtName)) {
            const [callback, target] = this.normalEventsMap.get(evtName);

            if (target) {
                callback.call(target, ...args);
            } else {
                callback(...args);
            }

        } else {
            console.error(evtName + " is unregist, Please check the evtName!")
        }

    }

    /** 触发一次性事件 */
    onceEmit(evtName,...args) {
        if (this.onceEventsMap.has(evtName)) {
            const [callback, target] = this.onceEventsMap.get(evtName);

            if (target) {
                callback.call(target, ...args);
                this.onceEventsMap.delete(evtName);
            } else {
                callback(...args);
            }

        } else {
            console.error(evtName + " is unregist, Please check the evtName!")
        }
    }

    /** 清空正常事件 */
    clearNormalEvents() {
        this.normalEventsMap.clear();
    }

    /** 清空一次性事件 */
    clearOnceEvents() {
        this.onceEventsMap.clear();
    }

    /** 清空所有事件 */
    clearAll() {
        this.clearNormalEvents();
        this.clearOnceEvents()
    }

}

const evtManager = new EventManager();

export default evtManager;