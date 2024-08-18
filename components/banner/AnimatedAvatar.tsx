import AnimatedSection from '@/components/animatedSection/AnimatedSection';
import { zoomInTopRight } from '@/components/animatedSection/animationOption';

const AnimatedAvatar = () => {
  return (
    <AnimatedSection
      className='max-md:mx-auto w-[32rem] h-[32rem] lg:min-w-[40rem] lg:min-h-[40rem] rounded-full relative max-md:mb-[5rem] md:order-2'
      animation={zoomInTopRight}
    >
      <div className='avatar-img animate-morph absolute top-0 left-0 right-0 bottom-0 bg-no-repeat bg-center bg-cover bg-avatar2' />
    </AnimatedSection>
  );
};

export default AnimatedAvatar;
