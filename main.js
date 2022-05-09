function preload(){
}

function setup(){
    canvas=createCanvas(450,350);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
rect(30,20,400,300);
ellipse(45, 40, 55, 55);
ellipse(420, 40, 55, 55);
image(video,200,110,100,100);
}

function take_snapshot(){
    save('Filter.png');
}