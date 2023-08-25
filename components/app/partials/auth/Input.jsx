import React from "react";

const Input = ({ field, type, placeholder }) => {
  return (
    <div className='grid gap-y-3 my-5'>
      <label className='font-semibold text-sm'>{field}</label>
      <input
        type={type}
        placeholder={placeholder}
        className='w-full bg-appNetral-100 rounded-lg px-4 py-3 text-sm'
      />
    </div>
  );
};

export default Input;
