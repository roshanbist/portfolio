'use client';

import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className=''>
      <button
        className='w-10 h-10 rounded-full text-[20px] text-destructive-foreground inline-flex items-center justify-center transition-colors hover:bg-destructive'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <FiSun className='h-[23px] w-[23px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
        <FiMoon className='h-[23px] w-[23px] absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      </button>
    </div>
  );
};

export default ThemeToggle;
