import Banner from '@/components/banner/Banner';
import ParticlesLayout from '@/components/banner/ParticlesLayout';

const HomePage = () => {
  return (
    <section
      id='home'
      className='pt-[11rem] pb-[7rem] md:py-[9rem] relative md:min-h-[70rem] lg:min-h-[84rem] flex flex-wrap flex-col justify-center'
    >
      <ParticlesLayout />
      <div className='max-container w-full'>
        <Banner />
      </div>

      <div className='absolute left-0 bottom-0 w-full hidden md:block [clip-path:polygon(0_100%,_100%_46%,_100%_100%)] h-[30rem] bg-accent'>
        {/* <svg
          x='0px'
          y='0px'
          className='fill-accent'
          viewBox='0 186.5 1920 113.5'
        >
          <polygon points='0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 '></polygon>
        </svg> */}
      </div>
    </section>
  );
};

export default HomePage;
