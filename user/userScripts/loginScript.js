function compare( string, regex, id, error)
	{
		if(RegExp(regex).test(string))
			{
				document.getElementById(id).getElementsByTagName('span')[0].innerHTML = "";
				return null;
			}
		else
			{
				document.getElementById(id).getElementsByTagName('span')[0].innerHTML = "*";
				return error;
			}
	}
document.getElementById('loginButton').addEventListener('click', function()
	{
		var Errors=[];
		var Inputs =
			{
				"username": document.getElementById('loginUser').getElementsByTagName('input')[0].value,
				"password": document.getElementById('loginPassword').getElementsByTagName('input')[0].value	
			}
		var RegExes= 
			{ 
				"username": '^([A-Z]|[a-z]|[0-9]){3,10}$',
				"password": '^([A-Z]|[a-z]|[0-9]){3,10}$'
			}
		Errors.push(compare( Inputs["username"], RegExes["loginUser"], 'loginUser', "User name format incorect"));
		Errors.push(compare( Inputs["password"], RegExes["loginPassword"], 'loginPassword', "Passowrd format incorect"));
		Errors.push(compare( Inputs["username"], RegExes["username"], 'loginUser', "User name format incorect"));
		Errors.push(compare( Inputs["password"], RegExes["password"], 'loginPassword', "Passowrd format incorect"));

		Errors= Errors.filter( function(e){return e});

		if(Errors.length === 0)
			{
				$.ajax({
					type: "post",
					//Fix cross origin stuff post uplaod:
					url: "placeholder",
					data: Inputs,
					dataType: "json",
					success: function()
						{
							console.log("sent");
						}

				});
				document.getElementById("loginErrors").innerHTML="";
			}
		else
			{
				document.getElementById("loginErrors").innerHTML="<p>" +Errors + "</p>";
			}
	});
