var euler1 = function(upperLimit)
{
	var total = 0;
	for(var i = 1;i < upperLimit; i++)
	{
		if(i%3 ===0 || i%5 === 0)
		{
			total += i;
		}
	}
}
