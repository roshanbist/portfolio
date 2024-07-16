'use client';

import { TypeAnimation } from 'react-type-animation';

const TypewriteText = () => {
  return (
    <TypeAnimation
      sequence={[
        `I\'m a Developer`,
        1500, // wait 1s before replacing "developer" with "photographer"
        `I\'m a Photographer`,
        1500,
      ]}
      wrapper='h2'
      speed={30}
      className='uppercase font-semibold text-[3.4rem]/[1.11] md:text-[3.6rem]/[1.11] lg:text-[5.2rem]/[1.13] xl:text-[5.8rem] mb-12'
      repeat={Infinity}
    />
  );
};

export default TypewriteText;
