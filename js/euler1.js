$(document).ready(function(){
    var answerBlock = $('#answerBlock');
    $('input[name=submitButton]').click(function(){
       var limit = parseInt($('input[name=limitBox]').val());
        var result = euler1(limit);
        answerBlock.text("Answer: " + result);
    });
});

function euler1(upperLimit)
{
	var total = 0;
	for(var i = 1;i < upperLimit; i++)
	{
		if(i%3 ===0 || i%5 === 0)
		{
			total += i;
		}
	}
    
    return total;
}
