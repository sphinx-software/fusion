import winstonDailyRotateFile from 'winston-daily-rotate-file';

import winston from 'winston';
import path    from 'path';

// Logger configuration
// for more options see https://github.com/winstonjs/winston
module.exports = {
    transports: [

        // File rotate logger
        new winston.transports.DailyRotateFile({
            filename: path.normalize(`${__dirname}/../storages/logs/sphinx--`),
            datePattern: 'yyyy-MM-dd.log',
            level: 'debug'
        }),

        // Error logger
        new winston.transports.File({
            filename: path.normalize(`${__dirname}/../storages/logs/error.log`),
            level: 'error'
        }),
    ],

    level: process.env.LOG_LEVEL || 'debug'
};
