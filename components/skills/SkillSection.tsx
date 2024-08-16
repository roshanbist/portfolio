'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { skillsData } from '@/constants/skillsData';
import SkillCard from '@/components/skills/SkillCard';
import {
  fadeInParent,
  fadeInChildren,
  fadeInLeft,
  // fadeInVarientParent,
} from '@/components/animatedSection/animationOption';
import AnimatedSection from '@/components/animatedSection/AnimatedSection';

const SkillSection = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className='md:flex md:flex-wrap md:gap-[4rem]'>
      <motion.ul
        className='rounded-[1rem] bg-accent shadow-lg md:basis-[27rem] md:max-w-[27rem] py-4 md:self-start max-md:mb-12'
        variants={fadeInLeft}
      >
        {/* <AnimatedSection animation={fadeInParent}> */}
        {skillsData.map((skills, index) => (
          <li
            className='border-b border-foreground/10'
            key={skills.title}
            // variants={fadeInChildren}
          >
            <button
              className={`text-[1.8rem]/[1.22] font-robotoCondensed font-medium p-6 w-full relative overflow-hidden z-[1] transition-colors duration-500 focus:outline-none after:absolute after:top-0 after:bottom-0 after:left-0 hover:after:w-full hover:text-[#ecedf0] after:transition-all after:bg-primary after:z-[-1] after:duration-500 ${
                selectedTab === index
                  ? 'after:w-full text-[#ecedf0]'
                  : 'after:w-0'
              }`}
              onClick={() => setSelectedTab(index)}
            >
              {skills.title}
            </button>
          </li>
        ))}
        {/* </AnimatedSection> */}
      </motion.ul>
      <div className='flex-1'>
        <motion.div
          className='border border-border/30 max-md:px-8 p-12 flex flex-col flex-1 rounded-[1rem] bg-accent shadow-lg'
          variants={fadeInLeft}
        >
          {skillsData.map((sk, index) => (
            <div
              key={sk.title}
              className={`${selectedTab === index ? '' : 'hidden'}`}
            >
              {/* key={selectedTab} re-render/remount SkillCard component each time a new tab is selected, thus re-triggers the animation} */}
              <SkillCard key={selectedTab} skills={sk.skills} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillSection;
