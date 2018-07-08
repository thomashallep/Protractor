var bg;
var pro;

var x = 0;
var y = 0;
var held = false;
var dx;
var dy;

function setup() {
    bg = loadImage("images/background.png");
    pro = loadImage("images/protractor.png");

    var centeringDiv = createDiv('');
    centeringDiv.style("text-align", "center");

    var canvas = createCanvas(600, 337);
    canvas.parent(centeringDiv);
}

function draw() {
    background(bg);
    if (held) {
        x = clamp (mouseX + dx, -pro.width  / 2, width -  pro.width  / 2);
        y = clamp (mouseY + dy, -pro.height / 2, height - pro.height / 2);
    }
        
    image(pro, x, y);
}

function mousePressed() {
    held = true;
    dx = x - mouseX;
    dy = y - mouseY;
}

function mouseReleased(){
    held = false;
    
}

function clamp (x, min, max) {
    return Math.max (Math.min (x, max), min);
}