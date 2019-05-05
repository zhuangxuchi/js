/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left=0;
    let right=nums.length-1;
    let mid=parseInt((left+right)/2);
    if (nums[mid]==target){return mid}
    while(right>=left){
        if(nums[left]==target){
            return left;
        }else{left+=1}
        if(nums[right]==target){
            return right;
        }else{right-=1}
    }return -1;
};