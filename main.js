const menu = document.querySelector('.mobile-menu');
const nav = document.querySelector('.mobile-navigation');
const closeBtn = document.querySelector('.close');

menu.addEventListener('click', () => {
  nav.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('active');
});
