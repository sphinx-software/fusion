import {singleton} from "Fusion/MetaInjector";
import {get, post, controller} from "Fusion/Http";
import {SessionAuthenticator, CredentialProviderInterface} from "Fusion/Auth"


@singleton(SessionAuthenticator, CredentialProviderInterface)
@controller()
export default class AuthController {

    /**
     *
     * @param auth
     * @param provider
     */
    constructor(auth, provider) {
        this.auth = auth;
        this.provider = provider;
    }

    @post('/login')
    async login(context) {
        let credential = await this.provider.provide('rikky', '1234@4321');
        this.auth.login(credential);
        // handle after login success
        context.body = {
            "identity": this.auth.getCredential().getIdentity()
        }
    }

    @get('/get')
    logout() {
        this.auth.logout()
    }
}
