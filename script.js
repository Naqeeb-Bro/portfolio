// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');
navToggle?.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Active link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const setActiveLink = () => {
  let current = 'home';
  const scrollY = window.scrollY + 120;
  sections.forEach(sec => {
    if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
      current = sec.id;
    }
  });
  navLinks.forEach(l => {
    if (l.getAttribute('href') === `#${current}`) l.classList.add('active');
    else l.classList.remove('active');
  });
};
window.addEventListener('scroll', setActiveLink);
setActiveLink();

// Intersection animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      if (entry.target.classList.contains('bar')) {
        entry.target.querySelector('span')?.classList.add('in');
      }
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

const obs = observer;
document.querySelectorAll('[data-animate], .bar').forEach(el => obs.observe(el));

// Back to top
const btt = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 600) btt?.classList.add('show');
  else btt?.classList.remove('show');
});

// Year
document.getElementById('year').textContent = String(new Date().getFullYear());




