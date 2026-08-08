/**
 * Changing Decimal to Binary
 * 1. 25-->division by 2(r1=1)---->(r2=0)---->(r3=0)---->(r4=1)---->(r5=1)
 * binary value: write from last--11001
 */

function bitValuetoBinary(n) {
    let ans = "";
    while (n > 0) {
        let bit = n % 2;
        ans = bit + ans;
        n = Math.floor(n / 2);
    }
    return ans;
}

// console.log(bitValuetoBinary(6));

/**
 * 1 Changing Binary to decimal
 * 2. 1*2^0 + 0*2^1 + 0*2^2 + 1*2^3 + 1*2^4 = 1+9+16=25
 */

function changebinarytoDeci(n) {
    let ans = 0;
    let count = 0;
    while (n > 0) {
        let bit = n % 10;
        ans = ans + bit * Math.pow(2, count);
        count++;
        n = Math.floor(n / 10);
    }
    return ans;
}

// console.log(changebinarytoDeci(11001));

/** AND operator
 * if both bits are 1(true) then result will be 1(true) otherwise 0(false)
 */
// console.log(9&5);

/** OR operator
 * if both bits are 0(false)then result will be 0(false) otherwise its 1(true)
 */
// console.log(9|5);

/** XOR operator
 * if both bits are same then result will be 0(false) otherwise its 1(true)
 */
// console.log(9^5)

/**
 * Right Shift Operator >>
 * shift bits to right side
 * 11011 >> 2 -----> 110
 */
// console.log(25>>2)

/**
 * Left Shift operator
 * shifts bits to left side adding 0s to rightmost side
 * 11011 << 2-----> 1101100
 */
// console.log(25<<2)

/**
 * complements of n
 * ~n ---> -(n+1)
 * let n=10
 * console.log(~n)----> -11
 */

function rotatingArray(array1) {
    let a = 3, n = 4;

    for (let k = 0; k <= n - 1; k++) {
        array1[n] = array1[0];
        for (let j = 0; j <= n - 1; j++) {
            array1[j] = array1[j + 1];
        }
    }

    for (let k = 0; k <= n - 1; k++) {
        console.log(array1[k]);
    }
}

// rotatingArray([2, 3, 56, 34]);

let a = 5;
let b = 6;
let c;
let v = 90;

while (v > 8) {
    a = a + v;
    c = (a + b) % 10;

    while (c > 9) {
        b = b - a;
        c = c - 1;
    }

    v = Math.floor(v / 2);
}

console.log(b, c);

let arr = [
    [0, 2],
    [1, 3]
];

arr[0][0] = arr[0][1] & arr[1][0];

if ((arr[0][1] & 6) < arr[0][1]) {
    arr[1][1] = 4 + arr[1][1];
}

arr[0][1] = (arr[1][1] + 4) ^ arr[0][1];

if ((1 + 3) < (7 - arr[1][1])) {
    arr[0][1] = (arr[0][1] + 4) + arr[0][1];
} else {
    arr[0][1] = (8 + 11) & arr[1][1];
}

console.log(arr[1][1] + arr[0][1] + arr[1][1]);