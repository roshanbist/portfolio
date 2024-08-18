'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import AnimatedAvatar from '@/components/banner/AnimatedAvatar';
import TypewriteText from '@/components/banner/TypewriteText';
import AnimatedSection from '@/components/animatedSection/AnimatedSection';
import {
  fadeInBottomChildren,
  fadeInParent,
} from '@/components/animatedSection/animationOption';

const Banner = () => {
  const cvURL = process.env.NEXT_PUBLIC_RESUME_LINK;

  return (
    <div className='max-md:text-center md:flex md:flex-wrap md:justify-between md:items-center'>
      <AnimatedAvatar />
      <AnimatedSection
        className='md:flex-1 md:pr-4 md:order-1'
        animation={fadeInParent}
      >
        <motion.span
          className='inline-flex py-[0.6rem] px-4 mb-10 rounded-[0.3rem] tracking-[0.2rem] uppercase font-medium bg-primary text-primary-foreground font-robotoCondensed'
          variants={fadeInBottomChildren}
        >
          Roshan Bist
        </motion.span>
        <motion.h1
          className='uppercase font-bold text-[3.8rem]/[1.11] md:text-[5.4rem] lg:text-[6.2rem] mb-6 font-robotoCondensed'
          variants={fadeInBottomChildren}
        >
          {` Hi, I\'m Roshan`}
        </motion.h1>
        <TypewriteText />
        <motion.div variants={fadeInBottomChildren}>
          <Link
            href={`${cvURL}`}
            className='primary-button btn'
            target='_blank'
          >
            <span className='relative z-10'>Download CV</span>
          </Link>
        </motion.div>
      </AnimatedSection>
    </div>
  );
};

export default Banner;
