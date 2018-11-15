//Project Goals: Display a list of products and prices
//Need at least 4 products
//Use a table or list to display products
//Use array to keep track of products in JS
//Need buttons for each product to "add to cart/checkout"
//Need total of 5+ buttons and 3 web pages
//Need to show receipt

//.whatever grabs things that are in the id useful when 
//creating things of the same type

//no dot changes things with all of the same words throughout the page


//names and price

console.log("test");

var cart =[];
function addItem(item){
	cart.push(item);
	splitAndGetPrice(item);
}

var productName = [];
var productPrice = [];

productName.push("Skull Print Blouse")
productPrice.push("$28.99");

productName.push("Wide Leg Pants")
productPrice.push("$32.89");

productName.push("Baby Doll Shoes")
productPrice.push("$44.99");

productName.push("Fishnet Stocking")
productPrice.push("$18.99");

productName.push("Floral Print Hat")
productPrice.push("$12.99");

productName.push("Purple Scoop Neck Tank")
productPrice.push("$10.99");


console.log(productName + productPrice);
