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
  observer.observe(section);
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

// Accordion (Skills section) — accessible expand/collapse
const accordionTriggers = document.querySelectorAll('.accordion-trigger');

function setAccordionPanel(trigger, expanded) {
  const panel = document.getElementById(trigger.getAttribute('aria-controls'));
  trigger.setAttribute('aria-expanded', String(expanded));
  if (expanded) {
    panel.classList.add('open');
    panel.style.maxHeight = panel.scrollHeight + 'px';
  } else {
    panel.classList.remove('open');
    panel.style.maxHeight = '0px';
  }
}

accordionTriggers.forEach(trigger => {
  // initialize the first panel as open per its aria-expanded attribute
  setAccordionPanel(trigger, trigger.getAttribute('aria-expanded') === 'true');

  trigger.addEventListener('click', () => {
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';
    setAccordionPanel(trigger, !isOpen);
  });
});

// Keep open panel height correct on resize
window.addEventListener('resize', () => {
  accordionTriggers.forEach(trigger => {
    if (trigger.getAttribute('aria-expanded') === 'true') {
      const panel = document.getElementById(trigger.getAttribute('aria-controls'));
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});