import {singleton} from "@sphinx-software/fusion/MetaInjector";

@singleton()
export default class FormatUserNameMiddleware {
    async handle(context, next) {
        let user = context.params.user.toLowerCase() || 'You';
        context.user = user.charAt(0).toUpperCase() + user.slice(1);

        await next();
    }
}
