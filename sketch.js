
let Imagesize = 4;
let img;

var x = 100.0;
var y = 100;
var speed = 2.5;

function preload() 
{
    img = loadImage("images/recycling.png");
    img2 = loadImage("images/everlane1.png");
    img3 = loadImage("images/reformation.png");
    img4 = loadImage("images/ppltree.png");

    img5 = loadImage("images/topshop-logo.png");
    img6 = loadImage("images/Zara-logo.png");
    img7 = loadImage("images/hm-logo.png");
    img8 = loadImage("images/backing1.png");

}

function setup() {
    createCanvas(800, 800);
    image(img8, 0, 0);
}

function draw() {
        fill("white");
        textSize(40);
        text("good design endures", 400, 60)

    
        fill('green');
        ellipse(mouseX, mouseY, 20, 20);
        if(mouseIsPressed){
            image(img, mouseX, mouseY, 100, 100);
    }
    
    
    {
        x += speed;
                
        if(x > width){
            x = 0;
        }
        fill("white");{
        ellipse(x, y, 50, 50);}
        } 

    {       
        y += speed;
        
        if(y > width){
            y = 0;
        }
        fill("58, 188, 77");{
        ellipse(x, y, 50, 50);}
    } 

    for (var i=0; i < 80; i++){
        triangle(10+i*10, 800, 0, 0);
     }

    image(img2, 550, 400, img2.width/20, img2.height/20);
    image(img3, 560, 410, img3.width/8, img3.height/8);
    image(img4, 560, 300, img3.width/8, img3.height/8);

    image(img5, 80, 400, img5.width/26, img5.height/26);
    image(img6, 90, 280, img6.width/20, img6.height/20);
    image(img7, 90, 335, img7.width/8, img7.height/8);

    }