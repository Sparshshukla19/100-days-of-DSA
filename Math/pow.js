/**Power of base eg. 2^10
 * 2^10=2^5.2^5
 * 2^5=2^2.2^2.2
 * 2^2=2^1.2^1
 * 2^1=2^0.2^0.2
 * 2^0---> base case
 */

function solve(x,n){
    if(n==0)return 1;
    let ans = solve(x,Math.floor(n/2));
    if(n%2===0)return ans*ans;
    return ans*ans*x;
}
function power(x,n){
    if(n===0)return 1.0;
    if(n<0){
        n = -n
        return 1/solve(x,n);
    }
    return solve(x,n);
}

console.log(power(2,-4));