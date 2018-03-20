import {singleton} from "Fusion/MetaInjector";
import {get, post, controller} from "Fusion/Http";
import {AuthenticatorInterface} from "Fusion/Auth"


@singleton(AuthenticatorInterface)
@controller()
export default class AuthController {

    /**
     * {AuthenticatorInterface}
     */
    auth;

    /**
     *
     * @param {AuthenticatorInterface} auth
     */
    constructor(auth) {
        this.auth = auth;
    }

    @post('/login')
    async login(context) {
        let credential = {
            "usename": "rikky",
            "id": 1
        };
        this.auth.login(credential);
        // handle after login success
        context.body = {
            "credential": this.auth.getCredential()
        }
    }

    @get('/get')
    logout() {
        this.auth.logout()
    }
}
