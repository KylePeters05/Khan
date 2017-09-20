background(219, 255, 255);
var x = 0;
var y = 47;
var grass = getImage("cute/GrassBlock");


fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

fill(255, 255, 255);
rect(60, 150, 280, 207);


for (var drawLogy = 4; drawLogy < 11; drawLogy++) {
    image(getImage("cute/WoodBlock"), 60, drawLogy * 34, 286,50);
}


fill(120, 80, 19);
rect(180, 280, 40, 77);


for (var drawWindowy = 4; drawWindowy < 6; drawWindowy++){
    
for (var drawWindowx = 1; drawWindowx < 4; drawWindowx++) {
       image(getImage("cute/WindowTall"), drawWindowx*84,drawWindowy *45,66,48);
}
}

while (x < 400) {
    image(grass,x,297);
    x += 100;
}
