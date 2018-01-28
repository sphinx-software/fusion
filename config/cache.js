import path from 'path';

export default {

    use: 'filesystem' || process.env.CACHE_STORE,

    stores: {
        filesystem: {
            adapter   : 'filesystem',
            prefix    : 'cache',
            directory : path.normalize(path.join(__dirname, '..', 'storages', 'caches'))
        },

        memory: {
            adapter : 'memory'
        },

        nocache: {
            adapter: 'null'
        }
    }
};
