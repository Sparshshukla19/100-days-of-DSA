//2418


var sortPeople = function(names, heights) {
    let map = new Map();
    for(let i=0;i<names.length;i++){
        map.set(heights[i], names[i]);
    }
    let ans = [];
    heights.sort((a, b) => a - b);
    for(let i=heights.length-1;i>=0;i--){
        ans.push(map.get(heights[i]));
    }
    return ans;
};

//2404

function frequentEven(nums){
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2 ===0){
            if(map.has(nums[i])){
               map.set(nums[i],map.get(nums[i])+1)
        }   else{
               map.set(nums[i],1);
        }
        }
    }
    let freq = 0, ans = -1
    for(let key of map.keys()){
        if(freq < map.get(key)){
            freq = map.get(key);
            ans = key;
        }
        else if(freq === map.get(key)){
            ans = Math.min(ans, key);
        }
    }
    return ans;
}
console.log(frequentEven([0,1,2,2,4,4,1]))