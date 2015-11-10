var player = {
		image: document.createElement("img"),
		x: 153,
		y: 228,
		angularDirection: 0,
		rotation: 0,
		width: 20,
		height: 18,
};
player.image.src = "Player.png";

function playerMovement()
{
	var hit = intersects(player.x, player.y, player.width, player.height, level1Wall1.x, level1Wall1.y, level1Wall1.width, level1Wall1.height);
	if(hit == true)
	{
		player.x += 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, level1Wall2.x, level1Wall2.y, level1Wall2.width, level1Wall2.height);
	if(hit == true)
	{
		player.y += 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, level1Wall3.x, level1Wall3.y, level1Wall3.width, level1Wall3.height);
	if(hit == true)
	{
		player.y -= 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, level1Wall4.x, level1Wall4.y, level1Wall4.width, level1Wall4.height);
	if(hit == true)
	{
		player.x -= 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, level1Wall5.x, level1Wall5.y, level1Wall5.width, level1Wall5.height);
	if(hit == true)
	{
		player.x += 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, level1Wall6.x, level1Wall6.y, level1Wall6.width, level1Wall6.height);
	if(hit == true)
	{
		player.x -= 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, level1Wall7.x, level1Wall7.y, level1Wall7.width, level1Wall7.height);
	if(hit == true)
	{
		player.x += 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, level1Wall8.x, level1Wall8.y, level1Wall8.width, level1Wall8.height);
	if(hit == true)
	{
		player.y += 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, level1Wall9.x, level1Wall9.y, level1Wall9.width, level1Wall9.height);
	if(hit == true)
	{
		player.x -= 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, level1Wall10.x, level1Wall10.y, level1Wall10.width, level1Wall10.height);
	if(hit == true)
	{
		player.y -= 4;
	}
	var hit = intersects(player.x, player.y, player.width, player.height, level1Wall11.x, level1Wall11.y, level1Wall11.width, level1Wall11.height);
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
}