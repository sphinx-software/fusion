exports.register = (container) => {};

exports.boot = async (container) => {
    // const WelcomeController = require('app/http/welcome.controller');

    // provides routes
    let router = await container.make('http.router');

    router.get('index', '/', async (context) => {
        let controller = await container.make('WelcomeController');
        controller.index(context);
    });
    router.get('user', '/application/welcome/:user', async (context) => {
        let controller = await container.make('WelcomeController');
        controller.user(context);
    });
};
