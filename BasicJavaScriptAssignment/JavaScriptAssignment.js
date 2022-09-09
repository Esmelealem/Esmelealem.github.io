//#1. Max Function
function max(x, y) {
  return x > y ? x : y;
}
console.log(max(3, 5));

function testMax() {
    let a = max(8,7);
    let message = "Expected output of max(3,7) is7 ";
    if (a === 8) {
        message += "TEST SUCCEEDED";
    } else {
        message += "TEST FAILED";
    }
    console.log(message);
}
testMax();
//#2. Max Of Three Function
function maxOfThee(x, y, z) {
  var max = 0;
  if (x >= y && y > z) {
    max = x;
  } else if (y >= x && y >= z) {
    max = y;
  } else {
    max = z;
  }
  return max;
}

console.log(maxOfThee(8, 12, 90));

function testMaxOfThree() {
    let a = maxOfThee(8,7,2);
    let message = "Expected output of max(3,7,2) is 8 ";
    if (a === 8) {
        message += "TEST SUCCEEDED";
    } else {
        message += "TEST FAILED";
    }
    console.log(message);
}

testMaxOfThree();
//#3. Checking vowel values
 function isVowel(charval) {
  var vowels = new Array("a", "e", "u", "o", "i");
  for (var i = 0; i < 5; i++) {
    if (vowels[i] === charval) {
      return true;
    }
  }
  return false;
}
console.log(isVowel('b'));

var array = [2, 3, 4, 5, 9, 10, 4, 55];
let result = 0;
//#4. Sum of all array values
function sum(arr) {
    const reducer=(accumulator,curr)=>accumulator+curr;
    return arr.reduce(reducer);
}
console.log("The sum of the given array values is :"+sum(array));

// //#5. Product of all Array values
function Mult(arr)
 {
    const multiply=(accumulator,prod)=>accumulator*prod;
    return arr.reduce(multiply);
}
console.log("The product of the given array values is :"+Mult(array));

//#6. string Reverse Function
function reverse(str) {
  var splitString = str.split("");
  return splitString.reverse();
}
console.log("The Reversed value of the given string is :"+reverse("hallo"));
//#7. Find Longest Word
function findLongestWord(str) {
    let maxLength = 0;
    for (let a of str) {
        if (a.length > maxLength) {
            maxLength = a.length;
        } 
    }
    return maxLength;
}

console.log("Longest word", findLongestWord(["nehi", "abena", "Esmelealem", "belay"]));
//#8. Filter Logest words from the given array by comparing with a given I
function filterLongWord(arr, i) {
    let logestWord ='';
    for(let word of arr) 
{
    if(word.length> i)
    {
        logestWord=word; 
    }
}
return logestWord;

}
console.log(filterLongWord("Abebe", "Kebedeee","Almaz",5));
//#8. Modifeying the given function
//Modify the jsfiddle on the map/filter/reduce slide ( https://jsfiddle.net/keithlevi/e6kqvx2f/9/ ) as follows:
/*
a) multiply each element by 10; 

b) return array with all elements equal to 3; 

c) return the product of all elements;*/

const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem * 10;  
})

const b2 = a.map(function(elem, i, array) {
    return elem =3;  
  })
  const b3 = a.map(function(elem, i, array) {
    return elem * elem;  
  })
document.writeln(b.toString() + "<br/>");
const c = a.filter(function(elem, i, array){
  return elem !== 3;});
document.writeln(c.toString() + "<br/>");
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue + elem;
});
document.writeln(d+ "<br/>");

const d2 = a.find(function(elem) {return elem > 1;}); //3
const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
document.writeln(d2+ "<br/>");
document.writeln(d3);