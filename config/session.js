const path = require('path');

module.exports = {

    use     : process.env.SESSION_ADAPTER || 'filesystem',
    timeout : 1000 * 3600 * 24 * 30, // Set the session timeout for 30days

    adapters: {
        filesystem: {
            prefix     : 'session',
            directory  : path.normalize(path.join(__dirname, '..', 'storages', 'sessions')),
        },

        mongo: {
            collection : 'sessions'
        },

        database: {
            table      : 'sessions'
        },
        redis: {

        },
        memory: { }
    }
};
