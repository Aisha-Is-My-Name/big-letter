noseY=0;
noseX=0;
difference=0;
leftwrist=0;
rightwrist=0;



function setup(){
    video = createCapture(VIDEO);
    video.size(550,400);
    canvas = createCanvas(550,400)
canvas.position(560,150);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw(){
    background('#e864a6')
    fill('#61e61')
    square(noseX,noseY, difference);
    textSize(10);
    text('Aisha', 50,400);
}

function modelLoaded(){
    console.log('Posenet is Initialized! ')

}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseY=results[0].pose.nose.y;
        noseX=results[0].pose.nose.x;
        console.log("noseX = "+"noseY = "+noseY);
        leftwrrist = results[0].pose.leftwrist.x;
        rightwrist = results[0].pose.rightwrist.x;
        difference = floor(leftwrist - rightwrist);
    }
}