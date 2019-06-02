/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let a=Math.max.apply(null, nums);
    let b=nums.indexOf(a);
    nums.splice(b,1);
    for(let i=0;i<nums.length;i++){
        if(a/nums[i]<2){
            return -1;
        }
    }return b;
};