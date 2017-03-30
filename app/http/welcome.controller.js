exports.index = async (context) => {
    context.body = context.view.make('index');
};

exports.user = async (context) => {
    context.body = context.view.make('welcome').bind('user', context.params.user);
};
