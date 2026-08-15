//1. GCD{BruteForce}

function gcd(a,b){
    let min = Math.min(a,b);
    for(i=min;i>=1;i--){
        if(a%i===0 && b%i===0){
            return i;
        }
    }
}

// console.log(gcd(20,36));
//1a
function recgcd(n,a,b){
    if(n==1) return 1;
    if(a%n===0 && b%n===0) return n;
    return recgcd(n-1,a,b);
}

// console.log(recgcd(Math.min(20,36),20,36));
//1b
function recgcd2(a,b){
    if(a==b)return a;
    if(a>b) return recgcd2(a-b,b);
    return recgcd2(a,b-a);
}
// console.log(recgcd2(20,36));

//Optimal Way

function optimalGcd(a,b){
    if(b===0)return a;
    return optimalGcd(b,a%b);
}

console.log(optimalGcd(20,36));