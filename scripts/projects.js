var menus = [
	["Art", "Painting"],
	["Electornics", "Circuts", "Embedded"],
	["Softwere", "Python", "Java", "Lisp"],
	["Placeholder", "Project1", "Project2", "Project3"],
	["Placeholde2", "Project21", "Project22", "Project23"],
];
var links = {
	"Circuts" : "../projects/electronics/circuits/circuits.html",
	"Embedded" : "../projects/electronics/embedded/embedded.html",
	"Python" : "../projects/softwere/python/python.html",
	"Java" : "../projects/softwere/java/java.html",
	"Lisp" : "../projects/softwere/lisp/lisp.html",
	"Painting" : "../projects/art/painting/painting.html",
	"Project1" : "../projects/placeholder/placeholder.html",
	"Project2" : "../projects/placeholder/placeholder.html",
	"Project3" : "../projects/placeholder/placeholder.html",
	"Project21" : "../projects/placeholder/placeholder.html",
	"Project22" : "../projects/placeholder/placeholder.html",
	"Project23" : "../projects/placeholder/placeholder.html",
};
var list = new Object(); 
function makeMenu(category)
	{
		str = "";
		for( j=0; j<category.length; j++ )
			{
				if(category[j].length == 1)
					{
						str = str+"<li class='cat' id="+category[j] +">"+category[j] +"</li>";	

					}
				else
					{	
						str = str +"<li class='cat' id="+ category[j][0]+ ">"+ category[j][0]+"</li>" + "<ul>";
						for( i = 1; i<category[j].length; i++ )
							{
								str= str+ "<li class='subCat' id="+ category[j][i] + ">"+ category[j][i] +"</li>";
							}
						str = str+"</ul>";
					}
			}
		return str;
	}	
menuStr = makeMenu(menus);
(document).getElementById("projectsMenu").innerHTML= "<ul>" + menuStr + "</ul>";
$(document).ready(function(){
		for(i=0; i < menus.length; i++)
			{
				//Slide Up:
				if(menus[i].length > 1)
					{
						for(j=1; j<menus[i].length; j++)
							{
								$("#"+menus[i][j]).slideUp();
							}
					}
			}
				//Slide Donw listenerunis:
		for(i=0; i < menus.length; i++)
			{
				if(menus[i].length > 1)
					{
						let z=i;
						for(j=1; j < menus[z].length; j++)
							{
								let g = j;
								$("#" + menus[z][0]).click(function()
									{
										$("#" + menus[z][g]).slideToggle();
										$("#" + menus[z][g]).click(function()
											{
												document.getElementById("emframe").src = links[menus[z][g]];
											});
									});
							}
					}
			}
		
	});
