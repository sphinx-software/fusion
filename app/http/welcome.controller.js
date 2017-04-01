class WelcomeController {

    static get dependencies() {
        return ['quotes'];
    }

    constructor(quotes) {
        this.quotes = quotes;
    }

    async index(context) {
        context.body = context.view.make('index').bind('quote', this.quotes.get());
    }

    async user(context) {
        context.body = context.view.make('welcome')
            .bind('user', context.params.user)
        ;
    }
}

module.exports = WelcomeController;
