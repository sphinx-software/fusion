const path = require('path');

module.exports = {

    adapter    : 'filesystem',
    prefix     : 'cache',
    directory  : path.normalize(path.join(__dirname, '..', 'storages', 'caches')),

    // Available options:
    //
    // adapter    : 'mongo',
    // collection : 'caches',
    // ttl        : 100000

    // adapter    : 'database',
    // collection : 'caches',
    // ttl        : 100000

    // adapter    : 'memory'
    // ttl        ; 100000

    // adapter    : 'null'

};