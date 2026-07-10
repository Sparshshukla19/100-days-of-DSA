/*
- count * outside the segments of |
*/

function countingStars(str){
    let flag = false, count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]==='|'){
            flag = !flag;
        }
        else if(str[i]==='*' && !flag){
        count++
    }
    }
    console.log(count);
}

// countingStars("yo|uar|e**|b|e***au|tifu|l");

/*
- check if every a comes before every b in given string s
*/

function checkAbeforeB(s){
    let bOccur = false;
  for(let i=0;i<s.length;i++){
    if(s[i]==='b'){
      bOccur = true;
    }
    if(s[i]==='a' && bOccur){
      return false;
    }
  }
  return true;

}

// console.log(checkAbeforeB("aabaa"));

/*
- Strong password checker
*/
