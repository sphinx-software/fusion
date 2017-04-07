const path = require('path');

// Database configuration
// For more options see http://knexjs.org
module.exports = {
    // client: 'mysql',
    // connection: {
    //     host : process.env.DB_HOST          || '127.0.0.1',
    //     user : process.env.DB_USER          || 'your_database_user',
    //     password : process.env.DB_PASSWORD  || 'your_database_password',
    //     database : process.env.DB_NAME      || 'your_database_name'
    // },
    client: 'sqlite3',
    connection: {
        filename: path.normalize(path.join(__dirname, '..', 'resources', 'database', 'db.sqlite')),
    },
    useNullAsDefault: true,
    migration: {
        directory: path.normalize(path.join(__dirname, '..', 'resources', 'database', 'migrations')),
        tableName: 'migrations'
    },
    seed: {
        directory: path.normalize(path.join(__dirname, '..', 'resources', 'database', 'seeders')),
    }
};
