import koaStatic from "koa-static";
import koaBodyParser from "koa-bodyparser";
import path from "path";
import SessionStartMiddleware from "Fusion/Session/SessionStartMiddleware";

export default {
    port        : process.env.HTTP_PORT   || 3000,
    host        : process.env.HTTP_HOST   || 'localhost:3000',
    secure      : process.env.HTTP_SECURE || false,
    asset       : '/',

    // Global middlewares
    middlewares : [

        koaStatic(path.normalize(path.join(__dirname, '..', 'public'))),

        koaBodyParser(),

        // Uncomment the middleware bellow to enable session service
        SessionStartMiddleware
    ],
}
