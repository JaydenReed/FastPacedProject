function splashScreen(deltaTime)
{
	// Adds 1 to the timer
	splashTimer += 1;
	
	// Plays the Menu Music
	
	
	// Checks if the Timer has reached 40 to go to the Main Menu
	if(splashTimer == 40)
	{
		gameState = STATE_MAINMENU;
	}
}