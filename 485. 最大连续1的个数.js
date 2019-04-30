/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var x = nums.join('');
    x=x.split('0');
    var max =0;
    for (let i =0;i<x.length;i++){
        if (max<x[i].length){
            max =x[i].length;
        }
    }
    return max;
};
