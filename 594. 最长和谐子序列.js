/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    nums=nums.sort(function(a,b){return a-b});
    let res=0,f=0,l=0,
    a,b;
    for(i=0,len=nums.length;i<len;i++){
        a=nums[i];
        f=i;
        for(let j=i+1;j<len;j++){
            b=nums[j];
            if(b==a+1){
                l=j;
            }else if(b==a){
                i++;
            }else{
                break;
            }
        }
        if(l+1-f>res){
            res=l+1-f
        }
        f=i;
        l=i;
    }return res==1 ? 0 : res
};