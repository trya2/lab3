function validate()
{
	let x = document.getElementById("pass1").value;
	let y = document.getElementById("pass2").value;

	if(x != y)
	{
	alert("Passwords do not match");
	}
	else if(x.length <= 7 && y.length <= 7)
	{
	alert("Password can not be less than 8 characters long");
	}
	else
	{
	alert("Passwords match");
	}
}
