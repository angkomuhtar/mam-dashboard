import Image from "next/image";
import React from "react";

const NewsCard = () => {
  return (
    <div className='relative w-full aspect-[3/4] group cursor-pointer flex justify-center overflow-hidden'>
      <Image
        src='/cover1.png'
        alt=''
        fill
        className='rounded-md object-cover'
      />
      <div className='absolute left-[50%] w-0 h-full group-hover:w-full group-hover:left-0 transition-all ease-in duration-300 bg-font-50/90'></div>
      <div className='absolute rounded-sm bg-appPrimary-500 text-font-950 px-2 py-1 text-[.6rem] font-semibold left-4 -top-10 group-hover:top-4 group-hover:transition-all group-hover:duration-300 group-hover:delay-300 '>
        20 Agustus 2023
      </div>
      <div className='py-2 px-4 top-[50%] absolute opacity-0 invisible group-hover:transition-all group-hover:visible group-hover:opacity-100 group-hover:duration-300 group-hover:delay-[400ms] group-hover:-translate-y-[50%]'>
        <h6 className='font-open_sans text-base font-bold text-font-900 leading-5 mb-3'>
          Mentan melakukan kunjungan
        </h6>
        <p className='font-light text-xs'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          sapiente reprehenderit, facilis debitis, eos eum iste dolorem corporis
          quasi totam harum autem atque eveniet beatae ratione! Distinctio
          repellendus ipsum expedita?
        </p>
        <div className='w-full'>
          <a
            href='http://'
            target='_blank'
            rel='noopener noreferrer'
            className='text-appPrimary-500 font-semibold text-sm text-center hover:text-font-600'>
            read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
