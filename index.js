var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');

var xPos = 0;
var yPos = 0;

context.rect(xPos, yPos, 150, 150);
context.stroke();

function move(e){
  console.log(e.keyCode);
  //left
  if(e.keyCode==37){
    xPos-=50;
  }

  //right
  if(e.keyCode==39){
    xPos+=50;
  }

  //up
  if(e.keyCode==38){
    yPos-=50;
  }

  //down
  if(e.keyCode==40){
    yPos+=50;
  }

  canvas.width=canvas.width;
  context.rect(xPos, yPos, 150, 150);
  context.stroke();


}


document.onkeydown = move;