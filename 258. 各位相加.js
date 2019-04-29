/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num<10){
        return num
    } 
    while(1==1){
        let x=0;
        x+=num%10;
        x+=parseInt(num / 10);
        num=x;
        if (num<10){return num;}
    }
};