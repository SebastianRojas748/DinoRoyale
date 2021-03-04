/***********************************************************************************
  Dinosaur Royale
  by Sebastian Rojas
  Educational Dinosaur Arena
***********************************************************************************/

// variable that is a function 
var drawFunction;



// rounded corner variable
var crnr = 8;

//image variables
var trexAssets = [];
var spinoAssets = [];
var raptorAssets = [];
var carnoAssets = [];
var baryAssets = [];
var mainAssets = [];
var meteorAssets = [];


//room color array
var roomColors = [];

//navigation instruction bar variables
var xNav = 1400;
var yNav = 11;
var hNav = 40;
var wNav = 300;
var navFill = 255;

var navTextXPos = (xNav + (1690 - xNav)/2);
var navTextYPos = (yNav + (hNav/2) + 9);
var navTextSize = 26;
var strings = ['use keys to switch dinos'];

//bounding box navigation key  variables
var bnd = 40;
var xKyBnd = 1749;  //postion 1 on bounding box
var yKyBnd = 11;  //postion 1 on bounding box
var bndSpcr = 51; //spacer between keys

//navigation key placement variables
var xKeyPlace = (xKyBnd + (1789 - xKyBnd)/2);
var yKeyPlace = (yKyBnd + (bnd/2) + 7);

//navigation key array
var navKey = [];

//dino name bounding box variables
var xStartOne = 870;
var yStartOne = 11;
var xEndOne = 300;
var yEndOne = 40;
var titleFill = 0;

//dino name variables
var textXPos = (xStartOne + (1139 - xStartOne)/2);
var textYPos = (yStartOne + (yEndOne/2) + 9);

//preload images in array
function preload() {

  //trex images
  trexAssets[0] = loadImage('assets/trex.png');


 //spino images
  spinoAssets[0] = loadImage('assets/spino.png');
 
  //raptor images
  raptorAssets[0] = loadImage('assets/raptor.png');
 
  //carno images
  carnoAssets[0] = loadImage('assets/carno.png');
 

  //bary images
  baryAssets[0] = loadImage('assets/bary.png');

  //Garden images
  mainAssets[0] = loadImage('assets/background.png');
  mainAssets[1] = loadImage('assets/logo.png');

  //meteor
  meteorAssets[0] = loadImage('assets/explosion.png');

  //chomp
  chomp = loadSound('assets/chomp.mp3');

}

 let chomp;
 let timer;
 let interval = 50000;
 let countdown;
 let state = 0;

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  textSize(28);
  noStroke();
  timer = millis() + interval;


  //seting the room color array
  roomColors[0] = color(204, 0, 0); 
  roomColors[1] = color(204, 204, 0);
  roomColors[2] = color(0, 204, 0);
  roomColors[3] = color(0, 204, 204); 
  roomColors[4] = color(0, 0, 204); 
  roomColors[5] = color(204, 0, 204); 

  //setting the navigation key array
  navKey[0] = ('[1]');
  navKey[1] = ('[2]');
  navKey[2] = ('[3]');
  navKey[3] = ('[4]');
  navKey[4] = ('[5]');

  // set to one for startup
  drawFunction = drawmain;

}

//calls state machine function
function draw() {
  drawFunction();

    countdown = ceil((timer-millis())/1000);
  
  if (state == 0) {
    text(countdown, 100, 100);
  }
   else if (state == 1) {
     image(meteorAssets[0], 400, 15);
  }

  if (timer < millis()) {
    timer = millis() + interval;
    state = 1;
  }

}

//draws images from main array
drawmain = function() {
   background(roomColors[0]);

   //images in array
   image(mainAssets[0], 0, 0);
   image(mainAssets[1], width/2-250, height/3);    
   
   //text bounding box
   fill(roomColors[0]);
   rect(xStartOne, yStartOne, xEndOne, yEndOne, crnr);

  //  //room title
   fill(titleFill);
   text('choose dino with #1-5', textXPos, textYPos); 

    //nav keys
   //bounding position one
   fill(roomColors[0]);
   rect(xKyBnd, yKyBnd, bnd, bnd, crnr);

   //key text position one
   fill(titleFill);
   text(navKey[0], xKeyPlace, yKeyPlace); 
  
   //bounding position two
   fill(roomColors[1]);
   rect(xKyBnd, yKyBnd + bndSpcr, bnd, bnd, crnr);

   //key text position two
   fill(titleFill);
   text(navKey[1], xKeyPlace, yKeyPlace + bndSpcr);

   //bounding position three
   fill(roomColors[2]);
   rect(xKyBnd, yKyBnd + (bndSpcr * 2), bnd, bnd, crnr); 

   //key text position three
   fill(titleFill);
   text(navKey[2], xKeyPlace, yKeyPlace + (bndSpcr * 2));
  
   //bounding position four
   fill(roomColors[3]);
   rect(xKyBnd, yKyBnd + (bndSpcr * 3), bnd, bnd, crnr);

   //key text position four
   fill(titleFill);
   text(navKey[3], xKeyPlace, yKeyPlace + (bndSpcr * 3)); 

   //bounding position five
   fill(roomColors[4]);
   rect(xKyBnd, yKyBnd + bndSpcr * 4, bnd, bnd, crnr);

   //key text position five
   fill(titleFill);
   text(navKey[4], xKeyPlace, yKeyPlace + bndSpcr * 4);



   //navigation instruction bar
   fill(navFill);
   rect(xNav, yNav, wNav, hNav, crnr);

   //nav instruction text
   fill(titleFill);
   noStroke();
   textSize(navTextSize);
   text(strings[0], navTextXPos, navTextYPos); 

   
}

//draws images from trex array
drawtrex = function() {
  background(roomColors[1]);

   //images in array
   image(mainAssets[0], 0, 0);
   image(trexAssets[0], mouseX-350, mouseY-100);  
   
   
   //text bounding box
   fill(roomColors[1]);
   rect(xStartOne, yStartOne, xEndOne, yEndOne, crnr);


   //box2
   rect(500,800,800,150,crnr);
   fill(0);
   text('Tyrannosaurus rex, or “Tyrant Lizard”, one of the largest dinosaurs to have walked the earth, lived 70 million years ago in what is now North America.', 500, 850, 800);

   //room title
   fill(titleFill);
   text('Tyrannosaurus', textXPos, textYPos);

   //nav keys
   //bounding position one
   fill(roomColors[0]);
   rect(xKyBnd, yKyBnd, bnd, bnd, crnr);

   //key text position one
   fill(titleFill);
   text(navKey[0], xKeyPlace, yKeyPlace); 
  
   //bounding position two
   fill(roomColors[1]);
   rect(xKyBnd, yKyBnd + bndSpcr, bnd, bnd, crnr);

   //key text position two
   fill(titleFill);
   text(navKey[1], xKeyPlace, yKeyPlace + bndSpcr);

   //bounding position three
   fill(roomColors[3]);
   rect(xKyBnd, yKyBnd + (bndSpcr * 2), bnd, bnd, crnr); 

   //key text position three
   fill(titleFill);
   text(navKey[3], xKeyPlace, yKeyPlace + (bndSpcr * 2));
  
   //bounding position four
   fill(roomColors[4]);
   rect(xKyBnd, yKyBnd + (bndSpcr * 3), bnd, bnd, crnr);

   //key text position four
   fill(titleFill);
   text(navKey[4], xKeyPlace, yKeyPlace + (bndSpcr * 3)); 

   //navigation instruction bar
   fill(navFill);
   rect(xNav, yNav, wNav, hNav, crnr);

   //nav instruction text
   fill(titleFill);
   noStroke();
   textSize(navTextSize);
   text(strings[0], navTextXPos, navTextYPos); 
}

//draws images from spino array
drawspino = function() {
 background(roomColors[2]);

  
   //images in array
   image(mainAssets[0], 0, 0);
   image(spinoAssets[0], mouseX-400, mouseY-100); 
   
   //text bounding box
   fill(roomColors[2]);
   rect(xStartOne, yStartOne, xEndOne, yEndOne, crnr);

   //box2
   rect(500,800,800,150,crnr);
   fill(0);
   text('Spinosaurus, which was longer and heavier than Tyrannosaurus, is the largest known carnivorous dinosaur.', 500, 850, 800);

   //room title
   fill(titleFill);
   text('Spinosaurus', textXPos, textYPos);

   //nav keys
   //bounding position one
   fill(roomColors[0]);
   rect(xKyBnd, yKyBnd, bnd, bnd, crnr);

   //key text position one
   fill(titleFill);
   text(navKey[0], xKeyPlace, yKeyPlace); 
  
   //bounding position two
   fill(roomColors[2]);
   rect(xKyBnd, yKyBnd + bndSpcr, bnd, bnd, crnr);

   //key text position two
   fill(titleFill);
   text(navKey[2], xKeyPlace, yKeyPlace + bndSpcr);

   //bounding position three
   fill(roomColors[3]);
   rect(xKyBnd, yKyBnd + (bndSpcr * 2), bnd, bnd, crnr); 

   //key text position three
   fill(titleFill);
   text(navKey[3], xKeyPlace, yKeyPlace + (bndSpcr * 2));
  
   //bounding position four
   fill(roomColors[4]);
   rect(xKyBnd, yKyBnd + (bndSpcr * 3), bnd, bnd, crnr);

   //key text position four
   fill(titleFill);
   text(navKey[4], xKeyPlace, yKeyPlace + (bndSpcr * 3)); 

   //navigation instruction bar
   fill(navFill);
   rect(xNav, yNav, wNav, hNav, crnr);

   //nav instruction text
   fill(titleFill);
   noStroke();
   textSize(navTextSize);
   text(strings[0], navTextXPos, navTextYPos); 
}

//draws raptor from the array
drawraptor = function() {
 background(roomColors[3]);


   //images in array
   image(mainAssets[0], 0, 0);
   image(raptorAssets[0], mouseX-150, mouseY-100);  

   
   //text bounding box
   fill(roomColors[3]);
   rect(xStartOne, yStartOne, xEndOne, yEndOne, crnr);

   //box2
   rect(500,800,800,150,crnr);
   fill(0);
   text('The name on this dinosaur, which is derived from the Latin words "velox" (swift) and "raptor" (robber or plunderer), as an apt description of its agility and carnivorous diet.', 500, 850, 800);


   //room title
   fill(titleFill);
   text('Velociraptor', textXPos, textYPos);


      //nav keys
   //bounding position one
   fill(roomColors[0]);
   rect(xKyBnd, yKyBnd, bnd, bnd, crnr);

   //key text position one
   fill(titleFill);
   text(navKey[0], xKeyPlace, yKeyPlace); 
  
   //bounding position two
   fill(roomColors[1]);
   rect(xKyBnd, yKyBnd + bndSpcr, bnd, bnd, crnr);

   //key text position two
   fill(titleFill);
   text(navKey[1], xKeyPlace, yKeyPlace + bndSpcr);

   //bounding position three
   fill(roomColors[3]);
   rect(xKyBnd, yKyBnd + (bndSpcr * 2), bnd, bnd, crnr); 

   //key text position three
   fill(titleFill);
   text(navKey[3], xKeyPlace, yKeyPlace + (bndSpcr * 2));
  
   //bounding position four
   fill(roomColors[4]);
   rect(xKyBnd, yKyBnd + (bndSpcr * 3), bnd, bnd, crnr);

   //key text position four
   fill(titleFill);
   text(navKey[4], xKeyPlace, yKeyPlace + (bndSpcr * 3)); 

   //navigation instruction bar
   fill(navFill);
   rect(xNav, yNav, wNav, hNav, crnr);

   //nav instruction text
   fill(titleFill);
   noStroke();
   textSize(navTextSize);
   text(strings[0], navTextXPos, navTextYPos); 
}

//draws carno from the array
drawcarno = function() {
   background(roomColors[4]);

   //images in array
   image(mainAssets[0], 0, 0);
   image(carnoAssets[0], mouseX-300, mouseY-100); 
  
  
   //text bounding box
   fill(roomColors[4]);
   rect(xStartOne, yStartOne, xEndOne, yEndOne, crnr);

    //box2
   rect(500,800,800,150,crnr);
   fill(0);
   text('The name Carnotaurus means ‘meat eating bull’….eek! The name refers to the horns found above its eyes, which are similar to bull horns.', 500, 850, 800);


   //room title
   fill(titleFill);
   text('Carnotaurus', textXPos, textYPos);

       //nav keys
   //bounding position one
   fill(roomColors[0]);
   rect(xKyBnd, yKyBnd, bnd, bnd, crnr);

   //key text position one
   fill(titleFill);
   text(navKey[0], xKeyPlace, yKeyPlace); 
  
   //bounding position two
   fill(roomColors[1]);
   rect(xKyBnd, yKyBnd + bndSpcr, bnd, bnd, crnr);

   //key text position two
   fill(titleFill);
   text(navKey[1], xKeyPlace, yKeyPlace + bndSpcr);

   //bounding position three
   fill(roomColors[2]);
   rect(xKyBnd, yKyBnd + (bndSpcr * 2), bnd, bnd, crnr); 

   //key text position three
   fill(titleFill);
   text(navKey[2], xKeyPlace, yKeyPlace + (bndSpcr * 2));
  
   //bounding position four
   fill(roomColors[4]);
   rect(xKyBnd, yKyBnd + (bndSpcr * 3), bnd, bnd, crnr);

   //key text position four
   fill(titleFill);
   text(navKey[4], xKeyPlace, yKeyPlace + (bndSpcr * 3)); 

   //navigation instruction bar
   fill(navFill);
   rect(xNav, yNav, wNav, hNav, crnr);

   //nav instruction text
   fill(titleFill);
   noStroke();
   textSize(navTextSize);
   text(strings[0], navTextXPos, navTextYPos);
}

//draws bary array
drawbary = function() {
   background(roomColors[5]);


   //images in array
   image(mainAssets[0], 0, 0);
   image(baryAssets[0], mouseX-250, mouseY-100);  

  
  
   //text bounding box
   fill(roomColors[5]);
   rect(xStartOne, yStartOne, xEndOne, yEndOne, crnr);

   //box2
   rect(500,800,800,150,crnr);
   fill(0);
   text('Not surprisingly, Baryonyx was named in reference to that prominent claw--which, however, had nothing to do with the prominent claws of another family of carnivorous dinosaurs, the Raptors.', 500, 850, 800);


   //room title
   fill(titleFill);
   text('Baryonyx', textXPos, textYPos);

    //nav keys
   //bounding position one
   fill(roomColors[0]);
   rect(xKyBnd, yKyBnd, bnd, bnd, crnr);

   //key text position one
   fill(titleFill);
   text(navKey[0], xKeyPlace, yKeyPlace); 
  
   //bounding position two
   fill(roomColors[1]);
   rect(xKyBnd, yKyBnd + bndSpcr, bnd, bnd, crnr);

   //key text position two
   fill(titleFill);
   text(navKey[1], xKeyPlace, yKeyPlace + bndSpcr);

   //bounding position three
   fill(roomColors[2]);
   rect(xKyBnd, yKyBnd + (bndSpcr * 2), bnd, bnd, crnr); 

   //key text position three
   fill(titleFill);
   text(navKey[2], xKeyPlace, yKeyPlace + (bndSpcr * 2));
  
   //bounding position four
   fill(roomColors[3]);
   rect(xKyBnd, yKyBnd + (bndSpcr * 3), bnd, bnd, crnr);

   //key text position four
   fill(titleFill);
   text(navKey[3], xKeyPlace, yKeyPlace + (bndSpcr * 3)); 

   //navigation instruction bar
   fill(navFill);
   rect(xNav, yNav, wNav, hNav, crnr);

   //nav instruction text
   fill(titleFill);
   noStroke();
   textSize(navTextSize);
   text(strings[0], navTextXPos, navTextYPos);
}

function keyPressed() {
  if (chomp.isPlaying()) {
    chomp.stop()
    }
    else {
     chomp.play();
    }

  
   

   // main menu
  if( drawFunction === drawmain ) {
    if( key === '1' ) {
      drawFunction = drawtrex;
    }
    if( key === '2' ) {
      drawFunction = drawspino;
    }
    if( key === '3' ) {
      drawFunction = drawraptor;
    }
    if( key === '4' ) {
      drawFunction = drawcarno;
    }
    else if( key === '5' ) {
      drawFunction = drawbary;
    }
  } 

  // trex [1] 
  else if( drawFunction === drawtrex ) {
    if( key === '2' ) {
      drawFunction = drawspino;
    }
    if( key === '3' ) {
      drawFunction = drawraptor;
    }
    if( key === '4' ) {
      drawFunction = drawcarno;
    }
    else if( key === '5' ) {
      drawFunction = drawbary;
    }
  }

    // spino [2]
  else if( drawFunction === drawspino ) {
    if( key === '1' ) {
      drawFunction = drawtrex;
    }
    if( key === '3' ) {
      drawFunction = drawraptor;
    }
    if( key === '4' ) {
      drawFunction = drawcarno;
    }
    else if( key === '5' ) {
      drawFunction = drawbary;
    }
  }

      // raptor [3]
  else if( drawFunction === drawraptor ) {
     if( key === '1' ) {
      drawFunction = drawtrex;
    }
    if( key === '2' ) {
      drawFunction = drawspino;
    }
    if( key === '4' ) {
      drawFunction = drawcarno;
    }
    else if( key === '5' ) {
      drawFunction = drawbary;
    }
  }

    // carno [4]
  else if( drawFunction === drawcarno ) {
    if( key === '1' ) {
      drawFunction = drawtrex;
    }
    if( key === '2' ) {
      drawFunction = drawspino;
    }
    if( key === '3' ) {
      drawFunction = drawraptor;
    }
    else if( key === '5' ) {
      drawFunction = drawbary;
    }
  }

  // bary [5]
  else if( drawFunction === drawbary ) {
       if( key === '1' ) {
      drawFunction = drawtrex;
    }
    if( key === '2' ) {
      drawFunction = drawspino;
    }
    if( key === '3' ) {
      drawFunction = drawraptor;
    }
   else if( key === '4' ) {
      drawFunction = drawcarno;
    }
  }
}