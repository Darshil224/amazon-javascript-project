//we are getting the product array from the products.js file which is loaded before this script file. this file is loaded after the product.js file, which is necessary because we need products array created first before looping in it.


import {cart, addToCart} from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js';
//step 2: generate the html:
let productsHTML='';
products.forEach((product)=>{
    productsHTML +=`
        <div class="product-container">
            <div class="product-image-container">
                <img
                class="product-image"
                src="${product.image}"
                />
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${product.name}
            </div>

            <div class="product-rating-container">
                <img
                class="product-rating-stars"
                src="${product.getStarsUrl()}"
                />
                <div class="product-rating-count link-primary">${product.rating.count}</div>
            </div>

            <div class="product-price">${product.getPrice()}</div>

            <div class="product-quantity-container">
                <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>
            </div>

            ${product.extraInfoHTML()}  <!--//polymorphism  // The products array contains objects of different classes
                                        // (Product and Clothing). Later, methods like extraInfoHTML()
                                        // will automatically use the correct version based on the
                                        // actual object's class (polymorphism). -->

            <div class="product-spacer"></div>

            <div class="added-to-cart">
                <img src="images/icons/checkmark.png" />
                Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">Add to Cart</button>
        </div>
    `;
    
});
// console.log(productsHTML);
document.querySelector('.js-products-grid').innerHTML = productsHTML;

//step 3: make it interactive: 
//(here making add to cart button interactive)

function updateCartQuantity(){
    //making the cart image icon interactive (at the top right) (updating the cart-quantity)
        let cartQuantity=0;
        cart.forEach((cartItem)=>{
            cartQuantity+=cartItem.quantity;
        });
        
        // console.log(cartQuantity);
        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity; //now updating the cart-quantity on the webpage using the DOM.
}
document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
    button.addEventListener('click',()=>{
        // alert('added to cart');
        //console.log(button.dataset);
        //console.log(button.dataset.productName);
        const productId = button.dataset.productId;
         addToCart(productId);
    
        //making the cart image icon interactive (at the top right) (updating the cart-quantity)
        updateCartQuantity();
        // console.log(cart);
        
    });
});