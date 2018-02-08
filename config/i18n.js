import path from "path";
import NodeFileSystem from 'i18next-node-fs-backend';

export default {
    debug  : false,
    lng    : 'en',
    ns     : ['translation'],
    backend: {
        type: NodeFileSystem,
        loadPath: path.normalize(path.join(__dirname, '..', 'resources', 'locales', '{{lng}}/{{ns}}.json')),
    }
}
