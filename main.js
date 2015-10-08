// Get the 2D context from the canvas in
// our HTML page
var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var startFrameMillis = Date.now();
var endFrameMillis = Date.now();

var STATE_SPLASH = 0;
var STATE_GAMELEVEL1 = 1;
var STATE_GAMEOVER = 2;
var STATE_SETTINGS = 3;
var STATE_MAINMENU = 4;

// Starting Game State
var gameState = STATE_MAINMENU;

function runSplash(deltaTime)
{

}

function runSettings(deltaTime)
{
	settingsmenu()
}

function runMainMenu(deltaTime)
{
	mainmenu()
}

function runGameLevel1(deltaTime)
{

}

function runGameOver(deltaTime)
{

}

function getDeltaTime() // Only call this function once per frame
{
	endFrameMillis = startFrameMillis;
	startFrameMillis = Date.now();
	var deltaTime = (startFrameMillis - endFrameMillis) * 0.001;
	if (deltaTime > 1) // validate that the delta is within range
	{
		deltaTime = 1;
	}
	return deltaTime;
}

// Constant Variables
var SCREEN_WIDTH = canvas.width;
var SCREEN_HEIGHT = canvas.height;

// Non-Constant Variables
var MainMenuSelection = 0;
var SettingsMenuSelection = 0;
var KeyTimer = 0;
var keyboard = new Keyboard()

// Intersect Code
function intersects(x1, y1, w1, h1, x2, y2, w2, h2)
{
	if(y2 + h2 < y1 || x2 + w2 < x1 || x2 > x1 + w1 || y2 > y1 + h1)
	{
		return false;
	}
	return true;
}

function run()
{
	context.fillStyle = "#999999";
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	var deltaTime = getDeltaTime();
	
	switch(gameState)
	{
		case STATE_SPLASH:
			runSplash(deltaTime);
			break;
		case STATE_GAMELEVEL1:
			runGameLevel1(deltaTime);
			break;
		case STATE_GAMEOVER:
			runGameOver(deltaTime);
			break;
		case STATE_SETTINGS:
			runSettings(deltaTime);
			break;
		case STATE_MAINMENU:
			runMainMenu(deltaTime);
			break;
	}
}

// This code sets up the framework to that the run function will end up
// being called 60 times per second. There is also some things to fall
// back on in case the browser gets a tad angry
(function() {
	var onEachFrame;
	if (window.requestAnimationFrame) {
		onEachFrame = function(cb) {
			var _cb = function() { cb(); window.requestAnimationFrame(_cb);}
			_cb();
		};
	} else if (window.mozRequestAnimationFrame) {
		onEachFrame = function(cb) {
			var _cb = function() { cb(); window.mozRequestAnimationFrame(_cb); }
			_cb();
		};
	} else {
		onEachFrame = function(cb) {
			setInterval(cb, 1000 / 60);
		}
	}
	
	window.onEachFrame = onEachFrame;
	
	})();
	
	window.onEachFrame(run);