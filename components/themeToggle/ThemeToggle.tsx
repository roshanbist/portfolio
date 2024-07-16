'use client';

import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className='size-16 rounded-full text-[2rem] text-destructive-foreground inline-flex items-center justify-center transition-colors hover:bg-destructive max-md:ml-2'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <FiSun className='rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      <FiMoon className='absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
    </button>
  );
};

export default ThemeToggle;
