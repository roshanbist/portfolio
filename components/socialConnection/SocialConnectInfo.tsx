import Link from 'next/link';

import { contacts } from '@/constants/contacts';

const SocialConnectInfo = () => {
  return (
    <ul className='flex flex-wrap gap-4 leading-[1] mb-10'>
      {contacts.map((contact) => (
        <li key={contact.title}>
          <Link
            className='size-[4rem] border border-border text-[2rem]/[1] flex flex-wrap justify-center items-center rounded-full hover:bg-primary hover:text-[#ebecf0] hover:border-primary hover:translate-y-[-0.3rem] transition-all duration-[500]'
            target='_blank'
            href={contact.link}
          >
            {<contact.icon />}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialConnectInfo;
