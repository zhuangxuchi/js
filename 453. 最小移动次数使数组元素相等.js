/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let sum=0;
    let min=Math.min.apply(null,nums);
    for(let i = 0,len = nums.length;i < len;i++){
        sum+=nums[i]
    }
    return sum-min*nums.length
};