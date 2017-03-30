module.exports = async function (config, container) {
    await require('./container.bootstrap')(config, container);

    return container;
};
