
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-bar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('.active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('.active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Designer Gráfico', 'Design Web', 'Dev Front-End'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});