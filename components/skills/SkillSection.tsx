'use client';

import { useEffect, useRef, useState } from 'react';

import { skillsData } from '@/constants/skillsData';
import SkillCard from '@/components/skills/SkillCard';

const SkillSection = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    btnRef.current?.focus();
  }, []);

  return (
    <div className='md:flex md:flex-wrap md:gap-[4rem]'>
      <ul className='rounded-[1rem] bg-accent shadow-lg md:basis-[27rem] md:max-w-[27rem] py-4 md:self-start max-md:mb-12'>
        {skillsData.map((skills, index) => (
          <li className='border-b border-foreground/10' key={skills.title}>
            <button
              className={`text-xl font-robotoCondensed font-medium p-6 w-full relative overflow-hidden z-[1] transition-colors duration-500 focus:outline-none after:absolute after:top-0 after:bottom-0 after:left-0 hover:after:w-full hover:text-[#ecedf0] after:transition-all after:bg-primary after:z-[-1] after:duration-500 ${
                selectedTab === index
                  ? 'after:w-full text-[#ecedf0]'
                  : 'after:w-0'
              }`}
              ref={index === 0 ? btnRef : null}
              onClick={() => setSelectedTab(index)}
            >
              {skills.title}
            </button>
          </li>
        ))}
      </ul>
      <div className='flex-1'>
        <div className='border border-border/30 max-md:px-8 p-12 flex flex-col flex-1 rounded-[1rem] bg-accent shadow-lg'>
          {skillsData.map((sk, index) => (
            <div
              key={sk.title}
              className={`${selectedTab === index ? '' : 'hidden'}`}
            >
              <SkillCard skills={sk.skills} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
