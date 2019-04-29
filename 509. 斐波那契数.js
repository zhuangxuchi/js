/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    var ss=0,s=1;
    for (var i=0;i<N;i++){
        s+=ss;
        ss=s-ss;
    }
    return ss;
};