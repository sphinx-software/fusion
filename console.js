import lodash from 'lodash';
import config from 'config/index';
import bootstrap from 'bootstrap/index';
import Container from '@sphinx-software/container';
import {EventEmitter} from 'events';

(async () => {
    let container       = await bootstrap(config, new Container(new EventEmitter()));
    let consoleKernel   = await container.make('console.kernel');

    let consoleBootedProviders = config.providers.filter(provider => lodash.isFunction(provider.bootConsole));
    for (let index = 0; index < consoleBootedProviders.length; index++) {
        await consoleBootedProviders[index].bootConsole(consoleKernel);
    }

    consoleKernel.run(process.argv);
})().catch(error => {
    console.error(error);
    process.exit(error.code);
});
