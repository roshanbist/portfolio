import Image from 'next/image';

import SectionHeading from '@/components/sectionHeading/SectionHeading';
import profileImage from '../assets/images/avatar1.jpg';

const About = () => {
  return (
    <section
      id='about'
      className='bg-section-primary pt-[10rem] pb-[5rem] relative'
    >
      {/* <div className='absolute left-0 top-0 w-full hidden md:block [clip-path:polygon(0_80%,_100%_0%,_100%_100%,_0%_100%)] h-[20rem] bg-section-primary' /> */}
      <div className='max-container'>
        <div className='flex flex-wrap justify-between'>
          <div className='relative z-10 shadow-md after:absolute after:border-2 after:border-border after:right-[-4rem] after:bottom-[-4rem] after:w-full after:h-full after:z-[-1] after:rounded-br-[3rem] max-w-[35rem] w-full h-[47rem]'>
            <Image
              src={profileImage}
              alt='image description'
              className='w-full h-full rounded-[0.4rem] object-cover absolute left-0 top-0'
            />
          </div>

          <div className='about-content flex-1 max-w-[60%] pt-[4rem]'>
            <SectionHeading heading='about me' />
            <p className='mb-8'>
              {`For instance, whenever I go back to the guest house during the
              morning to copy out the contract, these gentlemen are always still
              sitting there eating their breakfasts. I ought to just try that
              with my boss; I'd get kicked out on the spot.`}
            </p>
            <p className='mb-8'>
              {`But who knows, maybe that would be the best thing for me. He'd
              fall right off his desk! And it's a funny sort of business to be
              sitting up there at your desk, talking down at your subordinates.
              I ought to just try that witht my boss; I'd get kicked out on the
              spot. But who knows, maybe that would be the best thing for me.
              He'd fall right off his desk! And it's a funny sort of business to
              be sitting up there at your desk, talking down at your
              subordinates.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
