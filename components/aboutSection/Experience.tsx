'use client';

import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';

import SectionHeading from '@/components/sectionHeading/SectionHeading';
import { educationData } from '@/constants/educationalData';
import { experienceData } from '@/constants/experienceData';
import {
  fadeInBottomChildren,
  fadeInParent,
  slideFullHeight,
  zoomInParent,
  zoomInTop,
} from '@/components/animatedSection/animationOption';
import AnimatedSection from '@/components/animatedSection/AnimatedSection';

const Experience = () => {
  return (
    <AnimatedSection animation={zoomInParent}>
      <div className='bg-section2 relative p-[2.5rem] md:p-[3.5rem] lg:p-[5rem] sm:grid sm:grid-cols-2 sm:gap-10 rounded-[1rem] md:rounded-[2rem] mb-[5rem]'>
        <AnimatedSection animation={fadeInParent}>
          <div className='md:pr-1rem max-md:pb-[3rem]'>
            <SectionHeading heading='Education' />
            {educationData.map((data) => (
              <motion.div
                className='relative pl-[3rem] lg:pl-[5rem] pb-4 mb-6 md:mb-8'
                key={data.degree}
                variants={fadeInBottomChildren}
              >
                <motion.span
                  className='absolute bg-section2 top-0 left-[-1.2rem] z-[1] text-[2.4rem] pb-[0.5rem]'
                  variants={zoomInTop}
                >
                  <FaGraduationCap />
                </motion.span>
                <motion.hr
                  variants={slideFullHeight}
                  className='absolute left-0 top-0 w-[0.1rem] bg-primary'
                />
                <div>
                  <span className='block font-robotoCondensed font-medium mb-4 text-[#ada5a6]'>
                    {data.startDate} - {data.endDate}
                  </span>
                  <span className='block font-bold capitalize mb-4 md:text-[1.8rem]/[1.22]'>
                    {data.degree}
                  </span>
                  <span className='block mb-2'>{data.instituition}</span>
                  <span className='block text-[#ada5a6] italic'>
                    {data.address}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
        <AnimatedSection animation={fadeInParent}>
          <div className='md:ml-[3.5rem]'>
            <SectionHeading heading='Experience' />
            {experienceData.map((data) => (
              <motion.div
                className='pl-[3rem] lg:pl-[5rem] relative pb-4 mb-6 md:mb-8'
                key={data.company}
                variants={fadeInBottomChildren}
              >
                <motion.span
                  className='absolute bg-section2 top-0 left-[-1.2rem] z-[1] text-[2.4rem] pb-[0.5rem]'
                  variants={zoomInTop}
                >
                  <FaBriefcase />
                </motion.span>
                <motion.hr
                  variants={slideFullHeight}
                  className='absolute left-0 top-0 w-[0.1rem] bg-primary'
                />
                <div>
                  <span className='block font-robotoCondensed font-medium mb-4 text-[#ada5a6]'>
                    {data.startDate} - {data.endDate}
                  </span>
                  <div className='font-bold capitalize mb-4 md:text-[1.8rem]/[1.22]'>
                    {data.jobPosition}
                  </div>
                  <div className='capitalize mb-4 '>{data.company}</div>
                  <div className='italic'>{data.address}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
};

export default Experience;
