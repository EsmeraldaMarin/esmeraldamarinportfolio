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

let skillsSections = document.querySelectorAll('#skillsSections li');
let skillsUlInfo = document.querySelectorAll('.skillsUl');
skillsSections.forEach(skill => {
    skill.addEventListener('click', (e) => {
        skillsSections.forEach(sk => {
            sk.classList.remove('skSelected');
        })
        skillsUlInfo.forEach(skUl => {
            skUl.classList.remove('ulSelected');
        })
        skill.classList.add('skSelected')
        if (skill.classList.contains('fSk')) {
            let frontSkills = document.querySelector('.frontSkills');
            frontSkills.classList.add('ulSelected');
        } else if (skill.classList.contains('bSk')) {
            let backSkills = document.querySelector('.backSkills');
            backSkills.classList.add('ulSelected');
        } else if (skill.classList.contains('dSk')) {
            let designSkills = document.querySelector('.designSkills');
            designSkills.classList.add('ulSelected');
        } else if (skill.classList.contains('lSk')) {
            let langSkills = document.querySelector('.langSkills');
            langSkills.classList.add('ulSelected');
        }
    })
})
