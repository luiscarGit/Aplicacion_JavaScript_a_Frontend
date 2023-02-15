const emailButton = document.querySelector('.navbar-email');
const emailMenuD = document.querySelector('.desktop-menu');
const botonMenu = document.querySelector('.menu'); 
const MenuMobile = document.querySelector('.mobile-menu'); 
const shopping_cart_button = document.querySelector('.navbar-shopping-cart');
const product_detail_menu = document.querySelector('.product-detail');


emailButton.addEventListener('click', interMenuD);

function interMenuD(){

    emailMenuD.classList.toggle('inactive');
}


botonMenu.addEventListener('click', interMenuMobile);

function interMenuMobile(){

    MenuMobile.classList.toggle('inactive');
    
}

shopping_cart_button.addEventListener('click', interProdetailMenu);

function interProdetailMenu(){
    product_detail_menu.classList.toggle('inactive');
}