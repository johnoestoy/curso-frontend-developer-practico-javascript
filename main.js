const navBar = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navBar.addEventListener('click', toggleDesktop);

function toggleDesktop(){
  desktopMenu.classList.toggle('inactive')
}
