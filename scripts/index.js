let body = document.querySelector('body')
let burguerBtn = document.querySelector('.burguerMenu')

window.onload = () => {
    let ctn = document.querySelector('.loader')
    ctn.style.visibility = "hidden";
    ctn.style.opacity= "0";
}

burguerBtn.addEventListener('click', ()=>{
    burguerBtn.classList.toggle('menuActive')
})
