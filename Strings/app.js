/*
--STRINGS
*/

const prompt = require("prompt-sync")();

let s = prompt("enter a string:");
let rev = "";

for(let i=s.length-1;i>=0;i--){
    rev = rev + s.charAt(i)
}
console.log(rev);

//////------Palindrome------//////

function isPalindrome(str){
    let i=0, j=str.length-1
    while(i<j){
        if(str[i] !== str[j]){
            return false
        }
        i++;
        j--;
    }
    return true;
}

function main(){
    const prompt = require("prompt-sync")();
    let str = prompt("Enter a String:");

    if(isPalindrome(str)){
        console.log("Yes its a Palindrome");
    }
    else{
        console.log("Not a Palindrome");
    }
}

main();

