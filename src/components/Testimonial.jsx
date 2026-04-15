import { useState, useEffect } from 'react';

export default function Testimonial() {
  const [centerIndex, setCenterIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
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

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused, testimonials.length]);

  const handleCardClick = () => {
    window.open(
      'https://www.linkedin.com/in/nadia-nisa-63998a266/details/recommendations/?detailScreenTabIndex=0',
      '_blank'
    );
  };

  const getVisibleCards = () => {
    if (isMobile) {
      return [{ ...testimonials[centerIndex], position: 'center', idx: centerIndex }];
    }
    const total = testimonials.length;
    const leftIndex = (centerIndex - 1 + total) % total;
    const rightIndex = (centerIndex + 1) % total;
    
    return [
      { ...testimonials[leftIndex], position: 'left', idx: leftIndex },
      { ...testimonials[centerIndex], position: 'center', idx: centerIndex },
      { ...testimonials[rightIndex], position: 'right', idx: rightIndex },
    ];
  };

  return (
    <section className="max-w-[1170px] mx-auto px-4 md:px-0 mt-12 md:mt-37">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-widest">
          TESTIMONIAL
        </h2>
        <a
          href="https://www.linkedin.com/in/nadia-nisa-63998a266/details/recommendations/?detailScreenTabIndex=0"
          className="text-sm font-semibold underline"
        >
          View All
        </a>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex gap-6 items-center justify-center min-h-[250px]">
          {getVisibleCards().map((item) => {
            const isCenter = item.position === 'center';
            const mobile = isMobile;

            const widthClass = mobile ? 'w-full max-w-md' : 'w-[calc(33.333%-1rem)]';
            const styleClass = (!mobile && isCenter)
              ? 'scale-[1.07] shadow-2xl ring-2 ring-blue-200 z-10'
              : (!mobile ? 'scale-100 opacity-80' : '');

            return (
              <div
                key={item.idx + '-' + item.position}
                role="button"
                tabIndex="0"
                aria-label="Open LinkedIn recommendations"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onClick={handleCardClick}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick();
                  }
                }}
                className={`bg-white rounded-xl shadow-md p-6 cursor-pointer flex-shrink-0 transition-all duration-500 ease-in-out ${widthClass} ${styleClass}`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-blue-600 font-semibold">Linked</span>
                  <span className="bg-blue-600 text-white text-xs px-1 rounded">in</span>
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  {item.text}
                  <span className="text-blue-600 cursor-pointer"> See more</span>
                </p>
                <div className="flex items-center gap-4">
                  <img src={item.img} className="w-10 h-10 rounded-full" alt={item.name} />
                  <div>
                    <h4 className="font-semibold text-sm">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-10">
        {testimonials.map((_, idx) => {
          const active = idx === centerIndex;
          return (
            <button
              key={idx}
              type="button"
              className={`h-2 rounded transition-colors duration-300 ${
                active ? 'w-10 bg-gray-700' : 'w-4 bg-gray-400'
              }`}
              onClick={() => setCenterIndex(idx)}
              aria-label={`Testimonial ${idx + 1}`}
            ></button>
          );
        })}
      </div>
    </section>
  );
}
