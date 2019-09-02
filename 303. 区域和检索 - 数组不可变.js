/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.sum=[];
    this.sum.push(nums[0]);
    for(let k=1,len=nums.length;k<len;k++){
        this.sum.push(nums[k]+=this.sum[k-1])
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if(i==0){
        return this.sum[j]
    }return this.sum[j]-this.sum[i-1]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */