//1.variable declaration.
var cvs =document.getElementById("canvas").getContext("2d");

var snPosx=80;
var snPosy=80;
var nPosx=0;
var nPosy=0;
var fPosx=140;
var fPosy=140;
var snakeTail=[];
var snakeSize=1;
var score=0;
gameStatus='Ready';


//2. onload function
window.onload=function(){
    document.addEventListener('keydown',inputControl);
   game=setInterval(mainGame,200);

}


//3.Main Game function
function mainGame(){
  document.getElementById('game-status').innerHTML = gameStatus;
  document.getElementById('score').innerHTML=score;
  //move snake
  snPosx+= nPosx;
  snPosy+=nPosy;


  // control snake movement
  if(snPosx>400){
    snPosx=0;
  }
  if(snPosy>400){
    snPosy=0;
  }
  if(snPosx<0){
    snPosx=400;
  }
  if(snPosy<0){
    snPosy=400;
  }

  //game area

  //bg color
  cvs.fillStyle='black';
  cvs.fillRect(0,0,400,400);

  //gridLine

  for(var cl=0;cl<400;cl+=20){
    cvs.moveTo(cl,0);
    cvs.lineTo(cl,400);

  }
  cvs.stroke();
  for(var rl=0;rl<400;rl+=20){
    cvs.moveTo(0,rl);
    cvs.lineTo(400,rl);

  }
  cvs.strokeStyle='gray';
  cvs.stroke();

  //snake

cvs.fillStyle='yellow';
//cvs.fillRect(snPosx,snPosy,20,20);
for(var i=0;i<snakeTail.length;i++){
  cvs.fillRect(
    snakeTail[i].x,snakeTail[i].y,20,20
  );
  //if snakes touch it tail

  if(snPosx ==snakeTail[i].x && snPosy==snakeTail[i].y &&snakeSize>1){
    clearInterval(game);
    gameStatus='Game Over';
    document.getElementById('game status').innerHTML=gameStatus;
  }
}
//fruit
cvs.fillStyle='red';
cvs.fillRect(fPosx,fPosy,20,20);

//if snake  eat fruit
if(snPosx==fPosx && snPosy==fPosy){
  snakeSize++;
  score+=10;

fPosx= Math.floor(Math.random()*20)*20;
fPosy= Math.floor(Math.random()*20)*20;
}
snakeTail.push({x:  snPosx, y: snPosy});
while(snakeTail.length>snakeSize){
  snakeTail.shift();

}



 
}
//4.Input Control
function inputControl(e){
console.log(e.keyCode);
console.log(e.key); 
switch(e.keyCode){
    case 38:
        //UP
        nPosy-=20;
        nPosx=0;
        break;
      
    case 40:
      //Down
        nPosy+=20;
        nPosx=0;
        break;
       
    case 39:
       //Right
        nPosx+=20;
        nPosy=0;
        break;
       
    case 37:
       //LEFT
        nPosx-=20;
        nPosy=0; 
        break;
       
        
}
if(e.keyCode==37 || e.keyCode==38 || e.keyCode ==39|| e.keyCode== 40){
  gameStatus='Game Started';
  document.getElementById('game status').innerHTML=gameStatus;

}



}