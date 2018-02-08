import Quotes from "App/Quotes";
import {singleton} from "Fusion/MetaInjector";
import {post, get, controller} from "Fusion/Http";
import LoginForm from "./LoginForm";

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
        context.body = context.view.make('index')
            .bind('quote', this.quotes.get())
            .bind('form', context.session.get('login.invalid'))
        ;
    }

    @post('/welcome', [LoginForm])
    async user(context) {
        context.body = context.view.make('welcome')
            .bind('user', context.form.user())
        ;
    }
}
