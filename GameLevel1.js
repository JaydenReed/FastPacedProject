function level1()
{
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

// Code to draw player

// Code to allow player movement and actions

// Code for door interaction
}