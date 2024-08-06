import AboutIntro from '@/components/aboutSection/AboutIntro';
import Experience from '@/components/aboutSection/Experience';

const About = () => {
  return (
    <section
      id='about'
      className='bg-section-primary pt-[5rem] md:pt-[10rem] pb-[6rem] md:pb-[8rem] xl:pb-[10rem] relative'
    >
      <div className='max-container'>
        <AboutIntro />
        <Experience />
      </div>
    </section>
  );
};

export default About;
