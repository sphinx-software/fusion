const uuid = require('uuid/v4');

class UploaderFactory {

    constructor(diskManager) {
        this.diskManager = diskManager;
    }

    make(adapter, config) {
        switch (adapter) {
            case 'disk':
                return this.makeDiskAdapter(config);
            case 'memory':
                return this.makeMemoryAdapter(config);
            default :
                throw new VError(
                    `E_UPLOADER: Adapter [${adapter}] is not supported`);
        }
    }

    makeDiskAdapter(config) {

    }

    makeMemoryAdapter(config) {

    }
}

module.exports = UploaderFactory;