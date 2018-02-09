import Quotes                    from 'App/Quotes';
import { singleton }             from 'Fusion/MetaInjector';
import { post, get, controller } from 'Fusion/Http';
import LoginForm                 from './LoginForm';
import { DiskManagerInterface }  from 'Fusion';
import { UploadMiddleware }      from '../../Uploader';

@singleton(Quotes, DiskManagerInterface)
@controller()
export default class WelcomeController {

    /**
     *
     * @param {Quotes} quotes
     * @param {DiskManagerInterface} diskManager
     */
    constructor(quotes, diskManager) {
        this.quotes      = quotes;
        this.diskManager = diskManager;
    }

    @get('/')
    async index(context) {
        console.log(this.diskManager.disk());
        context.body = context.view.make('index')
            .bind('quote', this.quotes.get())
            .bind('form', context.session.get('login.invalid'))
        ;
    }

    @post('/welcome', [UploadMiddleware])
    async user(context) {
        context.files.file.store();
        context.body = context.view.make('welcome')
            .bind('user', context.form.user())
        ;
    }
}
