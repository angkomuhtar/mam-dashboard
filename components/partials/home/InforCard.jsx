import Image from "next/image";
import React from "react";

const InforCard = () => {
  return (
    <div className='flex items-center p-4 pr-6 rounded-2xl bg-appNetral-50 space-x-6'>
      <div className='bg-appPrimary-500 rounded-full'>
        <div className='relative aspect-square w-9 m-2'>
          <Image src='/icon/book.svg' fill className='object-contain' />
        </div>
      </div>
      <div className='flex-1'>
        <p className='font-semibold text-2xl text-appPrimary-500'>
          Edukasi Pelatihan Seirama berbasis teknologi
        </p>
      </div>
    </div>
  );
};

export default InforCard;
