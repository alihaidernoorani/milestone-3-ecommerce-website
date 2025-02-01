import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { GrTrophy } from "react-icons/gr";
import { BsPatchCheck } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";

import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const Contact = () => {
  return (
    <div className={`${poppins.className} w-[80%] max-w-7xl mx-auto items-center mt-20 px-4`}>
      <div className='text-center'>
        <h1 className='text-lg lg:text-2xl 2xl:text-4xl font-semibold'>Get in Touch With Us</h1>
        <p className='text-base text-[#9F9F9F] leading-6 mt-2'>
          For more information about our product & services, please feel free to drop us
          an email. Our staff will always be there to help you out. Do not hesitate!
        </p>
      </div>

      <div className='flex flex-col md:flex-row gap-20  mx-auto justify-center mt-10'>
        {/* Contact Details */}
        <div className='space-y-6 text-center md:text-left'>
          <div className='flex gap-4 justify-center md:justify-start'>
            <FaLocationDot className='text-xl' />
            <div className='w-[212px]'>
              <h2 className='font-medium md:text-xl 2xl:text-2xl'>Address</h2>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div className='flex gap-4 justify-center md:justify-start'>
            <FaPhoneAlt className='text-xl' />
            <div className='w-[212px]'>
              <h2 className='font-medium md:text-xl 2xl:text-2xl'>Phone</h2>
              <p>
                Mobile: +(84) 546-6789 <br />
                Hotline: +(84) 456-6789
              </p>
            </div>
          </div>
          <div className='flex gap-4 justify-center md:justify-start'>
            <FaClock className='text-xl' />
            <div className='w-[212px]'>
              <h2 className='font-medium md:text-xl 2xl:text-2xl'>Working Time</h2>
              <p>
                Monday-Friday: 9:00 - 22:00 <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className='w-full'>
          <form className='flex flex-col gap-6  items-center md:items-start mx-10'>
            <div className='w-full'>
              <label htmlFor='name' className='block text-sm font-medium mb-2'>Your name</label>
              <input
                type='text'
                id='name'
                name='name'
                className='border rounded-[10px] w-full md:w-[528px] p-4'
                placeholder='Abc'
              />
            </div>
            <div className='w-full'>
              <label htmlFor='email' className='block text-sm font-medium mb-2'>Email address</label>
              <input
                type='email'
                id='email'
                name='email'
                className='border rounded-[10px] w-full md:w-[528px] p-4'
                placeholder='Abc@def.com'
              />
            </div>
            <div className='w-full'>
              <label htmlFor='subject' className='block text-sm font-medium mb-2'>Subject</label>
              <input
                type='text'
                id='subject'
                name='subject'
                className='border rounded-[10px] w-full md:w-[528px] p-4'
                placeholder='This is an optional'
              />
            </div>
            <div className='w-full'>
              <label htmlFor='message' className='block text-sm font-medium mb-2'>Message</label>
              <textarea
                id='message'
                name='message'
                className='border rounded-[10px] w-full md:w-[528px] p-4'
                placeholder="Hi! I'd like to ask about"
              ></textarea>
            </div>
            <button
              type='submit'
              className='text-white py-3 px-6 rounded-[10px] bg-[#029FAE] hover:bg-indigo-600 transition-all duration-200 w-full md:w-[237px]'
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Bottom section */}
      <div className='bg-[#F4F4F4] flex flex-col md:flex-row justify-around gap-6 py-10 mx-auto mt-10'>
        <div className='flex gap-2 items-center'>
          <GrTrophy className='w-[60px] h-[60px]'/>
          <div>
            <h3 className='font-semibold'>High Quality</h3>
            <p>crafted from top materials</p>
          </div>
        </div>
        <div className='flex gap-2 items-center '>
          <BsPatchCheck className='w-[60px] h-[60px]'/>
          <div>
            <h3 className='font-semibold'>Warranty Protection</h3>
            <p>Over 2 years</p>
          </div>
        </div>
        <div className='flex gap-2 items-center '>
          <MdSupportAgent className='w-[60px] h-[60px]'/>
          <div>
            <h3 className='font-semibold'>24 / 7 Support</h3>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
