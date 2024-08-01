import Logo from '../logo/logo';
import SocialMediaConnect from '../socialMediaConnect/SocialMediaConnect';

const Footer = () => {
  return (
    <footer className='pt-[5rem] md:pt-[8rem] pb-[5rem] bg-[#101214]'>
      <div className='max-container'>
        <div>
          <Logo
            width='w-[10rem]'
            height='h-[10rem]'
            textSize='text-[3.5rem]'
            classname='mx-auto'
          />
        </div>
        <div className='flex flex-wrap justify-center mt-[3rem] '>
          <SocialMediaConnect textColor='text-[#ebecf0]' />
        </div>
        <div className=' text-center border-t border-border/30 pt-[4rem] mt-[2rem]'>
          <p>
            <span className='text-[#ebecf0]/60'>Copyrights © 2024 </span>
            <span className='text-primary font-bold capitalize'>
              Roshan Bist
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
