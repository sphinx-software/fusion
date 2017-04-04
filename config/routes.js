module.exports = {

    index: {
        url: '/',
        method: 'get',
        handlers: ['WelcomeController.index']
    },

    user: {
        url: '/welcome/:user',
        method: 'get',
        handlers: [
            require('app/http/format-username.middleware'),
            'WelcomeController.user'
        ]
    }
};
