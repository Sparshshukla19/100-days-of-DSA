let a = 7;
let b = 3;
let c = 9;

let d = a++ + --b - c++ + ++a;
console.log(d);


console.log(Math.floor(10.2));   ////down the value to whole number
console.log(Math.ceil(10.2));    ////up the value to whole number
console.log(Math.round(10.2));   ////round the value to whole number
console.log(Math.trunc(10.7));   ////remove the decimal part and return the integer part
console.log(Math.pow(10,2));     ////return the value of 10 raised to the power of 2
console.log(Math.sqrt(16));      ////return the square root of 16
console.log(Math.max(10, 20, 5, 15));  ////return the maximum value among the given numbers
console.log(Math.min(10, 20, 5, 15));  ////return the minimum value among the given numbers
console.log(Math.random()*100);        ////return a random number between 0 and 100
console.log(Math.abs(-10));          ////return the absolute value of -10
console.log(Math.sign(-5));         ////return -1 if the number is negative, 1 if it's positive, and 0 if it's zero
console.log(Math.sin(Math.PI / 2));  ////return the sine of 90 degrees (which is 1)
console.log(Math.cos(0));          ////return the cosine of 0 degrees (which is 1)
console.log(Math.tan(Math.PI / 4));  ////return the tangent of 45 degrees (which is 1)
console.log(Math.log(1));          ////return the natural logarithm of 1 (which is 0)
console.log(Math.exp(1));          ////return the value of e raised to the power of 1 (which is approximately 2.71828)



const prompt = require('prompt-sync')();

const P = +prompt("enter the principal amount: ");
const R = +prompt("enter the rate of interest: ");
const T = +prompt("enter the time in years: ");
const n = +prompt("enter the number of times interest is compounded per year: ");

const SI = (P * R * T) / 100;
console.log(`the simple interest is: ${SI.toFixed(2)}`);
const A = P * Math.pow((1+(R/(100*n))),n*T);
const CI = A - P;

console.log(`the compound interest is: ${CI.toFixed(2)}`);

let OTP = Math.floor( 1000 + Math.random() * 9000 );
console.log(OTP);



const prompt = require('prompt-sync')();
const a = +prompt("enter the side a:");
const b = +prompt("enter the side b:");
const c = +prompt("enter the side c:");

if(a + b > c && a + c > b && b + c > a){
    console.log("the sides can form a triangle");
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s-a)*(s-b)*(s-c));
    console.log(`the area of the triangle is: ${area.toFixed(2)}`);
}
else{
    console.log("the sides cannot form a triangle");
}

let min =Math.min(2,0,-3,5,-7);
console.log(min);



