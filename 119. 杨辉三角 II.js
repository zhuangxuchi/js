/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var a=new Array();
    if (rowIndex==0){return[1]};
    for (let i =1;i<=rowIndex+1;i++){
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
    }return a[rowIndex];
};