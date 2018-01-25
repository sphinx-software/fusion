import Quotes from 'app/quotes/Quotes';

exports.register = async (container) => {

    // Application services
    container.singleton('quotes', async () => {
        return new Quotes();
    });
};

exports.boot = async (container) => {
    // Other services configuration here
};

exports.bootHttp = async (context) => {
    // Add extra data for the view
    context.view.rendering('welcome', (template) => {
        template.bind('date', new Date());
    });
};

exports.bootConsole = async (consoleKernel) => {
    // register the command for the console
    await consoleKernel.register('QuoteCommand')
};
