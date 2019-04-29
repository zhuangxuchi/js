/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count=0;
    let num=nums[0];
    for (let i = 0;i<nums.length;i++){
        if (count==0){
            num=nums[i];
        }
        if (nums[i] == num){
            count++
        }else {
            count--
        }
    
    }
    return num;
};