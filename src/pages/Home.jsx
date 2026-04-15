import Hero from '../components/Hero';
import SkillBar from '../components/SkillBar';
import MyWork from '../components/MyWork';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Testimonial from '../components/Testimonial';

export default function Home() {
  return (
    <>
      <div className="max-w-[1170px] mx-auto px-4 md:px-0">
        <Hero />
      </div>
      
      <SkillBar />
      <MyWork />
      <Banner />
      <Contact />
      <Testimonial />
    </>
  );
}
