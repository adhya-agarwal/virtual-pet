

var dog,dogImg,dogImg2, happyDog;
var database;
var food, foodStock;

var database;

function preload()
{
  dogImg2 = loadImage ("happy dog.png")
  dogImg = loadImage ("sad dog.png")
}

function setup() {
  
	createCanvas(700, 700);
  database = firebase.database()

  dog = createSprite (200,200,50,50)
  dog.scale = 1;
  dog.addImage (dogImg)

foodStock = database.ref("Food")
foodStock.on("value",readStock)

}


function draw() {  


background  ("lightgreen")


if (keyWentDown (UP_ARROW)){
  writeStock(food)
  dog.addImage (dogImg2,)
  dog.position.x=500;
  dog.position.y=500
}
  
  drawSprites();


  
  textSize(30)
  strokeWeight(3)
  stroke("white")
  fill("hotpink")
text("FOOD REMAINING :"+ food, 200,100)
text("PRESS UP ARROW KEY TO FEED THE DOG", 50,600)

}

function readStock (data){
  
food = data.val()
  
}

function writeStock (x){
if (x <= 0){
  x = 0;
}
else {
  x = x-1;
}
database.ref ("/").update({
  Food : x
})
}

