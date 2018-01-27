import koaStatic from "koa-static";
import SessionStartMiddleware from "@sphinx-software/fusion/Session/SessionStartMiddleware";
import path from "path";

export default {
    port        : process.env.HTTP_PORT   || 3000,
        host        : process.env.HTTP_HOST   || 'localhost:3000',
    secure      : process.env.HTTP_SECURE || false,
    asset       : '/',

    // Global middlewares
    middlewares : [
        koaStatic(path.normalize(path.join(__dirname, '..', 'public'))),
        // Uncomment the middleware bellow to enable session service
        SessionStartMiddleware
    ],
}
