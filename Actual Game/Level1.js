function GameLevel1(deltaTime)
{
	// Removes the cursor from the screen
	canvas.style.cursor = "none";
	
	// Draws the background image of the level
	var WorldBackground = {
		image: document.createElement("img"),
		x: 0,
		y: 0,
		width: 940,
		height: 700,
	};
	WorldBackground.image.src = "Level1.png";
	context.save();
		context.drawImage(WorldBackground.image, WorldBackground.x, WorldBackground.y, WorldBackground.width, WorldBackground.height);
	context.restore();
	
	// Draws the player
	player.rotation = Math.atan2(player.y - mouseY, player.x - mouseX) + Math.PI/2;
	
	context.save();
		context.translate(player.x + player.width/2, player.y + player.height/2);
		context.rotate(player.rotation);
		context.drawImage(player.image, -player.width/2, -player.height/2);
	context.restore();
	
	// Draws the cursor
	DrawCursor(mouseX, mouseY)
	
	// Calls the player movement
	playerMovement()
}