document.getElementById("con").addEventListener("click", function()
	{
		Errors = []
		name = document.getElementById("fn").value	
		eMail = document.getElementById("cem").value
		text = document.getElementById("tarea").value
		if(!(/^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/.test(name)))
			{
				Errors.push("Firstname format incorrecr");
			}
		if(!(/^([A-Z]||[a-z]||[0-9]){3,25}(@gmail.com)$/.test(eMail)))
			{
				Errors.push("E-Mail format incorrecr");
			}
		if(text.length == 0)
			{
				Errors.push("Text Area is empty");
			}
		document.getElementById("conErrors").innerHTML = Errors;
		document.getElementById("conErrors").style.color = "red";
	});
