/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    n=nums.toString();
    n=n.split(',');
    a=[];
    b=[];
    if(r*c>n.length||r*c<n.length){
        return nums
    }else{
        for(let i=0;i<n.length;i+=c){
            for(let j=i;j<i+c;j++){
                b.push(n[j]);
            }
            a.push(b);
            b=[];
        }
    }
    return a;
};