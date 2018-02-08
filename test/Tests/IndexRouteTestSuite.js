import {testSuite, testCase} from "WaveFunction";
import TestSuite from "../TestSuite";
import http from 'http';
import {JSDOM} from 'jsdom';

@testSuite()
export default class IndexRouteTestSuite extends TestSuite {

    @testCase()
    async testIfIndexIsOkayWithGreetingMessage() {
        // Using chai-http
        // For mor usage, see http://chaijs.com/plugins/chai-http/
        let response = await this.dispatchHttp().get('/');

        this.chai.expect(response).to.have.status(200);

        // Assert the title content
        let dom = new JSDOM(response.text);
        this.chai.expect(dom.window.document.querySelector('h1').textContent).to.be.equal('Hi! from Fusion');
    }
}
