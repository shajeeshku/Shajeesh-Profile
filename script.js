document.addEventListener('DOMContentLoaded', function () {
  const triggers = document.querySelectorAll('.accordion-trigger');

  function setPanel(trigger, open) {
    const panel = document.getElementById(trigger.getAttribute('aria-controls'));
    trigger.setAttribute('aria-expanded', String(open));
    if (open) {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    } else {
      panel.style.maxHeight = '0px';
    }
  }

  triggers.forEach(trigger => {
    // Initialize each panel to its declared aria-expanded state
    setPanel(trigger, trigger.getAttribute('aria-expanded') === 'true');

    trigger.addEventListener('click', function () {
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';
      setPanel(trigger, !isOpen);
    });
  });

  // Keep open panels correctly sized on resize
  window.addEventListener('resize', function () {
    triggers.forEach(trigger => {
      if (trigger.getAttribute('aria-expanded') === 'true') {
        const panel = document.getElementById(trigger.getAttribute('aria-controls'));
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
});