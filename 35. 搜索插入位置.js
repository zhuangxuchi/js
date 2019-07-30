/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(target>nums[nums.length-1]){
        return nums.length;
    }else if(target<nums[0]){
        return 0;
    }else if(nums.indexOf(target)>=0){
        return nums.indexOf(target); 
    }else{
        for(let i=0,len=nums.length-1;i<len;i++){
            if(target>nums[i] && target<nums[i+1]){
                return i+1
            }
        }
    }
};