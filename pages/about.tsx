import Image from 'next/image';

const About = () => {
  return (
    <section id='about' className='bg-accent'>
      <div className='max-container'>
        <div className='img-container'>
          <Image
            src='/assets/images/avatar.jpg'
            alt='avatar'
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
