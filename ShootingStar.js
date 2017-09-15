var xPos = -1; //Star X
var yPos = 55; //Star Y
var StarPosX = 35; //Star2 X
var StarPosY = 120; //Star2 Y


draw = function() {
    background(29, 40, 115); //sets background colour
    fill(255, 242, 0); //sets stars colour
    ellipse(xPos, yPos, 10, 10); //draws the first star
    ellipse(StarPosX, StarPosY, 10, 10); //draws the second star
    xPos+=3; //Moves the star on x axis
    yPos+=2; //moves the star on y axis
    StarPosX+=4; //moves the second star on x axis
    StarPosY+=2; //moves the second star on y axis
};
