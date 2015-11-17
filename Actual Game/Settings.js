var settingsBackground = {
	image: document.createElement("img"),
	x: 0,
	y: 0,
	width: 940,
	height: 700,
};

var SettingsTitle = {
	image: document.createElement("img"),
	x: 20,
	y: 20,
	width: 650,
	height: 112,
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
}