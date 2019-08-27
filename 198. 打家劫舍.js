/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums[0]==undefined){
        return 0;
    }
    let arr=[],
    len=nums.length;
    for(let i=0;i<len;i++){
        arr.push(0);
    }
    arr[0]=nums[0];
    arr[1]=Math.max(nums[0],nums[1]);
    for(let i=2;i<len;i++){
        let a=arr[i-1];
        let b=arr[i-2]+nums[i];
        arr[i]=Math.max(a,b)
    }
    return arr[len-1]
};