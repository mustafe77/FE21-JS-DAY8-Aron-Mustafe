const products = JSON.parse(shoplist);

//display products from array
for (let val of products){

    document.getElementsByClassName("products")[0].innerHTML += `<div class="product col-12 col-md-6 col-lg-4 text-center fw-bold">
            <p class="h3 m-3">${val.name}</p>
            <img class="prod-image"src="${val.img}">
        <div>
            <p class="product-price h4 m-3">${val.price.toFixed(2)} €</p>
            <button class="btn btn-success prod-button" type="button">ADD TO CART</button>
        </div>
    </div>`
}

//Empty array that gets filled up
let cart = [];

//Add to cart buttons
let btns = document.getElementsByClassName("prod-button");

//Add click for all add to cart buttons 
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        addToCart(products[i]);
    })
}


//Add stuff to cart
function addToCart(obj){

    //Cart empty
    if(cart.length == 0){
        cart.push(obj); //add Object to end of cart array
    }

    /* ‘find‘ function searches in array, returns true if found */
    /* else if (cart.find(function(val){return val.name == obj.name} i.e. returns true or false*/
    else if(cart.find((val) => val.name == obj.name)){
        obj.qtty ++;
    }

    else {
        cart.push(obj);
    }

    displayCart();
    total();
}

//Displays (filled) cart below product list
function displayCart(){
    let result = "";

    for (let val of cart){
        result += `
        <div class="d-flex row">
            <div class="col-4">
                <img width="100" height="100" src="${val.img}">
            </div>

            <div class="col-4>
                <span class="h4 cart-item">${val.name}</span>
            </div>

            <div class="col-4">
                <span class="h4">${val.price.toFixed(2)}€</span>
            </div>
        </div>`
    }

    document.getElementById("cart-items").innerHTML = result;
}

function total(){
    let total = 0;

    for (let val of cart){
        total += (val.price * val.qtty);
    }
    document.getElementById("grandtotal").innerHTML = `<h1> Total: ${total.toFixed(2)}€ </h1>`;
}


displayCart();
total();