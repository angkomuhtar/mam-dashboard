import Image from "next/image";
import React from "react";

const InfoCard = () => {
  return (
    <div className='grid grid-cols-5 space-x-5'>
      <div className='col-span-2'>
        <div className='relative aspect-[4/3]'>
          <Image src='/news.png' fill className='rounded-2xl' />
        </div>
        <p className='text-neutral-400 text-xs mt-4'>10 Mei 2023</p>
      </div>
      <div className='col-span-3'>
        <p className='text-appNetral-600 '>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
