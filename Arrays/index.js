const prompt = require('prompt-sync')();

// let arr = new Array(3);
// for(let i=0;i<arr.length;i++){
//     arr[i] = new Array(2) 
// }


// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//     arr[i][j] = prompt("Enter the values: ")
// }
// }

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//      process.stdout.write(arr[i][j]+" ")
// }
// console.log()
// }


// Multi D array in single line
// let list = Array.from({length:3}, ()=> new Array(2).fill(1) );

// let outersize = Number(prompt("Enter the size of outer array: "))
// let arr = new Array(outersize)

// for(let i=0;i<arr.length;i++){
//     let innersize = Number(prompt("Enter the size of inner array: "))
//     arr[i] = new Array(innersize)
// }

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         arr[i][j] = Number(prompt("Enter the elements: "))
//     }
// }
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         process.stdout.write(arr[i][j]+" ");
//     }
//     console.log()
// }/


//// Questions
//1. Sum of Diagnals of Matrix without taking that element which is a part of primary Diagnal

const arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

function sumOfDiagnals(array){
    let sum = 0;
for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(i==j || i+j==arr[i].length -1){
                sum = sum + arr[i][j];
            }
        }
    }
    return sum;
}
// console.log(sumOfDiagnals(arr))

///2. Tranpose Matrix

function transposeMatrix(arr){
    let row = arr.length, col = arr[0].length ;
    let temp = new Array(col)

    for(let i=0;i<temp.length;i++){
        temp[i] = new Array(row)
    }
    for(let i=0;i<arr.length;i++){
        for(j=0;j<arr[i].length;j++){
            temp[j][i] = arr[i][j]
        }
    }
    return temp;
}
const matrix =  [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
// console.log(transposeMatrix(matrix));

///3.Flip the row and inverse the image of elements in 1 OR 0

function flipAndInverse(mat){
    for(let i=0;i<image.length;i++){
        let arr = image[i]
        let j=0, k=arr.length-1 ;
        while(j<k){
            let temp = arr[j];
            arr[j] = arr[k];
            arr[k] = temp
            j++;
            k--;
        }
    }
    for(let i=0;i<image.length;i++){
        for(let j=0;j<image[i].length;j++){
            if (image[i][j] == 1) {
            image[i][j] = 0;
}           else {
            image[i][j] = 1;
}
        }
    }
    return image;
}