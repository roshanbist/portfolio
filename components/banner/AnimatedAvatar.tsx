import React from 'react';

const AnimatedAvatar = () => {
  return (
    <div className='max-sm:mx-auto w-[28rem] h-[28rem] md:w-[32rem] md:h-[32rem] lg:min-w-[40rem] lg:min-h-[40rem] rounded-full relative'>
      <div className='avatar-img absolute top-0 left-0 right-0 bottom-0 bg-no-repeat bg-center bg-cover bg-avatarUrl' />
    </div>
  );
};

export default AnimatedAvatar;
