class QuoteCommand {
    constructor(quote) {
        this.quote = quote
    }

    register(program) {
        this.program = program.command('quote').option('-n, --number <n>', 'number of quotes', n => parseInt(n), 1);
        return this.program;
    }

    async action() {
        for(let index = 0; index < this.program.number; index++) {
            let quote = this.quote.get();
            console.log('%s -- %s', quote.content, quote.author);
        }
    }

    static get dependencies() {
        return ['quotes'];
    }
}

module.exports = QuoteCommand;
