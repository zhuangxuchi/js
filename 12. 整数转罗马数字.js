/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let res='';
    if(num>=1000){
        let a=parseInt(num/1000);
        for(let i=0;i<a;i++){
            res+='M'
        };
        num-=a*1000;
    }if(num>=900){
        res+='CM';
        num-=900;
    }if(num>=500){
        res+='D';
        num-=500;
    }if(num>=400){
        res+='CD';
        num-=400;
    }if(num>=100){
        let a=parseInt(num/100);
        for(let i=0;i<a;i++){
            res+='C'
        };
        num-=a*100;
    }if(num>=90){
        res+='XC';
        num-=90;
    }if(num>=50){
        res+='L';
        num-=50;
    }if(num>=40){
        res+='XL';
        num-=40;
    }if(num>=10){
        let a=parseInt(num/10);
        for(let i=0;i<a;i++){
            res+='X'
        };
        num-=a*10;
    }if(num>=9){
        res+='IX';
        num-=9;
    }if(num>=5){
        res+='V';
        num-=5;
    }if(num>=4){
        res+='IV';
        num-=4;
    }if(num>=1){
        for(let i=0;i<num;i++){
            res+='I'
        };
        num--;
    }return res
};