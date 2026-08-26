/**Removing Duplicates from Sorted Array
 * Return the length of non duplicated part of array
 */

function dupli(arr){
    let i=0,j=1;
    while(i<arr.length-1){
        if(arr[i] != arr[i+1]){
            arr[j] = arr[i+1];
            j++;
        }
        i++
    }
    return j;
}

// console.log(dupli([0,0,1,1,1,2,2,3,3,4]));
