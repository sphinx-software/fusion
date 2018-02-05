import lodash from 'lodash';
import {singleton} from "Fusion/MetaInjector";

@singleton()
export default class Quotes {

    quotes = [
        {
            index: 1,
            content: 'Hello world!',
            author: 'Programmer',
        },
        {
            index: 2,
            content: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
            author: 'Martin Fowler'
        },
        {
            index: 3,
            content: 'We cannot solve our problems with the same thinking we used when we created them.',
            author: 'Albert Einstein'
        },
        {
            index: 4,
            content: 'Do not take life too seriously. You will never get out of it alive.',
            author: 'Elbert Hubbard'
        },
        {
            index: 5,
            content: 'Always remember that you are absolutely unique. Just like everyone else.',
            author: 'Margaret Mead'
        },
        {
            index: 6,
            content: 'My fake plants died because I did not pretend to water them.',
            author: 'Mitch Hedberg'
        },
        {
            index: 7,
            content: 'My fake class did not working because I not pretend to test it',
            author: 'Programmer'
        },
        {
            index: 8,
            content: 'There are 10 types of people, who knows binary and who doesn\'t',
            author: 'Programmer'
        }
    ];

    getAuthors() {
        return lodash.uniq(this.quotes.map(quote => quote.author));
    }

    getByIndex(index) {
        return this.quotes[index];
    }

    get() {
        return this.quotes[lodash.random(0, this.quotes.length - 1)];
    }
}
