const Youch = require('youch');

module.exports = async (context, next) => {
    try {
        await next();
    } catch (error) {
        let youch = new Youch(error, context.request);

        context.body = await youch.toHTML();
    }
};
