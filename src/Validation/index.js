// Concepts
//
//
// class ValidatorInterface {
//     async validate(data, field, ...otherParameters) {
//
//     }
// }
//
// const ruleDefinition = {
//     username: ['length:8:40', 'existed', 'email-unique'],
//     password: ['length:8'],
//
// };

export ValidatorServiceProvider from "./ValidatorServiceProvider";
export * from "./decorators";
