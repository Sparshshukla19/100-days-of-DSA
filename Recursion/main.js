/**
 * 1. printing n to 1 sum of n natural numbers
 */

function sum(n) {
    if (n == 1) return n;
    return n + sum(n - 1)
}

// console.log(sum(5))

/**fibonacci using loop */

function fiboUsingLoop(n) {
    let first = 0, second = 1;
    process.stdout.write(first + " " + second + " ");

    for (let i = 1; i <= n - 2; i++) {
        let third = first + second;
        process.stdout.write(third + " ");
        first = second;
        second = third;
    }
    return;
}

// fiboUsingLoop(5);

/** fibonacci using recursion */

function fibo(n, first, second) {
    if (n == 0) return;
    let third = first + second;
    process.stdout.write(third + " ");
    fibo(n - 1, second, third);
}

function main(n) {
    let first = 0, second = 1;
    process.stdout.write(first + " " + second + " ");
    fibo(n - 2, first, second);
}

// main(5);

/** nth term of fibonacci */

function nTerm(n) {
    if (n === 0 || n === 1) return n;
    return nTerm(n - 1) + nTerm(n - 2);

}

// console.log(nTerm(5));

/**Factorial */

function factorial(n){
    if(n===0 || n===1)return 1;
    return n*factorial(n-1);
}

// console.log(factorial(5));

/**Reverse through Recursion */

function reverse(n,rev=0){
    n = Math.abs();
    if(n>9)return n;
    
}

console.log(reverse(15));