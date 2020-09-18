var phase, speed, maxCircleSize, numRows, distance, numCols, numStrands, colorA, colorB;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
  

	// var colorWidth = 255;
	// var colorHeight = 255;
	// var colorWidth = colorW;
	// var colorHeight = colorH;

  phase = 0;
	speed = random(0.01, 0.05);
  maxCircleSize = random(20);
  numRows = random(3, 6);
  numCols = random(6, 20);
  numStrands = 1;
	distance = random(200);
  
  colorA = color(250, 250, 250, 0);
	colorB = color(random(00, 250), random(00, 250), random(00, 250), 200);
}

function mousePressed() {
	speed = random(0.01, 0.05);
	// maxCircleSize = random(40);
  numRows = random(2, 5);
  numCols = random(6, 20);
	distance = random(200);
  numStrands = random(1, 3);
  
	// colormouse = width/mouseX;
	// colormouse = colormous * 255;
  // colorA = color(250, 250, 250, 0);
	colorB = color(random(00, 250), random(00, 250), random(00, 250), 255);
}

function draw() {
	var mousecolor = mouseX / width * 255;
	background(mousecolor, mousecolor, mousecolor);
	var mousecolor2 = 255 - mousecolor;
	var mousecolor3 = mouseY / height * 255;
  colorA = color(mousecolor2, mousecolor2, mousecolor2, mousecolor3);

	maxCircleSize = mouseY / height * width / 10;

  phase = frameCount * speed;
  
  for(var strand = 0; strand < numStrands; strand += 1) {
    var strandPhase = phase + map(strand, 0, numStrands, 0, TWO_PI);
    
    for(var col = 0; col < numCols; col += 1) {
      var colOffset = map(col, 0, numCols, 0, TWO_PI);
      var x = map(col, 0, numCols, width/6, width - width/6);
      
      for(var row = 0; row < numRows; row += 1) {
        var y = height/2 + row * 3 + sin(strandPhase + colOffset) * distance;
        var sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 2) * 0.5;
        var circleSize = sizeOffset * maxCircleSize;
        
				fill(lerpColor(colorA, colorB, row / numRows));
        ellipse(x, y, circleSize, circleSize);
			}
		}
	}
}
