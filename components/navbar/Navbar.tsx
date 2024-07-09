import { menuItems } from '@/constants/menuItems';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul className='md:flex md:flex-wrap text-'>
        {menuItems.map((menu) => (
          <li key={menu.label} className='mx-4'>
            <Link href={menu.path} className='font-medium'>
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
