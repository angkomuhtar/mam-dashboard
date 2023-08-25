import Image from "next/image";
import React from "react";

const SocialButton = ({ src, text }) => {
  return (
    <div className='flex space-x-4 items-center'>
      <div className='relative w-7 h-7'>
        <Image src={src} fill className='object-contain' />
      </div>
      <p className='font-semibold'>{text}</p>
    </div>
  );
};

export default SocialButton;
