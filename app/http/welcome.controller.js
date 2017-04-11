class WelcomeController {

    constructor(quotes, mailer) {
        this.quotes = quotes;
        this.mailer = mailer;
    }

    static get dependencies() {
        return ['quotes', 'mailer'];
    }

    async index(context) {
        context.body = context.view.make('index').bind('quote', this.quotes.get());

        let mail = await this.mailer.compose('index', {quote: this.quotes.get()}, async (mail) => {
            mail
                .to('son.levuthai@gmail.com, rikky@sphinx-software.com')
                .cc([
                    'ta quang phong <phongtq@sphinx-software.com>'
                ])
                .attachments([
                    {
                        file: '/Users/sonle/WebstormProjects/sphinx-web-skeleton/package.json',
                        name: 'package.json'
                    }
                ]);
        });

        await queue.enque(SendMailJob);

    }

    async user(context) {
        context.body = context.view.make('welcome')
            .bind('user', context.user)
        ;
    }
}

module.exports = WelcomeController;
