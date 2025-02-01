import React from 'react';

// BrandDifferentCard Component
interface CardProps {
    icon: React.ReactNode;
    heading: string;
    text: string;
  }
  
const BrandDifferentCard = ({ icon, heading, text }: CardProps) => {
    return (
      <div className='bg-[#F9F9F9] text-[#007580] p-8 rounded-lg  flex flex-col items-start space-y-4'>
        <div className='text-[#007580]'>{icon}</div>
        <h3 className='text-lg font-bold'>{heading}</h3>
        <p className='text-base leading-6'>{text}</p>
      </div>
    );
};
  
export default BrandDifferentCard