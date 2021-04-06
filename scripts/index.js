let body = document.querySelector('body');
let burguerBtn = document.querySelector('.burguerMenu');
let header = document.querySelector('header');
let scrollDownBtn = document.querySelector('.scrollDown');
let skillsSections = document.querySelectorAll('#skillsSections li');
let skillsUlInfo = document.querySelectorAll('.skillsUl');
let btnLeft = document.getElementById("btnLeft");
let btnRight = document.getElementById("btnRight");
let index = 0;
let cardsProyect = document.querySelectorAll(".proyectsUl>li");
let cancelBtn = document.getElementById('cancelBtn');
let confirmBtn = document.getElementById('confirmBtn');
let fullname = document.getElementById('fullname');
let email = document.getElementById('email');
let message = document.getElementById('message');

cardsProyect.forEach(card => {
    let id = card.id;
    let demolink;
    let title;
    let githubLink;
    let description;

    switch (id) {
        case 'proy1':
            title = 'Podcast Channel';
            description = 'A simple Landing page of a podcast channel, includes all styles with flexbox implementation, 100% responsive and friendly to all devices.'
            demolink = 'https://esmeraldamarin.github.io/PodcastEsmeralda/';
            githubLink = 'https://github.com/EsmeraldaMarin/PodcastEsmeralda';
            break;
        case 'proy2':
            title = 'Gifos';
            description = 'An interactive web application for sharing animated GIFs, putting into practice the fundamentals of programming and using JavaScript by obtaining data from the Giphy.com API working with asynchronism and using native browser tools.'
            demolink = 'https://esmeraldamarin.github.io/proyectogifos';
            githubLink = 'https://github.com/EsmeraldaMarin/proyectogifos';
            break;
        case 'proy3':
            title = 'Data WareHouse';
            description = 'Data WareHouse is a website that as a marketing company will allow you to manage the contact of your clients, companies and regions / countries / cities with which you work.';
            demolink = 'demoproy3';
            githubLink = 'https://github.com/EsmeraldaMarin/datawarehouse';
            break;
        case 'proy4':
            title = 'Vacunate CBA';
            description = 'Website where updated information on vaccination against COVID-19 in Argentina is published.'
            demolink = 'https://vacunatecba.000webhostapp.com/';
            githubLink = 'https://github.com/EsmeraldaMarin/vacunacioninfo';
            break;
        case 'proy5':
            title = 'Delilah Resto';
            description = 'An online ordering system for a restaurant. Creation of a REST API that allows making information modifications on a data structure that a client could consume. 100% backend.';
            demolink = 'demoproy5';
            githubLink = 'https://github.com/EsmeraldaMarin/delilahresto';
            break;
    }

    let moreDetailsHtml = `
        <div class= "proyectDetails">
            <h6>${title}</h6>
            <p>${description}</p>
            <div>
                <a href="${demolink}" target="_blank" >Ver Demo</a>
                <a href="${githubLink}" target="_blank" >Ver Repositorio</a>
            </div>
        </div>
    `
    card.insertAdjacentHTML('afterbegin', moreDetailsHtml)
    card.addEventListener("click", () => {
        card.classList.toggle('cardDescActive');
    })

})
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

scrollDownBtn.addEventListener('click', () => {
    window.scroll({
        top: 500,
        left: 0,
        behavior: 'smooth'
    });
})


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

function scrollHeader() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('onScroll')
    } else {
        header.classList.remove('onScroll')
    }
}


//Carrusel 

function show(increase) {

    index = index + increase;

    index = Math.min(
        Math.max(index, 0),
        cardsProyect.length - 1
    );

    let arr = cardsProyect.length;

    btnRight.classList.remove("inactive");

    if (arr == index + 1) {
        btnRight.classList.add("inactive");
    }
    cardsProyect[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
    });
    if (index == 0) {
        btnRight.style.visibility = "inherit";
        btnLeft.style.visibility = "hidden";
    } else if (index == cardsProyect.length - 1) {
        btnLeft.style.visibility = "inherit";
        btnRight.style.visibility = "hidden";
    } else {
        btnRight.style.visibility = "inherit";
        btnLeft.style.visibility = "inherit";
    }
}

//EVENT LISTENERS

//carrusel

btnLeft.addEventListener("click", () => show(-1));
btnRight.addEventListener("click", () => show(+1));
window.addEventListener("scroll", scrollHeader)


//form

confirmBtn.addEventListener('click', () => {
    if (fullname.value == "" || email.value == "" || message.value == "") {
        let span = document.querySelector('.alert')
        if(span){span.remove()}
        cancelBtn.parentNode.insertAdjacentHTML('beforebegin', '<span class="alert">Rellene todos los campos</span>')
        span = document.querySelector('.alert')
        if (fullname.value == "") {
            fullname.classList.add('empty');
            fullname.addEventListener('keyup', () => {
                fullname.classList.remove('empty');
                span.remove();
            })
        } else if (email.value == "") {
            email.classList.add('empty');
            email.addEventListener('keyup', () => {
                email.classList.remove('empty')
                span.remove();
            })
        } else if (message.value == "") {
            message.classList.add('empty');
            message.addEventListener('keyup', () => {
                message.classList.remove('empty')
                span.remove();
            })
        }
    } else {
        let msg = `Hello Esmeralda, I am ${fullname.value} and I want to send you a message from my email (${email.value}): ${message.value}`
        let anchorSend = document.getElementById('mailTo');
        anchorSend.href = `mailto:esmemarinm03@gmail.com?subject=query%20from%20portfolio&body=${msg}`
        confirmBtn.parentNode.classList.add('confirmed');
    }

})

cancelBtn.addEventListener('click', ()=>{
    
})