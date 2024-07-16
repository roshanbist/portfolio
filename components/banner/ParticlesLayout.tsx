'use client';

import { useCallback } from 'react';
import type { Container, Engine } from 'tsparticles-engine';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticlesLayout = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className='absolute left-0 w-full top-0 h-full z-[-1]'>
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
              value: '#21c45d',
            },
            links: {
              color: '#21c45d',
              distance: 120,
              enable: true,
              opacity: 0.3,
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
              value: 0.3,
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
    </div>
  );
};

export default ParticlesLayout;
