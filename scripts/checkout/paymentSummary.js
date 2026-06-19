import {cart} from '../../data/cart.js';
import { products, getProduct } from '../../data/products.js';
import { getDeliveryOption } from '../../data/deliveryOptions.js';
import { formatCurrency } from '../utils/money.js';

export function renderPaymentSummary(){

    //step1: save the data (model)
    let productPriceCents=0;
    let shippingPriceCents=0;
    let totalQuantity=0;
    cart.forEach((cartItem)=>{
        //my own code, i guess correct, but lets follow the function, module approach
        // const productId=cartItem.productId;
        // const quantity=cartItem.quantity;
        // let priceCents=0;
        // products.forEach((product)=>{
        //     if(product.id===productId){
        //         priceCents=product.priceCents;
        //     }
        // });
        // const amountCents=quantity*priceCents;
        // totalCents+=amountCents;
        const product= getProduct(cartItem.productId);
        productPriceCents += product.priceCents * cartItem.quantity;

        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
        shippingPriceCents+= deliveryOption.priceCents;

        totalQuantity+=cartItem.quantity;




    });
    // console.log(productPriceCents);
    // console.log(shippingPriceCents);
    const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
    const taxCents = totalBeforeTaxCents*(0.1);
    const totalCents = totalBeforeTaxCents + taxCents; 

    //now lets do step2 generate the html (view)
    const paymentSummaryHTML = `
                <div class="payment-summary-title">Order Summary</div>

                <div class="payment-summary-row">
                    <div>Items (${totalQuantity}):</div>
                    <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
                </div>

                <div class="payment-summary-row">
                    <div>Shipping &amp; handling:</div>
                    <div class="payment-summary-money">$${formatCurrency(shippingPriceCents)}</div>
                </div>

                <div class="payment-summary-row subtotal-row">
                    <div>Total before tax:</div>
                    <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxCents)}</div>
                </div>

                <div class="payment-summary-row">
                    <div>Estimated tax (10%):</div>
                    <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
                </div>

                <div class="payment-summary-row total-row">
                    <div>Order total:</div>
                    <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
                </div>

                <button class="place-order-button button-primary">
                    Place your order
                </button>


    `;
    //lets put the generated html to the page
    document.querySelector('.js-payment-summary')
    .innerHTML=paymentSummaryHTML;

    //generating html for header and then puting it on the html page
    const itemsQuantityHeaderHTML=`
    Checkout (<a class="return-to-home-link" href="amazon.html">${totalQuantity}</a
          >)
    
    `;
    document.querySelector('.checkout-header-middle-section')
    .innerHTML= itemsQuantityHeaderHTML;

}