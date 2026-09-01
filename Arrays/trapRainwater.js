/**Trapping rainwater
 * we have to calculate the trapped water between bars (As in given array)
 * Naive method-:
 * we will calculate leftMax and rightMax from an current element and we will add the minimum(leftMax,rightMax)-arr[i] to the total value
 */

function trap(arr){
    let total = 0;
    for(let i=0;i<arr.length;i++){
        let leftMax = arr[i];
        let rightMax = arr[i];

        for(let j=i;j>=0;j--){
            leftMax = Math.max(leftMax,arr[j]);
        }
        for(let j=i;j<arr.length;j++){
            rightMax = Math.max(rightMax,arr[j]);
        }
        total = total + ( Math.min(leftMax,rightMax) - arr[i]);
    }
    return total;
}

// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))

/**Better Solution
 * using two extra arrays left and right which will store the the evaluated value of Max between leftMax,arr[i] & rightMax,arr[i]
 */
function trap2(arr){
    let total = 0;
    let left = new Array(arr.length)
    let right = new Array(arr.length)
    let leftMax = arr[0], rightMax = arr[arr.length-1];
    for(let i=0;i<left.length;i++){
        leftMax = Math.max(leftMax,arr[i]);
        left[i] = leftMax;
    }
    for(let i=right.length-1;i>=0;i--){
        rightMax = Math.max(rightMax,arr[i]);
        right[i] = rightMax;
    }
    for(let i=0;i<arr.length;i++){
        total = total + (Math.min(left[i],right[i])-arr[i])
    }
    return total;
}

// console.log(trap2([0,1,0,2,1,0,1,3,2,1,2,1]));

/**Optimal solution */

function trap3(height){
     let left = 0, right = height.length-1;
    let leftMax = 0, rightMax = 0;
    let total = 0;
    while(left<=right){
        leftMax = Math.max(leftMax,height[left])
        rightMax = Math.max(rightMax,height[right])

        if(leftMax<rightMax){
            total = total + (leftMax - height[left]);
            left++;
        }
        else{
            total = total + (rightMax - height[right]);
            right--;
        }
    }
    return total;
}

console.log(trap3([0,1,0,2,1,0,1,3,2,1,2,1]));

