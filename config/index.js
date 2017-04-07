require('dotenv').load();

module.exports = {

    // Services will be used for the application
    providers: [

        // Sphinx default providers
        // remove unused provider if needed to match with the application requirement
        require('sphinx/acl/acl.provider'),
        require('sphinx/database/database.provider'),
        require('sphinx/http/http.provider'),
        require('sphinx/mongo/mongo.provider'),
        require('sphinx/hash/hash.provider'),
        require('sphinx/log/log.provider'),
        require('sphinx/serializer/serializer.provider'),
        require('sphinx/redis/redis.provider'),
        require('sphinx/storage/storage-factory.provider'),
        require('sphinx/session/session.provider'),
        require('sphinx/cache/cache.provider'),
        require('sphinx/console/console.provider'),
        require('sphinx/view-engine-nunjucks/nunjucks.provider'),
        require('sphinx/view/view.provider'),
        require('sphinx/url/url.provider'),
        require('sphinx/meta-injector/meta-injector.provider'),
        require('sphinx/routing/routing.provider'),
        
        require('sphinx-auth/auth.provider'),

        // Application providers
        // add more providers to extend the application functionality
        require('app/app.provider')
    ],

    injects: [
        // Injects dependencies by its metadata here
        require('app/http/welcome.controller'),
        require('app/command/quotes.command')
    ],

    // Services related configuration
    acl     : require('./acl'),
    auth    : require('./auth'),
    database: require('./database'),
    mongo   : require('./mongo'),
    hash    : require('./hash'),
    http    : require('./http'),
    log     : require('./log'),
    redis   : require('./redis'),
    session : require('./session'),
    cache   : require('./cache'),
    view    : require('./view'),
    routes  : require('./routes'),
};
