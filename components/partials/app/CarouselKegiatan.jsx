"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import KegiatanCard from "./KegiatanCard";
import IconWithLabel from "./IconWithLabel";
export default () => {
  const data = [
    {
      title: "Pelatihan Teknis Tematik Pengendalian Tenaga Hama",
      pretitle: "Informasi Tenaga Pengajar",
      pelaksana: "BBPP Batangkaluku",
      time: "23 January 2023",
      location: "Kantor BBPP Batangkaluku",
      pengajar: "widyaisra",
      peserta: "3 Pengajar",
    },
    {
      title: "Pelatihan Teknis Tematik Pengendalian Tenaga Hama",
      pretitle: "Informasi Sarana dan Prasarana",
      time: "23 January 2023",
      location: "Kantor BBPP Batangkaluku",
      instansi: "Nama Instansi",
      sarana: "Sarana dan Prasarana",
      peserta: "3 Pengajar",
    },
    {
      title: "Pelatihan Teknis Tematik Pengendalian Tenaga Hama",
      pretitle: "Teknologi Informasi",
      time: "23 January 2023",
      pelaksana: "Magang / Pelatihan DLL",
      instansi: "Nama Instansi",
      peserta: "3 Pengajar",
    },
    {
      title: "Pelatihan Teknis Tematik Pengendalian Tenaga Hama",
      pretitle: "Informasi Tenaga Pengajar",
      pelaksana: "BBPP Batangkaluku",
      time: "23 January 2023",
      location: "Kantor BBPP Batangkaluku",
      pengajar: "widyaisra",
      peserta: "3 Pengajar",
    },
    {
      title: "Pelatihan Teknis Tematik Pengendalian Tenaga Hama",
      pretitle: "Informasi Sarana dan Prasarana",
      time: "23 January 2023",
      location: "Kantor BBPP Batangkaluku",
      instansi: "Nama Instansi",
      sarana: "Sarana dan Prasarana",
      peserta: "3 Pengajar",
    },
    {
      title: "Pelatihan Teknis Tematik Pengendalian Tenaga Hama",
      pretitle: "Teknologi Informasi",
      time: "23 January 2023",
      pelaksana: "Magang / Pelatihan DLL",
      instansi: "Nama Instansi",
      peserta: "3 Pengajar",
    },
  ];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3.5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}>
      {data.map((data) => (
        <SwiperSlide>
          <KegiatanCard
            title={data.title}
            pretitle={data.pretitle}
            pelaksana={data?.pelaksana}>
            {data?.time && (
              <IconWithLabel
                icon='calendar'
                className='text-xs text-font-50'
                text={data.time}
              />
            )}
            {data?.location && (
              <IconWithLabel
                icon='lokasi'
                className='text-xs text-font-50'
                text={data.location}
              />
            )}
            {data?.pengajar && (
              <IconWithLabel
                icon='pengajar'
                className='text-xs text-font-50'
                text={data.pengajar}
              />
            )}
            {data?.instansi && (
              <IconWithLabel
                icon='instansi'
                className='text-xs text-font-50'
                text={data.instansi}
              />
            )}
            {data?.sarana && (
              <IconWithLabel
                icon='sarana'
                className='text-xs text-font-50'
                text={data.sarana}
              />
            )}
            {data?.peserta && (
              <IconWithLabel
                icon='peserta'
                className='text-xs text-font-50'
                text={data.peserta}
              />
            )}
          </KegiatanCard>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
