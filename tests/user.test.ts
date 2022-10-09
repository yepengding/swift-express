/**
 * User API Test Cases
 *
 * @author Yepeng Ding
 */
import {App} from "../src/app";
import request from "supertest";
import * as http from "http";
import * as process from "process";

describe('User API tests', () => {

    let server: http.Server;

    before(() => {
        const app = new App();
        server = app.run();
    })

    after(() => {
        server.close();
        process.exit(0);
    })

    it('GET: /users', async () => {
        await request(server)
            .get("/users")
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
    });
});
