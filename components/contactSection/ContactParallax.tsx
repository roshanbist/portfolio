'use client';

import Image from 'next/image';

import AnimatedSection from '@/components/animatedSection/AnimatedSection';
import { fadeInRight } from '@/components/animatedSection/animationOption';
import contact from '@/assets/images/contact.svg';

const ContactParallax = () => {
  return (
    <AnimatedSection
      animation={fadeInRight}
      className='hidden md:flex flex-wrap justify-center items-center md:w-[45vw] md:absolute md:right-0 md:top-0 md:bottom-0 parallax-gradient md:[clip-path:polygon(35%_0,_100%_0,_100%_100%,_0_100%)]'
    >
      <div className='w-[50rem] h-[50rem] mx-auto relative opacity-85 -mt-[2rem]'>
        <Image
          src={contact}
          alt='image'
          className='object-cover w-full h-full'
          priority
        />
      </div>
    </AnimatedSection>
  );
};

export default ContactParallax;
