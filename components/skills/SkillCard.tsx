import { Skillset } from '@/types/all';
import React from 'react';

const SkillCard = ({ skillItems }: { skillItems: Skillset[] }) => {
  return (
    <div>
      <ul className='border border-border/30 p-8 bg-accent shadow-lg'>
        {skillItems.map((skills) => (
          <li key={skills.title}>
            <h3 className='text-xl font-robotoCondensed font-medium border-b border-foreground/70 pb-8 mb-8'>
              {skills.title}
            </h3>
          </li>
        ))}
      </ul>
    </div>
    // <div className='basis-[100%] max-w-[100%] px-[1.5rem] pb-[3rem] flex'>
    //   <div className='border border-border/30 p-8 flex flex-col flex-1 rounded-[1rem] bg-accent shadow-lg'>
    //     <h3 className='text-xl font-robotoCondensed font-medium border-b border-foreground/70 pb-8 mb-8'>
    //       {skillItem.title}
    //     </h3>
    //     <ul>
    //       {skillItem.skills.map((skill) => (
    //         <li key={skill.name} className='mb-10'>
    //           <div className='flex flex-wrap justify-between mb-4 font-bold'>
    //             <span className='flex-1'>{skill.name}</span>
    //             <span className='w-[5rem] ml-4 text-right'>
    //               {skill.proficiency}%
    //             </span>
    //           </div>
    //           <span className='relative overflow-hidden rounded-full w-full h-[1rem] bg-foreground/40 block'>
    //             <span
    //               className={`absolute top-0 left-0 h-full bg-foreground`}
    //               style={{ width: `${skill.proficiency}%` }}
    //             />
    //           </span>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
  );
};

export default SkillCard;
