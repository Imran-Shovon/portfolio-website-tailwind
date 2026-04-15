export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-gray-300 mt-20 pt-16 pb-6">
      <div className="max-w-[1170px] mx-auto px-4 md:px-0 grid md:grid-cols-3 gap-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src="/images/logo-footer.png" alt="Footer Logo" />

          <p className="text-sm text-white max-w-xs mt-6 md:mt-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>
        </div>

        <div className="md:justify-self-end text-center md:text-left">
          <h4 className="text-white font-semibold mb-4 text-lg md:text-base">Explore</h4>

          <ul className="space-y-4 md:space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Work</li>

            <li className="hover:text-white cursor-pointer">Resume</li>

            <li className="hover:text-white cursor-pointer">Contact Me</li>
          </ul>
        </div>

        <div className="md:justify-self-end text-center md:text-left flex flex-col items-center md:items-start">
          <h4 className="text-white font-semibold mb-4 hidden md:block">Connect</h4>

          <div className="flex flex-row md:flex-col justify-center items-center gap-8 md:gap-4 text-xl">
            <a
              href="https://www.linkedin.com/in/nadia-nisa-63998a266/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-block"
            >
              <img src="/images/linedin-footer.png" className="w-7 md:w-5" alt="LinkedIn" />
            </a>
            <a href="mailto:nadisa9898@gmail.com" className="cursor-pointer inline-block">
              <img src="/images/email-footer.png" className="w-8 md:w-5" alt="Email" />
            </a>
            <a
              href="https://www.behance.net/nadianisa5"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-block"
            >
              <img src="/images/Be.png" className="w-7 md:w-5" alt="Behance" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-12 pt-6 mx-6 md:mx-12 lg:mx-20 text-center text-xs text-gray-400">
        © Copyright 2026. Nadia Nisa. All rights reserved.
      </div>
    </footer>
  );
}
