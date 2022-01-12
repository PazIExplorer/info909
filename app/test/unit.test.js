const assert = require('assert');
const { sub, mul, add,pow } = require("../functions");
describe('Tests unitaire', () => {
    it('should return -3', () => {
        assert.equal(sub(2, 5), -3);
    });
    it('should return 7', () => {
        assert.equal(add(2, 5), 7);
    });
    it('should return 12', () => {
        assert.equal(mul(6, 2), 12);
    });
    it('should return 9',()=> {
        assert.equal(pow(3,2), 9);
    });
});