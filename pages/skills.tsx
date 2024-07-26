import SectionHeading from '@/components/sectionHeading/SectionHeading';
import { skillsList } from '@/constants/skillsList';
import SkillCard from '@/components/skills/SkillCard';

const Skills = () => {
  return (
    <section
      id='skills'
      className='pt-[10rem] pb-[6rem] relative bg-section-secondary after:absolute after:w-0 after:h-0 after:right-0 after:top-[-10rem] after:border-t-[10rem] after:border-t-transparent after:border-r-[100vw] after:border-r-section-secondary'
    >
      <div className='max-container'>
        <SectionHeading heading='Skills' />
        {/* <div className='flex flex-wrap pt-[4rem]'>
          {skillsList.map((skills, index) => ( */}
        <SkillCard skillItems={skillsList} />
        {/* ))} */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Skills;
