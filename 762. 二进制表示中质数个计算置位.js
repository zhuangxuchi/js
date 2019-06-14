/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
    let sushu = 0;
    for(let i = L;i<=R;i++){
        let count=0;
        let a=i.toString(2);
        for(let j = 0;j<a.length;j++){
            if(a[j]=='1'){
                count++;
            }
        };
        if(count==1){
            sushu=sushu;
        }
        else if(count==2){
            sushu++;
        }
        else if(count==3){
            sushu++;
        }
        else if(count==4){
            sushu=sushu;
        }
        else if(count==5){
            sushu++;
        }
        else if(count==6){
            sushu=sushu;
        }
        else if(count==7){
            sushu++;
        }
        else if(count==8){
            sushu=sushu;
        }
        else if(count==9){
            sushu=sushu;
        }
        else if(count==10){
            sushu=sushu;
        }
        else if(count==11){
            sushu++;
        }
        else if(count==12){
            sushu=sushu;
        }
        else if(count==13){
            sushu++;
        }
        else if(count==14){
            sushu=sushu;
        }
        else if(count==15){
            sushu=sushu;
        }
        else if(count==16){
            sushu=sushu;
        }
        else if(count==17){
            sushu++;
        }
        else if(count==18){
            sushu=sushu;
        }
        else if(count==19){
            sushu++;
        }
    }return sushu;
};