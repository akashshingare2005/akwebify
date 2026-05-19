// Scroll animations and interactions
document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  document.querySelectorAll('.animate-on-scroll, .service-card, .portfolio-card, .testimonial-card, .skill-category').forEach(el => {
    observer.observe(el);
  });

  // Count animation for stats
  const countElements = document.querySelectorAll('.stat-number');
  
  countElements.forEach(element => {
    const finalCount = parseInt(element.getAttribute('data-count'));
    let currentCount = 0;
    const increment = Math.ceil(finalCount / 50);
    
    const counter = setInterval(() => {
      currentCount += increment;
      if (currentCount >= finalCount) {
        element.textContent = finalCount;
        clearInterval(counter);
      } else {
        element.textContent = currentCount;
      }
    }, 30);
  });
});

