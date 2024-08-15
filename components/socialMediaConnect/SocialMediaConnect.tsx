'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import { socialMediaData } from '@/constants/socialMediaData';
// import AnimatedSection from '@/components/animatedSection/AnimatedSection';
import { fadeInBottomChildren } from '@/components/animatedSection/animationOption';

const SocialMediaConnect = ({ textColor }: { textColor?: string }) => {
  return (
    <ul className='flex flex-wrap gap-6 leading-[1] mb-10'>
      {socialMediaData.map((contact) => (
        <motion.li key={contact.title} variants={fadeInBottomChildren}>
          <Link
            className={`${
              textColor && textColor
            } size-[4rem] border border-border text-[2rem]/[1] flex flex-wrap justify-center items-center rounded-full hover:bg-primary hover:text-[#ebecf0] hover:border-primary hover:translate-y-[-0.3rem] transition-all duration-[500]`}
            target='_blank'
            href={contact.link}
          >
            {<contact.icon />}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
};

export default SocialMediaConnect;
