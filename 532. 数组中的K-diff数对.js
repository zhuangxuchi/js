/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    let res=0;
    if(k==0){
        let d=[];
        let A=nums.sort(function(a,b){return a-b});
        for(let i=0,len=A.length-1;i<len;i++){
            if(d.indexOf(A[i])==-1){
                if(A[i]==A[i+1]){
                    res++;
                    d.push(A[i]);
                }
            }
        }return res;
    }else{
        nums=new Set(nums)
        nums=Array.from(nums)
        let len=nums.length;
        for(let i=0;i<len-1;i++){
            for(let j=i+1;j<len;j++){
                if(Math.abs(nums[i]-nums[j])==k){
                    res++;
                }
            }
        }return res;
    }
};
