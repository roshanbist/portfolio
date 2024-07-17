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
      className='font-robotoCondensed uppercase font-bold text-[3.6rem]/[1.11] md:text-[4.2rem] lg:text-[5.6rem] xl:text-[5.8rem] mb-12'
      repeat={Infinity}
    />
  );
};

export default TypewriteText;
