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
	var wall1 = {
		x: 259,
		y: 103,
		width: 359,
		height: 7
	};
	var wall2 = {
		x: 612,
		y: 104,
		width: 6,
		height: 167
	}
	var wall3 = {
		x: 612,
		y: 263,
		width: 116,
		height: 7
	}
	var wall4 = {
		x: 721,
		y: 264,
		width: 7,
		height: 252
	}
	var wall5 = {
		x: 504,
		y: 510,
		width: 223,
		height: 6
	}
	var wall6 = {
		x: 499,
		y: 510,
		width: 7,
		height: 82
	}
	var wall7 = {
		x: 258,
		y: 586,
		width: 248,
		height: 6
	}
	var wall8 = {
		x: 258,
		y: 103,
		width: 7,
		height: 489
	}
	var innerWall1 = {
		x: 392,
		y: 108,
		width: 4,
		height: 29
	}
	var innerWall2 = {
		x: 396,
		y: 108,
		width: 4,
		height: 30
	}
	var innerWall3 = {
		x: 392,
		y: 170,
		width: 3,
		height: 224
	}
	var innerWall4 = {
		x: 397,
		y: 170,
		width: 3,
		height: 224
	}
	var innerWall5 = {
		x: 266,
		y: 393,
		width: 46,
		height: 3
	}
	var innerWall6 = {
		x: 266,
		y: 398,
		width: 46,
		height: 3
	}
	var innerWall7 = {
		x: 347,
		y: 394,
		width: 47,
		height: 2
	}
	var innerWall8 = {
		x: 347,
		y: 399,
		width: 47,
		height: 2
	}
	// Code to draw player
	//player.update(deltaTime);
	context.save();
		context.translate(player.x, player.y);
		context.drawImage(player.image, player.width - player.width, player.height - player.height);
	context.restore();
	
	playerMovement(wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, innerWall1, innerWall2, innerWall3, innerWall4, innerWall5, innerWall6, innerWall7, innerWall8);

	level1Doors()
}