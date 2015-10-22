function level1(deltaTime)
{
	canvas.style.cursor = "none";
	
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
		y: 180,
		width: 3,
		height: 219
	}
	var innerWall4 = {
		x: 396,
		y: 180,
		width: 3,
		height: 219
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
	var innerWall9 = {
		x: 399,
		y: 395,
		width: 254,
		height: 3
	}
	var innerWall10 = {
		x: 399,
		y: 398,
		width: 254,
		height: 3
	}
	var innerWall11 = {
		x:690,
		y: 394,
		width: 31,
		height: 3
	}
	var innerWall12 = {
		x: 690,
		y: 397,
		width: 31,
		height: 3
	}
	var innerWall13 = {
		x: 612,
		y: 270,
		width: 3,
		height: 44
	}
	var innerWall14 = {
		x: 616,
		y: 270,
		width: 3,
		height: 44
	}
	var innerWall15 = {
		x: 612,
		y: 354,
		width: 3,
		height: 41
	}
	var innerWall16 = {
		x: 616,
		y: 354,
		width: 3,
		height: 40
	}
	var innerWall17 = {
		x: 499,
		y: 401,
		width: 3,
		height: 39
	}
	var innerWall18 = {
		x: 502,
		y: 401,
		width: 3,
		height: 39
	}
	var innerWall19 = {
		x: 499,
		y: 480,
		width: 3,
		height: 30
	}
	var innerWall20 = {
		x: 502,
		y: 480,
		width: 3,
		height: 30
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
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, innerWall1.x, innerWall1.y, innerWall1.width, innerWall1.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, innerWall2.x, innerWall2.y, innerWall2.width, innerWall2.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, innerWall3.x, innerWall3.y, innerWall3.width, innerWall3.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, innerWall4.x, innerWall4.y, innerWall4.width, innerWall4.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, innerWall5.x, innerWall5.y, innerWall5.width, innerWall5.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, innerWall6.x, innerWall6.y, innerWall6.width, innerWall6.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, innerWall7.x, innerWall7.y, innerWall7.width, innerWall7.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, innerWall8.x, innerWall8.y, innerWall8.width, innerWall8.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, innerWall9.x, innerWall9.y, innerWall9.width, innerWall9.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, innerWall10.x, innerWall10.y, innerWall10.width, innerWall10.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, innerWall11.x, innerWall11.y, innerWall11.width, innerWall11.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, innerWall12.x, innerWall12.y, innerWall12.width, innerWall12.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, innerWall13.x, innerWall13.y, innerWall13.width, innerWall13.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, innerWall14.x, innerWall14.y, innerWall14.width, innerWall14.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, innerWall15.x, innerWall15.y, innerWall15.width, innerWall15.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, innerWall16.x, innerWall16.y, innerWall16.width, innerWall16.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, innerWall17.x, innerWall17.y, innerWall17.width, innerWall17.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, innerWall18.x, innerWall18.y, innerWall18.width, innerWall18.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, innerWall19.x, innerWall19.y, innerWall19.width, innerWall19.height);
		if(hit == true)
		{
			bullets.splice(i, 1);
			break;
		}
		var hit = intersects(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height, innerWall20.x, innerWall20.y, innerWall20.width, innerWall20.height);
		if(hit == true)
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
	
	// Code to draw player
	//player.update(deltaTime);
	
	player.rotation = Math.atan2(player.y - mouseY, player.x - mouseX) + Math.PI/2;
	
	context.save();
		context.translate(player.x + player.width/2, player.y + player.height/2);
		context.rotate(player.rotation);
		context.drawImage(player.image, -player.width/2, -player.height/2);
	context.restore();
	
	playerMovement(wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, innerWall1, innerWall2, innerWall3, innerWall4, innerWall5, innerWall6, innerWall7, innerWall8, innerWall9,innerWall10, innerWall11, innerWall12, innerWall13, innerWall14, innerWall15, innerWall16, innerWall17, innerWall18, innerWall19, innerWall20);

	level1Doors()
	
	// Code to draw cursor
	DrawCursor(mouseX, mouseY)
}