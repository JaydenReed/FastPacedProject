// this creates the player object and assigns it some properties
var player = {
	image: document.createElement("img"),
	x: SCREEN_WIDTH/2,
	y: SCREEN_HEIGHT/2,
	width: 93,
	height: 80,
	directionX: 0,
	directionY: 0,
	angularDirection: 0,
	rotation: 0,
	playerDead: false
};
// set the image for the player to use
player.image.src = "Proto Player.png";

