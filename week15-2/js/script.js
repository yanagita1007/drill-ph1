"use strict";

document.getElementById("all").addEventListener("click", function() {
    displayProducts("product");
});

document.getElementById("electronics").addEventListener("click", function() {
    displayProducts("product-electronics");
});

document.getElementById("clothing").addEventListener("click", function() {
    displayProducts("product-clothing");
});

function displayProducts(category) {
  const products = document.querySelectorAll(".product");
  const electronics = document.querySelectorAll(".product-electronics");
  const clothings = document.querySelectorAll(".product-clothing");
  console.log(products);
  console.log(category == "product");

  products.forEach(product => {
    console.log(product);
    product.style.display = (category == "product") ? "block" : "none";  
    console.log(product);
  });
  electronics.forEach(electronic => {
    console.log(electronic);
    electronic.style.display = (category == "product-electronics") ? "block" : "none";  
    console.log(electronic);
  });
  clothings.forEach(clothing => {
    clothing.style.display = (category == "product-clothing") ? "block" : "none";  
  });
}