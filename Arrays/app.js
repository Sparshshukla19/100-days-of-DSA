let prompt = require("prompt-sync")();

////ARRAY INPUT
let n = Number(prompt("enter size of array:"));

let arr = new Array(n);

for(let i=0; i<arr.length;i++){
    arr[i] = Number(prompt("enter the array values:"));
}
console.log(arr);

//------------------------------------------------------------

////GREATEST NUMBER
let arr = [14,52,23,156,239,56,89,789,85,4598,456,412,235];

let max = arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i]
    }
}
console.log(max);

////2nd GREATEST ELEMENT

let arr = [14,52,23,156,239,56,89,789,85,4598,456,412,235];
let max = Math.max(arr[0],arr[1]);
let smax = Math.min(arr[0],arr[1]);

for(let i=2;i<arr.length;i++){
    if(arr[i]>max){
        smax = max;
        max = arr[i];
    }
    else if(arr[i]>smax && arr[i]!=max){
        smax = arr[i];
    }
}
console.log(max,smax);

////REVERSE AN ARRAY

let arr = [56,12,23,46,7];
let temp = new Array(arr.length);

let i = arr.length - 1;
for(let j=0;j<temp.length;j++){
    temp[j] = arr[i];
    i-- ;
}

console.log(temp);
console.log(arr);


////---------------------------------------2nd Method(TWO POINTER)
let arr = [56,12,23,46,7];

let i=0, j = arr.length - 1 ;
while(i<j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
}

console.log(arr);

////SORTING OF 0 to LEFT & 1 to RIGHT

let arr = [1,0,1,1,0,1,1,0];

let i=0,j=0;
while(i<arr.length){
    if(arr[i]==0){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++;
    }
    i++;
}
console.log(arr);

////--LEFT ROTATION----
let arr = [1,2,3,4,5];
let temp = arr[0];

for(let i=1;i<arr.length;i++){
    arr[i-1] = arr[i];
}
arr[arr.length - 1] = temp ;

console.log(arr);

////--RIGHT ROTATION

let arr = [1,2,3,4,5];
let temp = arr[arr.length-1];
for(let i=(arr.length-2);i>=0;i--){
    arr[i+1] = arr[i];
}
arr[0] = temp;

console.log(arr);

////---LEFT ROTATION BY K 

let arr = [1,2,3,4,5];
let k=6;

k = k % arr.length ;
for(let j=1;j<=k;j++){
    let temp = arr[0];

for(let i=1;i<arr.length;i++){
    arr[i-1] = arr[i];
}
arr[arr.length - 1] = temp ;
}

////----SUM OF SUB-ARRAYS EQUALS TARGET VALUE

let arr = [1,2,3,7,5];
let target = 12;
let count = 0;
for(let i=0;i<arr.length;i++){
    let sum = 0;
    for(let j=i;j<arr.length;j++){
        sum = sum + arr[j];
        if(sum == target){
            count++
        }
    }
}
console.log(count);