import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { AnimatedSectionType } from '@/types/all';

const AnimatedSection: React.FC<AnimatedSectionType> = ({
  children,
  className,
  animation,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
    rootMargin: '80px 0px 0px 0px', // for sticky header
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={animation}
      initial='hidden'
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
