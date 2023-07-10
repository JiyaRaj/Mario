function preload() {
	world_start = loadSound("world_start.wav");
	mario_coin= loadSound("coin.wav");
	mario_jump= loadSound("jump.wav");
	mario_die= loadSound("mariodie.wav");
	mario_kick= loadSound("kick.wav");
	gameover= loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(600, 300);
	video.parent("game_console");
	poseNet = ml5.poseNet(video, model_ready);
	poseNet.on("pose", got_results);
}

function draw() {
	game()
}

function model_ready(){
	console.log("model loaded");
  }
  
  function got_results(results){
	if(results.length>0){
	  noseX= results[0].pose.nose.x;
	  noseY=results[0].pose.nose.y;
	
	}
  }





