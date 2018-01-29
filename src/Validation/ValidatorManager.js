import lodash from 'lodash';
import Rules from "./Rules";
import CallbackValidator from "./Validators/CallbackValidator";

export default class ValidatorManager {
    validators = {};

    /**
     *
     * @param name
     * @param {ValidatorInterface|Function} validator
     * @return {ValidatorManager}
     */
    add(name, validator) {
        this.validators[name] = lodash.isFunction(validator) ?
            new CallbackValidator(validator) :
            validator
        ;

        return this;
    }

    get(name) {
        if (!this.validators[name]) {
            throw new Error(`E_VALIDATOR: Validator [${name}] is not supported`);
        }
        return this.validators[name];
    }

    make(ruleDefinition) {
        return new Rules(lodash.mapValues(ruleDefinition, (fieldDefinition) => this.makeValidatorSequence(fieldDefinition)))
    }

    makeValidatorSequence(fieldDefinition) {
        return fieldDefinition.map(definitionString => {
            let segments        = definitionString.split(':');
            let validatorName   = segments[0];
            let validator       = this.get(validatorName);

            segments.shift();

            return {
                definition      : definitionString,
                validatorName   : validatorName,
                validator       : validator,
                parameters      : segments
            }
        })
    }
}
