'use client';

import React, { useState, useEffect } from 'react';
import ThemeToggle from '../themeToggle/ThemeToggle';
import Navbar from '../navbar/Navbar';
import Link from 'next/link';

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
    <header
      className={`z-[100] py-[1rem] md:py-[1.5rem] fixed top-0 w-full bg-background/80 backdrop-blur-sm transition-transform duration-[500ms] ${
        isHeader === 'hide'
          ? '-translate-y-[10rem]'
          : isHeader === 'show'
          ? 'translate-y-0 border-b shadow-sm border-border/35'
          : ''
      }`}
    >
      <div className='max-container flex flex-wrap justify-between items-center'>
        <div className='logo w-[6rem] h-[6rem] text-[2.5rem] rounded-full bg-primary text-primary-foreground font-pacifico flex flex-wrap justify-center items-center mr-[1rem]'>
          <Link href='/'>RB</Link>
        </div>
        <div className='flex flex-wrap flex-1 justify-end items-center'>
          <Navbar />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
