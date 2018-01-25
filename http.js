import lodash from 'lodash';
import config from 'config';
import bootstrap from 'bootstrap';
import Container from '@sphinx-software/container';
import {EventEmitter} from 'events';

(async () => {
    let container  = await bootstrap(config, new Container(new EventEmitter()));
    let httpKernel = await container.make('http.kernel');
    let router     = await container.make('http.router');

    config.providers.forEach((provider) => provider.register(container));

    httpKernel
        .use(async (context, next) => {
            let httpBootedProviders = config.providers.filter(provider => lodash.isFunction(provider.bootHttp));
            for (let index = 0; index < httpBootedProviders.length; index++) {
                await httpBootedProviders[index].bootHttp(context);
            }
            await next();
        })
        .use(router.routes())
        .use(router.allowedMethods())
    ;
    
    httpKernel.listen(config.http.port, () => console.log(`Server started at port: ${config.http.port}`));
})().catch(error => {
    console.error(error);
    process.exit(error.code);
});
