import format from 'string-template';
import {provider, ViewFactoryInterface} from "Fusion";

class ValidationMessage {
    messages = {
        'required'   : '{0} is required',
        'equals'     : 'Wrong {0}',
        'length.min' : '{0} too short ({1} characters minimum)',
        'length.max' : '{0} too long ({1} characters maximum)'
    };

    make(messageKey, fieldName, validationParameters) {
        if (!this.messages[messageKey]) {
            return messageKey;
        }

        return format(this.messages[messageKey], fieldName, validationParameters);
    }
}

@provider()
export default class ValidationMessageServiceProvider {
    constructor(container) {
        this.container = container;
    }

    register() {
        this.container.value(ValidationMessage, new ValidationMessage());
    }

    async boot() {
        let view = await this.container.make(ViewFactoryInterface);

        view.global('message', await this.container.make(ValidationMessage));
    }
}
