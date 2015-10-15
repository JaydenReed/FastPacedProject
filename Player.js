// var Player = function()
// {
	// this.x = 50;
	// this.y = 50;
	// this.width = 159;
	// this.height = 163;
	// this.velocity = new Vector2();
	// this.velocity.set(1, 1);
	// this.image 
// }

// Player.prototype.update = function(deltaTime)
// {

// }

// Player.prototype.draw = function()
// {

// }

var player = {
		image: document.createElement("img"),
		x: 355,
		y: 440,
		width: 20,
		height: 33,
};
player.image.src = "ProtoPlayer.png";

function playerMovement(wall1, wall2, wall3)
{
	var hit = intersects(player.x, player.y, player.width, player.height, wall1.x, wall1.y, wall1.width, wall1.height);
	if(hit == true)
	{
		player.y += 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, wall2.x, wall2.y, wall2.width, wall2.height);
	if(hit == true)
	{
		player.x -= 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, wall2.x, wall2.y, wall2.width, wall2.height);
	if(hit == true)
	{
		player.x -= 4;
	}
	if(keyboard.isKeyDown(keyboard.KEY_S) == true)
	{
		if(keyboard.isKeyDown(keyboard.KEY_D) == true)
		{
			player.x += 4;
			player.y += 4;
		}
		else if(keyboard.isKeyDown(keyboard.KEY_A) == true)
		{
			player.x -= 4;
			player.y += 4;
		}
		else
		{
			player.y += 4;
		}
	}
	if(keyboard.isKeyDown(keyboard.KEY_W) == true)
	{
		if(keyboard.isKeyDown(keyboard.KEY_A) == true)
		{
			player.x -= 4;
			player.y -= 4;
		}
		else if(keyboard.isKeyDown(keyboard.KEY_D) == true)
		{
			player.x += 4;
			player.y -= 4;
		}
		else
		{
			player.y -= 4;
		}
	}
	if(keyboard.isKeyDown(keyboard.KEY_A) == true && keyboard.isKeyDown(keyboard.KEY_W) == false && keyboard.isKeyDown(keyboard.KEY_S) == false)
	{
		player.x -= 4;
	}
	if(keyboard.isKeyDown(keyboard.KEY_D) == true && keyboard.isKeyDown(keyboard.KEY_W) == false && keyboard.isKeyDown(keyboard.KEY_S) == false)
	{
		player.x += 4;
	}
}