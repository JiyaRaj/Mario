img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload()
{
  img = loadImage("mario05.png");
}

function setup() {
  createCanvas(650, 400);
  poseNet=ml5.poseNet(video,model_ready);
  poseNet.on("pose", got_results);
}
function model_ready(){
  console.log("model loaded");
}
function got_results(results){
  if(results.length>0){
    noseX= results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    if(noseX<300){
      marioX=marioX-10;
    }
    if(noseX>300){
      marioX=marioX+10;
    }
    if(noseY<150){
     marioY=marioY-10;
   }
    
  }
}

function draw() {
  background("#D3D3D3");
  image(img,marioX, marioY, 40,70);
}
