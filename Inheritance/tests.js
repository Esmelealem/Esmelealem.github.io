let testarray=[6,4,0,3,-2,1];
let string="This house is neither negative not nice!";

window.onload = tester;

function tester(){
    describe("filter", function(){
        it("returns the string after removed banned words", function(){
            assert.equal(string.filter(["not", "neither", "negative"]), "This house is nice!");
        });
    });
    describe("filter", function(){
        it("returns the string after removed banned words", function(){
            string2="Jhon has not different colors about his office clothes"
            assert.equal(string.filter(["not", "neither", "negative"]), "This house is nice!");
        });
    });
    describe("bubbleSort", function(){
        it("takes an array and returns sorted array", function(){
            assert.equal(bubbleSort(testarray), [-2,0,1,3,4,6]);
        });
    });
    describe("bubbleSort", function(){
        it("takes an array and returns sorted array", function(){
            let array=[2,4,7,3,1,9]
            assert.equal(bubbleSort(array), [1,2,3,4,7,9]);
        });
    });
    mocha.run();
}