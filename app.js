const menuIcon = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const date = document.querySelector('#date');

date.textContent = new Date().getFullYear();

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show-links');
});
