import SectionHeading from '@/components/sectionHeading/SectionHeading';
import React from 'react';

const Skills = () => {
  return (
    <section
      id='skills'
      className='pt-[10rem] pb-[5rem] relative bg-section-secondary after:absolute after:w-0 after:h-0 after:right-0 after:top-[-10rem] after:border-t-[10rem] after:border-t-transparent after:border-r-[100vw] after:border-r-section-secondary'
    >
      <div className='max-container'>
        <SectionHeading heading='Skills' />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
          perferendis commodi eius officiis, quis quidem praesentium
          reprehenderit at optio, dicta unde omnis, fugit expedita suscipit
          consequatur qui illo animi impedit?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
          perferendis commodi eius officiis, quis quidem praesentium
          reprehenderit at optio, dicta unde omnis, fugit expedita suscipit
          consequatur qui illo animi impedit?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
          perferendis commodi eius officiis, quis quidem praesentium
          reprehenderit at optio, dicta unde omnis, fugit expedita suscipit
          consequatur qui illo animi impedit?
        </p>
      </div>
    </section>
  );
};

export default Skills;
