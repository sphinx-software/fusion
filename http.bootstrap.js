import * as config from './config';
import fusion from '@sphinx-software/fusion/Fusion/Fusion';
import Container from '@sphinx-software/container';
import EventEmitter from 'events';

(async () => {

    const modules = await Promise.all(config.modules.map(module => import(module)));

    modules.forEach(module => fusion.use(module));

    let container = await fusion.activate(config, new Container(new EventEmitter()));
    let kernel    = await container.make('http.kernel');
    let router    = await container.make('http.router');

    kernel.use(router.routes()).use(router.allowedMethods());

    kernel.listen(config.http.port,() =>
        console.log(`app listen port: ${config.http.port}`)
    );

})().catch(console.error);
