exports.register = (container) => {};

exports.boot = async (container) => {
    const WelcomeController = require('app/http/welcome.controller');

    // provides routes
    let router = await container.make('http.router');

    router.get('index', '/', WelcomeController.index);
    router.get('user', '/application/welcome/:user', WelcomeController.user);
};
