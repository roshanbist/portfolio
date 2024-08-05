'use client';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      return;
    }

    if (formRef.current) {
      try {
        const result = await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          publicKey
        );

        if (result.status === 200) {
          toast.success('Email sent successfully!');
        } else {
          throw new Error('Error occured. Please try again later');
        }
        formRef.current.reset();
      } catch (error) {
        if (error instanceof Error) {
          toast.error('Failed to send email');
        } else {
          toast.error('Unknown error occured. Please try again later');
        }
      }
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
            required
          />
        </div>
        <div className='mb-12'>
          <input
            type='email'
            name='user_email'
            className='form-input'
            placeholder='Email*'
            required
          />
        </div>
        <div className='mb-12'>
          <textarea
            name='user_message'
            className='form-input min-h-[15rem] h-auto max-h-[30rem]'
            placeholder='Message*'
            required
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
