import Image from "next/image";

const PengajarCard = () => {
  return (
    <div className='p-3 border border-appPrimary-700 relative rounded-xl'>
      <div className='relative aspect-[4/4.3] flex justify-center'>
        <Image src='/pengajar.png' fill className='object-cover rounded-lg' />
        <div className='absolute py-2 px-6 w-3/4 bg-appPrimary-500 -bottom-8 rounded-xl'>
          <h3 className='font-bold text-3xl text-appNetral-50 text-center'>
            Risvi Maulana
          </h3>
          <p className='text-xl text-appNetral-50 text-center'>Petani Modern</p>
        </div>
      </div>
    </div>
  );
};

export default PengajarCard;
