import {Runner, ApplicationTestSuite, Formatter} from "WaveFunction";
import * as testSuites from "Tests"


let runner = new Runner()
    .useFormatter(new Formatter())
;


runner.loadSuites(testSuites);

runner.run();
