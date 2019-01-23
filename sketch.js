

var originalImage, thresholdImage, invertImage;
let Imagesize = 3;
let img;


function preload() 
{
    originalImage = loadImage("images/Img1Code.png");
    thresholdImage = loadImage("images/Img1Code.png");
    grayImage = loadImage("images/Img1Code.png"); 
    
    img = loadImage("images/recycling.png");
    img2 = loadImage("images/everlane1.png");
    img3 = loadImage("images/reformation.png");
    img4 = loadImage("images/ppltree.png");

    img5 = loadImage("images/topshop-logo.png");
    img6 = loadImage("images/zara-logo.png");
    img7 = loadImage("images/hm-logo.png");
    img8 = loadImage("images/mango-logo.png");

}

function setup() {
    createCanvas(800, 800);
    stroke(255);

    var radius = min(width, height) / 2;
    secondsRadius = radius * 0.71;
    minutesRadius = radius * 0.60;
    hoursRadius = radius * 0.50;
    clockDiameter = radius * 1.7;
  
    cx = width / 2;
    cy = height / 2;
}

function draw() {
    background(188, 58, 58);

    /*fill('black');
    triangle(30, 75, 58, 20, 86, 75);*/

    thresholdImage.filter("threshold", 0.5);
    grayImage.filter("gray"); 

    image(originalImage, 200, 200, 400/Imagesize, 400/Imagesize);
    image(thresholdImage, 400, 400, 400/Imagesize, 400/Imagesize);
    image(grayImage, 600, 600, 400/Imagesize, 400/Imagesize);

    image(originalImage, 100, 100, 400/Imagesize, 400/Imagesize);
    image(thresholdImage, 300, 300, 400/Imagesize, 400/Imagesize);
    image(grayImage, 500, 500, 400/Imagesize, 400/Imagesize);

   
    image(img2, 90, 600, img2.width/20, img2.height/20);
    image(img3, 90, 450, img3.width/8, img3.height/8);
    image(img4, 80, 350, img3.width/8, img3.height/8);

    image(img5, 550, 100, img5.width/26, img5.height/26);
    image(img6, 560, 160, img6.width/20, img6.height/20);
    image(img7, 560, 242, img7.width/8, img7.height/8);
    image(img8, 590, 300, img8.width/8, img8.height/8);


    fill(255);
    noStroke();


    fill('green');
    ellipse(mouseX, mouseY, 20, 20);
    if(mouseIsPressed){
        image(img, mouseX, mouseY, 100, 100);

    }


    fill(255);
    textSize(40);
    text("Deadstock", 50, 80)

    fill(255);
    textSize(20);
    text("good design endures", 40, 750)

    fill(255);
    textSize(20);
    text("good design is not to be wasted", 460, 50)

}


