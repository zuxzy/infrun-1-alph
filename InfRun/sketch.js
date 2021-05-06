const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0;

var floor;
var stand1, stand2, stand3, stand4;
var character;
var characterSprite, stand1Sprite, groundSprite, stand2Sprite, stand3Sprite, stand4Sprite;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    character = new Character(200, 350, 40, 40);

    stand1Sprite = createSprite(1200,350,40,40);
    stand2Sprite = createSprite(2200,350,40,40);
    stand3Sprite = createSprite(2350, 330, 40, 80);
    stand4Sprite = createSprite(2500, 310, 40, 120);

    characterSprite = createSprite(200, 350, 40, 40);
    groundSprite = createSprite(600,395,1200,50);
    
    floor = new Ground(600, 395, 1200, 50);

    stroke("white");

    stand1 = new Box(1200, 350, 40, 40);
    stand2 = new Box(2200, 350, 40, 40);
    stand3 = new Box(2330, 330, 40, 80);
    stand4 = new Box(2460, 310, 40, 120);
}

function draw(){
    background("black");
    textSize(35);
    fill("white");
    Engine.update(engine);
   
    fill("rgb(245,243,206)");
    noStroke();
    ellipse(600, -800, 2000, 2000);
    fill("rgb(237, 233, 164)");
    ellipse(150, 25, 80, 80);
    ellipse(1050, 55, 40, 40);
    ellipse(460, 130, 90, 90);
    ellipse(710, 75, 50, 50);
    ellipse(890, 15, 120, 120);
    ellipse(270, 50, 40, 40);
    ellipse(570, 10, 90, 90);

    fill("rgb(249, 215, 28)")
    ellipse(1161, 169, 10, 10);
    ellipse(493, 392, 10, 10);
    ellipse(819, 344, 10, 10);
    ellipse(364, 325, 10, 10);
    ellipse(227, 385, 10, 10);
    ellipse(501, 387, 10, 10);
    ellipse(1077, 220, 10, 10);
    ellipse(216, 312, 10, 10);
    ellipse(893, 185, 10, 10);
    ellipse(1059, 233, 10, 10);
    ellipse(328, 157, 10, 10);
    ellipse(890, 214, 10, 10);
    ellipse(548, 299, 10, 10);
    ellipse(1018, 172, 10, 10);
    ellipse(245, 385, 10, 10);
    ellipse(14, 17, 10, 10);
    ellipse(477, 184, 10, 10);
    ellipse(152, 170, 10, 10);
    ellipse(55, 123, 10, 10);
    ellipse(177, 293, 10, 10);
    ellipse(169, 589, 10, 10);


    stand1Sprite.velocityX = -5;
    stand2Sprite.velocityX = -5;
    stand3Sprite.velocityX = -5;
    stand4Sprite.velocityX = -5;

    stand1.body.position.x = stand1Sprite.x;
    stand2.body.position.x = stand2Sprite.x;
    stand3.body.position.x = stand3Sprite.x;
    stand4.body.position.x = stand4Sprite.x;

    character.body.position.y = characterSprite.y;
    character.body.position.x = characterSprite.x;

    characterSprite.velocityY = characterSprite.velocityY + 0.8
    characterSprite.velocityX = 0;

    if(keyDown(UP_ARROW)){
        if(characterSprite.y === 350){
            characterSprite.velocityY = -12;
        }
        if(characterSprite.y === 310){
            characterSprite.velocityY = -12;
        }
        if(characterSprite.y === 270){
            characterSprite.velocityY = -12;
        }
        if(characterSprite.y === 230){
            characterSprite.velocityY = -12;
        }
        if(characterSprite.y === 190){
            characterSprite.velocityY = -12;
        }
        if(characterSprite.y === 150){
            characterSprite.velocityY = -12;
        }
        if(characterSprite.y === 110){
            characterSprite.velocityY = -12;
        }
        if(characterSprite.y === 70){
            characterSprite.velocityY = -12;
        }
        if(characterSprite.y === 30){
            characterSprite.velocityY = -12;
        }
    }

    characterSprite.collide(groundSprite);

    characterSprite.collide(stand1Sprite);
    characterSprite.collide(stand2Sprite);
    characterSprite.collide(stand3Sprite);
    characterSprite.collide(stand4Sprite);

    floor.display();

    stand1.display();
    stand2.display();
    stand3.display();
    stand4.display();

    character.display();

}
