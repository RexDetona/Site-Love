const btn2 = document.getElementById("Btn2")
const btn = document.getElementById("Btn")
const cor1 = document.getElementById("cor1")    
const cor2 = document.getElementById("cor2")
const cor3 = document.getElementById("cor3")

const cuadrado = document.getElementById("cuadrado")

const maxX = window.innerWidth - cuadrado.offsetWidth;
const maxY = window.innerHeight - cuadrado.offsetHeight;

btn2.addEventListener("mouseover", function() {
cuadrado.style.display = 'none'

var randomX = Math.random() * maxX;
var randomY = Math.random() * maxY;
cuadrado.style.left = randomX + "px"
cuadrado.style.top = randomY + "px"
cuadrado.style.display = "block"
})

btn.addEventListener("click", function () {
    cuadrado.style.display = 'none'
    document.querySelector("img").style.display = "none"
    document.querySelector(".deucerto").style.display = "block"
    document.querySelector(".legal").style.display = "block"
    cor1.classList.add("content-coracao")
    cor2.classList.add("square")
    cor3.classList.add("circle")

    
})



