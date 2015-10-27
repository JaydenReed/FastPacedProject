var Enemy = {
		image: document.createElement("img"),
		x: 355,
		y: 440,
		angularDirection: 0,
		rotation: 0,
		width: 20,
		height: 18,
};
player.image.src = "ProtoEnemy.png";



Enemy.prototype.draw = function()
{
	this.sprite.draw(context, this.position.x - worldOffsetX, this.position.y);
}