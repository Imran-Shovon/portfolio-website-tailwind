import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillBar from './components/SkillBar';
import MyWork from './components/MyWork';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="max-w-[1170px] mx-auto px-4 md:px-0 md:pt-15">
        <Navbar />
        <Hero />
      </div>

      <SkillBar />
      <MyWork />
      <Banner />
      <Contact />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
