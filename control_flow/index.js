let prompt = require("prompt-sync")();

//------------------------------//
// let s = prompt("enter a string:");
// let consonents = 0; 
// let vowels = 0;

// for(let i=0; i<s.length; i++){
//    let ch = s.charAt(i);
//    switch(ch){
//     case"a":
//     case"e":
//     case"i":
//     case"o":
//     case"u":{
//         vowels++ ;
//         break  ;
//     }
//     default:{
//         consonents++;
//     }
//    }  
// }
//   console.log("vowels:",vowels);
//    console.log("consonents:",consonents);

console.log("Enter 1 for area of rectangle");
console.log("Enter 2 for area of circle");
console.log("Enter 3 for area of triangle");

const n = +prompt("Enter the case to be evaluated: ");
switch(n){
    case 1:{
        let a = +prompt("enter length of a:");
        let b = +prompt("enter length of b:");
        let area = b*a ;
        console.log(area.toFixed(2));
        break;
    }
     case 2:{
        let r = +prompt("enter radius:");
        let area = Math.PI * (r**2) ;
        console.log(area.toFixed(2));
        break;
    }
     case 3: {
    let a = +prompt("enter length of a:");
    let b = +prompt("enter length of b:");
    let c = +prompt("enter length of c:");

    if (a + b > c && a + c > b && b + c > a) {
        let s = (a + b + c) / 2;
        let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        console.log(area.toFixed(2));
    } else {
        console.log("Invalid triangle sides");
    }
    break;
}
}