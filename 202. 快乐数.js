/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    while(n!=1 && n!=4){
        let x = 0 ;
        while(n){
            x+=(n%10)*(n%10);
            n=parseInt(n/10);
        }
        n=x;
    }
    if (n==1){return true;}
    else if (n==4){return false;}
};
