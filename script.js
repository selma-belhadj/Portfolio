<<<<<<< HEAD
document.querySelector('#menuicon').addEventListener('click', () => {
  document.querySelector('.hamburger').style.display = 'flex';
});

document.querySelector('.closemenu').addEventListener('click', () => {
  document.querySelector('.hamburger').style.display = 'none';
  // document.body.style.overflow = 'auto';
});

document.querySelectorAll('#whitebox a').forEach((element) => {
  element.addEventListener('click', () => {
    document.querySelector('.hamburger').style.display = 'none';
    // document.body.style.overflow = 'hidden';
  });
});

window.onresize = () => {
  if (window.innerWidth > 992) {
    document.querySelector('.hamburger').style.display = 'none';
  }
};
=======
document.querySelector("#menuicon").addEventListener("click", () => {
  document.querySelector(".hamburger").style.display = "flex";
  document.body.style.overflow = "hidden";
});

document.querySelector(".closemenu").addEventListener("click", () => {
  document.querySelector(".hamburger").style.display = "none";
  document.body.style.overflow = "auto";
});
>>>>>>> 91b6fccf99f8b4cb9ecc9ba57d31ab344b005e29
