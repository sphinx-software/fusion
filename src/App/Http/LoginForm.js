import {Form, form} from "Fusion/Validation";
import {singleton} from "Fusion/MetaInjector";

@singleton()
@form({
    username : ['required', 'equals:fusion'],
    password : ['required', 'equals:fusion'],
    alias    : ['required', 'length.min:3', 'length.max:50']
})
export default class LoginForm extends Form {

    /**
     * Handle the invalid login request
     *
     * @param context
     * @param next
     * @return {Promise<void>}
     */
    async invalid(context, next) {
        // We'll flash the login result to the session
        // So the login view can get the invalid messages
        context.session.flash('login.invalid', this.result);
        context.redirect('/');
    }

    /**
     * Helper for providing user data
     *
     * @return {{alias: *, username}}
     */
    user() {
        return {
            alias    : this.data.alias,
            username : this.data.username,
        };
    }
}
