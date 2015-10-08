function mainmenu()
{
	if(MainMenuSelection == 0)
	{
		context.fillStyle = "#000";
		context.font = "24px Arial";
		context.fillText("[START GAME]", 232, 208);
	}
	else
	{
		context.fillStyle = "#000";
		context.font = "24px Arial";
		context.fillText("START GAME", 232, 208);
	}
	if(MainMenuSelection == 1)
	{
		context.fillStyle = "#000";
		context.font = "24px Arial";
		context.fillText("[SETTINGS]", 248, 235);
	}
	else
	{
		context.fillStyle = "#000";
		context.font = "24px Arial";
		context.fillText("SETTINGS", 248, 235);
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
}