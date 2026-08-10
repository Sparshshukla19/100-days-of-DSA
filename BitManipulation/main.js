/**1. swap two numbers without using a temporary variable */

function swap(a,b){
    a = a^b;
    b = a^b;
    a = a^b;

    return [a,b]
}

// console.log(swap(10,20));

/**2.Check Even OR Odd
 * every odd number has LSB = 1 bit and for even LSB = 0 bit
 * so we operate AND operator and if we get 1 then its even otherwise Odd
 */

function checkEvenOdd(n){
    if((n&1) == 0) return "Even";
    return "Odd";
}
// console.log(checkEvenOdd(12));

/**3. Check set bit with n and i where n = number and i = shift from LSB
 * set bit is that if (n >> i)&1 === 1 
 */

function checkSetBit(n,i){
    if(((n>>2)&1)==1){
        return "Set Bit";
    }
    return "Not a Set Bit";
}

// console.log(checkSetBit(14,2));

/**4. checking that n exhibits in power of 2
 * so power of 2 numbers have MSB as 1 and others 0 for eg. 10->2,100->4,1000->8,10000->16
 * so if we want to check that they are in power of 2s then 10&1 OR 2&1 == 0, 100&11 OR 4&3==0 thats gives us pattern n&(n-1) == 0 then it is power of 2
 */

function powerOfTwo(n){
    if(n==0){return false;}
    if((n&(n-1))==0){
        return "Number is in Power of 2";
    }
    return "Number is not in power of two";
}

// console.log(powerOfTwo(69));
