import { controller, get, post } from '@sphinx-software/fusion/Http';
import { singleton }             from '@sphinx-software/fusion/MetaInjector';
import { Quotes }                from '../Quotes';
import { viewRendering }         from '@sphinx-software/fusion/View/ViewServiceProvider';
import DiskManager               from '@sphinx-software/disk/DiskManager';
import Busboy                    from 'busboy';
import path                      from 'path';
import { Config }                from '@sphinx-software/fusion/Fusion/ServiceContracts';
import { inspect }               from 'util';
import onFinished                from 'on-finished';
import asyncBusboy               from 'async-busboy';

function drainStream(stream) {
    stream.on('readable', stream.read.bind(stream));
}

class UrlMapper {
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

class File {
    constructor(diskManager, readSteam, config) {
        this.diskManager = diskManager;
        this.readSteam   = readSteam;
        this.extension   = path.extname(readSteam.filename);
        this.name        = path.basename(readSteam.filename, this.extension);
        this.urlMapper   = new UrlMapper(diskManager, config);

    }

    store(directory = '', nameDisk = this.diskManager.defaultDisk, permission = 'private') {
        return new Promise((resolve, reject) => {
            // let disk        = this.diskManager.disk(nameDisk);
            // let fullUrlFile = path.join(directory, this.fileName);
            // let writeSteam  = disk.createWriteStream(fullUrlFile, permission);
            // writeSteam.on('error', (error) => reject(error));
            // writeSteam.on('finish', () => {
            //     resolve(this.urlMapper.url(nameDisk, fullUrlFile));
            // });
            // this.readSteam.pipe(writeSteam);
            resolve('');
        });
        // return this.urlMapper.url(nameDisk, fullUrlFile);
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

@singleton(DiskManager, Config)
export class UploadMiddleware {

    constructor(diskManager, config) {
        this.diskManager = diskManager;
        this.config      = config;
    }

    async handle(context, next) {

        const response = await asyncBusboy(context.req);

        console.log(response);
        //
        // context.files = {};
        //
        // files.forEach(file => {
        //     context.files[file.fieldname] = new File(this.diskManager, file, this.config);
        // });
        //
        // next();

        // var busboy = new Busboy({ headers: context.request.headers });
        // busboy.on('file',
        //     function(fieldname, file, filename, encoding, mimetype) {
        //         console.log('File [' + fieldname + ']: filename: ' + filename +
        //             ', encoding: ' + encoding + ', mimetype: ' + mimetype);
        //     });
        // busboy.on('field',
        //     function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
        //         console.log('Field [' + fieldname + ']: value: ' +
        //             inspect(val));
        //     });
        // busboy.on('finish', function() {
        //     context.res.writeHead(200, { 'Connection': 'close' });
        //     context.res.end("That's all folks!");
        // });
        //
        // return context.req.pipe(busboy);

    }

}

@singleton()
@viewRendering('welcome')
export class DateTimeViewMacro {
    run(view) {
        view.bind('date', new Date());
    }
}

@singleton()
export class FormatUserNameMiddleware {
    async handle(context, next) {
        let user     = context.params.user.toLowerCase() || 'You';
        context.user = user.charAt(0).toUpperCase() + user.slice(1);

        await next();
    }
}

@singleton(Quotes, DiskManager)
@controller()
export class WelcomeController {

    constructor(quotes) {
        this.quotes = quotes;
    }

    @get('/')
    async index(context) {
        context.body = context.view.make('index').
            bind('quote', this.quotes.get());
    }

    @get('/welcome/:user', [FormatUserNameMiddleware])
    async user(context) {
        context.body = context.view.make('welcome').bind('user', context.user)
        ;
    }

    @post('/upload', [UploadMiddleware])
    async upload(context) {

        context.response.status = 200;

        context.response.body = 'hello';

        console.log('zep');

        context.body = 'demo';

        // try {
        //     context.body = await context.files.file.setName(
        //         new Date().getTime()).
        //         store('images', 'googleCloud', 'public');
        // } catch (error) {
        //     console.log(error);
        //     context.body = error;
        // }
    }
}
