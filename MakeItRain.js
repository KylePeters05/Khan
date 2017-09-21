    var xPositions = [200,200,300];
    var yPositions = [0,100,100];
    var Colours = [fill(250, 10, 10), fill(17, 237, 20)];
    
    draw = function() {
        background(204, 247, 255);
        
        /*if(mouseIsPressed) {
            xPositions.push(mouseX);
            yPositions.push(mouseY);
        }*/
    
        for ( var i = 1; i < 2; i++) {
            yPositions.push(random(400));   
        }
        
              for ( var i = 1; i < 2; i++) {
            xPositions.push(random(400));   
        }
    
    
        for (var i = 0; i < xPositions.length; i++) {
            noStroke();
            fill(0, 200, 255);
            ellipse(xPositions[i], yPositions[i], 10, 10);
            yPositions[i] += 5;
            
        if (yPositions[i] > 420){
            yPositions[i] = 0;
        }
    
        }
        
    
        
    };
