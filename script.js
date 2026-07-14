document.addEventListener('DOMContentLoaded', function() {
  // Select all accordion triggers
  const triggers = document.querySelectorAll('.accordion-trigger');
  
  triggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      const button = this;
      const panel = document.getElementById(button.getAttribute('aria-controls'));
      
      // Toggle expanded state
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !isExpanded);
      
      if (isExpanded) {
        // Close panel
        panel.style.maxHeight = '0px';
        button.querySelector('.accordion-icon').style.transform = 'rotate(0deg)';
      } else {
        // Open panel
        panel.style.maxHeight = panel.scrollHeight + 'px';
        button.querySelector('.accordion-icon').style.transform = 'rotate(180deg)';
      }
    });
  });
