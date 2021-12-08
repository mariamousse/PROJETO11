var runner, runner_running;
var pistaImage, pista
function preload(){
  //imagens pré-carregadas
  runner_running = loadAnimation("Runner-1.png", "Runner-2.png");
  pistaImage = loadImage("path.png");
}

function setup(){
  //crie os sprites aqui
  createCanvas(400,600);
  pista = createSprite(198,300,200,200);
  pista.addImage("pathImage", pistaImage)
  runner = createSprite(80,500,400,200);
  runner.addAnimation("runner", runner_running);
  
  pista.scale = 1.2;
  runner.scale = 0.05;

  pista.velocityY = 10;
}

function draw() {
  background("black");
  drawSprites();
  if(pista.y > 400){
    pista.y = pista.height/4
  }
}
