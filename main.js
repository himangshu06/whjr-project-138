function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	document.getElementById(Name).innerHTML="Hi"+"!"+""+UserPlayer;
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
}

function draw() {
	game()
}
document.getElementById("Name").innerHTML="Hi"+"!"+""+UserPlayer;





