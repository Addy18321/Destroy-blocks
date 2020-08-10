const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1, pig2, pig4, pig5, pig6, pig7, pig8, pig9, pig10, pig11, pig12, pig14, pig15, pig16, pig17, pig18, pig19, pig20  ;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    // box1 = new Box(700,320,70,70);
    // box2 = new Box(920,320,70,70);
    pig1 = new Pig(500, 205);
    pig2 = new Pig(500, 250);
    pig3 = new Pig(500, 305);
    pig4 = new Pig(500, 340);
    pig5 = new Pig(500, 495);
    pig6 = new Pig(550, 205);
    pig7 = new Pig(550, 250);
    pig8 = new Pig(550, 305);
    pig9 = new Pig(550, 340);
    pig10 = new Pig(550, 495);
    pig11 = new Pig(600, 205);
    pig12 = new Pig(600, 250);
    pig13 = new Pig(600, 305);
    pig14 = new Pig(600, 340);
    pig15 = new Pig(600, 495);
    pig16 = new Pig(650, 205);
    pig17 = new Pig(650, 250);
    pig18 = new Pig(650, 305);
    pig19 = new Pig(650, 340);
    pig20 = new Pig(650, 495);
    pig21 = new Pig(700, 205);
    pig22 = new Pig(700, 250);
    pig23 = new Pig(700, 305);
    pig24 = new Pig(700, 340);
    pig25 = new Pig(700, 495);
    pig26 = new Pig(750, 205);
    pig27 = new Pig(750, 250);
    pig28 = new Pig(750, 305);
    pig29 = new Pig(750, 340);
    pig30 = new Pig(750, 495);
    pig31 = new Pig(800, 205);
    pig32 = new Pig(800, 250);
    pig33 = new Pig(800, 305);
    pig34 = new Pig(800, 340);
    pig35 = new Pig(800, 495);
    pig36 = new Pig(850, 205);
    pig37 = new Pig(850, 250);
    pig38 = new Pig(850, 305);
    pig39 = new Pig(850, 340);
    pig40 = new Pig(850, 495);
    pig41 = new Pig(900, 205);
    pig42 = new Pig(900, 250);
    pig43 = new Pig(900, 305);
    pig44 = new Pig(900, 340);
    pig45 = new Pig(900, 495);
    pig46 = new Pig(950, 205);
    pig47 = new Pig(950, 250);
    pig48 = new Pig(950, 305);
    pig49 = new Pig(950, 340);
    pig50 = new Pig(950, 495);

    //log3 =  new Log(810,180,300, PI/2);

    // box5 = new Box(810,160,70,70);
    // log4 = new Log(760,120,150, PI/7);
    // log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(100);
    Engine.update(engine);
    //strokeWeight(4);
    // box1.display();
    // box2.display();
    ground.display();
    pig1.display();
    pig2.display();
    pig3.display();
    pig4.display();
    pig5.display();
    pig6.display();
    pig7.display();
    pig8.display();
    pig9.display();
    pig10.display();
    pig11.display();
    pig12.display();
    pig13.display();
    pig14.display();
    pig15.display();
    pig16.display();
    pig17.display();
    pig18.display();
    pig19.display();
    pig20.display();
    pig21.display();
    pig22.display();
    pig23.display();
    pig24.display();
    pig25.display();
    pig26.display();
    pig27.display();
    pig28.display();
    pig29.display();
    pig30.display();
    pig31.display();
    pig32.display();
    pig33.display();
    pig34.display();
    pig35.display();
    pig36.display();
    pig37.display();
    pig38.display();
    pig39.display();
    pig40.display();
    pig41.display();
    pig42.display();
    pig43.display();
    pig44.display();
    pig45.display();
    pig46.display();
    pig47.display();
    pig48.display();
    pig49.display();
    pig50.display();
    //pig5.display():
    //log3.display();

    //box5.display();
    //log4.display();
    //log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function mousePressed(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32) {
        slingshot.attach(bird.body);
    }
}