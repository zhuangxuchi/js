/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    let res=[];
    let len=nums.length;
    for(let i=0;i<len;i++){
        res.push([])
    }
    let a;
    let b;
    for(let i=0;i<len;i++){
        a=Math.max.apply(null,nums);
        b=nums.indexOf(a);
        nums.splice(b,1,-1);
        if(i==0){
            res[b]="Gold Medal";
        }else if(i==1){
            res[b]="Silver Medal";
        }else if(i==2){
            res[b]="Bronze Medal";
        }else{
            res[b]=(i+1).toString()
        }
    }
    return res
};