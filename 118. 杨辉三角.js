/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var a=new Array();
    for (let i =1;i<=numRows;i++){
        a[i-1] = new Array();
        if (i==1){
            a[i-1].push(1);
        }
        else if(i>1){
            for (let j=1;j<=i;j++){
                if(j==1||j==i){
                    a[i-1].push(1);
                }
                else if(j>1&&j<i){
                    a[i-1].push(a[i-2][j-2]+a[i-2][j-1]);
                }
            }
        }
    }return a;
};