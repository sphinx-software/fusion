export default {

    "default": "session",
    "adapter": "database",

    "adapters": {
        "database": {
            "credentialTable": "credentials",
            "usernameField": "username",
            "passwordField": "password"
        },
        "mongodb": {
            "credentialCollection": "credentials",
            "usernameField": "username",
            "passwordField": "password"
        }
    },

    "session": {
        "sessionAuthKey": "sphinx-software"
    },

    "token": {

    }
}
