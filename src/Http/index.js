import { controller, get } from '@sphinx-software/fusion/Http';
import { singleton } from '@sphinx-software/fusion/MetaInjector';
import {Quotes} from "../Quotes";
import {viewRendering} from "@sphinx-software/fusion/View/ViewServiceProvider";

@singleton()
@viewRendering('welcome')
export class DateTimeViewMacro {
    run(view) {
        view.bind('date', new Date());
    }
}

@singleton()
export class FormatUserNameMiddleware {
    async handle(context, next) {
        let user = context.params.user.toLowerCase() || 'You';
        context.user = user.charAt(0).toUpperCase() + user.slice(1);

        await next();
    }
}

@singleton(Quotes)
@controller()
export class WelcomeController {

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
