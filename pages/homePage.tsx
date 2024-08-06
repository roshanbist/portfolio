import Banner from '@/components/banner/Banner';
import ParticlesLayout from '@/components/banner/ParticlesLayout';

const HomePage = () => {
  return (
    <section
      id='home'
      className='pt-[11rem] pb-[5rem] md:py-[9rem] relative min-h-svh flex flex-wrap flex-col justify-center'
    >
      <div className='absolute left-0 w-full top-0 h-full bg-center z-[-1] bg-banner bg-fixed' />
      <div className='bg-noise bg-fixed absolute left-0 w-full top-0 h-full bg-center z-[-1] opacity-[0.05]' />
      <ParticlesLayout />
      <div className='max-container w-full'>
        <Banner />
      </div>
    </section>
  );
};

export default HomePage;
