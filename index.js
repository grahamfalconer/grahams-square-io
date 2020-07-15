var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');

var xPos = 0;
var yPos = 0;

context.rect(xPos, yPos, 50, 50);
context.stroke();

function move(e){
  console.log(e.keyCode);

}


document.onkeydown = move;