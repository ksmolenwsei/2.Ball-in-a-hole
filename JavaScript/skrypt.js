let ball = document.querySelector('#ball')
let field = document.querySelector('#field')
let holes = document.querySelectorAll('.hole');
let start = document.querySelector('#start')
let message = document.querySelector('.message');

let maxY = field.clientHeight - ball.clientHeight
let maxX = field.clientWidth - ball.clientHeight

window.addEventListener('deviceorientation', game);


function game(e) {
  let x = e.beta;
  let y = e.gamma;

  if (x >  90) x =  90
  if (x < -90) x = -90

  x += 90;
  y += 90;


  ball.style.top  = (maxX*x/180 - 10) + "px";
  ball.style.left = (maxY*y/180 - 10) + "px";

  let ball_pos = {
    top: ball.offsetTop,
    left: ball.offsetLeft
  }
  let checkpoint_pos = {
    top: start.offsetTop,
    left: start.offsetLeft
  }
}
