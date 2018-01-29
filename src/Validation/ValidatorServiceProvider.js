import ValidatorManager from "./ValidatorManager";
import {LengthValidator} from "./Validators/LengthValidator";
import {provider} from "@sphinx-software/fusion/Fusion/Fusion";

@provider()
export default class ValidatorServiceProvider {

    constructor(container, fusion) {
        this.container = container;
        this.fusion    = fusion;
    }

    register() {
        this.container.singleton(ValidatorManager, async () => {
            return new ValidatorManager();
        })
    }

    async boot() {
        let manager = await this.container.make(ValidatorManager);

        let validatorClasses = this.fusion.getByManifest('validation.validator');

        manager
            .add('length', new LengthValidator())
        ;

        for (let index = 0; index < validatorClasses.length; index++) {
            let Validator = validatorClasses[index];
            let validatorName = Reflect.getMetadata('validation.validator', Validator);
            let validator = await this.container.make(Validator);

            manager.add(validatorName, validator)
        }
    }
}
