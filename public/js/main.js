// ============================================================
// TESTIMONIAL CAROUSEL
// Mobile: 1 card full-width  |  Desktop: 3 cards, center scaled
// Auto-rotates every 3s; pauses on hover.
// ============================================================

const testimonialLink =
  'https://www.linkedin.com/in/nadia-nisa-63998a266/details/recommendations/?detailScreenTabIndex=0';

(function initTestimonialCarousel() {
  const carousel   = document.getElementById('testimonialCarousel');
  const indicators = document.querySelectorAll('[data-carousel-indicator]');

  if (!carousel) return;

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

  let centerIndex = 1;
  let autoTimer   = null;
  let isPaused    = false;

  const isMobile = () => window.innerWidth < 768;

  // ── Build a single card ──────────────────────────────────────
  function buildCard(item, position) {
    const isCenter = position === 'center';
    const mobile   = isMobile();

    const div = document.createElement('div');
    div.setAttribute('data-testimonial-card', '');
    div.setAttribute('role', 'button');
    div.setAttribute('tabindex', '0');
    div.setAttribute('aria-label', 'Open LinkedIn recommendations');

    // Width: full on mobile, 1/3 on desktop
    const widthClass = mobile ? 'w-full' : 'w-[calc(33.333%-1rem)]';

    // Scale + highlight only for desktop center card
    const styleClass = (!mobile && isCenter)
      ? 'scale-[1.07] shadow-2xl ring-2 ring-blue-200 z-10'
      : (!mobile ? 'scale-100 opacity-80' : '');

    div.className = [
      'bg-white rounded-xl shadow-md p-6 cursor-pointer flex-shrink-0',
      'transition-all duration-500 ease-in-out',
      widthClass,
      styleClass,
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

  // ── Render cards based on current mode ──────────────────────
  function render(direction) {
    const total      = data.length;
    const leftIndex  = (centerIndex - 1 + total) % total;
    const rightIndex = (centerIndex + 1) % total;
    const mobile     = isMobile();

    // Slide-out
    carousel.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
    carousel.style.opacity    = '0';
    carousel.style.transform  = direction === 'next'
      ? 'translateX(-20px)'
      : direction === 'prev'
        ? 'translateX(20px)'
        : 'translateX(0)';

    setTimeout(() => {
      carousel.innerHTML = '';

      if (mobile) {
        // Mobile: only the active card
        carousel.appendChild(buildCard(data[centerIndex], 'center'));
      } else {
        // Desktop: left + center + right
        carousel.appendChild(buildCard(data[leftIndex],   'left'));
        carousel.appendChild(buildCard(data[centerIndex], 'center'));
        carousel.appendChild(buildCard(data[rightIndex],  'right'));
      }

      // Slide-in from opposite side
      carousel.style.transition = 'none';
      carousel.style.transform  = direction === 'next'
        ? 'translateX(20px)'
        : direction === 'prev'
          ? 'translateX(-20px)'
          : 'translateX(0)';

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          carousel.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
          carousel.style.opacity    = '1';
          carousel.style.transform  = 'translateX(0)';
        });
      });

      updateIndicators();
    }, 250);
  }

  function updateIndicators() {
    indicators.forEach((btn, i) => {
      const active = i === centerIndex;
      btn.classList.toggle('bg-gray-700', active);
      btn.classList.toggle('w-10', active);
      btn.classList.toggle('bg-gray-400', !active);
      btn.classList.toggle('w-4', !active);
    });
  }

  function next() {
    centerIndex = (centerIndex + 1) % data.length;
    render('next');
  }

  function startAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => { if (!isPaused) next(); }, 3000);
  }

  // Indicator clicks
  indicators.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      const direction = i > centerIndex ? 'next' : 'prev';
      centerIndex = i;
      render(direction);
      startAuto();
    });
  });

  // Re-render on resize (desktop ↔ mobile switch)
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => render(null), 200);
  });

  // Initial render
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

// ============================================================
// MOBILE MENU TOGGLE
// ============================================================
(function initMobileMenu() {
  const menuBtn   = document.getElementById('mobileMenuBtn');
  const closeBtn  = document.getElementById('mobileMenuClose');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!menuBtn || !closeBtn || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('flex');
    document.body.style.overflow = 'hidden'; // prevent background scroll
  }

  function closeMenu() {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  // Close on nav link click and scroll to section
  mobileMenu.querySelectorAll('[data-mobile-nav]').forEach((item) => {
    item.addEventListener('click', () => {
      const target = item.getAttribute('data-mobile-nav');
      closeMenu();
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    });
  });
})();
