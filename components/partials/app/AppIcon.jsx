import Image from "next/image";
import React from "react";

const AppIcon = () => {
  return (
    <div className='flex space-x-3'>
      <div className='relative h-14 aspect-[5/1]'>
        <Image src='./logo_hijau.svg' fill />
      </div>
    </div>
  );
};

export default AppIcon;
