var Player = function()
{
	this.x = 50;
	this.y = 50;
	this.width = 159;
	this.height = 163;
	this.velocity = new Vector2();
	this.velocity.set(1, 1);
}

Player.prototype.update = function(deltaTime)
{
	this.sprite.update(deltaTime);
}

Player.prototype.draw = function()
{
	context.save();
		context.drawImage(WorldBackground.image, WorldBackground.x, WorldBackground.y, WorldBackground.width, WorldBackground.height);
	context.restore();
}