import{cart} from '../../data/cart.js';
import{getProduct} from '../../data/products.js';
import { getDelieveryOption } from '../../data/deliveryOptions.js';
export function renderPaymentSummary(){
   let productPrice = 0;
   let shippingPrice = 0;
   let cartQuantitiy = 0;
   cart.forEach((cartItem)=>{
   cartQuantitiy += cartItem.quantitiy;
   const product = getProduct(cartItem.productId);
   productPrice += product.price * cartItem.quantitiy;
   const delieveryOption = getDelieveryOption(cartItem.delieveryOptionId);
   shippingPrice += delieveryOption.price;

   
   } 
)
const totalBeforeTax = productPrice + shippingPrice;
const totalTax = totalBeforeTax * 0.1;
const totalWithTax = totalBeforeTax + totalTax;


const paymentSummaryHtml = `
          <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${cartQuantitiy}):</div>
            <div class="payment-summary-money">
            Rs ${productPrice}
            </div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">
            Rs ${shippingPrice}
            </div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">
            Rs ${totalBeforeTax}
            </div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">
            Rs ${totalTax.toFixed(0)}
            </div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">
            Rs ${totalWithTax.toFixed(0)}
            </div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>`;
         

   document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHtml;       


}