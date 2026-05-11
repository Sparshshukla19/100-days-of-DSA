//----ODD EVEN SUM----//

const prompt = require("prompt-sync")();

function oddEvenSum(start, end) {
    let oddSum = 0;
    let evenSum = 0;

    for(let i=start; i<=end; i++){
        if(i%2 ===0){
            evenSum = evenSum + i;
        }
        else{
            oddSum = oddSum + i;
        }
    }
    console.log("Odd sum:", oddSum);
    console.log("Even sum:", evenSum);
}

oddEvenSum(1, 10);

//-------FACTORS------//

function factor(n){
    for(let i=1; i<=n/2;i++){
        if(n%i==0){
            process.stdout.write(i+" ");
        }
    }
    console.log(n)
}
factor(42);

//-----PRIME NUMBER-----//

function isPrime(n){
    if(n<=1){
        console.log("Not prime");    
    }
    else if(n==2){
        console.log("prime");  
    }
    else if(n%2==0){
        console.log("not prime");
    }
    else{
        for(let i=3;i<=Math.floor(Math.sqrt(n));i=i+2){
            if(n%i==0){
            console.log("not prime");
            break ;
            }
        }
    }
}
isPrime(45);


//----STRONG NUMBER----//

function isStrongNumber(n) {

    let original = n;
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        let fact = 1;
        for (let i = 1; i <= digit; i++) {
            fact=fact*i;
        }

        sum=sum + fact;
        n = Math.floor(n / 10);
    }

    if (sum === original) {
        return "Strong Number";
    } else {
        return "Not a Strong Number";
    }
}

console.log(isStrongNumber(145));

//-----REVERSE OF A NUMBER------//


function reverse(n){
    let rev = 0;

    while(n>0){
        let digit = n%10;
        rev = (rev*10)+digit ;
        n = Math.floor(n/10) ;
    }
    return rev;
}
console.log(reverse(148));

//-----DIGITS COUNTS----//

function countDigit(n){
    let count = 0;
    while(n>0){
        count++;
        n = Math.floor(n/10);
    }
    console.log(count);
    return n;
}

countDigit(1452);

//---ISBN number----//

function isbnNum(n){
    let digit = n%10;
    while(n>0){
        let sum = 0;
        for(i=10;i>0;i--){
            sum = sum + digit*i ;
        }
        if(sum%11 === 0){
            console.log("isbn number");
        }
        else{
            console.log("not a isbn number");
        }
    }
}

isbnNum(0306406152);

//------ISBN number-------//

function ISBN(n){
    let count = 0, copy = n;
    while(n>0){
        count++;
        n = Math.floor(n/10);
    }
    if(count !== 10){
       console.log("Invalid ISBN number") ;
    }
    else{
        let ans = 0;
        while(copy>0){
            let digit = n%10;
            ans = ans + digit*count;
            count-- ;
            copy = Math.floor(copy/10);
        }
        if(ans%11 === 0){
             console.log("ISBN number") ;
        }
        else{
            console.log("NOT a ISBN number") ;
        }
    }

}
console.log(ISBN(1452369870));


