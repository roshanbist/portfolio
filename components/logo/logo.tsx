import Link from 'next/link';

import { LogoInfo } from '@/types/all';

const Logo = (props: LogoInfo) => {
  return (
    <Link
      className={`block ${props.width} ${props.height} ${props.textSize} ${props.classname} rounded-full bg-primary text-primary-foreground font-pacifico flex flex-wrap justify-center items-center`}
      href='/'
    >
      RB
    </Link>
  );
};

export default Logo;
