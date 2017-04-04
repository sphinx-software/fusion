module.exports = async (context, next) => {
    let user = context.params.user || 'you';

    context.user = user.charAt(0).toUpperCase() + user.slice(1);
    next();
};
