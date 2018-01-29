import {singleton} from "../../../../sphinx-web-stdlib/MetaInjector/decorators";

@singleton()
export default class FormatUserNameMiddleware {
    async handle(context, next) {
        let user = context.params.user.toLowerCase() || 'You';
        context.user = user.charAt(0).toUpperCase() + user.slice(1);

        await next();
    }
}
