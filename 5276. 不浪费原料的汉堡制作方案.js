/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function(tomatoSlices, cheeseSlices) {
    if(cheeseSlices==0){
        return [0,0]
    }
    for(let i=0;i<cheeseSlices;i++){
        if(i*4+(cheeseSlices-i)*2==tomatoSlices){
            return [i,cheeseSlices-i];
        }
    }
    return [];
};