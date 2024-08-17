'use client';

import { motion } from 'framer-motion';

import Logo from '@/components/logo/Logo';
import ScrollToTop from '@/components/scrollToTop/scrollToTop';
import SocialMediaConnect from '@/components/socialMediaConnect/SocialMediaConnect';
import {
  fadeInBottomChildren,
  fadeInParent,
  slideFullWidth,
  zoomInTop,
} from '@/components/animatedSection/animationOption';
import AnimatedSection from '@/components/animatedSection/AnimatedSection';

const Footer = () => {
  return (
    <footer className='pt-[5rem] md:pt-[8rem] pb-[5rem] bg-[#101214]'>
      <ScrollToTop />
      <div className='max-container'>
        <AnimatedSection animation={fadeInParent}>
          <motion.div variants={zoomInTop}>
            <Logo
              width='w-[10rem]'
              height='h-[10rem]'
              textSize='text-[3.5rem]'
              classname='mx-auto'
            />
          </motion.div>
          <div className='flex flex-wrap justify-center mt-[3rem] '>
            <SocialMediaConnect textColor='text-[#ebecf0]' />
          </div>
          <div className='text-center mt-[2rem]'>
            <motion.hr
              variants={slideFullWidth}
              className='border-border/30 mb-[4rem] '
            />
            <motion.p variants={fadeInBottomChildren}>
              <span className='text-[#ebecf0]/60'>Copyrights © 2024 </span>
              <span className='text-primary font-bold capitalize'>
                Roshan Bist
              </span>
            </motion.p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer;
