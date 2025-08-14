 export function getProduct(productId){
  let matchingProduct;

    products.forEach((prodcut)=>{

    if(prodcut.id === productId){
    matchingProduct = prodcut;
    }

    });
    return matchingProduct;

 }

class Products  {
  id;
  image;
  name;
  price;
  constructor(productDetails){
  this.id = productDetails.id;
  this.image = productDetails.image;
  this.name = productDetails.name;
  this.price = productDetails.price;
  }
 
 getProductPrice(){
  return  (this.price).toFixed(2);
 }
 extrInfoHtml(){
  return '';
 }
  
}

class Clothing extends Products{
sizechartLInk;

constructor(productDetails){
  super(productDetails);
  this.sizechartLInk = productDetails.sizechartLInk;
}
extrInfoHtml(){
  return `
  <a href="${this.sizechartLInk}" target = "_blank">Size Chart</a>  
  `
}
}




// all produts on the home page
 export const products = [
{
  id: '5235-5352-2s34fsfd-3435',
  image:'images/products/Luxurious Wool Scarf.jpg',
  name:'Luxurious Wool Scarf',
  price:2200
},

{
  id:'3',
  image:'images/products/Soft, Warm Wool Sweater.jpg',
  name: 'Soft, Warm Wool Sweater',
  price:1500,
  sizechartLInk:'images/clothing-size-chart.png',
  type:'clothing'
},
{
  id:'2',
  image:'images/products/Handcrafted Wool Hat.jpg',
  name:'Handcrafted Wool Hat',
  price:3000
},
{
  id:'4365',
  image:'images/products/Women-chunky-beanie-gray.WEBP',
  name:'Women-chunky-beanie-gray',
  price:500,
},

{
  id:'5',
  image:'images/products/Winter Cap.png',
  name:'Winter Cap',
  price:3500
},
{
  id:'6',
  image:'images/products/Wool Gloves.png',
  name:'Wool Gloves',
  price:2300
},
{
  id: '5235-5352-2234dfsfd-3435',
  image:'images/products/Handcrafted Elegance Woolen Purses with a Personal Touch.jpg',
  name:'Handcrafted Elegance Woolen Purses with a Personal Touch',
  price:1500
},
{   id: '525-5352-2234dfsfd-3435',

  image:'images/products/Wrap Them in Comfort, Crafted by Hand.jpg',
  name:'Wrap Them in Comfort, Crafted by Hand',
  price:900,
  type:'clothing',
  sizechartLInk:'images/size-chart-link.png'
},
{
  id:'67',
  image:'images/products/Soft Touch, Strong Care Handmade Wool for Kids.jpg',
  name:'Soft Touch, Strong Care Handmade Wool for Kids',
  price: 2999,
  
}

].map((productDetails)=>{
  if(productDetails.type === 'clothing'){
    return new Clothing(productDetails);
  }
return new Products(productDetails);
})


function logThis(){
  console.log(this);
  
}

logThis.call('adank')