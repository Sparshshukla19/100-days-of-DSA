/**Leetcode 69. Sqrt(x) */

function sqrt(n){
    let i;
    for(i=0;i*i<=n;i++){
        if(i*i===n)return i;
    }
    return i-1;
}
// console.log(sqrt(20));

function mySqrt(x){
    let first = 1, last = x, ans=0;
    while(first<=last){
        let mid = Math.floor((first+last)/2);
        if(mid*mid <= x){
            ans = mid;
            first = mid + 1;
        }
        else{
            last = mid - 1;
        }
    }
    return ans;
}

console.log(mySqrt(20))