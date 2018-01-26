import path from 'path';

export default {

    adapter  : 'filesystem',
    prefix   : 'cache',
    directory: path.normalize(path.join(__dirname, '..', 'storages', 'caches'))

};