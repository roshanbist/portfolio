import ProjectsSection from '@/components/projectSection/ProjectsSection';
import SectionHeading from '@/components/sectionHeading/SectionHeading';

const Projects = () => {
  return (
    <section
      className='py-[10rem] relative after:absolute after:w-0 after:h-0 after:right-0 after:top-0 after:border-b-[12rem] after:border-b-transparent after:border-r-[100vw] after:border-r-section-secondary'
      id='projects'
    >
      <div className='max-container'>
        <SectionHeading heading='Projects' />
        <ProjectsSection />
      </div>
    </section>
  );
};

export default Projects;
