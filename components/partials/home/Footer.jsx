import Link from "next/link";
import React from "react";
import AppIcon from "./AppIcon";

const Footer = () => {
  return (
    <footer className='bg-linier font-open_sans'>
      <div className='container py-20 px-10 grid md:grid-cols-4 gap-x-20'>
        <div>
          <AppIcon />
          <div className='mt-9'>
            <h3 className='footer-app-title'>Alamat Kantor</h3>
            <p className='footer-app-content mt-3'>
              Jl. Poros Malino, Tamarunang, Somba Opu, Kabupaten Gowa, Sulawesi
              Selatan 92117, Indonesia
            </p>
          </div>
        </div>
        <div>
          <h3 className='footer-app-title'>Alamat Kantor</h3>
          <Link href='#'>
            <p className='footer-app-content mt-3'>Kementerian Pertanian</p>
            <p className='footer-app-content mt-3'>CYBEX Pertanian</p>
            <p className='footer-app-content mt-3'>BPPSDMP</p>
            <p className='footer-app-content mt-3'>WBS</p>
            <p className='footer-app-content mt-3'>BBPP Lembang</p>
            <p className='footer-app-content mt-3'>BBPP Batu</p>
            <p className='footer-app-content mt-3'>STTP Gowa</p>
          </Link>
        </div>
        <div>
          <h3 className='footer-app-title'>Alamat Kantor</h3>
          <Link href='#'>
            <p className='footer-app-content mt-3'>Kementerian Pertanian</p>
            <p className='footer-app-content mt-3'>CYBEX Pertanian</p>
            <p className='footer-app-content mt-3'>BPPSDMP</p>
            <p className='footer-app-content mt-3'>WBS</p>
            <p className='footer-app-content mt-3'>BBPP Lembang</p>
            <p className='footer-app-content mt-3'>BBPP Batu</p>
            <p className='footer-app-content mt-3'>STTP Gowa</p>
          </Link>
        </div>
        <div>
          <h3 className='footer-app-title'>Kontak kami</h3>
          <Link href='#'>
            <p className='footer-app-content mt-3'>+0411 - 866396</p>
          </Link>
          <Link href='#'>
            <p className='footer-app-content mt-3'>infobbpp@pertanian.go.id</p>
          </Link>

          <h3 className='footer-app-title mt-8'>Jumlah pengunjung</h3>
          <div className='flex justify-between items-center'>
            <p className='footer-app-content mt-3'>Pages</p>
            <p className='footer-app-content mt-3'>6819</p>
          </div>
          <div className='flex justify-between items-center'>
            <p className='footer-app-content mt-3'>Online</p>
            <p className='footer-app-content mt-3'>8</p>
          </div>
          <div className='flex justify-between items-center'>
            <p className='footer-app-content mt-3'>Pengunjung Hari ini</p>
            <p className='footer-app-content mt-3'>60</p>
          </div>
        </div>
      </div>
      <div className='bg-appPrimary-900'>
        <div className='container items-center py-[34px]'>
          <p className='text-white text-base font-normal text-center'>
            Copyright©BBPP Batangkaluku - Kementerian Pertanian R.I.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
