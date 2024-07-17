import Banner from '@/components/banner/Banner';
import ParticlesLayout from '@/components/banner/ParticlesLayout';

const HomePage = () => {
  return (
    <section
      id='home'
      className='pt-[11rem] pb-[7rem] md:py-[9rem] relative min-h-svh flex flex-wrap flex-col justify-center'
    >
      <div className='absolute left-0 w-full top-0 h-full bg-center z-[-1] bg-banner bg-fixed' />
      <div className='bg-noise bg-fixed absolute left-0 w-full top-0 h-full bg-center z-[-1] opacity-[0.05]' />
      <ParticlesLayout />
      <div className='max-container w-full'>
        <Banner />
      </div>

      {/* <div className='absolute left-0 bottom-0 w-full hidden md:block [clip-path:polygon(0_43%,_100%_0%,_100%_100%,_0%_100%)] h-[20rem] bg-accent'>
      </div> */}
      {/* <svg
          x='0px'
          y='0px'
          className='fill-accent'
          viewBox='0 186.5 1920 113.5'
        >
          <polygon points='0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 '></polygon>
        </svg> */}
    </section>
  );
};

export default HomePage;
