// ============================================================
// TESTIMONIAL CAROUSEL — 3 cards always visible
// Center card is scaled up, outer cards are normal size.
// Rotates automatically every 3s; pauses on hover.
// ============================================================

const testimonialLink =
  'https://www.linkedin.com/in/nadia-nisa-63998a266/details/recommendations/?detailScreenTabIndex=0';

(function initTestimonialCarousel() {
  const carousel = document.getElementById('testimonialCarousel');
  const indicators = document.querySelectorAll('[data-carousel-indicator]');

  if (!carousel) return;

  // Testimonial data
  const data = [
    {
      img: 'https://i.pravatar.cc/40?img=3',
      name: 'Soharul Habib',
      role: 'Co-Founder & CEO @ OrbitX',
      text: "I've had the pleasure of knowing and working with Nadia Nisa. She is a passionate and detail-oriented UI/UX Designer.",
    },
    {
      img: 'https://i.pravatar.cc/40?img=5',
      name: 'MD. Mumin Bin Salim',
      role: 'Graphic Designer | Video Editor',
      text: 'Nadia is a very skilled UX designer. Her attention to detail and dedication to finding solutions are impressive.',
    },
    {
      img: 'https://i.pravatar.cc/40?img=8',
      name: 'Tumelo Webb',
      role: 'UI/UX Designer • Product Designer',
      text: 'I had the pleasure of mentoring Nadia and she consistently delivers high quality work.',
    },
  ];

  // Index of the currently centered card (data index)
  let centerIndex = 1; // start with card 2 in the middle
  let autoTimer = null;
  let isPaused = false;

  // Build one card element
  function buildCard(item, position) {
    // position: 'left' | 'center' | 'right'
    const isCenter = position === 'center';
    const div = document.createElement('div');
    div.setAttribute('data-testimonial-card', '');
    div.setAttribute('role', 'button');
    div.setAttribute('tabindex', '0');
    div.setAttribute('aria-label', 'Open LinkedIn recommendations');

    div.className = [
      'bg-white rounded-xl shadow-md p-6 cursor-pointer flex-shrink-0',
      'transition-all duration-500 ease-in-out',
      'w-[calc(33.333%-1rem)]',
      isCenter
        ? 'scale-[1.07] shadow-2xl ring-2 ring-blue-200 z-10'
        : 'scale-100 opacity-80',
    ].join(' ');

    div.innerHTML = `
      <div class="flex items-center gap-2 mb-4">
        <span class="text-blue-600 font-semibold">Linked</span>
        <span class="bg-blue-600 text-white text-xs px-1 rounded">in</span>
      </div>
      <p class="text-sm text-gray-600 mb-6">
        ${item.text}
        <span class="text-blue-600 cursor-pointer"> See more</span>
      </p>
      <div class="flex items-center gap-4">
        <img src="${item.img}" class="w-10 h-10 rounded-full" />
        <div>
          <h4 class="font-semibold text-sm">${item.name}</h4>
          <p class="text-xs text-gray-500">${item.role}</p>
        </div>
      </div>`;

    div.addEventListener('click', () => window.open(testimonialLink, '_blank'));
    div.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.open(testimonialLink, '_blank');
      }
    });
    div.addEventListener('mouseenter', () => { isPaused = true; });
    div.addEventListener('mouseleave', () => { isPaused = false; });

    return div;
  }

  // Render 3 cards: left, center, right
  function render(animationClass) {
    const total = data.length;
    const leftIndex  = (centerIndex - 1 + total) % total;
    const rightIndex = (centerIndex + 1) % total;

    // Fade-slide out
    carousel.style.opacity = '0';
    carousel.style.transform = animationClass === 'next'
      ? 'translateX(-18px)'
      : animationClass === 'prev'
        ? 'translateX(18px)'
        : 'translateX(0)';

    setTimeout(() => {
      carousel.innerHTML = '';
      carousel.appendChild(buildCard(data[leftIndex],  'left'));
      carousel.appendChild(buildCard(data[centerIndex], 'center'));
      carousel.appendChild(buildCard(data[rightIndex], 'right'));

      // Slide in
      carousel.style.transform = animationClass === 'next'
        ? 'translateX(18px)'
        : animationClass === 'prev'
          ? 'translateX(-18px)'
          : 'translateX(0)';

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          carousel.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
          carousel.style.opacity = '1';
          carousel.style.transform = 'translateX(0)';
        });
      });

      updateIndicators();
    }, 250);
  }

  function updateIndicators() {
    indicators.forEach((btn, i) => {
      const isActive = i === centerIndex;
      btn.classList.toggle('bg-gray-700', isActive);
      btn.classList.toggle('w-10', isActive);
      btn.classList.toggle('bg-gray-400', !isActive);
      btn.classList.toggle('w-4', !isActive);
    });
  }

  function next() {
    centerIndex = (centerIndex + 1) % data.length;
    render('next');
  }

  function prev() {
    centerIndex = (centerIndex - 1 + data.length) % data.length;
    render('prev');
  }

  function startAuto() {
    autoTimer = setInterval(() => {
      if (!isPaused) next();
    }, 3000);
  }

  function stopAuto() {
    clearInterval(autoTimer);
  }

  // Indicator clicks
  indicators.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      stopAuto();
      const direction = i > centerIndex ? 'next' : 'prev';
      centerIndex = i;
      render(direction);
      startAuto();
    });
  });

  // Initial render (no animation)
  carousel.style.transition = 'none';
  render(null);

  startAuto();
})();

// ============================================================
// NAVBAR SMOOTH SCROLL
// ============================================================
(function initNavScroll() {
  const navItems = document.querySelectorAll('nav ul li');
  if (navItems.length >= 3) {
    navItems[0].addEventListener('click', () =>
      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
    );
    navItems[1].addEventListener('click', () =>
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
    );
    navItems[2].addEventListener('click', () =>
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    );
  }
})();
