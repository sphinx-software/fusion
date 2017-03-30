exports.register = async (container) => {
    // application services
};

exports.boot = async (container) => {

    let view = await container.make('view');

    // Add extra data for the view
    //
    view.rendering('welcome', function (template) {
        template.bind('date', new Date());
    });

    // Other services configuration here
    //
};
