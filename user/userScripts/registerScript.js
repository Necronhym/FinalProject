var takenNames = ["Admin"];
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
function testPassword( pass, repass, id, error="ERROR")
	{
		if(pass.length != 0 && pass == repass)
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
document.getElementById('reg').addEventListener('click', function()
	{
		var Inputs =
			{
				"firstName": document.getElementById('fn').getElementsByTagName('input')[0].value,
				"lastName": document.getElementById('ln').getElementsByTagName('input')[0].value,
				"email": document.getElementById('em').getElementsByTagName('input')[0].value,
				"username": document.getElementById('un').getElementsByTagName('input')[0].value,
				"password": document.getElementById('pass').getElementsByTagName('input')[0].value,	
				"rePassword": document.getElementById('repass').getElementsByTagName('input')[0].value
			};		


		var RegExes= 
			{ 
				"firstName": '^[A-Z][a-z]{3,10}$',
				"lastName": '^([A-Z][a-z]{3,10}){1}( [A-Z][a-z]{3,10}){0,1}$',
				"email": '^([A-Z]||[a-z]||[0-9]){3,25}(@gmail.com)$',
				"username": '^([A-Z]|[a-z]|[0-9]){3,10}$',
				"password": '^([A-Z]|[a-z]|[0-9]){3,10}$',
				"rePassword": '^([A-Z]|[a-z]|[0-9]){3,10}$'
			};
		var Errors=[];

		Errors.push(compare( Inputs["firstName"], RegExes["firstName"], 'fn', "First name format incorect"));
		Errors.push(compare( Inputs["lastName"], RegExes["lastName"], 'ln', "Last name format incorect"));
		Errors.push(compare( Inputs["email"], RegExes["email"], 'em', "Email format incorect"));
		Errors.push(compare( Inputs["username"], RegExes["username"], 'un', "User name format incorect"));
		Errors.push(compare( Inputs["password"], RegExes["password"], 'pass', "Passowrd format incorect"));
		Errors.push(testPassword(Inputs["password"], Inputs["rePassword"],'repass', "Passowrds do not match"));
		
		//Filter Nulls from errors:
		Errors= Errors.filter( function(e){return e});
		//Send to bakcend
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
				document.getElementById("regErrors").innerHTML="";
			}
		else
			{
				document.getElementById("regErrors").innerHTML="<p>" +Errors + "</p>";
			}
});
