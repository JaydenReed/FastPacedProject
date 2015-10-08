function settingsmenu()
{
	if(SettingsMenuSelection == 0)
	{
		context.fillStyle = "#000";
		context.font = "24px Arial";
		context.fillText("[BACK]", 426, 360);
	}
	else
	{
		context.fillStyle = "#000";
		context.font = "24px Arial";
		context.fillText("BACK", 433, 360);
	}
	
	if(KeyTimer > 0)
	{
		KeyTimer -= 1;
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_ENTER) == true && KeyTimer <= 0)
	{
		KeyTimer = 15;
		if(SettingsMenuSelection == 0)
		{
			gameState = STATE_MAINMENU
		}
	}
}