jest.dontMock('../index.js');

var sortObject, sorted;

beforeEach(function() {
    sortObject = require('../index.js');
});

describe('sort-object', function() {
    it('Should return object with sorted keys from unsorted alphabetical keys', function() {
        sorted = sortObject({c: 15, a: 5, b: 10});

        expect(Object.keys(sorted)[0]).toBe('a');
        expect(Object.keys(sorted)[1]).toBe('b');
        expect(Object.keys(sorted)[2]).toBe('c');
    });

    it('Should return object with sorted and reversed keys from unsorted alphabetical keys', function() {
        sorted = sortObject({c: 15, a: 5, b: 10}, true);

        expect(Object.keys(sorted)[0]).toBe('c');
        expect(Object.keys(sorted)[1]).toBe('b');
        expect(Object.keys(sorted)[2]).toBe('a');
    });

    it('Should return object with sorted keys from unsorted numeric keys', function() {
        sorted = sortObject({'3': 15, '1': 5, '2': 10});

        expect(Object.keys(sorted)[0]).toBe('1');
        expect(Object.keys(sorted)[1]).toBe('2');
        expect(Object.keys(sorted)[2]).toBe('3');
    });
});