/**Sort the colors representing values as 0,1,2
 * using Dutch national algo
 * swapping 0s with i pointer & 2s to k pointer hence i-->0 and j--> Arraylength-1
 */

var swap = function(arr,m,n){
    let temp = arr[m];
    arr[m] = arr[n];
    arr[n] = temp;
    return arr;
 }
var sortColors = function(nums) {
    let i=0,j=0,k=nums.length-1;
    while(i<=k){
        if(nums[i]===0){
            swap(nums,i,j);
            j++;
            i++;
        }
        else if(nums[i]===2){
            swap(nums,i,k);
            k--;
        }
        else{
            i++;
        }
    }
    return nums;
};

console.log(sortColors([2,0,2,1,1,0]))