class WelcomeController {

    constructor(quotes) {
        this.quotes = quotes;
    }

    static get dependencies() {
        return ['quotes'];
    }

    async index(context) {
        context.body = context.view.make('index').bind('quote', this.quotes.get());
    }

    async user(context) {
        context.body = context.view.make('welcome')
            .bind('user', context.user)
        ;
    }
}

module.exports = WelcomeController;
