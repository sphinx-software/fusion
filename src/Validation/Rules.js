export default class Rules {

    results = { validity: true, details: { } };

    constructor(rules) {
        this.rules = rules;

    }

    reset() {
        this.results = { validity: true, details: { } };
    }

    async apply(data) {

        for (let field in data) {
            if (data.hasOwnProperty(field)) {
                let result = {validity: true, valids: [], invalids: []};

                for (let index = 0; index < this.rules[field].length; index++) {

                    let validatorDescription = this.rules[field][index];
                    let validationResult = await validatorDescription.validator.validate(data, field, ...validatorDescription.parameters);

                    if (validationResult) {
                        result.valids.push(validatorDescription.validatorName);
                    } else {
                        result.validity = false;
                        result.invalids.push(validatorDescription.validatorName);
                        this.results.validity = false;
                    }
                }

                this.results.details[field] = result;
            }
        }
    }

    isValid() {
        return this.results.validity;
    }

    isFieldValid(fieldName) {
        if (this.results[fieldName]) {
            throw new Error(`E_RULES: Field [${fieldName}] is not existed in rules`);
        }
        return this.results[fieldName].validity;
    }

    getInvalidReasons() {

    }

    getInvalidReasonsFor(fieldName) {

    }

    getValidFields() {

    }

    getInvalidFields() {

    }

    getResults() {

    }

    toJson() {
        return this.getResults();
    }
}

