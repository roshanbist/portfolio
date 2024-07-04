import React from 'react';
import ThemeToggle from '../themeToggle/ThemeToggle';
import Navbar from '../navbar/Navbar';

const Header = () => {
  return (
    <>
      <Navbar />
      <p>this is just a normal header without navbar</p>
      <ThemeToggle />
    </>
  );
};

export default Header;
