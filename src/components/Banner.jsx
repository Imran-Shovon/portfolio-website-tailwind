export default function Banner() {
  return (
    <section className="max-w-[1170px] mx-auto px-4 md:px-0 mt-37">
      <div className="banner">
        {/* Right content */}
        <div className="max-w-md z-10 ml-auto text-left">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-8 block font-sans">
            Build designs that are visually clean and practically effective.
          </h2>

          <button className="bg-black text-white hover:bg-gray-900 px-8 py-3 rounded-full font-semibold transition duration-300">
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
}
