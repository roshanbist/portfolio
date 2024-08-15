'use client';

import { Link } from 'react-scroll';

import { LogoInfo } from '@/types/all';

const Logo = (props: LogoInfo) => {
  return (
    <Link
      className={`cursor-pointer block ${props.width} ${props.height} ${props.textSize} ${props.classname} rounded-full bg-primary text-primary-foreground font-pacifico flex flex-wrap justify-center items-center`}
      smooth={true}
      duration={500}
      to='home'
    >
      RB
    </Link>
  );
};

export default Logo;
