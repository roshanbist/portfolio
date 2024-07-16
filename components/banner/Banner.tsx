import AnimatedAvatar from './AnimatedAvatar';
import TypewriteText from './TypewriteText';

const Banner = () => {
  return (
    <div className='max-sm:text-center sm:flex sm:flex-wrap sm:justify-between sm:items-center'>
      <div className='banner-block max-lg:flex-1 md:max-w-[60rem] max-md:mb-16 sm:pr-4'>
        <span className='inline-flex py-[0.6rem] px-4 mb-10 rounded-[0.3rem] tracking-[0.2rem] uppercase font-medium bg-primary text-primary-foreground'>
          Roshan Bist
        </span>
        <h1 className='uppercase font-semibold text-[3.8rem]/[1.11] md:text-[4.4]/[1.13] lg:text-[6.2rem]/[1.13] mb-6'>
          {` Hi, I\'m Roshan`}
        </h1>
        <TypewriteText />
        <button className='btn-primary relative'>See Portfolio</button>
      </div>
      <AnimatedAvatar />
    </div>
  );
};

export default Banner;
