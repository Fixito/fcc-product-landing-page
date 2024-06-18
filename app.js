const header = document.querySelector('#header');
const headerHeight = header.getBoundingClientRect().height;
const navBtn = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.nav-links');
const scrollLinks = document.querySelectorAll('.nav-link');
const date = document.querySelector('#date');

date.textContent = new Date().getFullYear();

navBtn.addEventListener('click', () => {
  const linksContainerHeight =
    linksContainer.getBoundingClientRect().height;

  const linksHeight = links.getBoundingClientRect().height;
  console.log(linksHeight);

  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = link.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - headerHeight;
    linksContainer.style.height = 0;

    links.classList.remove('show-links');
    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});
