/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let b;
    let s;
    while(stones.length>1){
        b=stones.splice(stones.indexOf(Math.max.apply(null,stones)),1);
        s=stones.splice(stones.indexOf(Math.max.apply(null,stones)),1);
        if(b-s!=0){
            stones.push(Math.abs(b-s))
        }
    }if(stones[0]==undefined){
        return 0
    }else{
        return stones[0]
    }
};