import containerBootstrap from './container.bootstrap';

export default async function (config, container) {
    await containerBootstrap(config, container);
    return container;
}
