fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
var answer = floor(random(1, 6));
var integer = round(answer);

if (integer === 1) {
    text("There is", 176, 200);
    text("Bacon!", 181, 229); 
} 
if (integer === 2){
    text("Your future", 171,200);
    text("is Bright!", 179,220);
}
if (integer === 3){
    text("Your future", 171,200);
    text("is Dark!", 179,220);
}
if (integer === 4){
    text("Your future", 171,200);
    text("is Bad!", 179,220);
}

if (integer > 4){
    text("Your future", 171,200);
    text("is Amazing!", 179,220);
}
