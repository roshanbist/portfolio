'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

  const formRef = useRef<HTMLFormElement | string>('');

  const service_id = process.env.NEXT_PUBLIC_SERVICE_ID;
  const template_id = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const public_key = process.env.NEXT_PUBLIC_KEY;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(service_id, template_id, formRef.current, {
          publicKey: public_key,
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    }
  };

  return (
    <div>
      <form ref={formRef} onSubmit={sendEmail}>
        <div className='mb-12'>
          <input
            type='text'
            name='user_name'
            className='form-input'
            placeholder='Name*'
          />
        </div>
        <div className='mb-12'>
          <input
            type='email'
            name='user_email'
            className='form-input'
            placeholder='Email*'
          />
        </div>
        <div className='mb-12'>
          <textarea
            name='user_message'
            className='form-input min-h-[15rem] h-auto max-h-[30rem]'
            placeholder='Message*'
          ></textarea>
        </div>
        <button className='btn primary-button'>
          <span className='relative z-10'>Send message</span>
        </button>
        {successMessage && (
          <span className='text-green-600 block'>
            Your message has been send successfully!
          </span>
        )}
        {errorMessage && (
          <span className='text-red-600 block'>Something went wrong!</span>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
