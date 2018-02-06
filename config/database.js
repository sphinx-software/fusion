import path from "path";

export default {

    "default": "sqlite",

    "connections": {
        "sqlite": {
            "useNullAsDefault": true,
            "client": "sqlite3",
            "connection": {
                "filename": path.normalize(path.join(__dirname, "..", "resources", "database", "db.sqlite"))
            }
        },

        "mysql": {
            "client": "mysql",
            "connection": {
                "host"     : '127.0.0.1',
                "user"     : 'your_database_user',
                "password" : 'your_database_password',
                "database" : 'myapp_test'
            }
        },

        "cqs": {
            "read": {
                "sqlite": {
                    "useNullAsDefault": true,
                    "client": "sqlite3",
                    "connection": {
                        "filename": path.normalize(path.join(__dirname, "..", "resources", "database", "db.sqlite"))
                    }
                }
            },
            "write": {
                "sqlite": {
                    "useNullAsDefault": true,
                    "client": "sqlite3",
                    "connection": {
                        "filename": path.normalize(path.join(__dirname, "..", "resources", "database", "db.sqlite"))
                    }
                }
            }
        }
    }
}
