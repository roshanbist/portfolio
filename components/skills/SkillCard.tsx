import { Skill } from '@/types/all';
import React from 'react';

const SkillCard = ({ skills }: { skills: Skill[] }) => {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill.name} className='mb-10'>
          <div className='flex flex-wrap justify-between mb-4 font-bold'>
            <span className='flex-1'>{skill.name}</span>
            <span className='w-[5rem] ml-4 text-right'>
              {skill.proficiency}%
            </span>
          </div>
          <span className='relative overflow-hidden rounded-full w-full h-[1rem] bg-foreground/40 block'>
            <span
              className={`absolute top-0 left-0 h-full bg-foreground`}
              style={{ width: `${skill.proficiency}%` }}
            />
          </span>
        </li>
      ))}
    </ul>
  );
};

export default SkillCard;
