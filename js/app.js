const hamburger = document.querySelector('.hamburger input');
const nav = document.querySelector('nav');
const ul = document.querySelector('.primary-nav');
const li = document.querySelector('.secondary-nav');
hamburger.addEventListener('click', function () {
  nav.classList.toggle('slide');
  ul.classList.toggle('slide');
  li.classList.toggle('slide');
});
