document.querySelector('#menuicon').addEventListener('click', () => {
  document.querySelector('.hamburger').style.display = 'flex';
});

document.querySelector('.closemenu').addEventListener('click', () => {
  document.querySelector('.hamburger').style.display = 'none';
});

document.querySelectorAll('#whitebox a').forEach((element) => {
  element.addEventListener('click', () => {
    document.querySelector('.hamburger').style.display = 'none';
  });
});
window.onresize = () => {
  if (window.innerWidth > 992) {
    document.querySelector('.hamburger').style.display = 'none';
  }
};