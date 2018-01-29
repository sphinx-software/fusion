import Quotes from "./../Quotes";
import {singleton} from "@sphinx-software/fusion/MetaInjector";
import {get, controller} from "@sphinx-software/fusion/Http";
import FormatUserNameMiddleware from "./FormatUsernameMiddleware";

@singleton(Quotes)
@controller()
export default class WelcomeController {

    /**
     *
     * @param {Quotes} quotes
     */
    constructor(quotes) {
        this.quotes = quotes;
    }

    @get('/')
    async index(context) {
        context.body = context.view.make('index').bind('quote', this.quotes.get());
    }

    @get('/welcome/:user', [FormatUserNameMiddleware])
    async user(context) {
        context.body = context.view.make('welcome')
            .bind('user', context.user)
        ;
    }

}
