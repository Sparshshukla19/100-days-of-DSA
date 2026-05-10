/* LINEAR SEARCH */

// let prompt = require("prompt-sync")();
// let arr = [51,41,58,69,46,12,19,74,10];
// let target = Number(prompt("Enter a target element:"));

// let index = -1;
// for(let i=0;i<arr.length;i++){
//     if(target === arr[i]){
//         index = i;
//         break ;
//     }
// }
// console.log(index== -1? "Not found": "found at "+ index +" index");

/* BINARY SEARCH */

// let prompt = require("prompt-sync")();
// let arr = [4,8,13,19,28,39,49,78,88];
// let target = Number(prompt("Enter a Target number:"));

// let start = 0, end=arr.length-1,index=-1 ;

// while(start<=end){
//     let mid = Math.floor((start+end)/2);
//     if(arr[mid]==target){
//         index = mid;
//         break;
//     }
//     else if(arr[mid]<target){
//         start = mid+1;
//     }
//     else{
//         end = mid-1;
//     }
// }

// if(index==-1){
//     console.log("Target not found");
    
// }
// else{
//     console.log(`Target found at ${index} index`);
    
// }


//----------SORTING ALGOS--------------//
//----BUBBLE SORT-------//
// let arr = [7,8,2,9,1,3];
// let n = arr.length;
// for(let i=0;i<n-1;i++){
//     for(let j=0;j<n-1-i;j++){
//         if(arr[j]>arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp
//         }
//     }
// }
// console.log(arr);


//-----INSERTION SORT--------//

// let arr = [7,8,2,9,1,3];
// let n = arr.length;

// for(let i=1;i<n;i++){
//     let key = arr[i];
//     let j = i-1;
//     while(j>=0 && arr[j]>key){
//         arr[j+1] = arr[j];
//         j-- ;
//     }
//     arr[j+1] = key
// }

// console.log(arr);


//------SELELCTION SORT-------//

// let arr = [7,8,2,9,1,3];
// let n = arr.length;
//     for(let i=0;i<n-1;i++){
//         let min = i;
//         for(let j=i+1;j<n;j++){
//             if(arr[j]<arr[min]){
//                 min = j;
//             }
//         }
//         if(min != i){
//             let temp = arr[min];
//             arr[min] = arr[i];
//             arr[i] = temp; 
//         }

//     }

//     console.log(arr);

