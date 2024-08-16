'use client';

import { motion } from 'framer-motion';

import { Skill } from '@/types/all';
import { fullWidthVariant } from '@/components/animatedSection/animationOption';

const SkillCard = ({ skills }: { skills: Skill[] }) => {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill.name} className='mb-10'>
          <div className='flex flex-wrap justify-between mb-4'>
            <span className='flex-1'>{skill.name}</span>
            <span className='w-[5rem] ml-4 text-right'>
              {skill.proficiency}%
            </span>
          </div>
          <span className='relative overflow-hidden w-full h-[0.2rem] bg-foreground/40 block'>
            <motion.span
              className={`absolute top-0 left-0 h-full bg-foreground`}
              // style={{ width: `${skill.proficiency}%` }}
              initial={{ width: '0%' }}
              animate={{ width: `${skill.proficiency}%` }}
              transition={{
                duration: 0.5,
                ease: [0.42, 0, 0.58, 1],
                // delay: 0.3,
              }}
            />
          </span>
        </li>
      ))}
    </ul>
  );
};

export default SkillCard;
