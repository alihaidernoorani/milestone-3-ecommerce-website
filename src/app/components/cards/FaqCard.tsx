import React from 'react';
import { FaPlus } from "react-icons/fa6";

interface FaqCardProps {
    question: string;
    answer: string;
  }
  
  export const FaqCard = ({ question, answer }: FaqCardProps) => {
     return( 
     <div className='relative bg-[#F7F7F7] w-full p-6 space-y-4'>
          <h2 className='text-base md:text-lg font-bold mr-2'>{question}</h2>
          <p className='text-base leading-6'>{answer}</p>
          <FaPlus className='absolute right-2 top-3 ' aria-hidden="true" />
      </div>)
  }
  