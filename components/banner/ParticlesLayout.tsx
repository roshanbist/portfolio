'use client';

import { useCallback } from 'react';
import type { Engine } from 'tsparticles-engine';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

const particlesVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

const ParticlesLayout = () => {
  const { theme } = useTheme();
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particleColor = theme === 'light' ? '#717173' : '#f1f5f9';

  return (
    <motion.div
      className='absolute left-0 w-full top-0 h-full z-[-1]'
      variants={particlesVariant}
      initial='hidden'
      animate='visible'
    >
      <Particles
        id='tsparticles'
        init={particlesInit}
        className='w-full h-full'
        options={{
          background: {
            //   color: {
            //     value: "#0d47a1",
            //   },
          },
          fullScreen: false,
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: 'push',
              },
              onHover: {
                enable: false,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: particleColor,
            },
            links: {
              color: particleColor,
              distance: 120,
              enable: true,
              opacity: 0.25,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              value: 0.25,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 2, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </motion.div>
  );
};

export default ParticlesLayout;
