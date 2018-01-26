import 'winston-daily-rotate-file';
import winston from 'winston';
import path    from 'path';
import cache   from './cache';
import koaStatic from 'koa-static';
import SessionStartMiddleware from "../../Session/SessionStartMiddleware";

export default {

    modules: [
        // Frameworks Module
        './../Http',
        './../Serializer',
        './../Hash',
        './../Log',
        './../MetaInjector',
        './../View',
        './../Storage',
        './../Cache',
        './../Url',
        './../Timer',
        './../Mail',
        './../Console',
        './../Session',

        // Application Module
        'Http',
        'Console',
        'Quotes'
    ],

    http: {
        port        : process.env.HTTP_PORT   || 3000,
        host        : process.env.HTTP_HOST   || 'localhost:3000',
        secure      : process.env.HTTP_SECURE || false,
        asset       : '/',

        // Global middlewares
        middlewares : [
            koaStatic(path.normalize(path.join(__dirname, '..', 'public')))
            // Uncomment the middleware bellow to enable session service
            // SessionStartMiddleware
        ],
    },
    cache,
    hash: {
        rounds: 10
    },

    mail: {
        'default': process.env.MAIL_TRANSPORT || 'development',

        transports: {

            // This is just for the development purpose.
            // The mailer will log the email to the log file instead of
            // sending it.
            development: {
                service: 'log'
            },

            google : {

                // For more transport configuration, see: https://nodemailer.com
                service: 'gmail',
                auth: {
                    user: process.env.MAIL_GOOGLE_USERNAME || 'test1@sphinx-software.com',
                    pass: process.env.MAIL_GOOGLE_PASSWORD || 'hackduocthidung'
                }
            },

            // Add more mail transport if needed here
        },

        // The default options for mail. See https://nodemailer.com for more options
        options: {
            from: process.env.MAIL_FROM || 'noreply@sphinx-software.com',
            subject: 'Test mailer'
        }
    },

    log: {
        transports: [

            // File rotate logger
            new winston.transports.DailyRotateFile({
                filename   : path.normalize(
                    `${__dirname}/../storages/logs/sphinx--`),
                datePattern: 'yyyy-MM-dd.log',
                level      : 'debug'
            }),

            // Error logger
            new winston.transports.File({
                filename: path.normalize(
                    `${__dirname}/../storages/logs/error.log`),
                level   : 'error'
            })
        ],

        level: process.env.LOG_LEVEL || 'debug'
    },

    view: {
        directory: path.normalize(path.join(__dirname, '..', 'resources', 'views')),
    },

    session: {
        use     : process.env.SESSION_ADAPTER || 'filesystem',
        timeout : 1000 * 3600 * 24 * 30, // Set the session timeout for 30days

        adapters: {
            filesystem: {
                prefix     : 'session',
                directory  : path.normalize(path.join(__dirname, '..', 'storages', 'sessions')),
            },

            mongo: {
                collection : 'sessions'
            },

            database: {
                table      : 'sessions'
            },
            redis: {

            },
            memory: { }
        }
    }
};
