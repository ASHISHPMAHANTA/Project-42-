const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var thunder, thunder1,thunder2,thunder3,thunder4;

var engine, world;

var drop = [];
var rand;
var humanImage;
var human;

var maxDrop=100;

var thunderCreatedFrame=0;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");

humanImage = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png")
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    //human = new Human(200,500);
human = createSprite(200,500,50,50);
human.addAnimation("humanAnimation",humanImage);
human.scale = 0.5;
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrop; i++){
            drop.push(new Drop(random(0,400), random(0,400)));
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background(0); 


    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = (0.3)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

  //  human.display();

   for(var i = 0; i<maxDrop; i++){
        drop[i].showDrop();
        drop[i].updateY()
        
   }

    drawSprites();
}