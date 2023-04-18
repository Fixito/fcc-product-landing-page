const navBtn = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
const scrollLinks = document.querySelectorAll('.nav-link');
const date = document.querySelector('#date');
const header = document.querySelector('#header');
const headerHeight = header.getBoundingClientRect().height;

date.textContent = new Date().getFullYear();

navBtn.addEventListener('click', () => {
  links.classList.toggle('show-links');
});

scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = link.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - headerHeight;

    links.classList.remove('show-links');
    window.scrollTo({
      left: 0,
      top: position
    });
  });
});
