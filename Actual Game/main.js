// Get the 2D context from the canvas in
// our HTML page
var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var startFrameMillis = Date.now();
var endFrameMillis = Date.now();

// Game States
var STATE_SPLASH = 0;
var STATE_MAINMENU = 1;
var STATE_SETTINGS = 2;
var STATE_GAMEOVER = 3;
var STATE_GAMELEVEL1 = 4;
var STATE_GAMELEVEL2 = 5;

// Starting Game State
var gameState = STATE_SPLASH;

// Grabs DeltaTime
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
var BULLET_SPEED = 10;
var ENEMY_SPEED = 240;

// Non-Constant Variables
var mainMenuSelection = 0;
var startGameButtonGrow = true;
var settingsButtonGrow = true;
var settingsSelection = 1;
var musicButtonGrow = true;
var soundFXButtonGrow = true;
var backButtonGrow = true;
var KeyTimer = 0;
var keyboard = new Keyboard()
var tutorial = 1;
var dialogTimer = 0;
var playerPistol = false;
var level1PistolVisable = true;
var splashTimer = 0;
var MenuMusic;
var GameMusic;
var bullets = [];
var splashTimerOn = true;
var GameMusicOn = true;
var splashWords = 0;
var door1Health = 5;
var door3Health = 5;
var door2Unlocked = false;
var trigger1 = false;
var trigger2 = false;
var trigger3 = false;

// Creates the Menu Music
MenuMusic = new Howl(
{
	urls: ["MenuMusic.mp3"],
	loop: true,
	buffer: true,
	volume: 0.04
} );

// Creates the Game Music
GameMusic = new Howl(
{
	urls: ["BackgroundMusic1.mp3"],
	loop: true,
	buffer: true,
	volume: 0.1
} );

// Intersect Code
function intersects(x1, y1, w1, h1, x2, y2, w2, h2)
{
	if(y2 + h2 < y1 || x2 + w2 < x1 || x2 > x1 + w1 || y2 > y1 + h1)
	{
		return false;
	}
	return true;
}

// Runs the Splash Screen
function runSplash(deltaTime)
{
	splashScreen(deltaTime)
}

// Runs the Main Menu
function runMainMenu(deltaTime)
{
	mainMenu(deltaTime)
}

// Runs the Settings Screen
function runSettings(deltaTime)
{
	settings(deltaTime)
}

// Runs the game over screen
function runGameOver(deltaTime)
{
	
}

// Runs the first level
function runGameLevel1(deltaTime)
{
	GameLevel1(deltaTime)
}

// Runs the second level
function runGameLevel2(deltaTime)
{
	GameLevel2(deltaTime)
}

// Runs the game by selecting states
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
		case STATE_MAINMENU:
			runMainMenu(deltaTime);
			break;
		case STATE_SETTINGS:
			runSettings(deltaTime);
			break;
		case STATE_GAMEOVER:
			runGameOver(deltaTime);
			break;
		case STATE_GAMELEVEL1:
			runGameLevel1(deltaTime);
			break;
		case STATE_GAMELEVEL2:
			runGameLevel2(deltaTime);
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