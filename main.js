const emailButton = document.querySelector('.navbar-email');
const emailMenuD = document.querySelector('.desktop-menu');
const botonMenu = document.querySelector('.menu'); 
const MenuMobile = document.querySelector('.mobile-menu'); 
const shopping_cart_button = document.querySelector('.navbar-shopping-cart');
const product_detail_menu = document.querySelector('.product-detail_car');
const cardsContainer = document.querySelector('.cards-container');
const product_detail_container = document.querySelector('.product-detail');
const close_product_detail = document.querySelector('.product-detail-close');



emailButton.addEventListener('click', interMenuD);/*ESCUCHAR SI LA CONSTANTE MENU HACE CLICK*/
botonMenu.addEventListener('click', interMenuMobile);
shopping_cart_button.addEventListener('click', interProdetailMenu);
close_product_detail.addEventListener('click', closePorducDetail);

function interMenuD(){
    emailMenuD.classList.toggle('inactive');
    product_detail_menu.classList.add('inactive');
    product_detail_container.classList.add('inactive');
} /* Funcion que intercambia el estado entre visible y no visible con el apuntador a HTML */


function interMenuMobile(){
    MenuMobile.classList.toggle('inactive');
    product_detail_menu.classList.add('inactive');
    product_detail_container.classList.add('inactive');
}


function interProdetailMenu(){
    product_detail_menu.classList.toggle('inactive');
    emailMenuD.classList.add('inactive');
    MenuMobile.classList.add('inactive');
    product_detail_container.classList.add('inactive');
}

function openProducDetail(){
    product_detail_container.classList.remove('inactive');
    product_detail_menu.classList.add('inactive');
    emailMenuD.classList.add('inactive');
    MenuMobile.classList.add('inactive');
}

function closePorducDetail(){
    product_detail_container.classList.add('inactive');
}

//declaracion de los productos que se van a mostrar (producCards)//

const productList = [];

productList.push({

    Name: "bike",
    Price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

})

productList.push({

    Name: "pantalla",
    Price: 300,
    image: "https://img.freepik.com/free-psd/computer-screen-white-background-mock-up_1022-135.jpg?w=2000&t=st=1677786151~exp=1677786751~hmac=1005b9cca06086517b40741ea5e84e171c0dfab7052c4fa3cf075ff7b25c4ce0",

})

productList.push({

    Name: "computador",
    Price: 1200,
    image: "https://img.freepik.com/free-psd/laptop-mockup-white_160403-30.jpg?w=2000&t=st=1677786237~exp=1677786837~hmac=9460fb53b9a0fcba6832ca0ba6b2bb7dc1fea9085714e63a44d4825aa5d9c94d",

})

productList.push({

    Name: "bike",
    Price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

})

productList.push({

    Name: "pantalla",
    Price: 300,
    image: "https://img.freepik.com/free-psd/computer-screen-white-background-mock-up_1022-135.jpg?w=2000&t=st=1677786151~exp=1677786751~hmac=1005b9cca06086517b40741ea5e84e171c0dfab7052c4fa3cf075ff7b25c4ce0",

})

productList.push({

    Name: "computador",
    Price: 1200,
    image: "https://img.freepik.com/free-psd/laptop-mockup-white_160403-30.jpg?w=2000&t=st=1677786237~exp=1677786837~hmac=9460fb53b9a0fcba6832ca0ba6b2bb7dc1fea9085714e63a44d4825aa5d9c94d",

})


function renderProducts(arreglo){

    for(product of arreglo){

        const productCard = document.createElement('div');
        productCard.classList.add("product-card");
        productCard.addEventListener('click', openProducDetail);
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add("product-info");
    
        const productInfoCont = document.createElement('div');
        const producPrice = document.createElement('p');
        producPrice.innerText = '$' + product.Price;
        const producName = document.createElement('p');
        producName.innerText = product.Name;
        productInfoCont.appendChild(producPrice);
        productInfoCont.appendChild(producName);
    
        const productFigure = document.createElement('figure');
        const productImgIcon = document.createElement('img');
        productImgIcon.setAttribute('src', './icons/bt_add_to_cart.svg')
        productFigure.appendChild(productImgIcon);
    
    
        productInfo.appendChild(productInfoCont);
        productInfo.appendChild(productFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }

}

renderProducts(productList)


