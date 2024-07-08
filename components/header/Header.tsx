import React from 'react';
import ThemeToggle from '../themeToggle/ThemeToggle';
import Navbar from '../navbar/Navbar';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className='max-container'>
        <div className='logo'>
          <Link href='/'>RB</Link>
        </div>
        <Navbar />
        <p>this is just a normal header without navbar</p>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
