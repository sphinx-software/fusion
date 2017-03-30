// For more options see https://www.npmjs.com/package/acl

module.exports = {
    // Available backends: database, redis, memory, mongodb

    // if backend was set to database, will require the database provider to work
    // if backend was set to redis, will require the redis provider to work
    // if backend was set to mongodb, will require the mongo provider to work
    backend: process.env.ACL_BACKEND || 'memory',

    // Rules for the ACL module, see the commented code bellow for example
    rules: [

        // TODO add your rules here

        // {
        //     roles:['guest', 'member'],
        //     allows:[
        //         {resources:'blogs', permissions:'get'},
        //         {resources:['forums', 'news'], permissions:['get', 'put', 'delete']}
        //     ]
        // },
        // {
        //     roles:['gold', 'silver'],
        //     allows:[
        //         {resources:'cash', permissions:['sell', 'exchange']},
        //         {resources:['account', 'deposit'], permissions:['put', 'delete']}
        //     ]
        // }
    ]
};
