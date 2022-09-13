/* 4 Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers*/
// (function()
// {
"use strict";

function sum(x){
    return x.reduce((acc,val)=>acc+val);
}
function multiply(x){
    return x.reduce((acc,val)=>acc*val);
}

function multiply(x){
    return x.reduce((acc,val)=>acc*val);
}
/* 5 Define a function reverse() that computes the reversal of a string.*/
function reverse(str){  
    return str.split("").map(result=>result).reverse().join("");
}

/*7 Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i. */
function filterLongWords(str,i)
{
    return  str.filter(word=>word.length>i);
}
