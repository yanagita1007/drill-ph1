"use strict";

const titleInputElement = document.getElementById("movie-title");
const updateButtonElement = document.getElementById("update-button");
let currentEditingElement = null;

document.querySelectorAll('.edit-button').forEach((btn) => {
  btn.addEventListener('click', function() {
    // ここを追加しましょう
    updateButtonElement.style.display = "block";
    const box = document.getElementById("box");
    const textElement = btn.parentElement.querySelector('span');
    titleInputElement.value = textElement.textContent;
    currentEditingElement = textElement;
  });
});

updateButtonElement.addEventListener('click', function() {
  if (currentEditingElement) {
    // ここを追加しましょう
    const textTitle = titleInputElement.value;
    currentEditingElement.textContent = textTitle;
    updateButtonElement.style.display = "none";
  }
});
