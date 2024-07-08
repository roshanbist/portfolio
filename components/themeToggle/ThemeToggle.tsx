'use client';

import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button
        className='bg-primary text-[20px] inline-flex'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <FiSun className='height-[20px] width-[20px] transition-all rotate-90 scale-0 dark:scale-100 dark:-rotate-0' />
        <FiMoon className='height-[20px] width-[20px] absolute transition-all scale-100 dark:scale-0 rotate-0 dark:rotate-90' />
      </button>
    </div>
  );
};

export default ThemeToggle;
