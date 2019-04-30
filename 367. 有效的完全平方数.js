var isPerfectSquare = function(num) {
    if (num==0){return 'True'}
    for (var i=1;i<=num/2;i++){
        if (i*i==num){
            return 'True';
        }
    }return "False";
};
