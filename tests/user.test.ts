import { expect } from 'chai';
import {User} from "../src/models/entities/User";

describe('User tests', () => {
    it('checking user object', () => {
        const user = new User();
        user.firstname = "Michael";
        expect(user.firstname).to.equal("Michael");
    });
});
