"use strict";

const thumbs = document.getElementById("thumbs");
const largeImg = document.getElementById("largeImg");

thumbs.addEventListener("click", event => {
  event.preventDefault();
  const target = event.target;
  if (!target.closest("#thumbs")) {
    return;
  }

  const src = target.closest("a").href;
  largeImg.src = src;
});
