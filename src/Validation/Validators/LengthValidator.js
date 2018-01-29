export class LengthValidator {
    async validate(data, field, min, max) {

        let $max = parseInt(max);
        let $min = parseInt(min);

        return data[field].length >= $min &&
            data[field].length <= $max
        ;
    }
}

export class MinValidator {

}

export class MaxValidator {

}
