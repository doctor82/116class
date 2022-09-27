noseX=0;
noseY=0;
function preload(){
clown_nose=loadImage('https://i.postimg.cc/tRvC4Y2z/clownnose-removebg-preview.png');
}
function setup(){
canvas=createCanvas(450,350);
canvas.center();
video=createCapture(VIDEO);
video.size(450,350);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
console.log('poseNet is initialised');

}
function draw(){
image(video,0,0,450,350);

//fill('red');
//stroke('red');
//circle(noseX,noseY,20);
image(clown_nose,noseX,noseY,30,30);
}
function take_snapshot(){
save('Myclownimage.png');
}
function gotPoses(results){
if(results.length > 0){
console.log(results);
noseX=results[0].pose.nose.x-10;
noseY=results[0].pose.nose.y-10;
console.log("Nose x = "+noseX);
console.log("Nose y= "+noseY);
}
}
