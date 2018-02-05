import {viewRendering} from "Fusion/View";
import {singleton} from "Fusion/MetaInjector";

@singleton()
@viewRendering('welcome')
export default class DateTimeViewMacro {
    run(view) {
        view.bind('date', new Date());
    }
}
