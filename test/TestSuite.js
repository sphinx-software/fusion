import {ApplicationTestSuite} from "WaveFunction";
import * as config from "../config";
import * as manifest from "../manifest";

export default class TestSuite extends ApplicationTestSuite {
    manifest() {
        return manifest;
    }

    config() {
        return config;
    }
}
