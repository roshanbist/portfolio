import React from 'react';

const ContactForm = () => {
  return (
    <div>
      <form action=''>
        <div className='mb-12'>
          <input type='text' className='form-input' placeholder='Name*' />
        </div>
        <div className='mb-12'>
          <input type='email' className='form-input' placeholder='Email*' />
        </div>
        <div className='mb-12'>
          <textarea
            name=''
            className='form-input min-h-[15rem] h-auto max-h-[30rem]'
            placeholder='Message*'
          ></textarea>
        </div>
        <button className='btn primary-button'>
          <span className='relative z-10'>Send message</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
