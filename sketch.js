var hr;
var hrAngle;

var sec;
var secAngle;

var min;
var minAngle;

function setup(){
    createCanvas(400,400);
    //To use angle in Degrees
    angleMode(DEGREES); 
}

function draw(){
    background(0);

    //Translation and rotation
    translate(200,200)
    rotate(-90)

    //Calculating time using predefined func from p5.js
    hr = hour();
    sc = second();
    mn = minute();

    //To create ab iterative rotation
    hrAngle = map(hr % 12,0,12,0,360)
    secAngle = map(sc,0,60,0,360)
    minAngle = map(mn,0,60,0,360)


    //drawing hr hand
    push();
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,50,0);
    pop();

    push();
    rotate(minAngle)
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,75,0);
    pop()

    push();
    rotate(secAngle)
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    pop();


    stroke(255,0,255);
    point(0,0)

    //drawing the arcs
    strokeWeight(10);
    noFill();


    //Hour
    stroke(0,0,255);
    arc(0,0,260,260,0,hrAngle);

    stroke(255,0,0);
    arc(0,0,300,300,0,secAngle);

    stroke(0,255,0);
    arc(0,0,280,280,0,minAngle);
}
