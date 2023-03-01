const emailButton = document.querySelector('.navbar-email');
const emailMenuD = document.querySelector('.desktop-menu');
const botonMenu = document.querySelector('.menu'); 
const MenuMobile = document.querySelector('.mobile-menu'); 
const shopping_cart_button = document.querySelector('.navbar-shopping-cart');
const product_detail_menu = document.querySelector('.product-detail');




emailButton.addEventListener('click', interMenuD);/*ESCUCHAR SI LA CONSTANTE MENU HACE CLICK*/
function interMenuD(){
    emailMenuD.classList.toggle('inactive');
    product_detail_menu.classList.add('inactive');
} /* Funcion que intercambia el estado entre visible y no visible con el apuntador a HTML */

botonMenu.addEventListener('click', interMenuMobile);
function interMenuMobile(){
    MenuMobile.classList.toggle('inactive');
    product_detail_menu.classList.add('inactive');
}

shopping_cart_button.addEventListener('click', interProdetailMenu);
function interProdetailMenu(){
    product_detail_menu.classList.toggle('inactive');
    emailMenuD.classList.add('inactive')
    MenuMobile.classList.add('inactive')
}

document.addEventListener('click', anyclick);

function anyclick(){
    
    if (Event.target.closest('product-detail')) return;
    product_detail_menu.style.display = "none"
    
}