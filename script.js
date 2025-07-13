const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');
const closeIcon = document.querySelector('.close-icon');

menuIcon.addEventListener('click', () => {
  sidebar.classList.add('active');
});

closeIcon.addEventListener('click', () => {
  sidebar.classList.remove('active');
});
