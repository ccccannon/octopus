class DebugManager {

    log() {
        if (CC_DEBUG) {
            // console.log(...arguments);
        }
    }

    error() {
        if (CC_DEBUG) {
            // console.error(...arguments);
        }
    }

    warn() {
        if (CC_DEBUG) {
            // console.warn(...arguments);
        }
    }

}

export default new DebugManager();