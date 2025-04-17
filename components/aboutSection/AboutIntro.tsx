'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import SectionHeading from '@/components/sectionHeading/SectionHeading';
import profileImage from '@/assets/images/avatar1.jpg';
import SocialMediaConnect from '@/components/socialMediaConnect/SocialMediaConnect';
import AnimatedSection from '@/components/animatedSection/AnimatedSection';
import {
  fadeInParent,
  fadeInBottomChildren,
  fadeInLeft,
} from '@/components/animatedSection/animationOption';
import { aboutInfo } from '@/constants/aboutInfo';

const AboutIntro = () => {
  return (
    <div className='flex flex-wrap justify-between pb-[5rem] xl:pb-[12rem]'>
      <AnimatedSection
        className='relative z-10 max-w-[25rem] lg:max-w-[35rem] w-full h-[37rem] lg:h-[47rem] max-md:mx-auto max-md:mb-[7rem] md:mr-[5rem]'
        animation={fadeInParent}
      >
        <motion.div
          variants={fadeInLeft}
          className='shadow-md w-full h-full relative'
        >
          <Image
            src={profileImage}
            alt='image description'
            fill
            sizes='100%'
            className='rounded-[0.4rem] object-cover'
            priority
          />
        </motion.div>
        <motion.div
          variants={fadeInBottomChildren}
          className='absolute right-[-3rem] lg:right-[-4rem] bottom-[-3rem] lg:bottom-[-4rem] w-full h-full -z-[1] rounded-br-[3rem] border-2 border-border'
        />
      </AnimatedSection>
      <AnimatedSection
        animation={fadeInParent}
        className='about-content md:flex-1 lg:max-w-[60%] pb-4 md:pl-8 xl:pl-0'
      >
        <SectionHeading heading='about me' />
        {aboutInfo.map((info, index) => (
          <motion.div
            className='mb-8 text-justify'
            variants={fadeInBottomChildren}
            key={index}
          >
            <p>{info}</p>
          </motion.div>
        ))}

        <SocialMediaConnect />
      </AnimatedSection>
    </div>
  );
};

export default AboutIntro;
