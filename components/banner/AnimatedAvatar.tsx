import { motion } from 'framer-motion';

const animatedAvatarVariant = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      // ease: 'easeInOut',
      ease: [0.42, 0, 0.58, 1],
      delay: 0.06,
    },
  },
};

const AnimatedAvatar = () => {
  return (
    <motion.div
      variants={animatedAvatarVariant}
      initial='hidden'
      animate='visible'
      className='max-md:mx-auto w-[32rem] h-[32rem] lg:min-w-[40rem] lg:min-h-[40rem] rounded-full relative max-md:mb-[5rem] md:order-2'
    >
      <div className='avatar-img absolute top-0 left-0 right-0 bottom-0 bg-no-repeat bg-center bg-cover bg-avatar2' />
    </motion.div>
  );
};

export default AnimatedAvatar;
