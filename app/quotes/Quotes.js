import lodash from 'lodash';

export default class Quotes {

    get quotes() {
        return [
            {
                content: 'Hello world!',
                author : 'Programmer'
            },
            {
                content: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
                author : 'Martin Fowler'
            },
            {
                content: 'We cannot solve our problems with the same thinking we used when we created them.',
                author : 'Albert Einstein'
            }
        ];
    };

    get() {
        return this.quotes[lodash.random(0, this.quotes.length - 1)];
    }
}
