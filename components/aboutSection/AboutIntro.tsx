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
        <motion.div
          className='mb-8 text-justify'
          variants={fadeInBottomChildren}
        >
          <p>
            {`Hello! I'm Roshan, an aspiring Full-Stack Developer with
            a unique blend of technical skills and a creative background. My
            journey into technology began in 2015 when I transitioned from
            photography to developing interactive User Interfaces. After
            completing a two-month web design course, I started my career as a
            Frontend Developer at Rapid Web Solution in Nepal, a subsidiary of
            GetDevDone (formerly P2H). Over six years, I advanced from a trainee
            to a mid-level developer, where I contributed to major projects,
            collaborated as a team member, and mentored junior developers. This
            experience played a crucial role in my work as a Research Assistant
            at Tampere University.`}
          </p>
        </motion.div>
        <motion.div
          className='mb-8 text-justify'
          variants={fadeInBottomChildren}
        >
          <p>
            In June 2024, I graduated with an MSc Degree in Computing Sciences
            from Tampere University, Finland, specializing in Software, Web, and
            Cloud. I further honed my skills by completing the Full-Stack
            Development Program at Integrify, Finland in August 2024.
          </p>
        </motion.div>
        <SocialMediaConnect />
      </AnimatedSection>
    </div>
  );
};

export default AboutIntro;
