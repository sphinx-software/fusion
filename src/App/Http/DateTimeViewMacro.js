import {viewRendering} from "@sphinx-software/fusion/View";
import {singleton} from "@sphinx-software/fusion/MetaInjector";

@singleton()
@viewRendering('welcome')
export default class DateTimeViewMacro {
    run(view) {
        view.bind('date', new Date());
    }
}
