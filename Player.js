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
		angularDirection: 0,
		rotation: 0,
		width: 20,
		height: 18,
};
player.image.src = "ProtoPlayer.png";

function playerMovement(wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, innerWall1, innerWall2, innerWall3, innerWall4, innerWall5, innerWall6, innerWall7, innerWall8, innerWall9, innerWall10, innerWall11, innerWall12, innerWall13, innerWall14, innerWall15, innerWall16, innerWall17, innerWall18, innerWall19, innerWall20)
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
	var hit = intersects(player.x, player.y, player.width, player.height, wall3.x, wall3.y, wall3.width, wall3.height);
	if(hit == true)
	{
		player.y += 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, wall4.x, wall4.y, wall4.width, wall4.height);
	if(hit == true)
	{
		player.x -= 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, wall5.x, wall5.y, wall5.width, wall5.height);
	if(hit == true)
	{
		player.y -= 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, wall6.x, wall6.y, wall6.width, wall6.height);
	if(hit == true)
	{
		player.x -= 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, wall7.x, wall7.y, wall7.width, wall7.height);
	if(hit == true)
	{
		player.y -= 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, wall8.x, wall8.y, wall8.width, wall8.height);
	if(hit == true)
	{
		player.x += 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, innerWall1.x, innerWall1.y, innerWall1.width, innerWall1.height);
	if(hit == true)
	{
		player.x -= 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, innerWall2.x, innerWall2.y, innerWall2.width, innerWall2.height);
	if(hit == true)
	{
		player.x += 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, innerWall3.x, innerWall3.y, innerWall3.width, innerWall3.height);
	if(hit == true)
	{
		player.x -= 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, innerWall4.x, innerWall4.y, innerWall4.width, innerWall4.height);
	if(hit == true)
	{
		player.x += 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, innerWall5.x, innerWall5.y, innerWall5.width, innerWall5.height);
	if(hit == true)
	{
		player.y -= 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, innerWall6.x, innerWall6.y, innerWall6.width, innerWall6.height);
	if(hit == true)
	{
		player.y += 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, innerWall7.x, innerWall7.y, innerWall7.width, innerWall7.height);
	if(hit == true)
	{
		player.y -= 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, innerWall8.x, innerWall8.y, innerWall8.width, innerWall8.height);
	if(hit == true)
	{
		player.y += 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, innerWall9.x, innerWall9.y, innerWall9.width, innerWall9.height);
	if(hit == true)
	{
		player.y -= 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, innerWall10.x, innerWall10.y, innerWall10.width, innerWall10.height);
	if(hit == true)
	{
		player.y += 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, innerWall11.x, innerWall11.y, innerWall11.width, innerWall11.height);
	if(hit == true)
	{
		player.y -= 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, innerWall12.x, innerWall12.y, innerWall12.width, innerWall12.height);
	if(hit == true)
	{
		player.y += 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, innerWall13.x, innerWall13.y, innerWall13.width, innerWall13.height);
	if(hit == true)
	{
		player.x -= 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, innerWall14.x, innerWall14.y, innerWall14.width, innerWall14.height);
	if(hit == true)
	{
		player.x += 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, innerWall15.x, innerWall15.y, innerWall15.width, innerWall15.height);
	if(hit == true)
	{
		player.x -= 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, innerWall16.x, innerWall16.y, innerWall16.width, innerWall16.height);
	if(hit == true)
	{
		player.x += 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, innerWall17.x, innerWall17.y, innerWall17.width, innerWall17.height);
	if(hit == true)
	{
		player.x -= 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, innerWall18.x, innerWall18.y, innerWall18.width, innerWall18.height);
	if(hit == true)
	{
		player.x += 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, innerWall19.x, innerWall19.y, innerWall19.width, innerWall19.height);
	if(hit == true)
	{
		player.x -= 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, innerWall20.x, innerWall20.y, innerWall20.width, innerWall20.height);
	if(hit == true)
	{
		player.x += 4;
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
	if(keyboard.isKeyDown(keyboard.KEY_SPACE) == true)
	{
		
	}
}