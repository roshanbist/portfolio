'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import ThemeToggle from '@/components/themeToggle/ThemeToggle';
import Navbar from '@/components/navbar/Navbar';
import { fadeInTop } from '@/components/animatedSection/animationOption';
import PortfolioLogo from '@/components/portfolioLogo/PortfolioLogo';

const Header = () => {
  const [isHeader, setIsHeader] = useState<string | null>(null);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 150) {
        if (window.scrollY > lastScroll) {
          setIsHeader('hide');
        } else {
          setIsHeader('show');
        }
      } else {
        setIsHeader(null);
      }

      setLastScroll(window.scrollY);
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [lastScroll]);

  return (
    <motion.div variants={fadeInTop} initial='hidden' animate='visible'>
      <header
        className={`z-[100] blur-effect py-[1rem] md:py-[1.5rem] fixed top-0 w-full bg-background/50  transition-transform duration-[500ms] ${
          isHeader === 'hide'
            ? '-translate-y-[10rem]'
            : isHeader === 'show'
            ? 'translate-y-0 border-b shadow-sm border-border/40'
            : ''
        }`}
      >
        <div className='max-container flex flex-wrap justify-between items-center'>
          <PortfolioLogo
            width='w-[6rem]'
            height='h-[6rem]'
            textSize='text-[2.5rem]'
            classname='mr-[1rem]'
          />
          <div className='flex flex-wrap flex-1 justify-end items-center'>
            <Navbar />
            <ThemeToggle />
          </div>
        </div>
      </header>
    </motion.div>
  );
};

export default Header;
