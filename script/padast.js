import { addToCart, updateCartQuantity} from "../data/cart.js";
import { products } from "../data/products.js";

let productsHtml = '';

products.forEach((product)=>{
productsHtml += `   <div class="product-item">
            <div class="product-image-container">
              <img src="${product.image}" alt="Product 1" class="product-image">
            </div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">Rs.${product.getProductPrice()}</p>
            <button class="add-to-cart-button js-add-to-cart"
            data-product-id="${product.id}">Add to Cart</button>
            ${product.extrInfoHtml()}
          </div>`
          
});

document.querySelector('.js-products-grid').innerHTML = productsHtml;
updateCartQuantity();

document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
button.addEventListener('click',()=>{
  const productId = button.dataset.productId;
  addToCart(productId);
  updateCartQuantity();

  
})
})