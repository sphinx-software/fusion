import path from 'path';

export default {
    default: 'local',
    disks  : {
        local      : {
            adapter: 'local',
            dir    : path.join(__dirname, '..', 'public')
        },
        googleCloud: {
            adapter    : 'googleCloud',
            bucket     : 'sphinx-software',
            keyFilename: path.join(__dirname, 'webpush-430213d0a288.json'),
            visibility : 'public'
        }
    }
};
