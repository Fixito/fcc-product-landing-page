const menuIcon = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show-links');
});
