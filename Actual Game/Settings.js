var settingsBackground = {
	image: document.createElement("img"),
	x: 0,
	y: 0,
	width: 940,
	height: 700,
};

var SettingsTitle = {
	image: document.createElement("img"),
	x: 210,
	y: 120,
	width: 500,
	height: 92,
};

var musicButton = {
	image: document.createElement("img"),
	x: 140,
	y: 295,
	width: 175,
	height: 70,
};

var soundFXButton = {
	image: document.createElement("img"),
	x: 555,
	y: 295,
	width: 210,
	height: 70,
};

var backButton = {
	image: document.createElement("img"),
	x: 360,
	y: 450,
	width: 145,
	height: 70,
};

function settings(deltaTime)
{
	// Draws the Background
	settingsBackground.image.src = "CityScape.png";
	context.save();
		context.drawImage(settingsBackground.image, settingsBackground.x, settingsBackground.y, settingsBackground.width, settingsBackground.height);
	context.restore();
	
	// Draws the Game Title
	SettingsTitle.image.src = "Settings.png";
	context.save();
		context.drawImage(SettingsTitle.image, SettingsTitle.x, SettingsTitle.y, SettingsTitle.width, SettingsTitle.height);
	context.restore();
	
	// Draws the Music button
	musicButton.image.src = "Music.png";
	context.save();
		context.drawImage(musicButton.image, musicButton.x, musicButton.y, musicButton.width, musicButton.height);
	context.restore();
	
	// Draws the soundFX button
	soundFXButton.image.src = "SoundFX.png";
	context.save();
		context.drawImage(soundFXButton.image, soundFXButton.x, soundFXButton.y, soundFXButton.width, soundFXButton.height);
	context.restore();
	
	// Draws the Back button
	backButton.image.src = "Back.png";
	context.save();
		context.drawImage(backButton.image, backButton.x, backButton.y, backButton.width, backButton.height);
	context.restore();
	
	// Sets the timer for the Menu buttons
	if(KeyTimer > 0)
	{
		KeyTimer -= 1;
	}
	
	// Sets the A key events for the Menu
	if(keyboard.isKeyDown(keyboard.KEY_A) == true && KeyTimer <= 0)
	{
		KeyTimer = 15;
		if(settingsSelection == 2)
		{
			settingsSelection = 0;
		}
		else
		{
			settingsSelection = 2;
		}
	}
	
	// Sets the D key events for the Menu
	if(keyboard.isKeyDown(keyboard.KEY_D) == true && KeyTimer <= 0)
	{
		KeyTimer = 15;
		if(settingsSelection == 0)
		{
			settingsSelection = 2;
		}
		else
		{
			settingsSelection = 0;
		}
	}
	
	// Sets the S key events for the Menu
	if(keyboard.isKeyDown(keyboard.KEY_S) == true && KeyTimer <= 0)
	{
		KeyTimer = 15;
		if(settingsSelection == 2 || 0)
		{
			settingsSelection = 1;
		}
	}
	
	// Sets the W key events for the Menu
	if(keyboard.isKeyDown(keyboard.KEY_W) == true && KeyTimer <= 0)
	{
		KeyTimer = 15;
		if(settingsSelection == 1)
		{
			settingsSelection = 0 || 2;
		}
	}
	
	// Creates the growing effect for the Menu Buttons
	if(settingsSelection == 0)
	{
		musicButton.width = 175;
		musicButton.height = 70;
		musicButtonGrow = true;
		if(soundFXButton.width == 225)
		{
			soundFXButtonGrow = false;
		}
		else if(soundFXButton.width == 175)
		{
			soundFXButtonGrow = true;
		}
		if(soundFXButtonGrow == true)
		{
			soundFXButton.width += 1;
			soundFXButton.height += 0.3
		}
		else if(soundFXButtonGrow == false)
		{
			soundFXButton.width -= 1;
			soundFXButton.height -= 0.3;
		}
	}
	else if(settingsSelection == 1)
	{
		soundFXButton.width = 175;
		soundFXButton.height = 70;
		soundFXButtonGrow = true;
		
		if(backButton.width == 225)
		{
			backButtonGrow = false;
		}
		else if(backButton.width == 175)
		{
			backButtonGrow = true;
		}
		if(backButtonGrow == true)
		{
			backButton.width += 1;
			backButton.height += 0.3;
		}
		else if(backButtonGrow == false)
		{
			backButton.width -= 1;
			backButton.height -= 0.3;
		}
	}
	else if(settingsSelection == 2)
	{
		backButton.width = 175;
		backButton.height = 70;
		backButtonGrow = true;
		
		if(musicButton.width == 225)
		{
			musicButtonGrow = false;
		}
		else if(musicButton.width == 175)
		{
			musicButtonGrow = true;
		}
		if(musicButtonGrow == true)
		{
			musicButton.width += 1;
			musicButton.height += 0.3;
		}
		else if(musicButtonGrow == false)
		{
			musicButton.width -= 1;
			musicButton.height -= 0.3;
		}
	}
}