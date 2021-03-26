let body = document.querySelector('body')
let burguerBtn = document.querySelector('.burguerMenu')
/* 
window.onload = () => {
    let ctn = document.querySelector('.loader')
    ctn.style.visibility = "hidden";
    ctn.style.opacity = "0";
    body.style.overflow = "auto";
} */

burguerBtn.addEventListener('click', () => {
    burguerBtn.classList.toggle('menuActive')
})

/* function Appear() {
    let ctn = document.querySelector('#aboutMeSection');
    let ctnPosition = ctn.getBoundingClientRect().top;
    let screenPosition = window.innerHeight - 50;
    if (ctnPosition < screenPosition) {
        ctn.classList.add('appear');
    }
}

window.addEventListener('scroll', Appear); */

let scrollDownBtn = document.querySelector('.scrollDown');
scrollDownBtn.addEventListener('click', () => {
    window.scroll({
        top: 500,
        left: 0,
        behavior: 'smooth'
    });
})