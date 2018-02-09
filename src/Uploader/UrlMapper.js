import path from 'path';

export default class UrlMapper {
    constructor(diskManager, config) {
        this.diskManager = diskManager;
        this.config      = config;
    }

    url(nameDisk, fileName) {
        switch (this.config.disk.disks[nameDisk].adapter) {
            case 'googleCloud':
                return `https://storage.googleapis.com/${this.diskManager.disk(
                    nameDisk).bucketName}/${fileName}`;
            case 's3':
                return `https://s3.amazonaws.com/${this.diskManager.disk(
                    nameDisk).bucketName}/${fileName}`;
            case 'local':
                return path.join(this.config.http.host, this.config.http.asset,
                    fileName);
        }
    }
}
