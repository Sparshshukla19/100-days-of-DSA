/*
--STRINGS
*/

//----STRING REVERSE----//
function strReverse(){
const prompt = require("prompt-sync")();

let s = prompt("enter a string:");
let rev = "";

for(let i=s.length-1;i>=0;i--){
    rev = rev + s.charAt(i)
}
console.log(rev);
}

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

// main();

/* Transitioning Uppercase to lowercase and vice versa */

function changingCases(str){
    let n = str.length;
    let ans = "";
    for(let i=0;i<n;i++){
        let ascii = str.charCodeAt(i);
        if(ascii>=65 && ascii<=90){
            ans = ans + String.fromCharCode(ascii + 32);
        }
        else{
            ans = ans + String.fromCharCode(ascii - 32);
        }
    }
    console.log(ans);
}

// changingCases("hEllO");


/* In the array of string return the count of words who starts with "at" as a prefix */

function starts(strArr){
    let pre = "at";
    let count = 0;
    
    for(let i=0;i<strArr.length;i++){
        if(strArr[i].startsWith(pre)){
            count++;
        }
    }
    console.log(count);
}
// starts(["atteunation","hello","attendance","Almacus"])

/* Change the letters to upperCase of every words of a sentence */

function changeSentence(str){
    let wordsArr = str.split(" ");
    let ans = "";
    for(let i=0;i<wordsArr.length;i++){
        let word = wordsArr[i];
        let firstStr = word.charAt(0).toUpperCase();
        let midstr = word.substring(1,word.length-1);
        let lastStr = word.charAt(word.length-1).toUpperCase();

        ans = ans + (firstStr+midstr+lastStr)+ " ";
    }
    console.log(ans);
}

// changeSentence("hello bhaisaab wo thodi si job chahiye thi");

/* Bitmap - getting frequency of letters from a words(string) */

function frequencyOfStr(str){
    let arr = new Array(128).fill(0);
    for(let i=0;i<str.length;i++){
        let ascii = str.charCodeAt(i);
        arr[ascii] = arr[ascii]+1;
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            console.log(String.fromCharCode(i)+"->"+ arr[i]);
        }
    }
}

// frequencyOfStr("sparshshukla");

/*  */