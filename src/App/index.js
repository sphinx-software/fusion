import {
    hidden, readonly, PrimaryKey, DatabaseRepository,
    databaseRepository, String, SoftDelete, type
} from "@sphinx-software/gluon";

import {provider} from "@sphinx-software/fusion/Fusion/Fusion";
import {singleton, bind} from "@sphinx-software/fusion/MetaInjector";

// export MessageProvider   from "./Message/ValidationMessage";
// export LoginForm         from "./Http/LoginForm";
// import Quotes            from "./Quotes";
// export QuoteShowCommand  from "./Console/QuoteShowCommand";
// export DateTimeViewMacro from "./Http/DateTimeViewMacro";
// export WelcomeController from "./Http/WelcomeController";

@bind()
export class Credential {

    @readonly()
    @type(PrimaryKey)
    id = 1;

    @readonly()
    @type(SoftDelete)
    deletedAt = null;

    @type(String)
    username = '';

    @type(String)
    password = ''
}

@singleton()
@databaseRepository(Credential)
export class CredentialRepository extends DatabaseRepository {

}

@provider()
export class AppServiceProvider {

    constructor(container) {
        this.container = container;
    }

    register() {

    }

    async boot() {
        let repo = await this.container.make(CredentialRepository);

        let credentials = await repo.all();

        console.log(credentials.map(credentials => credentials.toJson()));
    }
}
