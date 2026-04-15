export default function Hero() {
  return (
    <section id="home" className="grid md:grid-cols-2 items-center gap-12 mt-15">
      <div>
        <p className="text-lg mb-2">Hello,</p>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-last-shuriken">
          I'm Nadia Nisa
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold mb-4 font-sofia">
          A Professional UI/UX Designer
        </h2>

        <p className="text-gray-700 max-w-md mb-8">
          shaping digital products with user-friendly interfaces and impactful
          experiences.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-full cursor-pointer hover:bg-gray-800 transition-colors">
            View My Work
          </button>

          <button className="border border-black px-6 py-3 rounded-full hover:bg-gray-50 transition-colors">
            Download Resume
          </button>
        </div>
      </div>

      <div className="hidden md:flex justify-center md:justify-self-end">
        <img
          src="/images/heroImage.png"
          className="max-h-[420px] object-contain"
          alt="Hero"
        />
      </div>
    </section>
  );
}
