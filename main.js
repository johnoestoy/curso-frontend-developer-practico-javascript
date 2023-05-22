const navBar = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const iconMenu = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu')

const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

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

const productList = []
productList.push({
  name: 'Bike',
  price: 120,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
  name: 'Laptop',
  price: 460,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
  name: 'ipad',
  price: 800,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
  name: 'mobile',
  price: 1000,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function renderProducts(arr){

  for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    //product = {name, price, img} --> product.img
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.img)
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div')
    const productPrice = document.createElement('p');
    productPrice.innerText = `$ ${product.price}`
    const productName = document.createElement('p');
    productName.innerText = product.name
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
  
    productInfoFigure.appendChild(productImgCart);
    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)
  
    productCard.appendChild(productImg)
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard)
  }
}
 renderProducts(productList);