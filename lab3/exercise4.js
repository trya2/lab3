function input()
{
	let border = document.getElementById("border").value;
	let background = document.getElementById("background").value;
	let p = document.getElementById("para");
	for(let i = 0; i < 2; i++)
	{
		if(i == 0)
		{
			if(border == "red")
			{
			
			p.style.borderColor = "red";
			}
			else if(border == "green")
			{
			p.style.borderColor = "green";
			}
			else if(border == "blue")
			{
			p.style.borderColor = "blue";
			}
			else
			{
			p.style.borderWidth =  border;
			}
		}
		else
		{
			if(background == "red")
			{
			
			p.style.background = "red";
			}
			else if(background == "green")
			{
			p.style.background = "green";
			}
			else if(background == "blue")
			{
			p.style.background = "blue";
			}
			else
			{
			}
		}
	}

}