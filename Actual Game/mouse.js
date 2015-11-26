var mouseX = -100;
var mouseY = -100;

var browser;

var MouseCursor = {
	image: document.createElement("img"),
	width: 20,
	height: 20,
};
MouseCursor.image.src = "Cursor.png";

window.addEventListener("click", canvasClick, false);
window.addEventListener("mousemove", mouseMove, false);
window.addEventListener('mousewheel',function(event){mouseWheel(event); return false; }, false);

//-----------------
//Browser Detection
//-----------------
navigator.sayswho= (function(){
	var N= navigator.appName, ua= navigator.userAgent, tem;
	var M= ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
	if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
	{
		M= M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
	}
	
	return M;
})();

if (navigator.sayswho[0] == "Firefox")
{
	browser="f";
}
else if (navigator.sayswho[0] == "Chrome")
{
	browser="c";
}
else if (navigator.sayswho[0] == "Safari")
{
	browser="s";
}
else  if (navigator.sayswho[0] == "Microsoft")
{
	browser="m";
}
else
{
	browser="f";
}
	
//-----------------
//	Click Event
//-----------------
function canvasClick(event)
{
	if(playerPistol == true & player.isDead == false)
	{
		playerShoot();
	}
}

function mouseMove(event)
{
	if (browser == "f" || browser == "m")
	{
		if(event.clientX - canvas.offsetLeft + document.documentElement.scrollLeft < SCREEN_WIDTH && event.clientY - canvas.offsetTop + document.documentElement.scrollTop < SCREEN_HEIGHT)
		{
			if(event.clientX - canvas.offsetLeft + document.documentElement.scrollLeft > 0 && event.clientY - canvas.offsetTop + document.documentElement.scrollTop > 0)
			{
				mouseX = event.clientX - canvas.offsetLeft + document.documentElement.scrollLeft;
				mouseY = event.clientY - canvas.offsetTop + document.documentElement.scrollTop;
			}
		}
	}
	else //"s" or "c"
	{
		if(event.clientX - canvas.offsetLeft + document.body.scrollLeft < SCREEN_WIDTH && event.clientY - canvas.offsetTop + document.body.scrollTop < SCREEN_HEIGHT)
		{
			if(event.clientX - canvas.offsetLeft + document.body.scrollLeft > 0 && event.clientY - canvas.offsetTop + document.body.scrollTop > 0)
			{
				mouseX = event.clientX - canvas.offsetLeft + document.body.scrollLeft;
				mouseY = event.clientY - canvas.offsetTop + document.body.scrollTop;
			}
		}
	}
	// Move Event
}

function mouseWheel(event)
{
	//Mouse Wheel Event
}

function DrawCursor()
{
	context.save();
		context.translate(mouseX - MouseCursor.width/2, mouseY - MouseCursor.height/2);
		context.drawImage(MouseCursor.image, MouseCursor.width - MouseCursor.width, MouseCursor.height - MouseCursor.height);
	context.restore();
}