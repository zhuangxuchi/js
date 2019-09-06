/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let len=nums.length;
    if(len==0){
        return 0;
    }else if(len==1){
        return 1;
    }
    let arr=[1];
    for(let i=1;i<len;i++){
        arr.push(1);
        for(let j=i-1;j>-1;j--){
            if(nums[i]>nums[j]){
                arr[i]=Math.max(arr[j]+1,arr[i]);
            }
        }
    }return Math.max.apply(null,arr)
};