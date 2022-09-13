mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;

describe('sum()', function() {
    it("The sum of the array [2,3,2] is 7", function() {
        let array=[2,3,2];
        assert.equal(sum(array), 7);
    });

    it("The sum of [3,5,2,7] is 17", function() {
        let array=[3,5,2,7];
        assert.equal(sum(array), 17);
    });
});

describe('multiply()', function() {
    it("The multiplication of the arrays [2,3,2] is 12", function() {
        let array=[2,3,2];
        assert.equal(multiply(array), 12);
    });

    it("The multiplication of [3,5,2] is 30", function() {
        let array=[3,5,2];
        assert.equal(multiply(array), 30);
    });
});

describe('reverse()', function() {
    it("The reverse of 'Hello' is 'olleH'", function() {
        assert.equal(reverse("Hello"), 'olleH');
    });

    it("The reverse of river is revir", function() {
        assert.equal(reverse('river'), 'revir');
    });
});
describe('filterLongWords()', function() {
    it("The longest world from [abebe,keb,alm,Ethiopia] is Ethiopia which is greater than 6", function() {
        let str=["abebe","keb","alm","Ethiopia"];
        assert.equal(filterLongWords(str,6), 'Ethiopia');
    });

    it("The longest world from [john,marta,kalid,William] is William which is greater than 5", function() {
        let str=["john","marta","kalid","William"];
        assert.equal(filterLongWords(str,5), 'William');
    });
});

mocha.run();