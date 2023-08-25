import Image from "next/image";

const EbrosurCard = ({ img, title, content }) => {
  return (
    <div className=''>
      <div className='relative aspect-square h-16 text-appPrimary-500'>
        <Image src={img} fill />
      </div>
      <h3 className='font-open_sans text-lg font-bold text-font-900'>
        {title}
      </h3>
      <p className='font-open_sans font-light text-sm text-font-400 mt-3'>
        {content}
      </p>
    </div>
  );
};

export default EbrosurCard;
