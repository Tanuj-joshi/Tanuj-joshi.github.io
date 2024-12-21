// script.js

// Example: Smooth scrolling to sections when menu items are clicked.
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60, // Offset for the navbar height
        behavior: 'smooth'
      });
    }
  });
});
