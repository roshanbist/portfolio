import SectionHeading from '@/components/sectionHeading/SectionHeading';
import SkillSection from '@/components/skills/SkillSection';

const Skills = () => {
  return (
    <section
      id='skills'
      className='pt-[5rem] md:pt-[8rem] pb-[6rem] relative bg-section-secondary after:absolute after:w-0 after:h-0 after:right-0 after:top-[-10rem] after:border-t-[10rem] after:border-t-transparent after:border-r-[100vw] after:border-r-section-secondary'
    >
      <div className='max-container'>
        <SectionHeading heading='Skills' />
        <SkillSection />
      </div>
    </section>
  );
};

export default Skills;
