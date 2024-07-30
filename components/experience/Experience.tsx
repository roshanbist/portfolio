import React from 'react';
import SectionHeading from '../sectionHeading/SectionHeading';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { educationData } from '@/constants/educationalData';
import { experienceData } from '@/constants/experienceData';

const Experience = () => {
  return (
    <div className='bg-section-secondary relative p-[2.5rem] md:p-[3.5rem] lg:p-[5rem] sm:grid sm:grid-cols-2 sm:gap-10 rounded-[1rem] md:rounded-[2rem] mb-[5rem]'>
      <div className='md:pr-1rem max-md:pb-[3rem]'>
        <SectionHeading heading='Education' />
        <div className='relative'>
          {educationData.map((data) => (
            <div
              className='pl-[3rem] lg:pl-[5rem] relative mb-10 md:mb-12'
              key={data.degree}
            >
              <span className='absolute bg-section-secondary top-0 left-[-1.2rem] z-[1] text-[2.4rem] py-[1rem]'>
                <FaGraduationCap />
              </span>
              <div className='pt-4'>
                <span className='block font-robotoCondensed font-medium mb-4 text-[#ada5a6]'>
                  {data.startDate} - {data.endDate}
                </span>
                <div className='font-bold capitalize mb-4 md:text-[1.8rem]/[1.22]'>
                  {data.degree}
                </div>
                <div className='mb-2'>{data.instituition}</div>
                <div className='text-[#ada5a6] italic'>{data.address}</div>
              </div>
            </div>
          ))}
          <span className='absolute left-0 top-0 w-[0.1rem] bottom-[0] bg-primary' />
        </div>
      </div>
      <div>
        <SectionHeading heading='Experience' />
        <div className='relative'>
          {experienceData.map((data) => (
            <div
              className='pl-[3rem] lg:pl-[5rem] relative mb-10 md:mb-12'
              key={data.company}
            >
              <span className='absolute bg-section-secondary top-0 left-[-1.2rem] z-[1] text-[2.4rem] py-[1rem]'>
                <FaBriefcase />
              </span>
              <div className='pt-4'>
                <span className='block font-robotoCondensed font-medium mb-4 text-[#ada5a6]'>
                  {data.startDate} - {data.endDate}
                </span>
                <div className='font-bold capitalize mb-4 md:text-[1.8rem]/[1.22]'>
                  {data.jobPosition}
                </div>
                <div className='capitalize mb-4 '>{data.company}</div>
                <div className='italic'>{data.address}</div>
              </div>
            </div>
          ))}
          <span className='absolute left-0 top-0 w-[0.1rem] bottom-[0] bg-primary' />
        </div>
      </div>
    </div>
  );
};

export default Experience;
