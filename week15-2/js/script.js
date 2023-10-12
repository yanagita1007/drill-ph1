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

  products.forEach(product => {
    product.style.display = "none";
  })
  if(category == "product"){
    products.forEach(product => {
      product.style.display = "block";
    })
    console.log(1);
  }else if(category == "product-electronics"){
    electronics.forEach(electronic => {
      electronic.style.display = "block";
    })
    console.log(2);
  }else if(category == "product-clothing"){
    clothings.forEach(clothing => {
      clothing.style.display = "block";
    })
    console.log(3);
  }
}