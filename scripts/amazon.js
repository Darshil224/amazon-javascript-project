//we are getting the product array from the products.js file which is loaded before this script file. this file is loaded after the product.js file, which is necessary because we need products array created first before looping in it.
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
                src="images/ratings/rating-${product.rating.stars*10}.png"
                />
                <div class="product-rating-count link-primary">${product.rating.count}</div>
            </div>

            <div class="product-price">$${(product.priceCents/100).toFixed(2)}</div>

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
document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
    button.addEventListener('click',()=>{
        // alert('added to cart');
        //console.log(button.dataset);
        //console.log(button.dataset.productName);
        const productId = button.dataset.productId;
        
        let matchingItem; //undefined
        cart.forEach((item)=>{ //loop to find out if the product already exist in the cart array?
            if(item.productId===productId){
                matchingItem=item;  //storing the product's object in the variable.
            }
        });
        if(matchingItem){
            matchingItem.quantity+=1; // if the product is already in the cart, then just increase the quantity instead of addding the full product object again.
        }else{
            cart.push({ //adding the product's object in the cart array if it is not inside the cart already.
            productId: productId,
            quantity: 1
        });
        }


        console.log(cart);
        
    });
});