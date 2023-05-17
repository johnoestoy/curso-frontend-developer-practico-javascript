const navBar = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const iconMenu = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu')


function toggleDesktop(){
  desktopMenu.classList.toggle('inactive')
}
function toggleMobile(){
  menuMobile.classList.toggle('inactive')
}
navBar.addEventListener('click', toggleDesktop);
iconMenu.addEventListener('click', toggleMobile);