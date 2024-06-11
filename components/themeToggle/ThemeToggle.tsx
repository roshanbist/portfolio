'use client';

import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';
// import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  // const
  const { theme, setTheme } = useTheme();

  return (
    <button
      className='bg-primary text-primary-foreground'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default ThemeToggle;
