function splashScreen(deltaTime)
{
	// Adds 1 to the timer
	if(splashTimerOn == true)
	{
		splashTimer += 1;
	}
	
	// Plays the Menu Music
	if(splashTimer == 1)
	{
		MenuMusic.play();
	}
	
	// Checks if the Timer has reached 40 to go to the Main Menu
	if(splashTimer == 40)
	{
		gameState = STATE_MAINMENU;
		splashTimerOn = false;
	}
}