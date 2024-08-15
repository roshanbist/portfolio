'use client';

// import { motion } from 'framer-motion';

import AnimatedAvatar from '@/components/banner/AnimatedAvatar';
import TypewriteText from '@/components/banner/TypewriteText';
import AnimatedSection from '@/components/animatedSection/AnimatedSection';
import { bannerParentVariant } from '@/components/animatedSection/animationOption';

const Banner = () => {
  return (
    <div className='max-md:text-center md:flex md:flex-wrap md:justify-between md:items-center'>
      <AnimatedAvatar />
      <AnimatedSection
        className='md:flex-1 md:pr-4 md:order-1'
        animation={bannerParentVariant}
      >
        <span className='inline-flex py-[0.6rem] px-4 mb-10 rounded-[0.3rem] tracking-[0.2rem] uppercase font-medium bg-primary text-primary-foreground font-robotoCondensed'>
          Roshan Bist
        </span>
        <h1 className='uppercase font-bold text-[3.8rem]/[1.11] md:text-[5.4rem] lg:text-[6.2rem] mb-6 font-robotoCondensed'>
          {` Hi, I\'m Roshan`}
        </h1>
        <TypewriteText />
        <button className='primary-button btn'>
          <span className='relative z-10'>Download CV</span>
        </button>
      </AnimatedSection>
    </div>
  );
};

export default Banner;
