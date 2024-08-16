'use client';

import AnimatedSection from '@/components/animatedSection/AnimatedSection';
import { fadeInVariant } from '@/components/animatedSection/animationOption';

const ContactParallax = () => {
  return (
    <AnimatedSection
      animation={fadeInVariant}
      className='md:w-[45vw] md:absolute md:right-0 md:top-0 md:bottom-0 parallax-gradient max-md:mb-[2rem] md:[clip-path:polygon(35%_0,_100%_0,_100%_100%,_0_100%)]'
    >
      <div className='bg-parallaxImage opacity-70 bg-fixed bg-cover bg-no-repeat max-md:min-h-[35rem] md:h-full' />
    </AnimatedSection>
  );
};

export default ContactParallax;
