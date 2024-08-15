import Image from 'next/image';
import { motion } from 'framer-motion';

import SectionHeading from '@/components/sectionHeading/SectionHeading';
import profileImage from '@/assets/images/avatar1.jpg';
import SocialMediaConnect from '@/components/socialMediaConnect/SocialMediaConnect';

const profileImageVariant = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

const AboutIntro = () => {
  return (
    <div className='flex flex-wrap justify-between pb-[5rem] xl:pb-[10rem]'>
      <div className='relative z-10 shadow-md max-w-[25rem] lg:max-w-[35rem] w-full h-[37rem] lg:h-[47rem] max-md:mx-auto max-md:mb-[7rem] md:mr-[5rem]'>
        <span className='absolute border-2 border-border right-[-3rem] lg:right-[-4rem] bottom:-[-3rem] lg:bottom-[-4rem] w-full h-full -z-[1] rounded-br-[3rem]' />
        <Image
          src={profileImage}
          alt='image description'
          fill
          sizes='100%'
          className='rounded-[0.4rem] object-cover'
        />
      </div>
      <div className='about-content md:flex-1 lg:max-w-[60%] pb-4 md:pl-8 xl:pl-0'>
        <SectionHeading heading='about me' />
        <p className='mb-8 text-justify'>
          <b>Hello!</b> I&apos;m Roshan, an aspiring Full-Stack Developer with a
          background in photography. I recently graduated with an MSc degree in
          Computing Sciences, specializing in Software, Web & Cloud, in June
          2024 from Tampere University, Finland. My journey into the world of
          coding began in 2015, when I transitioned from capturing moments with
          a camera to developing interactive UI with code. After completing a
          two-month web design course in 2015, I embarked on my professional
          journey as a Frontend Developer at Rapid Web Solution in Nepal, a
          sister company of GetDevDone (formerly P2H). Starting as a trainee, I
          honed my skills and climbed the ranks to a mid-level position over six
          years. During my tenure, I handled major projects and mentored junior
          developers, gaining invaluable experience.
        </p>
        <p className='mb-8 text-justify'>
          Currently based in Tampere, Finland, with my recent academic
          accomplishments and extensive professional background, I am ready to
          embark on the next chapter of my career as a software developer. I am
          excited to bring my expertise in both frontend and backend development
          to new projects. Let&apos;s create something amazing together!
        </p>
        <SocialMediaConnect />
        {/* <button className='primary-button btn'>
          <span className='relative z-10'>download cv</span>
        </button> */}
      </div>
    </div>
  );
};

export default AboutIntro;
