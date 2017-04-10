const path = require('path');

module.exports = {
    port        : process.env.HTTP_PORT   || 3000,
    host        : process.env.HTTP_HOST   || 'localhost:3000',
    secure      : process.env.HTTP_SECURE || false,
    asset       : '/',

    // Global middlewares
    middlewares : [

        // Uncomment the middleware bellow to enable session service
        // require('sphinx/session/session-start.middleware'),

        // Uncomment the middleware bellow to serve static content by the framework
        require('koa-static')(path.normalize(path.join(__dirname, '..', 'public'))),

    ],
    router : { }
};
