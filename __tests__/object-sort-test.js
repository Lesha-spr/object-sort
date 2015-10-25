jest.dontMock('../index.js');

var sortObject;

beforeEach(function() {
    sortObject = require('../index.js');
});

describe('sort-object', function() {
    it('Should return object with sorted keys from unsorted alphabetical keys', function() {
        expect(sortObject({c: 15, a: 5, b: 10})).toEqual({a: 5, b: 10, c: 15});
    });

    it('Should return object with sorted keys from unsorted numeric keys', function() {
        expect(sortObject({'3': 15, '1': 5, '2': 10})).toEqual({'1': 5, '2': 10, '3': 15});
    });
});