
/**duplicate each occurence of zero shifting remaining element to right
 * i should be placed at last of the array and it will compare arr values
 * j will placed the values
 * while i is greater than zero then
 * if j is in limit means inside the array length then arr[j]=arr[i]
 * 
 */


function duplicateZeros(arr){
    let count = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
            count++;
        }
    }

    let i = arr.length-1;
    let j = arr.length-1+count;

    while(i>=0){
        if(j<arr.length){
            arr[j] = arr[i];
        }
        if(arr[i]===0){
            j--;
            if(j<arr.length){
                arr[j] = arr[i];
            }
        }
        i--;
        j--;
    }
    return arr;
}

console.log(duplicateZeros([1,0,2,3,0,4,5,0]))