//Jquerry Example c04
function slideShow(photo){
	var nuPhoto = $('#banner img').length;
	photo = photo % nuPhoto;

	$('#banner img').eq(photo).fadeOut(function()
		{
			$('#banner img').each(function(i)
				{
					$(this).css(
						'zIndex',((nuPhoto - i) + photo)%nuPhoto
						);
				});
			$(this).show();
			setTimeout(function()
				{
					slideShow(++photo);
				}, 4000);
		});
}

function button( tag, frame, height="0px"){
	$("#"+ tag +" h2").click(function()
		{
			for( var i = 0; i < $("#subContent").children().length; i++)
				{
					$("#subContent").find("iframe").css({"visibility": "hidden"})[i];
					$("#subContent").find("iframe").animate({"height": "0px"}, "fast");
				}
			$("#"+frame+" > iframe").css({"visibility": "visible"});
			$("#"+frame+" > iframe").animate({"height":height}, "fast");
		});
}
function logo( tag, frame, height="0px"){
	$("#"+ tag +" h1").click(function()
		{
			for( var i = 0; i < $("#subContent").children().length; i++)
				{
					$("#subContent").find("iframe").css({"visibility": "hidden"})[i];
					$("#subContent").find("iframe").animate({"height": "0px"}, "fast");
				}
			$("#"+frame+" > iframe").css({"visibility": "visible"});
			$("#"+frame+" > iframe").animate({"height":height}, "fast");
		});
}
function menuBar( tag, frame, height="0px"){
	$("#"+ tag).click(function()
		{
			for( var i = 0; i < $("#subContent").children().length; i++)
				{
					$("#subContent").find("iframe").css({"visibility": "hidden"})[i];
					$("#subContent").find("iframe").animate({"height": "0px"}, "fast");
				}
			$("#"+frame+" > iframe").css({"visibility": "visible", "height":height});
			$("#"+frame+" > iframe").animate({"height":height}, "fast");
		});
}
function menu(){
	button("login","loginFrame", "300px");
	button("register","registerFrame", "600px");
	logo("logo","newsFrame", "500px");
	menuBar("contact","contactFrame", "500px");
	menuBar("about","aboutFrame", "300px");
	menuBar("home","newsFrame", "500px");
	menuBar("projects","projectsFrame", "440px");
}
document.addEventListener('keydown', function()
					{
						if(event.keyCode == 78)
							{
								document.getElementsByTagName("body")[0].style.backgroundColor = "#141d26";
							}
						if(event.keyCode == 77)
							{
								document.getElementsByTagName("body")[0].style.backgroundColor = "white";
							}
					});
$(document).ready(function()
	{
		slideShow(1);
		menu();
		$("#newsFrame iframe").css({"visibility": "visible", "height": 500});
	});

