$(document).ready(function(){
    var answerBlock = $('#answerBlock');
    var result = fib();
    answerBlock.text("Answer: " + result);
});

function fib(){
    var total = 0;
    var matrix = [0,1];
    
    var s = 0;
    do{
        s = matrix[0] + matrix[1];
        if(s%2 === 0){total += s};
        matrix[0] = matrix[1];
        matrix[1] = s;
    }while (s <= 4000000);
    
    return total;
}