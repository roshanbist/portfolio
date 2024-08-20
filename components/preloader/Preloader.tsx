'use client';

import React, { useEffect } from 'react';

const Preloader = () => {
  useEffect(() => {
    const loadHandler = () => {
      const preloader = document.querySelector('#preloader') as HTMLElement;

      preloader.classList.add('preloaded');
      setTimeout(() => {
        preloader.remove();
      }, 1200);
    };

    if (document.readyState === 'complete') {
      loadHandler();
    } else {
      window.addEventListener('load', loadHandler);
    }

    return () => window.removeEventListener('load', loadHandler);
  }, []);

  return (
    <div id='preloader'>
      <div className='loader_line'></div>
    </div>
  );
};

export default Preloader;
