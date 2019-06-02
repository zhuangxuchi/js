/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let s=new Set();
    let a=[];
    for(let i=0;i<nums.length;i++){
        if(!s.has(nums[i])){
            s.add(nums[i])
        }else{
            a.push(nums[i])
        };
    };
    for(let i=1;i<10000;i++){
        if(!s.has(i)){
            a.push(i);
            return a;
        }
    }
};