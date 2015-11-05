var GameTitle = {
	image: document.createElement("img"),
	x: 20,
	y: 20,
	width: 800,
	height: 112,
};
var startGameButton = {
	image: document.createElement("img"),
	x: 20,
	y: 230,
	width: 300,
	height: 70,
};
var settingsButton = {
	image: document.createElement("img"),
	x: 20,
	y: 295,
	width: 209,
	height: 70,
};
var mainMenuBackground = {
	image: document.createElement("img"),
	x: 0,
	y: 0,
	width: 940,
	height: 700,
};

function mainMenu(deltaTime)
{
	// Draws the Menu Background
	mainMenuBackground.image.src = "CityScape.png";
	context.save();
		context.drawImage(mainMenuBackground.image, mainMenuBackground.x, mainMenuBackground.y, mainMenuBackground.width, mainMenuBackground.height);
	context.restore();
	
	// Draws the Game Title
	GameTitle.image.src = "DowntownShooter.png";
	context.save();
		context.drawImage(GameTitle.image, GameTitle.x, GameTitle.y, GameTitle.width, GameTitle.height);
	context.restore();
	
	// Draws the Start Game button
	startGameButton.image.src = "StartGame.png";
	context.save();
		context.drawImage(startGameButton.image, startGameButton.x, startGameButton.y, startGameButton.width, startGameButton.height);
	context.restore();
	
	// Draws the Settings button
	settingsButton.image.src = "Settings.png";
	context.save();
		context.drawImage(settingsButton.image, settingsButton.x, settingsButton.y, settingsButton.width, settingsButton.height);
	context.restore();
	
	// Sets the timer for the Menu buttons
	if(KeyTimer > 0)
	{
		KeyTimer -= 1;
	}
	
	// Sets the S key events for the Menu
	if(keyboard.isKeyDown(keyboard.KEY_S) == true && KeyTimer <= 0)
	{
		KeyTimer = 15;
		if(mainMenuSelection == 0)
		{
			mainMenuSelection = 1;
		}
		else
		{
			mainMenuSelection = 0;
		}
	}
	
	// Sets the W key events for the Menu
	if(keyboard.isKeyDown(keyboard.KEY_W) == true && KeyTimer <= 0)
	{
		KeyTimer = 15;
		if(mainMenuSelection == 1)
		{
			mainMenuSelection = 0;
		}
		else
		{
			mainMenuSelection = 1;
		}
	}
	
	// Sets the Enter key events for the Menu
	if(keyboard.isKeyDown(keyboard.KEY_ENTER) == true && KeyTimer <= 0)
	{
		KeyTimer = 15;
		if(mainMenuSelection == 0)
		{
			gameState = STATE_GAMELEVEL1
		}
		if(mainMenuSelection == 1)
		{
			gameState = STATE_SETTINGS
		}
	}
	
	// Creates the growing effect for the Menu Buttons
	if(mainMenuSelection == 0)
	{
		settingsButton.width = 209;
		settingsButton.height = 70;
		settingsButtonGrow = true;
		if(startGameButton.width == 350)
		{
			startGameButtonGrow = false;
		}
		else if(startGameButton.width == 300)
		{
			startGameButtonGrow = true;
		}
		if(startGameButtonGrow == true)
		{
			startGameButton.width += 1;
			startGameButton.height += 0.3;
		}
		else if(startGameButtonGrow == false)
		{
			startGameButton.width -= 1;
			startGameButton.height -= 0.3;
		}
	}
	else if(mainMenuSelection == 1)
	{
		startGameButton.width = 300;
		startGameButton.height = 70;
		startGameButtonGrow = true;
		if(settingsButton.width == 259)
		{
			settingsButtonGrow = false;
		}
		else if(settingsButton.width == 209)
		{
			settingsButtonGrow = true;
		}
		if(settingsButtonGrow == true)
		{
			settingsButton.width += 1;
			settingsButton.height += 0.3
		}
		else if(settingsButtonGrow == false)
		{
			settingsButton.width -= 1;
			settingsButton.height -= 0.3;
		}
	}
}