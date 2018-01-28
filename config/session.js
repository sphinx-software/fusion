import path from "path";

export default {
    use     : process.env.SESSION_ADAPTER || 'filesystem',
    timeout : 1000 * 3600 * 24 * 30, // Set the session timeout for 30days

    stores: {
        filesystem: {
            adapter    : 'filesystem',
            prefix     : 'session',
            directory  : path.normalize(path.join(__dirname, '..', 'storages', 'sessions')),
        },
    }
}
