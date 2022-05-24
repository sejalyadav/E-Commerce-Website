
$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop()>68){
            $('header .header-2').addClass('header-active');
        }
        else{
            $('header .header-2').removeClass('header-active');
        }

        $('section').each(function(){
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find('[href="#${id}"]').addClass('active');
            }
        });




    });

    $('.home-slider').owlCarousel({
        items:1,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:8000,
        loop:true,
    });

    $('.small-image img').click(function(){
        $(this).addClass('image-active').siblings().removeClass('image-active');
        let image = $(this).attr('src');
        $('.big-image img').attr('src', image);
    });

    $('.gallery .btn').click(function(){
        let filter = $(this).attr('data-filter');
        if(filter=='All Products'){
            $('.gallery .box').show(400);
        }
        else{
            $('.gallery .box').not('.'+filter).hide(200);
            $('.gallery .box').filter('.'+filter).show(400);
        }
    });

    $(this).addClass('button-active').siblings().removeClass('button-active');


});

/*let carts = document.querySelectorAll('.add-cart');
let products = [
    {
        name: 'Green Jumpsuit',
        tag: 'greenjumpsuit',
        price: 400,
        inCart: 0
    },
    {
        name: 'Peach Lehenga',
        tag: 'peachlehenga',
        price: 500,
        inCart: 0
    },
    {
        name: 'Neck Chain-2',
        tag: 'neckchain-2',
        price: 300,
        inCart: 0
    },
    {
        name: 'Light Pink Pants',
        tag: 'lightpinkpants',
        price: 500,
        inCart: 0
    },
    {
        name: 'Formal Set',
        tag: 'formalset',
        price: 700,
        inCart: 0
    },
    {
        name: 'Pink-Brown Gown',
        tag: 'pink-browngown',
        price: 800,
        inCart: 0
    },
    {
        name: 'Neck Chain-3',
        tag: 'neckchain-3',
        price: 300,
        inCart: 0
    },
    {
        name: 'White Pants',
        tag: 'whitepants',
        price: 1000,
        inCart: 0
    },
    {
        name: 'H&M Dress',
        tag: 'H&Mdress',
        price: 1000,
        inCart: 0
    },
    {
        name: 'Green Lehenga',
        tag: 'greenlehenga',
        price: 1500,
        inCart: 0
    },
    {
        name: 'Pendant',
        tag: 'pendant',
        price: 600,
        inCart: 0
    },
    {
        name: 'Denim Skirt',
        tag: 'denimskirt',
        price: 1000,
        inCart: 0
    }
];

for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product){

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){

        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }

        cartItems[product.tag].inCart += 1; 
    }else{
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product){

    let cartCost = localStorage.getItem('totalCost');

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }else{
        localStorage.setItem("totalCost", product.price);}
}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector
    (".products-container");
    let cartCost = localStorage.getItem('totalCost');

    if(cartItems && productContainer){
        productContainer.innerHtml = ''; 
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
            <ion-icon name="close-circle-outline"></ion-icon>
            <img src="./images/${item.tag}.jpg">
            <span>${item.name}</span>
            </div>
            <div class="prices">₹${item.price},00</div>
            <div class="quantity">
            <ion-icon class="decrease"  name="caret-back-circle-outline"></ion-icon>
            <span>${item.inCart}</span>
            <ion-icon class="increase" name="caret-forward-circle-outline"></ion-icon>
            </div>
            <div class="total">
             <ion-icon name="caret-forward-circle-outline"></ion-icon>
             ₹${item.inCart *item.price},00
            </div>
            `;
        });

        productContainer.innerHTML += `
          <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">
              Basket Total
            </h4>
            <h4 class="basketTotal">
            ₹${cartCost},00
            </h4>
        `;
    }
}

onLoadCartNumbers();
displayCart();
*/
