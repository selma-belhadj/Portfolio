document.querySelector("#menuicon").addEventListener("click", () => {
  document.querySelector(".hamburger").style.display = "flex";
  document.body.style.overflow = "hidden";
});

document.querySelector(".closemenu").addEventListener("click", () => {
  document.querySelector(".hamburger").style.display = "none";
  document.body.style.overflow = "auto";
});
