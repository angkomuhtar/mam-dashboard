"use client";
import Link from "next/link";
import LoginForm from "@/components/partials/auth/login-form";
import Social from "@/components/partials/auth/social";
import useDarkMode from "@/hooks/useDarkMode";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCreative,
} from "swiper/modules";
import Header1 from "@/components/partials/app/Header1";
import Header2 from "@/components/partials/app/Header2";
import Subtitile from "@/components/partials/app/Subtitile";
import EbrosurCard from "@/components/partials/app/EbrosurCard";
import CarouselKegiatan from "@/components/partials/app/CarouselKegiatan";
import Card from "@/components/ui/Card";
import CalendarView from "@/components/partials/widget/CalendarView";
import { ebrosur, meets } from "@/constant/data";
import { Icon } from "@iconify/react";
import SocialButton from "@/components/partials/app/SocialButton";
import Image from "next/image";
import NewsCard from "@/components/partials/app/NewsCard";
import Calendar from "react-calendar";
import { useState } from "react";

// image import

const Home = () => {
  const [isDark] = useDarkMode();
  const [date, setDate] = useState(new Date());

  const onChangeDate = (a) => {
    setDate(a);
  };
  return (
    <>
      <main>
        <div className='relative'>
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation, EffectCreative]}>
            <SwiperSlide>
              <div className='h-screen relative'>
                <Image src='/cover1.png' alt='' fill />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='h-screen relative'>
                <Image src='/cover2.png' alt='' fill />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='h-screen relative'>
                <Image src='/cover3.png' alt='' fill />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className='absolute top-0 left-0 right-0 bottom-0 z-40 flex flex-col justify-center bg-gradient-to-r from-appPrimary-500/80 to-transparent'>
            <div className='container py-24 grid grid-cols-11 px-10'>
              <div className='col-span-8 pr-10'>
                <div className='grid space-y-6'>
                  <div className='space-y-2'>
                    <Header1>SEIRAMA</Header1>
                    <Header1>(Sistem Informasi Kerjasama)</Header1>
                    <Header1>BBPP Batangkaluku</Header1>
                  </div>
                  <p className='text-xl text-neutral-50 leading-8'>
                    Menjadi Lembaga Pelatihan Terpercaya dan Berdaya Saling
                    untuk Menghasilkan SDM Pertanian yang Kreatif, Inovatif dan
                    Profesional.
                  </p>
                  <div className='flex space-x-5 items-center'>
                    <button
                      type='button'
                      className='font-semibold text-font-900 bg-font-50 rounded py-[10px] px-4'>
                      Pengumuman
                    </button>
                    <button
                      type='button'
                      className='font-semibold bg-appPrimary-500 text-font-50 rounded py-[10px] px-4'>
                      Daftar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className='container py-14 space-y-10'>
          <Header2 title='Informasi Kegiatan'>
            Kegiatan Yang sedang Berlangsug
          </Header2>
          <CarouselKegiatan />
        </section>

        <section className='container py-14 space-y-6'>
          <div className='grid grid-cols-3 gap-6'>
            <div>
              <Header2
                center={false}
                className='text-left'
                title='Informasi E-Brosur'
              />
              <Subtitile>
                Berikut informasi e-brosur yang dapat di akases
              </Subtitile>
            </div>
            {ebrosur.map((data) => (
              <EbrosurCard
                title={data.title}
                content={data.content}
                img={data.img}
              />
            ))}
          </div>
        </section>

        <section className='py-14 container'>
          <Header2 center={false} title='Berita Layanan'>
            Berikut berita terkait layanan kegiatan yang dapat Anda akses
          </Header2>
          <div className='grid grid-cols-12 py-10 gap-x-10 gap-y-8'>
            <div className='col-span-8 grid grid-cols-3 gap-4'>
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
            </div>
            <div className='col-span-4'>
              <Card title='Notes'>
                <div className='mb-12'>
                  {/* <CalendarView /> */}
                  <Calendar onChange={onChangeDate} value={date} />
                </div>
                <ul className='divide-y divide-slate-100 dark:divide-slate-700'>
                  {meets.map((item, i) => (
                    <li key={i} className='block py-[10px]'>
                      <div className='flex space-x-2 rtl:space-x-reverse'>
                        <div className='flex-1 flex space-x-2 rtl:space-x-reverse'>
                          <div className='flex-none'>
                            <div className='h-8 w-8'>
                              <img
                                src={item.img}
                                alt=''
                                className='block w-full h-full object-cover rounded-full border hover:border-white border-transparent'
                              />
                            </div>
                          </div>
                          <div className='flex-1'>
                            <span className='block text-slate-600 text-sm dark:text-slate-300 mb-1 font-medium'>
                              {item.title}
                            </span>
                            <span className='flex font-normal text-xs dark:text-slate-400 text-slate-500'>
                              <span className='text-base inline-block mr-1'>
                                <Icon icon='heroicons-outline:video-camera' />
                              </span>
                              {item.meet}
                            </span>
                          </div>
                        </div>
                        <div className='flex-none'>
                          <span className='block text-xs text-slate-600 dark:text-slate-400'>
                            {item.date}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        <section className='py-14'>
          <div className='container'>
            <Header2 title='Gallery'>
              Foto dan Video Kegiatan BBPP Batangkaluku
            </Header2>
          </div>
          <div className='grid grid-cols-3 py-8'>
            <div className='relative w-full aspect-video'>
              <Image src='/cover1.png' fill className='object-cover' />
            </div>
            <div className='relative w-full aspect-video'>
              <Image src='/cover2.png' fill className='object-cover' />
            </div>
            <div className='relative w-full aspect-video'>
              <Image src='/cover3.png' fill className='object-cover' />
            </div>
            <div className='relative w-full aspect-video'>
              <Image src='/cover3.png' fill className='object-cover' />
            </div>
            <div className='relative w-full aspect-video'>
              <Image src='/cover2.png' fill className='object-cover' />
            </div>
            <div className='relative w-full aspect-video'>
              <Image src='/cover1.png' fill className='object-cover' />
            </div>
          </div>
        </section>

        <section className='container py-14 flex justify-center space-x-10'>
          <SocialButton src='/icon/Facebook.svg' text='Facebook' />
          <SocialButton src='/icon/twitter.svg' text='twitter' />
          <SocialButton src='/icon/instagram.svg' text='Instagram' />
        </section>
      </main>
    </>
  );
};

export default Home;
