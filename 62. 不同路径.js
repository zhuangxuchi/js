/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let arr=[];
    for(let i=0;i<n;i++){
        arr.push([]);
        for(let j=0;j<m;j++){
            arr[i].push(0)
        }
    }
    for(let i=0;i<m;i++){
        arr[0][i]=1;
    }
    for(let i=0;i<n;i++){
        arr[i][0]=1;
    }
    for(let i=1;i<n;i++){
        for(let j=1;j<m;j++){
            arr[i][j]=arr[i-1][j]+arr[i][j-1];
        }
    }
    return arr[n-1][m-1];
};