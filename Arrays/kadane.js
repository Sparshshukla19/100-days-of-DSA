/**Maximum Subarray Sum
 * Using Kadane Algo
 */

function maxSubArray(arr){
    let max = 0, curSum = 0;
    for(let i=0;i<arr.length;i++){
        curSum = curSum + arr[i];
        if(max<curSum){
            max = curSum;
        }
        if(curSum<0){
            curSum = 0;
        }
    }
    return max;
}

console.log(maxSubArray([]))