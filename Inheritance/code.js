function filter(str){
var bannedwords=["not", "niether", "negative"];

return str.replace((x=>x.includes(i)),"");
}
let strings="This house is neither negative not nice!";
// console.log(filter(strings));

String.prototype.filter = function(arr) {
    
    return this.split(" ").filter(val=>!arr.includes(val)).join(" ");
}

console.log(strings.filter(["not", "neither", "negative"]))

function bubbleSort(arr){
        for (let i = 0; i < arr.length; i++) {
            let swapped = false;
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    let tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                    swapped = true;
                }
            }
            if(!swapped){
                break;
            }
        }
        return arr;
    }
    
    
    let arr=[6,4,0, 3,-2,1];
    bubbleSort(arr);
    // console.log(arr);
    