"use strict";

const counterNum = document.querySelector("#counter");
const button = document.querySelector("#counter-btn");
let count = 0;

button.addEventListener("click", function () {
  count++;
  counterNum.textContent = count;
});
//======================================================

const liveInput = document.querySelector("#live-input");
const preview = document.querySelector("#preview");

liveInput.addEventListener("input", function () {
  preview.textContent = liveInput.value;
});
//===========================================================
const hoverBox = document.querySelector("#hover-box");

hoverBox.addEventListener("mouseenter", function () {
  hoverBox.style.backgroundColor = "yellow";
});

hoverBox.addEventListener("mouseleave", function () {
  hoverBox.style.backgroundColor = "";
});
