import path from "path";

export default {
    debug  : false,
    lng    : 'en',
    ns     : ['translation'],
    backend: {
        loadPath: path.normalize(path.join(__dirname, '..', 'resources', 'locales', '{{lng}}/{{ns}}.json')),
    }
}
