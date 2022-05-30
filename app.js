const menuIcon = document.querySelector('.nav-btn');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
const sidebarLinks = document.querySelector('.sidebar-links');

menuIcon.addEventListener('click', () => {
  sidebar.classList.add('show-sidebar');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});

sidebarLinks.addEventListener('click', () => {
  console.log('test');
  sidebar.classList.remove('show-sidebar');
});
