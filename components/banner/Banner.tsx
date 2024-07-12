import React from 'react';
import AnimatedAvatar from '../avatar/AnimatedAvatar';

const Banner = () => {
  return (
    <div className='flex flex-wrap justify-between'>
      <div className='banner-block p-[3rem] bg-accent rounded-[0.5rem] max-w-[70rem]'>
        <span className='inline-flex py-[0.6rem] px-4 mb-6 rounded-[0.3rem] tracking-[0.2rem] uppercase font-medium bg-primary text-primary-foreground'>
          Roshan Bist
        </span>
        <h1 className='uppercase font-semibold text-[6.2rem]/[1.13] mb-6'>
          Hi, I&apos;m Roshan
        </h1>
        <h2 className='uppercase font-semibold text-[5.8rem]/[1.13] mb-6'>
          I&apos;m a Developer
        </h2>
        {/* <h2>I&apos;m a Photographer</h2> */}
        <button className='btn-primary'>See Portfolio</button>
      </div>
      <AnimatedAvatar />
    </div>
  );
};

export default Banner;
