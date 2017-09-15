background(89, 216, 255);

var centerX = 200;
var centerY = 100;
var bodyLength = 118;
var bodyHeight = 74;
var bodyColor = color(162, 0, 255);

var drawFish = function(x, y) {
    noStroke();
    fill(bodyColor);
    // body
    ellipse(x, y, bodyLength, bodyHeight);
    // tail
    var tailWidth = bodyLength/4;
    var tailHeight = bodyHeight/2;
    triangle(x-bodyLength/2, y,
             x-bodyLength/2-tailWidth, y-tailHeight,
             x-bodyLength/2-tailWidth, y+tailHeight);
    // eye
    fill(33, 33, 33);
    ellipse(x+bodyLength/4, y, bodyHeight/5, bodyHeight/5);
    
        centerY = 50;
        centerX = 100;
        bodyLength = 85;
        bodyHeight = 50;
        bodyColor = bodyColor - 150;
        
};

drawFish(100, 200);
drawFish(200, 150);

mouseClicked = function() {
    
    drawFish(mouseX, mouseY);
    
};
