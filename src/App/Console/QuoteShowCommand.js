import chalk from 'chalk';
import {command, args} from "@sphinx-software/fusion/Console";
import {singleton} from "@sphinx-software/fusion/MetaInjector";
import Quotes from "./../Quotes";

@singleton(Quotes)
@command('quotes:show', 'Displays a random quote')
export default class QuoteShowCommand {

    /**
     *
     * @param {Quotes} quote
     */
    constructor(quote) {
        this.quote = quote
    }

    @args('<number>')
    async action(number) {
        for(let index = 0; index < number; index++) {
            let quote = this.quote.get();
            console.log('%s -- %s', chalk.green(quote.content), chalk.yellow(quote.author));
        }
    }
}
