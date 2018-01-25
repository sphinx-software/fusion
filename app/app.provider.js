import Quotes from 'app/quotes/Quotes';

exports.register = async (container) => {

    // Application services
    container.singleton('quotes', async () => {
        return new Quotes();
    });
};

exports.boot = async (container) => {

    let view = await container.make('view');

    // Add extra data for the view
    //
    view.rendering('welcome', (template) => {
        template.bind('date', new Date());
    });

    // Other services configuration here
    //

    let consoleKernel = await container.make('console.kernel');
    await consoleKernel.register('QuoteCommand');
};
