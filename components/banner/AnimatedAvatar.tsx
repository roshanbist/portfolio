const AnimatedAvatar = () => {
  return (
    <div className='max-md:mx-auto w-[32rem] h-[32rem] lg:min-w-[40rem] lg:min-h-[40rem] rounded-full relative max-md:mb-[5rem] md:order-2'>
      <div className='avatar-img absolute top-0 left-0 right-0 bottom-0 bg-no-repeat bg-center bg-cover bg-avatarUrl' />
    </div>
  );
};

export default AnimatedAvatar;
