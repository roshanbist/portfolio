import Image from 'next/image';

import SectionHeading from '@/components/sectionHeading/SectionHeading';
import SocialContactInfo from '@/components/socialConnection/SocialConnectInfo';
import profileImage from '../../assets/images/avatar1.jpg';

const AboutIntro = () => {
  return (
    <div className='flex flex-wrap justify-between pb-[10rem]'>
      <div className='relative z-10 shadow-md after:absolute after:border-2 after:border-border after:right-[-3rem] lg:after:right-[-4rem] after:bottom-[-3rem] lg:after:bottom-[-4rem] after:w-full after:h-full after:z-[-1] after:rounded-br-[3rem] max-w-[25rem] lg:max-w-[35rem] w-full h-[37rem] lg:h-[47rem] max-md:mx-auto max-md:mb-[7rem] md:mr-[5rem]'>
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
          <b>Hello!</b> I&apos;m Roshan, an aspiring{' '}
          <b className='text-primary'>Full-Stack developer</b> with a background
          in photography. I recently graduated with an MSc degree in Computing
          Sciences, specializing in{' '}
          <b className='text-primary'>Software, Web & Cloud</b>, in June 2024
          from Tampere University, Finland. My journey into the world of coding
          began in 2015, when I transitioned from capturing moments with a
          camera to developing interactive UI with code. After completing a
          two-month web design course in 2015, I embarked on my professional
          journey as a Frontend Developer at Rapid Web Solution in Nepal, a
          sister company of GetDevDone (formerly{' '}
          <b className='text-primary'>PSD2HTML</b>). Starting as a trainee, I
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
        <SocialContactInfo />
        <button className='primary-button btn'>
          <span className='relative z-10'>download cv</span>
        </button>
      </div>
    </div>
  );
};

export default AboutIntro;
