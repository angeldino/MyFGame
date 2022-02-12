var canvas = document.getElementById("micanvas");
var contexto = canvas.getContext("2d");
document.onkeydown = checkKey;

var x = 0;
var xspeed = 10;
var y = 150;
var yspeed = 10;
var i = 50;
var j = 50;
var left_collider = 600 - i;
var right_collider = 0;
var bot_collider = 200 - j;
var top_collider = 0;
var gravity = 9.81;

function draw() {
     contexto.clearRect(0, 0, canvas.width, canvas.height);
     contexto.fillStyle = "#FFBD16";
     contexto.fillRect(x,y,i,j);
     checkKey();
     colliders();
     gravityForce();
}

function gravityForce(){
     if( y < 150){
          
     }
}

function checkKey(e) {

     e = e || window.event;
 
     if(e.keyCode == '32') {
          //space jump
          y -= yspeed;
     }

     if (e.keyCode == '38') {
         // up arrow
         if(y > top_collider){
               y -= yspeed;
         }else{
               y -= 0;
         }
          
     }
     else if (e.keyCode == '40') {
         // down arrow
         if(y < bot_collider){
          y += yspeed;
    }else{
          y += 0;
    }
     }
     else if (e.keyCode == '37') {
          // left arrow
          if(x > right_collider){
               x -= xspeed;
          }else{
               x -= 0;
          }
          
     }
     else if (e.keyCode == '39') {
        // right arrow
          if(x < left_collider){
               x += xspeed;
        }else{
               x += 0;
        }

     }
 }

 setInterval(draw, 10);