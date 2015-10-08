function mainmenu()
{
	if(MainMenuSelection == 0)
	{
		context.fillStyle = "#000";
		context.font = "24px Arial";
		context.fillText("[START GAME]", 380, 330);
	}
	else
	{
		context.fillStyle = "#000";
		context.font = "24px Arial";
		context.fillText("START GAME", 386.7, 330);
	}
	if(MainMenuSelection == 1)
	{
		context.fillStyle = "#000";
		context.font = "24px Arial";
		context.fillText("[SETTINGS]", 399.4, 360);
	}
	else
	{
		context.fillStyle = "#000";
		context.font = "24px Arial";
		context.fillText("SETTINGS", 406, 360);
	}
	
	if(KeyTimer > 0)
	{
		KeyTimer -= 1;
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_S) == true && KeyTimer <= 0)
	{
		KeyTimer = 15;
		if(MainMenuSelection == 0)
		{
			MainMenuSelection = 1;
		}
		else
		{
			MainMenuSelection = 0;
		}
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_W) == true && KeyTimer <= 0)
	{
		KeyTimer = 15;
		if(MainMenuSelection == 1)
		{
			MainMenuSelection = 0;
		}
		else
		{
			MainMenuSelection = 1;
		}
	}
}