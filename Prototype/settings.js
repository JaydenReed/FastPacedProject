function settingsmenu()
{
	if(SettingsMenuSelection == 0)
	{
		context.fillStyle = "#000";
		context.font = "24px Arial";
		context.fillText("[SOUND]", 416.4, 330);
	}
	else
	{
		context.fillStyle = "#000";
		context.font = "24px Arial";
		context.fillText("SOUND", 423, 330);
	}
	
	if(SettingsMenuSelection == 1)
	{
		context.fillStyle = "#000";
		context.font = "24px Arial";
		context.fillText("[BACK]", 426, 360);
	}
	else
	{
		context.fillStyle = "#000";
		context.font = "24px Arial";
		context.fillText("BACK", 433, 388);
		if(SoundEnabled == true)
		{
			if(SoundSelection == 0)
			{
				context.fillStyle = "#000";
				context.font = "24px Arial Bold";
				context.fillText("[ON]", 416, 358);
				
				context.fillStyle = "#000";
				context.font = "24px Arial";
				context.fillText("OFF", 468, 358);
			}
			else
			{
				context.fillStyle = "#000";
				context.font = "24px Arial Bold";
				context.fillText("ON", 416, 358);
				
				context.fillStyle = "#000";
				context.font = "24px Arial";
				context.fillText("[OFF]", 456, 358);
			}
		}
		else
		{
			if(SoundSelection == 0)
			{
				context.fillStyle = "#000";
				context.font = "24px Arial";
				context.fillText("[ON]", 416, 358);
				
				context.fillStyle = "#000";
				context.font = "24px Arial Bold";
				context.fillText("OFF", 468, 358);
			}
			else
			{
				context.fillStyle = "#000";
				context.font = "24px Arial";
				context.fillText("ON", 416, 358);
				
				context.fillStyle = "#000";
				context.font = "24px Arial Bold";
				context.fillText("[OFF]", 456, 358);
			}
		}
	}
	
	if(KeyTimer > 0)
	{
		KeyTimer -= 1;
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_ENTER) == true && KeyTimer <= 5)
	{
		KeyTimer = 15;
		if(SettingsMenuSelection == 1)
		{
			gameState = STATE_MAINMENU
		}
		if(SettingsMenuSelection == 0)
		{
			if(SoundSelection == 0)
			{
				SoundEnabled = true
			}
			else
			{
				SoundEnabled = false
			}
		}
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_S) == true && KeyTimer <= 0)
	{
		KeyTimer = 15;
		if(SettingsMenuSelection == 0)
		{
			SettingsMenuSelection = 1;
		}
		else
		{
			SettingsMenuSelection = 0;
		}
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_W) == true && KeyTimer <= 0)
	{
		KeyTimer = 15;
		if(SettingsMenuSelection == 1)
		{
			SettingsMenuSelection = 0;
		}
		else
		{
			SettingsMenuSelection = 1;
		}
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_A) == true && KeyTimer <= 0)
	{
		KeyTimer = 15;
		if(SoundSelection == 1)
		{
			SoundSelection = 0;
		}
		else
		{
			SoundSelection = 1;
		}
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_D) == true && KeyTimer <= 0)
	{
		KeyTimer = 15;
		if(SoundSelection == 0)
		{
			SoundSelection = 1;
		}
		else
		{
			SoundSelection = 0;
		}
	}
}