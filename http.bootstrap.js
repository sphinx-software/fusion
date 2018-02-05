import * as config from './config';
import Container from '@sphinx-software/container';
import {HttpKernel, HttpRouter} from 'Fusion';
import fusion from "Fusion/Fusion";
import EventEmitter from 'events';

import * as Modules from './manifest'


(async () => {
    fusion.use(Modules);


    let container = await fusion.activate(config, new Container(new EventEmitter()));
    let kernel    = await container.make(HttpKernel);
    let router    = await container.make(HttpRouter);

    kernel.use(router.routes()).use(router.allowedMethods());

    kernel.listen(config.http.port,() =>
        console.log(`app listen port: ${config.http.port}`)
    );

})().catch(console.error);
