import React from 'react';
import ThemeToggle from '../themeToggle/ThemeToggle';
import Navbar from '../navbar/Navbar';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='border-b py-4'>
      <div className='max-container flex flex-wrap justify-between items-center'>
        <div className='logo w-[60px] h-[60px] text-[25px] rounded-full bg-primary text-primary-foreground font-pacifico flex flex-wrap justify-center items-center mr-[10px]'>
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
