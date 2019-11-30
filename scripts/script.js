"use strict";

const thumbs = document.getElementById("thumbs");

thumbs.addEventListener("click", event => {
  event.preventDefault();
  const target = event.target;
  if (!target.closest("#thumbs")) {
    return;
  }

  const src = target.closest("a").href;
  const largeImg = document.getElementById("largeImg");
  largeImg.src = src;
});
