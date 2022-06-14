import './style.css';

const nav = document.querySelector('header');

// Fixed Navbar transition
window.addEventListener('scroll', () => {
  if (window.scrollY > nav.offsetHeight + 50) {
    nav.classList.add('nav-active');
    nav.classList.remove('md:bg-transparent');
  } else {
    nav.classList.remove('nav-active');
    nav.classList.add('md:bg-transparent');
  }
});
