import Image from "next/image";
import React from "react";

const KegiatanCard = ({ children, image, pretitle, title, pelaksana }) => {
  return (
    <div className='cursor-pointer relative aspect-[6/7] group'>
      <Image
        src='/news.png'
        alt=''
        fill
        className='object-fill rounded-md -z-10'
      />
      <div className='bg-font-900/60 rounded-md h-full flex flex-col justify-center px-8'>
        <p className='capitalize font-normal text-xs text-font-50'>
          {pretitle}
        </p>
        <h3 className='capitalize font-bold text-lg text-font-50'>{title}</h3>
        {pelaksana && (
          <p className='capitalize font-bold text-[.5rem] text-font-50'>
            {pelaksana}
          </p>
        )}
        <div className='max-h-0 overflow-hidden group-hover:max-h-60 transition-all duration-500 mt-4'>
          <div className='space-y-3'>{children}</div>
        </div>
      </div>
    </div>
  );
};
export default KegiatanCard;
