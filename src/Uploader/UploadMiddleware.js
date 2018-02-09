import multer                           from 'koa-multer';
import { Config, DiskManagerInterface } from 'Fusion';
import { singleton }                    from 'Fusion/MetaInjector';
import File                             from './File';

const upload = multer({ storage: multer.memoryStorage() }).any();

@singleton(DiskManagerInterface, Config)
export default class UploadMiddleware {

    constructor(diskManager, config) {
        this.diskManager = diskManager;
        this.config      = config;
    }

    handle(context, next) {
        return upload(context, () => {
            context.files = {};
            context.req.files.forEach(file => {
                context.files[file.fieldname] = new File(this.diskManager, file,
                    this.config);
            });
            return next();
        });
    }

}
