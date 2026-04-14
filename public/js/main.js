const testimonialLink = 'https://www.linkedin.com/in/nadia-nisa-63998a266/details/recommendations/?detailScreenTabIndex=0';
const testimonialCards = document.querySelectorAll('[data-testimonial-card]');
const testimonialIndicators = document.querySelectorAll('[data-carousel-indicator]');

if (testimonialCards.length && testimonialIndicators.length) {
  const originalCards = Array.from(testimonialCards);
  let currentOrder = [0, 1, 2];
  let autoRotateId = null;

  const setActiveCard = () => {
    testimonialCards.forEach((card, index) => {
      const isActive = index === 1; // middle card
      card.classList.toggle('scale-105', isActive);
      card.classList.toggle('ring-2', isActive);
      card.classList.toggle('ring-blue-200', isActive);
      card.classList.toggle('shadow-2xl', isActive);
    });

    testimonialIndicators.forEach((indicator, indicatorIndex) => {
      indicator.classList.toggle('bg-gray-700', indicatorIndex === currentOrder[1]);
      indicator.classList.toggle('bg-gray-400', indicatorIndex !== currentOrder[1]);
    });
  };

  const shiftLeft = () => {
    const inner = document.getElementById('testimonialCarousel');
    const cardWidth = testimonialCards[0].offsetWidth + 32; // gap-8 = 2rem = 32px
    inner.style.transform = 'translateX(-' + cardWidth + 'px)';
    inner.style.transition = 'transform 0.5s ease-in-out';
    setTimeout(() => {
      const first = testimonialCards[0];
      inner.appendChild(first);
      currentOrder.push(currentOrder.shift());
      inner.style.transition = 'none';
      inner.style.transform = 'translateX(0)';
      setActiveCard();
    }, 500);
  };

  const restartAutoRotate = () => {
    if (autoRotateId) {
      clearInterval(autoRotateId);
    }
    autoRotateId = setInterval(shiftLeft, 5000);
  };

  testimonialCards.forEach((card) => {
    card.addEventListener('click', () => {
      window.open(testimonialLink, '_blank');
    });

    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        window.open(testimonialLink, '_blank');
      }
    });

    card.addEventListener('mouseenter', () => {
      if (autoRotateId) {
        clearInterval(autoRotateId);
      }
    });

    card.addEventListener('mouseleave', restartAutoRotate);
  });

  testimonialIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      // For now, just shift to make that index middle
      while (currentOrder[1] !== index) {
        shiftLeft();
      }
      restartAutoRotate();
    });
  });

  setActiveCard();
  restartAutoRotate();

  const navItems = document.querySelectorAll('nav ul li');
  if (navItems.length >= 3) {
    navItems[0].addEventListener('click', () => {
      document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    });
    navItems[1].addEventListener('click', () => {
      document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
    });
    navItems[2].addEventListener('click', () => {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
  }
}
