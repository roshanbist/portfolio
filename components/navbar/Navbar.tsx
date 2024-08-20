'use client';

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { LuAlignRight, LuX } from 'react-icons/lu';

import { menuItems } from '@/constants/menuItems';

const Navbar = () => {
  const [isMobileNav, setIsMobileNav] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    document.body.classList.toggle('nav-active', isMobileNav); // if isMobileNav is true then nav-active is added otherwise removed
    document.body.classList.toggle('overflow-hidden', isMobileNav);
  }, [isMobileNav]);

  useEffect(() => {
    const menuHandler = (e: Event) => {
      const element = e.target as HTMLElement;

      if (
        !navRef.current?.contains(e.target as Node) ||
        element.classList.contains('menu-link')
      ) {
        setIsMobileNav(false);
      }
    };

    const resizeHandler = () => {
      if (window.innerWidth >= 768) {
        setIsMobileNav(false);
        setIsMobileView(false);
      } else {
        setIsMobileView(true);
      }
    };

    document.addEventListener('mousedown', menuHandler);
    window.addEventListener('resize', resizeHandler);
    resizeHandler();

    return () => {
      document.removeEventListener('mousedown', menuHandler);
      document.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <nav ref={navRef}>
      <span
        className='inline-flex size-16 rounded-full text-[2.5rem] cursor-pointer md:hidden justify-center items-center max-md:hover:bg-destructive max-md:transition-colors relative z-[2]'
        onClick={() => setIsMobileNav(!isMobileNav)}
      >
        {isMobileNav ? <LuX /> : <LuAlignRight />}
      </span>
      <div
        className={`bg-[#1d1d1d]/70 blur-effect fixed h-svh w-full left-0 top-0 bottom-0 md:hidden ${
          isMobileNav
            ? 'opacity-100 visible'
            : 'max-md:opacity-0 max-md:invisible'
        } ${isMobileView ? 'transition-opacity' : ''}`}
      />
      <div
        className={`max-md:fixed max-md:h-svh max-md:w-[32rem] md:w-full right-0 max-md:top-0 max-md:pt-[8rem] max-md:bg-background ${
          isMobileNav ? 'translate-x-0' : 'max-md:translate-x-full'
        } ${isMobileView ? 'transition-transform' : ''}`}
      >
        <ul className='md:flex md:flex-wrap'>
          {menuItems.map((menu) => (
            <li key={menu.label} className='md:mx-[1.2rem] max-md:border-b'>
              <Link
                activeClass='active'
                to={`${menu.path}`}
                className={`cursor-pointer menu-link font-robotoCondensed relative font-medium uppercase max-md:block max-md:py-[1.2rem] max-md:px-8 max-md:hover:bg-primary md:hover:text-primary transition-colors group`}
                spy={true}
                smooth={true}
                duration={700}
                offset={isMobileView ? -50 : -90}
              >
                {menu.label}
                <span
                  className={`block mx-auto left-0 right-0 md:absolute md:bottom-[-1rem] md:w-0 md:h-[0.4rem] md:bg-primary md:transition-[width] group-hover:md:w-full`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
