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
}