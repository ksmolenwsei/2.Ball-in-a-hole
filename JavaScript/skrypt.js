let ball   = document.querySelector('#ball')
let field = document.querySelector('#field')
let output = document.querySelector('#hole')




function deviceGyroscope(e) {
  let x = e.beta
  let y = e.gamma
    console.log(e.beta + " " + e.gamma)
}

window.addEventListener('deviceorientation', deviceGyroscope);