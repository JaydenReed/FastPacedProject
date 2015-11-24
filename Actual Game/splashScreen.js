var splashText1 = {
	image: document.createElement("img"),
	x: 20,
	y: 20,
	width: 448,
	height: 70,
};
splashText1.image.src = "Splash1.png";

var startGameButton = {
	image: document.createElement("img"),
	x: 20,
	y: 230,
	width: 300,
	height: 70,
};
splashText1.image.src = "Splash1.png";

function splashScreen(deltaTime)
{
	var splashBackground = {
		image: document.createElement("img"),
		x: 0,
		y: 0,
		width: 940,
		height: 700,
	};
	splashBackground.image.src = "Splash.png";
	context.save();
		context.drawImage(splashBackground.image, splashBackground.x, splashBackground.y, splashBackground.width, splashBackground.height);
	context.restore();
	
	if(KeyTimer > 0)
	{
		KeyTimer -= 1;
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_ENTER) == true & KeyTimer <= 0)
	{
		KeyTimer = 15;
		gameState = STATE_MAINMENU;
	}
	
	// Adds 1 to the timer
	if(splashTimerOn == true)
	{
		splashTimer += 1;
	}
	
	// Creates the splash sequence
	if(splashTimer == 80)
	{
		splashWords = 1;
	}
	else if(splashTimer == 250)
	{
		splashWords = 0;
	}
	else if(splashTimer == 350)
	{
		splashWords = 2;
	}
	else if(splashTimer == 470)
	{
		splashWords = 0;
	}
	
	if(splashWords == 1)
	{
		context.save();
			context.drawImage(splashText1.image, splashText1.x, splashText1.y, splashText1.width, splashText1.height);
		context.restore();
	}
	
	// Plays the Menu Music
	if(splashTimer == 1)
	{
		MenuMusic.play();
	}
	
	// Checks if the Timer has reached 40 to go to the Main Menu
	if(splashTimer == 500)
	{
		gameState = STATE_MAINMENU;
		splashTimerOn = false;
	}
}