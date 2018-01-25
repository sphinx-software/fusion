export default class WelcomeController {

    constructor(quotes, mailer) {
        this.quotes = quotes;
        this.mailer = mailer;
    }

    static get dependencies() {
        return ['quotes', 'mailer'];
    }

    async index(context) {
        context.body = context.view.make('index').
            bind('quote', this.quotes.get());
    }

    async user(context) {
        context.body = context.view.make('welcome').bind('user', context.user);
    }
}
