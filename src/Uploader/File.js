import { Duplex } from 'stream';
import path       from 'path';
import UrlMapper  from './UrlMapper';

export default class File {
    constructor(diskManager, file, config) {
        this.diskManager = diskManager;
        this.readSteam   = new Duplex();
        this.extension   = path.extname(file.originalname);
        this.name        = path.basename(file.originalname, this.extension);
        this.urlMapper   = new UrlMapper(diskManager, config);

        this.readSteam.push(file.buffer);
        this.readSteam.push(null);
    }

    store(directory = '', nameDisk = this.diskManager.defaultDisk, permission = 'private') {
        return new Promise((resolve, reject) => {
            let disk        = this.diskManager.disk(nameDisk);
            let fullUrlFile = path.join(directory, this.fileName);
            let writeSteam  = disk.createWriteStream(fullUrlFile, permission);
            writeSteam.on('error', (error) => reject(error));
            writeSteam.on('finish', () => {
                resolve(this.urlMapper.url(nameDisk, fullUrlFile));
            });
            this.readSteam.pipe(writeSteam);
        });
    }

    get fileName() {
        return this.name + this.extension;
    }

    setName(name) {
        this.name = name;
        return this;
    }

    setExtension(extension) {
        this.extension = extension;
        return this;
    }

}
