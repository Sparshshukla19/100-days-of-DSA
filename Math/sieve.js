// Prime using Sieve Algorithm

function countPrime(n){
    let primeArr = new Array(n+1).fill(true);
    for(let i=2;i<=Math.sqrt(n);i++){
        if(primeArr[i]){
            for(let j=i*i;j<=n;j=j+i){
                primeArr[j] = false;
            }
        }
    }
    let count = 0;
    for(let i=2;i<=n;i++){
        if(primeArr[i]){
            count++;
        }
    }
    return count;
}
// console.log(countPrime(2))

function findFactors(n) {
    // Write your code here
    for(let i=1;i<=n;i++){
        if(n%i===0){
            process.stdout.write(i+" ")
        }
    }
}

// findFactors(6)

var kthFactor = function(n, k) {
    let arr = [];
    for(let i=1;i<=n;i++){
        if(n%i===0){
            arr.push(i)
        }
    }
    if(k>arr.length){
        return -1;
    }
    return arr[k-1];
};

// console.log(kthFactor(15,2));