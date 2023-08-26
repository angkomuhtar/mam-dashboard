"use client";
import React, { useEffect } from "react";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import Aos from "aos";
import SectionTitle from "@/components/partials/home/SectionTitle";
import ServiceCard from "@/components/partials/home/ServiceCard";

const page = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className=''>
      <section className='bg-[url(/assets/images/bg-truck.png)] h-screen bg-fixed bg-no-repeat bg-cover flex items-center'>
        <div className='container mx-auto'>
          <h2
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-duration='1000'
            className='text-whiteapp uppercase font-montserrat text-lg font-light'>
            Pt mitra abadi mahakam
          </h2>
          <h2
            data-aos-duration='1000'
            data-aos='fade-left'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            className='text-whiteapp capitalize font-montserrat font-extrabold text-4xl mt-3 mb-20 leading-snug'>
            Creating <span className='text-red-700'>Value</span> and <br />
            Winning <span className='text-red-700'>Trust</span>
          </h2>
          <button
            data-aos='fade-right'
            data-aos-mirror='true'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            className='bg-red-700 px-6 py-3 rounded-md text-sm font-medium flex items-center text-whiteapp uppercase'>
            discover More <ArrowSmallRightIcon className='w-6 ml-3' />
          </button>
        </div>
      </section>

      <section className='bg-mutedapp py-20'>
        <div className='container mx-auto py-8'>
          <div className='flex flex-col justify-center items-center'>
            <SectionTitle
              text='Your Reliable partners'
              data-aos='fade-right'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
            />
            <p
              className='mt-8 max-w-xl text-center font-montserrat'
              data-aos='fade-in'>
              Continuous Improvement Causes us to think about upstream process
              not downstream damage control
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
            <ServiceCard
              data-aos='fade-right'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
            />
            <ServiceCard
              data-aos='fade-in'
              data-aos-duration='1500'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
            />
            <ServiceCard
              data-aos='fade-left'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
