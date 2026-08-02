// let set = new Set();

// for(let i=1;i<=5;i++){
//     set.add(i);
//     set.add(1)
// }

// console.log(set);

function duplicateElements(arr){
    let countsObj = {};
    let duplicateElem = [];
    let duplicateCounts = 0;

    for(let i=0;i<arr.length;i++){
        let item = arr[i];
        if(countsObj[item] === undefined){
            countsObj[item] = 1;
        }
        else{
            countsObj[item] = countsObj[item] + 1;
        }
    }
    for(let key in countsObj){
        if(countsObj[key] > 1){
            duplicateElem[duplicateCounts] = key;
            duplicateCounts++;
        }
    }
    return duplicateElem;
}

// console.log(duplicateElements(["apple","banana","apple","orange","banana"]));

//771 Leetcode

function jewelsAndStones(jewels,stones){
    let jewelObj = {};
    let jewelCount = 0;

    for(let i=0;i<jewels.length;i++){
        let ch = jewels.charAt(i);
        jewelObj[ch] = true;
    }
    for(let i=0;i<stones.length;i++){
        let ch2 = stones.charAt(i);
        if(jewelObj[ch2]){
            jewelCount++;
        }
    }
    return jewelCount;
}

// console.log(jewelsAndStones("aA", "aABAAab"));

//1832

function pangram(str){
    let set = new Set();
    for(let i=0;i<str.length;i++){
        set.add(str.charAt(i))
    }
    if(set.size != 26){
        return false
    }
    return true;
}

// console.log(pangram("thequickbrownfoxjumpsoverthelazydog"));

//2351

function firstLetterAppearTwice(str){
    let set = new Set();
    for(let i=0;i<str.length;i++){
        if(set.has(str[i])){
            return str[i];
        }
        set.add(str[i]);
    }
}
// console.log(firstLetterAppearTwice("abccbaacz"));

// 202

function happyNumber(n){
     let set = new Set();
     while(true){
        let sum = 0;
        while(n>0){
            let digit = n%10;
            sum = sum + digit**2;
            n = Math.floor(n/10);
        }
        if(sum===1){
            return true;
        }
        if(set.has(sum)){
            return false;    
        }
        set.add(sum);
        n = sum;
     }
}

// console.log(happyNumber(19));

//MAP

// let map = new Map();
// map.set("karan",1);
// map.set("johny bhaiya",6);
// map.set("mithun nigga",2);
// map.set("punith gay",1);
// console.log(map);
// map.delete("johny bhaiya");
// console.log(map);

function countFreq(arr){
    let map = new Map();
    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
           map.set(arr[i], map.get(arr[i])+1);
        }
        else{
            map.set(arr[i],1)
        }
    }
    return map;
}

// console.log(countFreq([2,6,4,8,6,1,2,4]));

//1.

function twoSum(nums,target){
    let map = new Map();
    let ans = [];
    for(let i=0;i<nums.length;i++){
        if(map.has(target-nums[i])){
            ans.push(i);
            ans.push(map.get(target-nums[i]));
        }
        else{
            map.set(nums[i],i)
        }
    }
    return ans;
}
// console.log(twoSum([2,7,11,15],9));

//1748

function sumUniqueElem(nums){
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
           map.set(nums[i], map.get(nums[i])+1);
        }
        else{
            map.set(nums[i],1)
        }
    }
    let sum = 0;
    for(let key of map.keys()){
        if(map.get(key)===1){
            sum = sum + key;
        }
    }
    return sum;
}
console.log(sumUniqueElem([1,2,3,1]));
