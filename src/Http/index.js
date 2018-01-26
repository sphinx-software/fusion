import { controller, get } from '../../../Http';
import { singleton } from '../../../MetaInjector';
import {Quotes} from "../Quotes";

@singleton(Quotes)
@controller()
export class WelcomeController {

    constructor(quotes) {
        this.quotes = quotes;
    }

    @get('/')
    async index(context) {
        context.body = context.view.make('index').bind('quote', this.quotes.get());
    }

    async user(context) {
        context.body = context.view.make('welcome')
            .bind('user', context.user)
        ;
    }
}
