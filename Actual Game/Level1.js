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
	
	// Code For Bullets
	// Update all the bullets
	for(var i=0; i<bullets.length; i++)
	{
		bullets[i].x += bullets[i].velocityX;
		bullets[i].y += bullets[i].velocityY;
	}
	
	for(var i=0; i<bullets.length; i++)
	{	
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, wall1.x, wall1.y, wall1.width, wall1.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, wall2.x, wall2.y, wall2.width, wall2.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, wall3.x, wall3.y, wall3.width, wall3.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, wall4.x, wall4.y, wall4.width, wall4.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, wall5.x, wall5.y, wall5.width, wall5.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, wall6.x, wall6.y, wall6.width, wall6.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, wall7.x, wall7.y, wall7.width, wall7.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, wall8.x, wall8.y, wall8.width, wall8.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
			var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, level1Wall9.x, level1Wall9.y, level1Wall9.width, level1Wall9.height);
		if(hit == true)
		{
			
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
		
		{
			bullets.splice(i, 1);
			break;
		}
		
	}
	
	// draw all the bullets
	for(var i=0; i<bullets.length; i++)
	{
		context.drawImage(bullets[i].image, bullets[i].x - bullets[i].width/2, bullets[i].y - bullets[i].height/2);
	}
}