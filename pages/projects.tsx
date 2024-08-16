'use client';

import AnimatedSection from '@/components/animatedSection/AnimatedSection';
import { fadeInParent } from '@/components/animatedSection/animationOption';
import ProjectsSection from '@/components/projectSection/ProjectsSection';
import SectionHeading from '@/components/sectionHeading/SectionHeading';

const Projects = () => {
  return (
    <section
      className='max-md:pt-[10rem] pb-[5rem] sm:pb-[8rem] md:py-[10rem] relative after:absolute after:w-0 after:h-0 after:right-0 after:top-0 after:border-b-[12rem] after:border-b-transparent after:border-r-[100vw] after:border-r-section-secondary'
      id='projects'
    >
      <AnimatedSection className='max-container' animation={fadeInParent}>
        {/* <div className='max-container'> */}
        <SectionHeading heading='Projects' />
        <ProjectsSection />
        {/* </div> */}
      </AnimatedSection>
    </section>
  );
};

export default Projects;
