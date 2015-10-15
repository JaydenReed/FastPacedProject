function level1(deltaTime)
{
	// Draws the background image of the level
	var WorldBackground = {
		image: document.createElement("img"),
		x: 0,
		y: 0,
		width: 940,
		height: 700,
	};
	WorldBackground.image.src = "Level1Design.png";
	context.save();
		context.drawImage(WorldBackground.image, WorldBackground.x, WorldBackground.y, WorldBackground.width, WorldBackground.height);
	context.restore();

	// Code to draw collision boxes to stop player travelling through walls, etc.
	var boundary1 = {
		x: 0,
		y: 0,
		width: 266,
		height: 700
	};
	var boundary2 = {
		x: 0,
		y: 0,
		width: 940,
		height: 110
	}
	var boundary3 = {
		x: 0,
		y: 587,
		width: 940,
		height: 113
	}
	var boundary4 = {
		x: 612,
		y: 0,
		width: 328,
		height: 270
	}
	var boundary5 = {
		x: 499,
		y: 510,
		width: 441,
		height: 190
	}
	var boundary6 = {
		x: 720,
		y: 264,
		width: 220,
		height: 252
	}

	// Code to draw player
	//player.update(deltaTime);
	context.save();
		context.translate(player.x, player.y);
		context.drawImage(player.image, player.width, player.height);
	context.restore();

	// Code to allow player movement and actions

	// Code for door interaction
}