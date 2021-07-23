song="";
function preload(){
song=loadSound("videoplayback (1).mp4");
}
function setup (){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}
function draw (){
image(video,0,0,600,500);

}
function Play(){
song.play();

}
function Stop(){
song.stop();
}