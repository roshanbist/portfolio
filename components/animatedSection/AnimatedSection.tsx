import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

import { AnimatedSectionType } from '@/types/all';

const AnimatedSection: React.FC<AnimatedSectionType> = ({
  children,
  className,
  animation,
}) => {
  const motionRef = useRef(null);
  const inView = useInView(motionRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={motionRef}
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
