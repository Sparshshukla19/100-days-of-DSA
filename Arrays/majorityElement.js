/**Majority element - it is the element which occur more than array.length/2 times 
 * so in this question we have ans & count we set default ans =  first element and count = 1
 * if ans == arr[i]then count++ and if not if count = 0 then set that particular element as ans and count raise to 1
 * and if ans !== arr[i] then reduce the count--
*/

function majorityElem(arr){
    let ans = arr[0], count = 1;
    for(let i=1;i<arr.length;i++){
        if(count===0){
            ans = arr[i];
            count = 1;
        }
        else if(ans === arr[i])count++;
        else count--;
    }
    return ans;
}

console.log(majorityElem([5,5,5,5,5,4,4,4,4]));