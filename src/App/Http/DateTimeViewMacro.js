import {viewRendering} from "../../../../sphinx-web-stdlib/View/ViewServiceProvider";
import {singleton} from "../../../../sphinx-web-stdlib/MetaInjector/index";

@singleton()
@viewRendering('welcome')
export default class DateTimeViewMacro {
    run(view) {
        view.bind('date', new Date());
    }
}
