const navBar = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const iconMenu = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu')

const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

function toggleProductDetail(){
  const isDesktopMenuClose = desktopMenu.classList.contains('inactive');
  const isMenuMobileClose = menuMobile.classList.contains('inactive');

  if(!isMenuMobileClose){
    menuMobile.classList.add('inactive')
  }
  if(!isDesktopMenuClose){
    desktopMenu.classList.add('inactive')
  }
  productDetail.classList.toggle('inactive')
}

function toggleMenuDesktop(){
  const isProductDetailClose = productDetail.classList.contains('inactive');
  if(!isProductDetailClose){
    productDetail.classList.add('inactive')
  }

  desktopMenu.classList.toggle('inactive')
}
function toggleMenuMobile(){
  const isProductDetailClose = productDetail.classList.contains('inactive')

  if (!isProductDetailClose){
    productDetail.classList.add('inactive')
  }

  menuMobile.classList.toggle('inactive')
}


navBar.addEventListener('click', toggleMenuDesktop);
iconMenu.addEventListener('click', toggleMenuMobile);
shoppingCart.addEventListener('click', toggleProductDetail);