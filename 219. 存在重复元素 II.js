/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let m=new Map();
    for(let i=0,len=nums.length;i<len;i++){
        if(m.has(nums[i]) && i-m.get(nums[i])<=k){
            return true;
        }
        m.set(nums[i],i);
    }return false;
};