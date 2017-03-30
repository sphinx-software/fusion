const lodash = require('lodash');

module.exports = async function (config, container) {

    container.value('config', config);

    config.providers.forEach(provider => provider.register(container));

    let earlyBootedProviders = config.providers.filter(provider => lodash.isFunction(provider.boot));

    for (let index = 0; index < earlyBootedProviders.length; index++) {
        await earlyBootedProviders[index].boot(container);
    }
};
