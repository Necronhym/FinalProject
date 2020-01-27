divs = ["#newsOne","#newsTwo", "#newsThree"];

$(document).ready(function(){
	for( i=0; i <= divs.length; i++)
		{
			$(divs[i]).hide();
		}
	var i=0;
	$(divs[i]).fadeIn(1000);
	setInterval( function(){
		$(divs[i]).fadeOut(1000);
		i++;		
		if(i>=divs.length)
			{
				i=0;
			}
		setTimeout( function()
			{
				$(divs[i]).fadeIn(1000)
			}
		, 1000);
	}, 5000);
});
