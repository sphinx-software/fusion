import { singleton } from '@sphinx-software/fusion/MetaInjector';

@singleton()
export class UploadMiddleware {

    async handle(context, next) {

        console.log(context);

        next();

    }

}