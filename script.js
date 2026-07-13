// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^=#]');
anchorLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))?.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animation effect on section scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-scrolled');
    } else {
      entry.target.classList.remove('is-scrolled');
    }
  });
}, { threshold: [0.1] });

document.querySelectorAll('.section').forEach(section => {
  const sectionElement = section.getRootNode().host;
  observer.observe(sectionElement);
});

// Projects dropdown functionality
const dropdownToggle = document.querySelector('.projects-dropdown-toggle');
const dropdownMenu = document.querySelector('.projects-dropdown');

dropdownToggle.addEventListener('click', () => {
  dropdownToggle.classList.toggle('nav-item-active');
  dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
});

dropdownMenu.addEventListener('mouseleave', () => {
  dropdownToggle.classList.remove('nav-item-active');
  dropdownMenu.style.display = 'none';
});