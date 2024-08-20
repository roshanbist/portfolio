'use client';

import AnimatedSection from '@/components/animatedSection/AnimatedSection';
import { fadeInParent } from '@/components/animatedSection/animationOption';
import ContactForm from '@/components/contactSection/ContactForm';
import ContactParallax from '@/components/contactSection/ContactParallax';
import SectionHeading from '@/components/sectionHeading/SectionHeading';

const Contact = () => {
  return (
    <section
      className='pt-[5rem] pb-[8rem] bg-section2 relative z-[2] overflow-hidden'
      id='contact'
    >
      <ContactParallax />
      <AnimatedSection
        className='max-container pt-[3rem]'
        animation={fadeInParent}
      >
        <div className='md:max-w-[50%]'>
          <SectionHeading heading='Contact Me' />
          <ContactForm />
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Contact;
