import React from "react";
import AppIcon from "./AppIcon";
import Link from "next/link";

const AppNavbar = () => {
  return (
    <div className='absolute top-0 left-0 right-0 z-50'>
      <nav className='container bg-font-900 flex justify-between items-center rounded-[20px] py-4 px-16 mt-6 space-x-6'>
        <AppIcon />
        <ul className='flex flex-1 justify-end space-x-7'>
          <li>
            <a href='' className='text-neutral-50 text-base font-semibold'>
              Beranda
            </a>
          </li>
          <li>
            <a href='' className='text-neutral-50 text-base font-semibold'>
              E-Brosur
            </a>
          </li>
          <li>
            <a href='' className='text-neutral-50 text-base font-semibold'>
              Gallery
            </a>
          </li>
        </ul>
        <div className='flex justify-between space-x-5'>
          <Link href='login'>
            <button className='font-semibold text-neutral-50 border-2 bg-appPrimary-500 border-appPrimary-500 px-10 py-2 rounded-md'>
              Masuk
            </button>
          </Link>
          <button className='font-semibold text-neutral-50 border-2 border-appPrimary-500 px-8 py-2 rounded-md'>
            Daftar
          </button>
        </div>
      </nav>
    </div>
  );
};

export default AppNavbar;
