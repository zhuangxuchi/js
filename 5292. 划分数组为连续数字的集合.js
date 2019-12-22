/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
    if(nums.length%k!==0){
        return false;
    }
    let res=0;
    let count=nums.length/k;
    nums.sort(function(a,b){return a-b}); 
    
    let a=nums[0];
    let b=0;
    let c=1;
    for(let j=0;j<count;j++){
        for(let i=0;i<nums.length;i++){
            if(nums[i]!=a && nums[i]!=a+1){
                return false
            }
            if(nums[i]==a+1){
                a=nums[i];
                nums.splice(b,1);
                i--;
                b=nums.indexOf(a);
                c++;
            }
            if(c==k){
                nums.splice(b,1);
                a=nums[0];
                b=0;
                c=1;
                break;
            }
        }
    }
    if(nums.length==0){
        return true
    }else{
        return false
    }
};