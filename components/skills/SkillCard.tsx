'use client';

import { motion } from 'framer-motion';

import { Skill } from '@/types/types';
import AnimatedSection from '../animatedSection/AnimatedSection';
import {
  fadeInBottomChildren,
  fadeInParent,
} from '../animatedSection/animationOption';

const SkillCard = ({ skills }: { skills: Skill[] }) => {
  const fastFadeInBottomChildren = {
    hidden: {
      ...fadeInBottomChildren.hidden,
      y: 15, // smoother entrance
    },
    visible: {
      ...fadeInBottomChildren.visible,
      transition: {
        ...fadeInBottomChildren.visible.transition,
        duration: 0.3, // faster transition
      },
    },
  };

  const fastfadeInParent = {
    ...fadeInParent.hidden,
    visible: {
      ...fadeInParent.visible,
      transition: {
        ...fadeInParent.visible.transition,
        duration: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <AnimatedSection
      animation={fastfadeInParent}
      className='flex flex-wrap gap-8 justify-center'
    >
      {skills.map((skill) => (
        <motion.div
          variants={fastFadeInBottomChildren}
          key={skill.label}
          className='flex flex-col items-center lg:w-[12%] mb-6 text-center'
        >
          <div className='rounded-[0.5rem] size-[6.5rem] bg-background p-4 flex justify-center items-center mb-6'>
            {<skill.icon className='text-2xl' />}
          </div>
          <div className='text-[1.2rem]/[1.16] font-bold uppercase'>
            {skill.label}
          </div>
        </motion.div>
      ))}
    </AnimatedSection>
  );
};

export default SkillCard;
