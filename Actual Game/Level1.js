function GameLevel1(deltaTime)
{
	// Removes the cursor from the screen
	canvas.style.cursor = "none";
	
	// Turns on the GameMusic and Turns off the Menu Music
	if(GameMusicOn == true)
	{
		GameMusic.play();
		MenuMusic.stop();
		GameMusicOn = false;
	}
	
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
	
	if(level1Door.broken == false)
	{
		context.save();
			context.drawImage(level1Door.image, level1Door.x, level1Door.y, level1Door.width, level1Door.height);
		context.restore();
	}
	if(level3Door.broken == false)
	{
		context.save();
			context.drawImage(level3Door.image, level3Door.x, level3Door.y, level3Door.width, level3Door.height);
		context.restore();
	}
	context.save();
		context.drawImage(level2Door.image, level2Door.x, level2Door.y, level2Door.width, level2Door.height);
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
	
	// Creates the dialog Timer
	if(keyboard.isKeyDown(keyboard.KEY_E) == true & dialogTimer == 0)
	{
		if(tutorial == 1 | tutorial == 2)
		{
			tutorial += 1;
			dialogTimer = 40;
		}
	}
	
	// Counts down the timer
	if(dialogTimer > 0)
	{
		dialogTimer -= 1;
	}
	
	// Displays the tutorial dialogs
	if(tutorial == 1)
	{
		var LilCluckTut1 = {
		image: document.createElement("img"),
		x: 34,
		y: 510,
		width: 530,
		height: 160,
		};
		LilCluckTut1.image.src = "LilCluckTutDialog1.png";
		context.save();
			context.drawImage(LilCluckTut1.image, LilCluckTut1.x, LilCluckTut1.y, LilCluckTut1.width, LilCluckTut1.height);
		context.restore();
	}
	else if(tutorial == 2)
	{
		var LilCluckTut2 = {
		image: document.createElement("img"),
		x: 34,
		y: 510,
		width: 530,
		height: 160,
		};
		LilCluckTut2.image.src = "LilCluckTutDialog2.png";
		context.save();
			context.drawImage(LilCluckTut2.image, LilCluckTut2.x, LilCluckTut2.y, LilCluckTut2.width, LilCluckTut2.height);
		context.restore();
	}
	else if(tutorial == 3)
	{
		var LilCluckTut3 = {
		image: document.createElement("img"),
		x: 34,
		y: 510,
		width: 530,
		height: 160,
		};
		LilCluckTut3.image.src = "LilCluckTutDialog3.png";
		context.save();
			context.drawImage(LilCluckTut3.image, LilCluckTut3.x, LilCluckTut3.y, LilCluckTut3.width, LilCluckTut3.height);
		context.restore();
		
		if(level1PistolVisable == true)
		{
			var Pistol = {
			image: document.createElement("img"),
			x: 394,
			y: 113,
			width: 29,
			height: 20,
			};
			Pistol.image.src = "Pistol.png";
			context.save();
				context.drawImage(Pistol.image, Pistol.x, Pistol.y, Pistol.width, Pistol.height);
			context.restore();
			
			var hit = intersects(player.x, player.y, player.width, player.height, Pistol.x, Pistol.y, Pistol.width, Pistol.height);
			if(hit == true)
			{
				level1PistolVisable = false;
				playerPistol = true;
				tutorial += 1;
			}
		}
	}
	else if(tutorial == 4)
	{
		var LilCluckTut4 = {
		image: document.createElement("img"),
		x: 34,
		y: 510,
		width: 530,
		height: 160,
		};
		LilCluckTut4.image.src = "LilCluckTutDialog4.png";
		context.save();
			context.drawImage(LilCluckTut4.image, LilCluckTut4.x, LilCluckTut4.y, LilCluckTut4.width, LilCluckTut4.height);
		context.restore();
	}
	else if(tutorial == 5)
	{
		var LilCluckTut5 = {
		image: document.createElement("img"),
		x: 34,
		y: 510,
		width: 530,
		height: 160,
		};
		LilCluckTut5.image.src = "LilCluckTutDialog5.png";
		context.save();
			context.drawImage(LilCluckTut5.image, LilCluckTut5.x, LilCluckTut5.y, LilCluckTut5.width, LilCluckTut5.height);
		context.restore();
	}
	
	if(level1Door.broken == true & trigger1 == false)
	{
		trigger1 = true;
		tutorial += 1;
	}
	
	// Code For Bullets
	// Update all the bullets
	for(var i=0; i<bullets.length; i++)
	{
		bullets[i].x += bullets[i].velocityX;
		bullets[i].y += bullets[i].velocityY;
	}
	
	for(var i=0; i<bullets.length; i++)
	{	
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, level1Wall1.x, level1Wall1.y, level1Wall1.width, level1Wall1.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, level1Wall2.x, level1Wall2.y, level1Wall2.width, level1Wall2.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, level1Wall3.x, level1Wall3.y, level1Wall3.width, level1Wall3.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, level1Wall4.x, level1Wall4.y, level1Wall4.width, level1Wall4.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, level1Wall5.x, level1Wall5.y, level1Wall5.width, level1Wall5.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, level1Wall6.x, level1Wall6.y, level1Wall6.width, level1Wall6.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, level1Wall7.x, level1Wall7.y, level1Wall7.width, level1Wall7.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, level1Wall8.x, level1Wall8.y, level1Wall8.width, level1Wall8.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
			var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, level1Wall9.x, level1Wall9.y, level1Wall9.width, level1Wall9.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, level1Wall10.x, level1Wall10.y, level1Wall10.width, level1Wall10.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, level1Wall11.x, level1Wall11.y, level1Wall11.width, level1Wall11.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, level1Wall12.x, level1Wall12.y, level1Wall12.width, level1Wall12.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, level1Wall13.x, level1Wall13.y, level1Wall13.width, level1Wall13.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, level1Wall14.x, level1Wall14.y, level1Wall14.width, level1Wall14.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, level1Wall15.x, level1Wall15.y, level1Wall15.width, level1Wall15.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		if(level1Door.broken == false)
		{
			var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, level1Door.x, level1Door.y, level1Door.width, level1Door.height);
			if(hit == true)
			{
				if(door1Health > 0)
				{
					door1Health -= 1;
					bullets.splice(i, 1);
					break;
				}
				else if(door1Health == 0)
				{
					level1Door.broken = true;
				}
			}
		}
		if(level3Door.broken == false)
		{
			var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, level3Door.x, level3Door.y, level3Door.width, level3Door.height);
			if(hit == true)
			{
				if(door3Health > 0)
				{
					door3Health -= 1;
					bullets.splice(i, 1);
					break;
				}
				else if(door3Health == 0)
				{
					level3Door.broken = true;
				}
			}
		}
		if(level2Door.broken == false)
		{
			var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, level2Door.x, level2Door.y, level2Door.width, level2Door.height);
			if(hit == true)
			{
				bullets.splice(i, 1);
				break;
			}
		}
	}
	
	console.log(bullets.length);
	// draw all the bullets
	for(var i=0; i<bullets.length; i++)
	{
		context.drawImage(bullets[i].image, bullets[i].x - bullets[i].width/2, bullets[i].y - bullets[i].height/2);
	}
}