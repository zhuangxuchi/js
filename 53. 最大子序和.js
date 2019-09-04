/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let len=nums.length,
    sum=0,
    arr=[],
    max=-Infinity;
    if(len==1){
        return nums[0];
    }
    for(let i=0;i<len;i++){
        let a=sum;
        sum+=nums[i];
        if(sum<0){
            sum=0;
        }else if(sum>a){
            arr.push(sum)
        }
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    if(max==-Infinity){
        for(let i=0;i<nums.length;i++){
            if(nums[i]>max){
                max=nums[i];
            }
        }
    }return max;
};