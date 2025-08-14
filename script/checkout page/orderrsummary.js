import {cart,removeFromCart, updateQuantity, updateCartQuantity,updatDelieveryOptionId} from '../../data/cart.js';
import {products,getProduct} from '../../data/products.js';
import {delieveryOptions , getDelieveryOption} from '../../data/deliveryOptions.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { renderPaymentSummary } from './paymentSummary.js';

export function renderOrderSummary(){
    let cartSummeryHtml = '';

    cart.forEach((cartItem)=>{
    const productId = cartItem.productId;
   // finding the each cart item 
    const matchingProduct = getProduct(productId);


    const delieveryOptionId = cartItem.delieveryOptionId;
    const delieveryOption = getDelieveryOption(delieveryOptionId);
    const today = dayjs();
    const deliveryDate = today.add(delieveryOption.deliveryDays,'days');
    const dateString = deliveryDate.format('dddd, MMMM D');


    cartSummeryHtml +=   `<div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
            Delivery date: ${dateString}
        </div>

        <div class="cart-item-details-grid">
            <img class="product-image"
            src="${matchingProduct.image}">

            <div class="cart-item-details">
            <div class="product-name">
                ${matchingProduct.name} </div>
            <div class="product-price">
                Rs ${matchingProduct.getProductPrice()}
            </div>
            <div class="product-quantity">
                <span>
                Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantitiy}</span>
                </span>
                <span class="update-quantity-link link-primary js-update-link"
                data-product-id =${matchingProduct.id}>
                Update
                </span>
                <input class="quantity-input js-quantity-input-${matchingProduct.id}">
                <span class ="save-quantity-link link-primary  js-save-quantity-link"
                data-product-id="${matchingProduct.id}">Save</span>
                <span class="delete-quantity-link link-primary js-delete-link"
                data-product-id="${matchingProduct.id}">
                Delete
                </span>
            </div>
            </div>

            <div class="delivery-options">
            <div class="delivery-options-title">
                Choose a delivery option:
            </div>
            ${delieveryOPtioinHtml(matchingProduct,cartItem)}
            </div>
        </div>
        </div>`;
        
    })
    // Accessing order summary container and updating the inner html
    document.querySelector('.js-order-summary').innerHTML = cartSummeryHtml;

    // Function that generate delivery option html
    function delieveryOPtioinHtml(matchingProduct,cartItem){

    let html = '';

    delieveryOptions.forEach((delieveryOption)=>{
        const today = dayjs();
        const deliveryDate = today.add(delieveryOption.deliveryDays,'days');
        const dateString = deliveryDate.format('dddd, MMMM D');
        const pricString = delieveryOption.price === 0 
        ?'Free'
        : `${delieveryOption.price}`;
        const isChecked = delieveryOption.id === cartItem.delieveryOptionId;
        
    html +=

    ` <div class="delivery-option js-delievery-option"
                data-product-id="${matchingProduct.id}"
                data-delievery-option-id="${delieveryOption.id}">
                <input type="radio"
                ${isChecked ?'checked':''}
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
                <div>
                <div class="delivery-option-date">
                    ${dateString}
                </div>
                <div class="delivery-option-price">
                        ${pricString}- Shipping
                </div>
                </div>
            
        </div>`
    })

    return html;
    }


    // Acceessing delete link and remove the click item from cart and update the html
    document.querySelectorAll('.js-delete-link').forEach((link)=>{
    link.addEventListener('click',()=>{
    const productId = link.dataset.productId;
    removeFromCart(productId);
    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    container.remove();
    updatCartItemText();
    renderPaymentSummary();

    })
    })

    // function that update cart itme text at the header  in checkout page
    function updatCartItemText(){
    let cartQuantitiy = 0;
    cart.forEach((cartItem)=>{
    cartQuantitiy += cartItem.quantitiy;
    })
    document.querySelector('.js-return-to-home-link').innerHTML =`${cartQuantitiy} items`;
    }
    // updateing the header cart item text when the page is load
    updatCartItemText();

    // Accessing the update button and make it interative
    document.querySelectorAll('.js-update-link').forEach((link)=>{
    link.addEventListener('click',()=>{
    const productId = link.dataset.productId;
    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    container.classList.add('is-editing-quantity');
    link.classList.add('update-disappear');
    })

    });


    document.querySelectorAll('.js-save-quantity-link').forEach((link)=>{
    link.addEventListener('click',()=>{
    const productId = link.dataset.productId;

    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    container.classList.remove('is-editing-quantity');
    const quantitiyInput = document.querySelector(`.js-quantity-input-${productId}`);

    const quanitityLabel = document.querySelector(`.js-quantity-label-${productId}`);

    const newQuantity = Number(quantitiyInput.value);
    if(newQuantity <= 0 || newQuantity > 100){
        alert("Please Add Quantity between 1 and 100. Thank You!");
        return;
    }
    quanitityLabel.innerHTML = newQuantity;
    updateQuantity(productId,newQuantity);
    updatCartItemText();
    renderPaymentSummary();




    });


    });

    document.querySelectorAll('.js-delievery-option').forEach((element)=>{
    element.addEventListener('click',()=>{
    const {productId, delieveryOptionId} = element.dataset;
    updatDelieveryOptionId(productId,delieveryOptionId);
    renderOrderSummary()
    renderPaymentSummary();

    })
    });
}
