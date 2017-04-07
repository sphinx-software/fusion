class QuoteCommand {

    constructor(quote) {
        this.quote = quote
    }

    get name() {
        return 'quote';
    }

    get description() {
        return 'display a random quote';
    }

    get options() {
        return [
            ['-n, --number <n>', 'number of quotes', n => parseInt(n), 1]
        ];
    }

    async action(context) {
        for(let index = 0; index < context.number; index++) {
            let quote = this.quote.get();
            console.log('%s -- %s', quote.content, quote.author);
        }
    }

    static get dependencies() {
        return ['quotes'];
    }
}

module.exports = QuoteCommand;
