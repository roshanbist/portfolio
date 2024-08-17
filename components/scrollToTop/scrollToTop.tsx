'use client';

import { useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { animateScroll } from 'react-scroll';

const ScrollToTop = () => {
  const [isScrollToTop, setIsScrollToTop] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      const aboutSection = document.getElementById('about');

      if (aboutSection) {
        const aboutSectionTop = aboutSection.getBoundingClientRect().top;

        return aboutSectionTop < 100
          ? setIsScrollToTop(true)
          : setIsScrollToTop(false);
      }
    };

    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [isScrollToTop]);

  const scrollTopHandler = () => {
    // it can be achieved in various way, window.scrollTo or using react-scroll
    // window.scrollTo({ top: 0, behavior: 'smooth' });
    animateScroll.scrollToTop();
  };

  return (
    <div
      onClick={scrollTopHandler}
      className={`cursor-pointer fixed right-[3rem] bottom-[5rem] z-[90] text-[3.6rem]/[1] transition-all animate-bounce ${
        isScrollToTop ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <FaArrowCircleUp className='text-primary shadow-md rounded-full' />
    </div>
  );
};

export default ScrollToTop;
