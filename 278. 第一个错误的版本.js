/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let a=1;
        let mid;
        while(a<n){
            mid=parseInt(a+(n-a)/2);
            if(!isBadVersion(mid)){
                a=mid+1;
            }else{
                n=mid;
            }
        }return a;
    };
};