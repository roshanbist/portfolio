import React from 'react';

const AnimatedAvatar = () => {
  return (
    <div className='min-w-[30rem] min-h-[30rem] rounded-full relative'>
      <div className='avatar-img absolute top-0 left-0 right-0 bottom-0 bg-no-repeat bg-center bg-cover bg-avatarUrl' />
    </div>
  );
};

export default AnimatedAvatar;
