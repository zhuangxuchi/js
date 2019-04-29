/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var x=new Set();
    for (let i = 0;i<nums1.length;i++){
        for (let j=0;j<nums2.length;j++){
            if (nums1[i]===nums2[j]){
                x.add(nums1[i]);
            }
        }
    }
    return Array.from(x)
};