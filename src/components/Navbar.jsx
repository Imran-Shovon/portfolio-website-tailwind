import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, mobileMenuOpen ? 200 : 0);
    }
  };

  const handleMyWorkClick = () => {
    setMobileMenuOpen(false);
    navigate('/my-work');
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-40 bg-[#E3E3CE] md:bg-[#FAFAF4]/50 rounded-none md:rounded-full px-6 md:px-17.5 py-4 flex justify-between items-center -mx-4 md:mx-0 transition-all duration-300">
        <img src="/images/logo1.png" alt="Logo" className="h-10 cursor-pointer" onClick={() => handleNavClick('home')} />

        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-10 text-sm">
          <li
            onClick={() => handleNavClick('home')}
            className="cursor-pointer text-[#242424] font-semibold hover:text-gray-500"
          >
            Home
          </li>
          <li
            onClick={handleMyWorkClick}
            className="cursor-pointer text-[#242424] font-semibold hover:text-gray-500"
          >
            My Work
          </li>
          <li
            onClick={() => handleNavClick('contact')}
            className="cursor-pointer text-[#242424] font-semibold hover:text-gray-500"
          >
            Contact Me
          </li>
        </ul>

        {/* Desktop icons */}
        <div className="hidden md:flex gap-4 items-center">
          <img src="/images/Svg/cv.svg" className="w-5" alt="CV" />
          <img src="/images/Svg/Linkdin.svg" className="w-5" alt="LinkedIn" />
        </div>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 cursor-pointer"
          aria-label="Open menu"
        >
          <span className="block w-6 h-0.5 bg-[#242424] rounded"></span>
          <span className="block w-6 h-0.5 bg-[#242424] rounded"></span>
          <span className="block w-6 h-0.5 bg-[#242424] rounded"></span>
        </button>
      </nav>

      {/* ================= MOBILE MENU OVERLAY ================= */}
      <div
        className={`fixed inset-0 z-50 bg-[#E3E3CE] flex-col ${
          mobileMenuOpen ? 'flex' : 'hidden'
        }`}
      >
        {/* Top bar */}
        <div className="flex justify-between items-center px-6 pt-10 pb-6">
          <img src="/images/logo1.png" alt="Logo" className="h-10" />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="cursor-pointer"
            aria-label="Close menu"
            style={{
              fontSize: '28px',
              lineHeight: '1',
              color: '#242424',
              background: 'none',
              border: 'none',
              padding: '0',
            }}
          >
            &#x2715;
          </button>
        </div>

        {/* Nav links */}
        <ul className="flex flex-col items-center gap-8 mt-10 text-lg font-semibold text-[#242424]">
          <li className="cursor-pointer" onClick={() => handleNavClick('home')}>
            Home
          </li>
          <li className="cursor-pointer" onClick={handleMyWorkClick}>
            My Work
          </li>
          <li className="cursor-pointer" onClick={() => handleNavClick('contact')}>
            Contact Me
          </li>
        </ul>

        {/* Social icons */}
        <div className="flex flex-col items-center gap-5 mt-12">
          <img src="/images/Svg/cv.svg" className="w-7 cursor-pointer" alt="CV" />
          <img src="/images/Svg/Linkdin.svg" className="w-7 cursor-pointer" alt="LinkedIn" />
        </div>
      </div>
    </>
  );
}
