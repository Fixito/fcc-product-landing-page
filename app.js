const menuIcon = document.querySelector('.nav-btn');
const header = document.querySelector('header');
const closeBtn = document.querySelector('.close-btn');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener(
  'click',
  () => {
    header.classList.add('show-nav');
  },
  { passive: true }
);

closeBtn.addEventListener(
  'click',
  () => {
    header.classList.remove('show-nav');
  },
  { passive: true }
);

navLinks.addEventListener(
  'click',
  () => {
    header.classList.remove('show-nav');
  },
  { passive: true }
);
