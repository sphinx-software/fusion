export default {

    default: "session"
    defaultAdapter: "mysql",

    adapters: {
        mysql: {
            credentialTable: "credentials",
            usernameField: "username",
            passwordField: "password"
        },
        mongodb: {
            credentialDocument: "credentials",
            usernameField: "username",
            passwordField: "password"
        }
    },

    session: {
        sessionAuthKey: 'sphinx-software'
    }
}
