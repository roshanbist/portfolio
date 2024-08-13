'use client';

import { easeInOut, motion } from 'framer-motion';

import AnimatedAvatar from '@/components/banner/AnimatedAvatar';
import TypewriteText from '@/components/banner/TypewriteText';

const bannerParentVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      // delayChildren: 0.2,
      // staggerChildren: 0.15,
      // ease: easeInOut,
      duration: 0.5,
      ease: easeInOut,
    },
  },
};

// const bannerChildVariant = {
//   hidden: { opacity: 0, y: -20 },
//   visible: { opacity: 1, y: 0 },
// };

const Banner = () => {
  return (
    <div className='max-md:text-center md:flex md:flex-wrap md:justify-between md:items-center'>
      <AnimatedAvatar />
      <motion.div
        className='md:flex-1 md:pr-4 md:order-1'
        variants={bannerParentVariant}
        initial='hidden'
        animate='visible'
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
      </motion.div>
    </div>
  );
};

export default Banner;
