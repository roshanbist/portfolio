import ContactForm from '@/components/contactSection/ContactForm';
import ContactParallax from '@/components/contactSection/ContactParallax';
import SectionHeading from '@/components/sectionHeading/SectionHeading';
import React from 'react';

const Contact = () => {
  return (
    <section
      className='md:pt-[5rem] pb-[8rem] bg-section-secondary relative z-[2] overflow-hidden'
      id='contact'
    >
      <ContactParallax />
      <div className='max-container pt-[3rem]'>
        <div className='md:max-w-[50%]'>
          <SectionHeading heading='Contact Me' />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
