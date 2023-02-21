const myBurgerBtn = document.querySelector('.fa-bars')

const closeBtn = document.querySelector('.fa-xmark')

const myOffCanvasDiv = document.querySelector('.offcanvas-sidebar')

myBurgerBtn.addEventListener('click', openCanvasMenu)

//Hoisting

closeBtn.addEventListener('click',closeOffCanvasMenu)

function openCanvasMenu(){
    myOffCanvasDiv.classList.add('aktiv')
}

function closeOffCanvasMenu(){
    myOffCanvasDiv.classList.remove('aktiv')
}

// typing effect

// const h1Eelementi = document.querySelector(h1);

// let i=0

// const text = "BURNING MAN"

// const speed = 120
// function typingEffect() {
//     for(let i=0; i<text.length; i++){
//         h1Eelementi.innerHTML += text[i]
//         setTimeout(typingEffect,120)
//     }
// }

// window.addEventListener('DOMContentLoaded', typingEffect)

const h1Elementi = document.querySelector('h1')

const text = "Burning man"
let i=0

const speed = 120

function typingEffect(){
    if(i<text.length){
        h1Elementi.innerHTML +=text.charAt(i)
        i++
        setTimeout(typingEffect,120)
    }
    }
    // for(let i=0; i<text.length; i++){
    //     h1Elementi.innerHTML += text.charAt()
    // }

   

window.addEventListener('DOMContentLoaded',typingEffect)

// Aos

AOS.init();