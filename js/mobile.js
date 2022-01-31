var botao = document.getElementById('botao');

console.log(botao);

function menuMobile(event){

if (event.type === '')

var nav = document.querySelector(".navegacao");
nav.classList.toggle('active');
}

botao.addEventListener("click", menuMobile);
botao.addEventListener("touchstart", menuMobile);


