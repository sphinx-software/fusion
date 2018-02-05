import * as config from './config';
import fusion from 'Fusion/Fusion';
import Container from '@sphinx-software/container';
import {ConsoleKernel} from 'Fusion';
import EventEmitter from 'events';
import * as Modules from './manifest'

(async () => {

    fusion.use(Modules);

    let container = await fusion.activate(config, new Container(new EventEmitter()));
    let kernel    = await container.make(ConsoleKernel);

    await kernel.handle(process.argv);

})().catch(console.error);
