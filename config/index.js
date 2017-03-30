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

        // Application providers
        // add more providers to extend the application functionality
        require('app/app.provider'),
        require('app/routing.provider'),
    ],

    // Services related configuration
    acl     : require('./acl'),
    database: require('./database'),
    mongo   : require('./mongo'),
    hash    : require('./hash'),
    http    : require('./http'),
    log     : require('./log'),
    redis   : require('./redis'),
    session : require('./session'),
    cache   : require('./cache'),
    view    : require('./view')
};
