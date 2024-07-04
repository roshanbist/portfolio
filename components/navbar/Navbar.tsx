import { menuItems } from '@/constants/menuItems';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul>
        {menuItems.map((menu) => (
          <li key={menu.label}>
            <Link href={menu.path}>{menu.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
