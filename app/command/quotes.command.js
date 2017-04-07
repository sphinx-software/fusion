const chalk = require('chalk');

class QuoteCommand {

    constructor(quote) {
        this.quote = quote
    }

    get name() {
        return 'quote';
    }

    get description() {
        return 'Displays a random quote';
    }

    get options() {
        return [
            ['-n, --number <n>', 'number of quotes', n => parseInt(n), 1]
        ];
    }

    async action() {
        for(let index = 0; index < this.context.number; index++) {
            let quote = this.quote.get();
            this.io.run(async () => {
                console.log('%s -- %s', chalk.green(quote.content), chalk.yellow(quote.author));
            });
        }
    }

    static get dependencies() {
        return ['quotes'];
    }
}

module.exports = QuoteCommand;
